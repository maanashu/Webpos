import React, { useState } from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getDrawerSessionInfo } from "../../../redux/slices/dashboard";
import { toast } from "react-toastify";
import { selectLoginAuth } from "../../../redux/slices/auth";

const CashSummary = ({ props, title, modalType }) => {
  const dispatch = useDispatch();
  const toastId = React.useRef(null);
  const authData = useSelector(selectLoginAuth);
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");

  const UniqueId = authData?.usersInfo?.payload?.uniqe_id
    ? authData?.usersInfo?.payload?.uniqe_id
    : "";
  // API for get Drawer Session Info...............................
  const drawerSessionInfo = () => {
    if (!amount) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please enter amount");
      }
      return;
    } else if (!notes) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please enter note");
      }
      return;
    }
    let params = {
      seller_id: UniqueId,
      amount: amount,
      notes: notes,
    };
    dispatch(
      getDrawerSessionInfo({
        ...params,
        cb(res) {
          if (res.status) {
            setAmount("");
            setNotes("");
            props.close();
          }
        },
      })
    );
  };

  return (
    <>
      <div className="trackingSection">
        <div className="trackingSub">
          <figure className="profileImage ">
            <Image
              src={Images.AddCashPlus}
              alt="trackingImage"
              className="img-fluid "
            />
          </figure>
          <h4 className="loginheading">{title}</h4>
          <h4 className="trackingHeading">Enter amount </h4>
        </div>
        <form className="trackingForm">
          {/* <h4 className="amountText">Enter Amount</h4> */}
          <div className="inputSelect mt-2">
            {/* <input className="form-control trackingInput" type="text" placeholder=" $  500.00" /> */}
            <input
              type="number"
              className="form-control trackingInput"
              // name={generateRandomName}
              // autoComplete="new-password"
              placeholder=" $  500.00"
              // value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <select name="cars" id="cars" className="trackingSelect">
              <option value="volvo">USD</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <div className="verifyBtn mt-4">
            <button
              className="nextverifyBtn w-100"
              type="button"
              //   onClick={() => {
              //     drawerSessionInfo();
              //   }}
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

export default CashSummary;
