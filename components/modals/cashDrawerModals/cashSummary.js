import React, { useState } from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getDrawerSessionInfo } from "../../../redux/slices/dashboard";
import { toast } from "react-toastify";
import { selectLoginAuth } from "../../../redux/slices/auth";
import { selectCashDrawerData } from "../../../redux/slices/cashDrawer";

const CashSummary = ({ props, title, amount }) => {
  const dispatch = useDispatch();

  const sessionData = useSelector(selectCashDrawerData);
  const expectedCash = sessionData?.expectedCashByDrawerId?.payload;
  const discrepancy = expectedCash?.remainingCash - amount;

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
          {/* <h4 className="amountText">Enter Amount</h4>
          <div className="inputSelect mt-2">
            <input className="form-control trackingInput" type="text" placeholder=" $  500.00" />
            <input
              type="number"
              className="form-control trackingInput"
              name={generateRandomName}
              autoComplete="new-password"
              placeholder=" $  500.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <select name="cars" id="cars" className="trackingSelect">
              <option value="volvo">USD</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div> */}
          {/* setExpectedCashValue(res?.payload?.remainingCash);
          setCashInValue(res?.payload?.cashIn);
          setCashOutValue(res?.payload?.cashOut);
          setJobrSummaryValue(res?.payload?.remainingJbrCoin);
          setCardSummaryValue(res?.payload?.remainingCardAmount); */}
          <div className="summaryDetail">
            <h4 className="cashText">Cash Summary</h4>
            <hr className="dottedDivide" />
            <div className="flexDiv">
              <h4 className="cancelOrderText">Amount Expected</h4>
              <h4 className="cancelOrderText">
                ${expectedCash?.remainingCash}
              </h4>
            </div>
            <hr className="dottedDivide" />
            <div className="flexDiv">
              <h4 className="cancelOrderText">Amount Counted</h4>
              <h4 className="cancelOrderText">${amount}</h4>
            </div>
            <hr className="dottedDivide" />
            <div className="flexDiv">
              <h4
                className="endCashText"
                style={{
                  color: discrepancy < 0 ? "red" : "blue",
                }}
              >
                Discrepancy
              </h4>
              <h4
                className="endCashText"
                style={{
                  color: discrepancy < 0 ? "red" : "blue",
                }}
              >
                {discrepancy < 0 ? "-" : null} $
                {discrepancy < 0 ? Math.abs(discrepancy).toFixed(2) : discrepancy?.toFixed(2)}
              </h4>
            </div>
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
