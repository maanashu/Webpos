import React, { useState } from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCashDrawerData,
  trackSessionSave,
} from "../../../redux/slices/cashDrawer";

const AddCashModal = ({ drawerSessionDetail, handleDrawerSessionChange, handleDrawerHistoryChange, title, modalType, close }) => {
  const dispatch = useDispatch();
  const [addCashInput, setAddCashInput] = useState("");
  const [notes, setNotes] = useState("");
  // const sessionData = useSelector(selectCashDrawerData);
  // const drawerSessionDetail = sessionData?.drawerSession?.payload;
  console.log(drawerSessionDetail, 'oooooooooooooooooooo');
  const digits = /^[0-9]+$/;

  const addCashHandler = async () => {
    if (!addCashInput) {
      alert("Please Enter Amount");
    } else if (addCashInput && digits.test(addCashInput) === false) {
      alert("Please enter valid amount");
    } else if (addCashInput <= 0) {
      alert("Please enter valid amount");
    } else {
      const data =
        modalType == "add"
          ? {
            drawer_id: drawerSessionDetail?.id,
            amount: parseFloat(addCashInput),
            transaction_type: "manual_cash_in",
            mode_of_cash: "cash_in",
          }
          : {
            drawer_id: drawerSessionDetail?.id,
            amount: parseFloat(addCashInput),
            transaction_type: "manual_cash_out",
            mode_of_cash: "cash_out",
          };
      if (notes) {
        data.note = notes;
      }
      await dispatch(
        trackSessionSave({
          ...data,
          cb(res) {
            console.log(res?.data?.payload, "responseeeeeeeeeeeeeeeeeeeeeeeeeee")
            if(res?.data?.payload){
              handleDrawerSessionChange()
              handleDrawerHistoryChange()
              close();
              setNotes("");
              setAddCashInput("");
            }
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
              src={modalType == "add" ? Images.AddCashPlus : Images.RemoveCash}
              alt="trackingImage"
              className="img-fluid "
            />
          </figure>
          <h4 className="loginheading">{title}</h4>
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
              placeholder=" $ 500.00"
              value={addCashInput}
              onChange={(e) => setAddCashInput(e.target.value)}
            />
            <select name="cars" id="cars" className="trackingSelect">
              <option value="volvo">USD</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <p className="loginSub">This is a hint text to help user.</p>
          <div className="textAreaSection">
            <textarea
              class="form-control textControl"
              id="exampleFormControlTextarea1"
              rows="2"
              placeholder="Please enter note"
              onChange={(e) => setNotes(e.target.value)}
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
              onClick={() => {
                addCashHandler()
              }}
            >
              Confirm
              <Image
                src={Images.ArrowRight}
                alt="rightArrow"
                className="img-fluid rightImg"
              />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCashModal;
