import React, { useState } from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getDrawerSessionInfo } from "../../../redux/slices/dashboard";
import { toast } from "react-toastify";
import { selectLoginAuth } from "../../../redux/slices/auth";
import CustomModal from "../../customModal/CustomModal";
import CashSummary from "./cashSummary";

const EndCashModal = ({ props, title, modalType }) => {
  const dispatch = useDispatch();
  const toastId = React.useRef(null);
  const authData = useSelector(selectLoginAuth);

  const [key, setKey] = useState(Math.random());

  const [modalDetail, setModalDetail] = useState({
    show: false,
    title: "Add Cash",
    type: "add",
    flag: "trackingmodal",
  });

  const handleShowModal = (title, type) => {
    setModalDetail({
      show: true,
      title: title,
      type: type,
      flag: "trackingmodal",
    });
    setKey(Math.random());
  };

  const handleOnCloseModal = () => {
    setModalDetail({
      show: false,
      title: "",
      flag: "",
    });
    setKey(Math.random());
  };
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
              src={Images.salesTracking}
              alt="trackingImage"
              className="img-fluid"
            />
          </figure>
          <h4 className="loginheading">{title}</h4>
          {/* <h4 className="trackingHeading">Enter amount </h4> */}
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
              onClick={() => handleShowModal("End Cash", "remove")}
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
      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={true}
        mediumWidth={false}
        ids={modalDetail.flag === "trackingmodal" ? "trackingModal" : ""}
        child={
          modalDetail.flag === "trackingmodal" ? (
            <CashSummary
              title={modalDetail.title}
              modalType={modalDetail.type}
              close={() => handleOnCloseModal()}
            />
          ) : (
            ""
          )
        }
        header={
          modalDetail.flag === "trackingmodal" ? (
            <>
              <p onClick={handleOnCloseModal} className="modal_cancel">
                <Image
                  src={Images.modalCross}
                  alt="modalCross"
                  className="img-fluid"
                />
              </p>
            </>
          ) : (
            ""
          )
        }
        onCloseModal={() => handleOnCloseModal()}
      />
    </>
  );
};

export default EndCashModal;
