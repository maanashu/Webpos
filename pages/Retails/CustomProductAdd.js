import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNotes,
  customProuductAdd,
  productCart,
  selectRetailData,
} from "../../redux/slices/retails";
import { toast } from "react-toastify";
import * as Images from "../../utilities/images";
import Image from "next/image";
import { digitWithDot, digits } from "../../utilities/validators";
import { selectLoginAuth } from "../../redux/slices/auth";

const CustomProductAdd = ({ crosshandler }) => {
  const dispatch = useDispatch();
  const retailData = useSelector(selectRetailData);
  const authData = useSelector(selectLoginAuth);
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;
  const cartId = retailData?.cartDetails?.id;
  const [addNote, setAddNotes] = useState("");
  const [count, setCount] = useState(1);
  const [productName, setProductName] = useState("");
  const [upcCode, setUpcCode] = useState("");
  const [notes, setNotes] = useState("");
  const [amount, setAmount] = useState("");

  const customProductHandler = () => {
    if (!productName) {
      toast.error("Please enter product name");
    } else if (!amount) {
      toast.error("Please enter product amount");
    } else if (amount && digitWithDot.test(amount) === false) {
      toast.error("Please enter valid amount");
    } else if (!upcCode) {
      toast.error("Please enter upc code");
    } else if (upcCode && digits.test(upcCode) === false)
      toast.error("Please enter valid upc code");
    else {
      let params = {
        seller_id: sellerId,
        price: amount,
        name: productName,
        type: "physical",
        qty: count,
        upc: upcCode,
        ...(notes && { description: notes }),
      };
      dispatch(
        customProuductAdd({
          ...params,
          cb() {
            crosshandler();
            dispatch(productCart());
          },
        })
      );
    }
  };

  return (
    <div>
      <div className="form-group mb-3">
        <input
          className="form-control customInput mb-3"
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <input
          className="form-control customInput mb-3"
          type="text"
          placeholder="$0.00USD"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      {/* <div className="form-group mb-3"> */}
      <input
        className="form-control customInput mb-3"
        type="text"
        placeholder="UPC code"
        value={upcCode}
        onChange={(e) => setUpcCode(e.target.value)}
      />
      {/* </div> */}
      <div className="form-group mb-3">
        <Image src={Images.commentText} alt="img" className="InputIcon" />
        <textarea
          className="customTextarea"
          placeholder="Add Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
      </div>
      <div className="incrementBtn productIncrement">
        <i
          className="fa-solid fa-minus plusMinus"
          onClick={() => (count == 1 ? void 0 : setCount(count - 1))}
          isclickEnabled={false}
        ></i>
        {/* <input
            className="form-control addBtnControl"
            type="number"
            placeholder="1"
          /> */}
        <h1 className="form-control addBtnControl">{count}</h1>
        <i
          className="fa-solid fa-plus plusMinus"
          onClick={() => setCount(count + 1)}
        ></i>
      </div>
      <div className="modal-footer">
        <button className="cancelBtn" onClick={() => crosshandler()}>
          Cancel
        </button>
        <button
          className="ModalBlue"
          onClick={() => customProductHandler()}
          disabled={retailData?.customProuductAddLoad ? true : false}
        >
          Add to the cart
          {retailData?.customProuductAddLoad ? (
            <span className="spinner-border spinner-border-sm mx-1"></span>
          ) : (
            <Image
              src={Images.plusRound}
              alt="image"
              className="img-fluid ms-1"
            />
          )}
        </button>
      </div>
    </div>
  );
};
export default CustomProductAdd;
