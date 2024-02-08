import React, { useState } from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getDrawerSessionInfo } from "../../../redux/slices/dashboard";
import { toast } from "react-toastify";
import { selectLoginAuth } from "../../../redux/slices/auth";
import { selectCashDrawerData } from "../../../redux/slices/cashDrawer";
import { amountFormat } from '../../../utilities/globalMethods';
import CustomModal from "../../customModal/CustomModal";
import EndCashOutModal from "./endCashOutModal";

const CashSummary = ({ props, title, amount }) => {
  const dispatch = useDispatch();

  const [key, setKey] = useState(Math.random());
  const [modalDetail, setModalDetail] = useState({
    show: false,
    title: "End Cash Tracking Session",
    type: "add",
    flag: "trackingmodal",
  });

  const sessionData = useSelector(selectCashDrawerData);
  const expectedCash = sessionData?.expectedCashByDrawerId?.payload;
  const discrepancy = expectedCash?.remainingCash - amount;


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
      <div className="trackingSection">
        <div className="trackingSub">
          <figure className="profileImage ">
            <Image
              src={Images.salesTracking}
              alt="trackingImage"
              className="img-fluid"
              height={50}
              width={50}
            />
          </figure>
          <h6 className="loginheading px-5">{title}</h6>
        </div>
        <form className="trackingForm">
          <div className="summaryDetail">
            <h4 className="cashText">Cash summary</h4>
            <hr className="dottedDivide" />
            <div className="flexDiv">
              <h4 className="cancelOrderText">Amount expected</h4>
              <h4 className="cancelOrderText">
                USD {amountFormat(expectedCash?.remainingCash)}
              </h4>
            </div>
            <hr className="dottedDivide" />
            <div className="flexDiv">
              <h4 className="cancelOrderText">Amount counted</h4>
              <h4 className="cancelOrderText">USD {amountFormat(amount)}</h4>
            </div>
            <hr className="dottedDivide" />
            <div className="flexDiv">
              <h4
                className="endCashText"
                style={{
                  color: discrepancy < 0 ? "red" : "#263682",
                }}
              >
                Discrepancy
              </h4>
              <h4
                className="endCashText"
                style={{
                  color: discrepancy < 0 ? "red" : "#263682",
                }}
              >
                {discrepancy < 0 ? "-" : null}
                USD {discrepancy < 0 ? amountFormat(Math.abs(discrepancy).toFixed(2)) : amountFormat(discrepancy?.toFixed(2))}
              </h4>
            </div>
          </div>
          <div className="verifyBtn mt-4">
            <button
              className="nextverifyBtn w-100"
              type="button"
              onClick={() => {
                console.log("here");
                setModalDetail({
                  show: true,
                  title: "End Cash Tracking Session",
                  type: "remove",
                  flag: "trackingmodal",
                });
                setKey(Math.random());
              }}
            >
              Next
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
        ids={"trackingModal"}
        child={
          <EndCashOutModal
            title={modalDetail.title}
            expectedAmount={expectedCash?.remainingCash}
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

export default CashSummary;
