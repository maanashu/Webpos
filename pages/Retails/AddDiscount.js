import { useDispatch, useSelector } from "react-redux";
import { addDiscount, selectRetailData } from "../../redux/slices/retails";
import { useState } from "react";
import { toast } from "react-toastify";

const AddDiscount = (props) => {
  const retailData = useSelector(selectRetailData);
  const dispatch = useDispatch();
  const cartId = retailData?.cartDetails?.id;
  const cartTotalAmount = retailData?.cartDetails?.amount;
  const [disCountFlag, setDiscountFlag] = useState("");
  const [discountTitle, setDiscountTitle] = useState("");
  const [discountValue, setDiscountValue] = useState(null);
  const [amount, setAmount] = useState(null);
  const [percent, setPercent] = useState(null);
  const [code, setCode] = useState(null);

  const handleAddDiscount = (e) => {
    e.preventDefault();
    if (disCountFlag === "") {
      toast.error("Please select any flag!");
      return false;
    } else if (!discountTitle) {
      toast.error("Please add discount title");
      return false;
    } else if (!discountValue) {
      toast.error("Please add discount value");
      return false;
    }

    e.preventDefault();
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
    <form onSubmit={(e) => handleAddDiscount(e)}>
      <div className="discountMain">
        <div className="discountAmountBox">
          <label
            htmlFor="amount"
            onClick={() => handleselectLabel("amount")}
            className={
              disCountFlag == "amount"
                ? "selectedFlagDiscount"
                : "customform-control customInputDiscount"
            }
          >
            Amount
          </label>

          <input
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
                ? "selectedFlagDiscount"
                : "customform-control customInputDiscount"
            }
            onClick={() => handleselectLabel("percentage")}
          >
            Percent
          </label>
          <input
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
                ? "selectedFlagDiscount"
                : "customform-control customInputDiscount"
            }
            onClick={() => handleselectLabel("code")}
          >
            Discount Code
          </label>
          <input
            className="amountInput"
            type="text"
            placeholder="CODE"
            onChange={handleInputChange}
            value={code}
            disabled={disCountFlag != "code"}
          />
        </div>
        <div>
          <label className="form-label fw-500">Discount Title</label>
          <input
            className="customform-control customInputDiscount"
            placeholder="Discount"
            type="text"
            value={discountTitle}
            onChange={(e) => setDiscountTitle(e.target.value)}
          />
        </div>
      </div>

      <div className="noteButton">
        <button className="addnotesBtn" type="submit">
          Add Discount
        </button>
      </div>
    </form>
  );
};
export default AddDiscount;
