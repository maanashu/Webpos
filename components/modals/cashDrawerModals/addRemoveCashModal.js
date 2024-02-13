import React, { useState } from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  selectCashDrawerData,
  updateDrawerSession,
} from "../../../redux/slices/cashDrawer";

const addRemoveCashModal = (props) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const digits = /^[0-9]+$/;

  const addRemoveCashHandler = async () => {
    if (!amount) {
      toast.error("Please enter amount");
    } else if (amount && digits.test(amount) === false) {
      toast.error("Please enter valid amount");
    } else if (amount <= 0) {
      toast.error("Please enter valid amount");
    } else {
      const data =
        props.modalType == "add"
          ? {
            drawer_id: props.drawerSessionId,
            amount: Number(amount),
            transaction_type: "manual_cash_in",
            mode_of_cash: "cash_in",
          }
          : {
            drawer_id: props.drawerSessionId,
            amount: Number(amount),
            transaction_type: "manual_cash_out",
            mode_of_cash: "cash_out",
          };
      if (notes) {
        data.note = notes;
      }

      setIsLoading(true);
      await dispatch(
        updateDrawerSession({
          ...data,
          cb(res) {
            if(res.status){
              props.close();
            }
            setIsLoading(false);
          }
        })
      );
    }
  };

  return (
    <>
      <div className="trackingSection">
        <div className="trackingSub">
          <figure className="profileImage ">
            <Image
              src={props.modalType == "add" ? Images.AddCashPlus : Images.RemoveCash}
              alt="trackingImage"
              className="img-fluid "
            />
          </figure>
          <h4 className="loginheading">{props.modalType == "add" ? "Add" : "Remove"} Cash</h4>
          <h4 className="trackingHeading">Enter amount </h4>
        </div>
        <form className="trackingForm">
          <h4 className="amountText">Enter Amount</h4>
          <div className="inputSelect mt-2">
            {/* <input className="form-control trackingInput" type="text" placeholder=" $  500.00" /> */}
            <input
              type="number"
              className="form-control trackingInput"
              // name={generateRandomName}
              // autoComplete="new-password"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          
          <p className="loginSub mb-0 ms-0 mt-4">This is a hint text to help user.</p>
          <div className="textAreaSection mt-2">
            <textarea
              class="form-control textControl"
              id="exampleFormControlTextarea1"
              rows="2"
              placeholder="Note"
              onChange={(e) => setNotes(e.target.value)}
              style={{boxShadow: "unset"}}
            ></textarea>
            <Image
              src={Images.commentText}
              alt="commentBox Image"
              className="img-fluid commentImg"
            />
          </div>
          <div className="verifyBtn mt-4">
            <button
              className="nextverifyBtn w-100"
              type="button"
              onClick={() => { !isLoading ? addRemoveCashHandler() : false}}
            >
              {isLoading ? <span className="spinner-border spinner-border-sm"></span> : "Save"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default addRemoveCashModal;
