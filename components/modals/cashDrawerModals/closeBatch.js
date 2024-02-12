import React, { useState } from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { selectCashDrawerData, setGetDrawerSession } from "../../../redux/slices/cashDrawer";
import { amountFormat } from '../../../utilities/globalMethods';

const CloseBatch = ({amountToRemove, leftAmount, expectedAmount }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const sessionData = useSelector(selectCashDrawerData);
  const drawerExpectedCash = sessionData?.expectedCashByDrawerId?.payload;

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
          <h6 className="loginheading px-5 my-4">Close Batch</h6>
        </div>
        <form className="trackingForm">
          <div className="summaryDetail">
            <div className="closeBatchBox">
              <h4 className="cashText">Card summary</h4>
              <hr className="dottedDivide" />
              <div className="flexDiv">
                <h4 className="cancelOrderText">Amount</h4>
                <h4 className="cancelOrderText">{drawerExpectedCash?.remainingCardAmount > 0 ? amountFormat(drawerExpectedCash.remainingCardAmount) : "$0.00"}</h4>
              </div>
            </div>
            <div className="closeBatchBox">
              <h4 className="cashText">JBR Coin summary</h4>
              <hr className="dottedDivide" />
              <div className="flexDiv">
                <h4 className="cancelOrderText">Amount</h4>
                <h4 className="cancelOrderText">{drawerExpectedCash?.remainingJbrCoin > 0 ? amountFormat(drawerExpectedCash.remainingJbrCoin) : "$0.00"}</h4>
              </div>
            </div>
          </div>
          <div className="verifyBtn my-4">
            <button
              className="nextverifyBtn w-100"
              type="button"
              style={{background: "red"}}
              onClick={() => {
                dispatch(setGetDrawerSession({...sessionData.drawerSession, amount_to_remove: Number(amountToRemove)}));
                router.push("/cashDrawer/sessionSummary")
              }}
            >
              Close Batch&nbsp;&nbsp;&nbsp;
              <Image
                src={Images.CrossWhite}
                alt="rightArrow"
                className="img-fluid rightImg"
                width={20}
                height={20}
              />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CloseBatch;
