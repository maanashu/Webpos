import { useDispatch, useSelector } from "react-redux";
import {
  addDiscount,
  productCart,
  selectRetailData,
} from "../../redux/slices/retails";
import { useState } from "react";
import { toast } from "react-toastify";
import { digitWithDot } from "../../utilities/validators";

const AddDiscount = (props) => {
  const dispatch = useDispatch();
  const retailData = useSelector(selectRetailData);
  const cartData = retailData?.productCart || {};
  const cartId = retailData?.cartDetails?.id;
  const cartTotalAmount = retailData?.cartDetails?.amount;
  const [disCountFlag, setDiscountFlag] = useState("");
  const [discountTitle, setDiscountTitle] = useState("Discount");
  const [discountValue, setDiscountValue] = useState(null);
  const [amount, setAmount] = useState(null);
  const [percent, setPercent] = useState(null);
  const [code, setCode] = useState(null);
  const finalAmountForDiscount =
    cartData?.amount?.products_price.toFixed(2) -
    Number(cartData?.amount?.tax)?.toFixed(2);

  const handleAddDiscount = (e) => {
    e.preventDefault();
    if (amount > finalAmountForDiscount) {
      toast.error("Please enter discount less then total amount");
      return false;
    } else if (
      (amount || percent) &&
      digitWithDot.test(amount || percent) === false
    ) {
      toast.error("Please enter valid field");
      return false;
    } else if (disCountFlag === "") {
      toast.error("Please select any flag!");
      return false;
    } else if (!discountTitle) {
      toast.error("Please add discount title");
      return false;
    } else if (!discountValue) {
      toast.error("Please add discount value");
      return false;
    }
    let params = {
      id: cartId,
      discount_value: discountValue,
      discount_flag: disCountFlag,
      discount_desc: discountTitle,
      order_amount: cartTotalAmount?.total_amount.toString(),
    };
    dispatch(
      addDiscount({
        ...params,
        cb(res) {
          dispatch(productCart());
          props.close();
          toast.success("Discounts added successfully!");
        },
      })
    );
  };
  const handleselectLabel = (flag) => {
    setDiscountFlag(flag);
    setAmount("");
    setPercent("");
    setCode("");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (disCountFlag === "amount") {
      setAmount(value);
      setDiscountValue(value);
    } else if (disCountFlag === "percentage") {
      setPercent(value);
      setDiscountValue(value);
    } else if (disCountFlag === "code") {
      setCode(value);
      setDiscountValue(value);
    }
  };

  return (
    <div className="addDiscountSection mt-3">
      <form onSubmit={(e) => handleAddDiscount(e)}>
        <div className="discountMain">
          <div className="discountAmountBox">
            <label
              htmlFor="amount"
              onClick={() => handleselectLabel("amount")}
              className={
                disCountFlag == "amount"
                  ? "customform-control selectedFlagDiscount"
                  : "customform-control customInputDiscount"
              }
            >
              {" "}
              Amount
            </label>

            <input
              className="customdiscount_"
              type="number"
              placeholder="$0.00"
              onChange={handleInputChange}
              value={amount}
              disabled={disCountFlag != "amount"}
            />
          </div>
          <div className="discountAmountBox">
            <label
              htmlFor="percentage"
              className={
                disCountFlag == "percentage"
                  ? "customform-control selectedFlagDiscount"
                  : "customform-control customInputDiscount"
              }
              onClick={() => handleselectLabel("percentage")}
            >
              Percent
            </label>
            <input
              className="customdiscount_"
              type="number"
              placeholder="0.00     % "
              onChange={handleInputChange}
              value={percent}
              disabled={disCountFlag != "percentage"}
            />
          </div>
          <div className="discountAmountBox">
            <label
              htmlFor="discountCode"
              className={
                disCountFlag == "code"
                  ? "customform-control selectedFlagDiscount"
                  : "customform-control customInputDiscount"
              }
              onClick={() => handleselectLabel("code")}
            >
              Discount Code
            </label>
            <input
              className="customdiscount_"
              type="text"
              placeholder="CODE"
              onChange={handleInputChange}
              value={code}
              disabled={disCountFlag != "code"}
            />
          </div>
          <div>
            <label className="form-label fw-500 trackingHeading">Discount Title</label>
            <input
              className="customform-control discountInput_"
              placeholder="Discount"
              type="text"
              value={discountTitle}
              onChange={(e) => setDiscountTitle(e.target.value)}
            />
          </div>
        </div>

        <div className="noteButton mt-3">
          {/* <button className="addnotesBtn" type="submit">
          Add Discount
        </button> */}
          {retailData?.loading ? (
            <button className="addnotesBtn" type="submit" disabled>
              <span className="spinner-border spinner-border-sm"></span>
            </button>
          ) : (
            <button className="addnotesBtn" type="submit">
              Add Discount
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
export default AddDiscount;
