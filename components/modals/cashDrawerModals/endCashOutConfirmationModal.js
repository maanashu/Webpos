import React, { useState } from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import CustomModal from "../../customModal/CustomModal";
import CloseBatch from "./closeBatch";
import { amountFormat } from '../../../utilities/globalMethods';

const EndCashOutConfirmationModal = ({ enteredAmount, selectedAmount, expectedAmount }) => {
  
  const [key, setKey] = useState(Math.random());
  const [modalDetail, setModalDetail] = useState({show: false});

  const amountToRemove = enteredAmount && enteredAmount > 0 ? enteredAmount : selectedAmount;
  const leftAmount = expectedAmount - amountToRemove;

  const handleOnCloseModal = () => {
    setModalDetail({
      show: false,
      title: "",
      flag: "",
    });
    setKey(Math.random());
  };

  return (
    <>
      <div className="trackingSection my-4">
        <div className="trackingSub">
          <figure className="profileImage ">
            <Image
              src={Images.warning}
              alt="trackingImage"
              className="img-fluid"
              height={50}
              width={50}
            />
          </figure>
          <h6 className="loginheading my-4" style={{fontWeight: "600", lineHeight: "inherit"}}>
            {/* <b> */}
              Are you sure you want to remove USD {amountFormat(amountToRemove)} from the drawer?
            {/* </b> */}
          </h6>
          <p className="text-center textNeavyBlue">Amount left in drawer:</p>
          <h6 className="loginheading my-5"><b>{leftAmount ? amountFormat(leftAmount) : "$0.00"}</b></h6>
        </div>

        {/* <form className="trackingForm"> */}

          <div className="verifyBtn mt-4">
            <button
              className="nextverifyBtn w-100"
              type="button"
              style={{background: "#F79009"}}
              // onClick={() => {confirmCloseBatch()}}
              onClick={() => {
                setModalDetail({show: true});
                setKey(Math.random());
              }}
            >
              <b>Confirm</b>
            </button>
          </div>
        {/* </form> */}
      </div>

      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={true}
        mediumWidth={false}
        ids={"trackingModal"}
        child={
          <CloseBatch
            amountToRemove={amountToRemove}
            leftAmount={leftAmount}
            expectedAmount={expectedAmount}
            close={() => handleOnCloseModal()}
          />
        }
        header={
          <p onClick={handleOnCloseModal} className="modal_cancel">
            <Image
              src={Images.modalCross}
              alt="modalCross"
              className="img-fluid"
            />
          </p>
        }
        onCloseModal={() => handleOnCloseModal()}
      />
    </>
  );
};

export default EndCashOutConfirmationModal;
