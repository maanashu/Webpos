import React, { useState } from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { selectCashDrawerData, setGetDrawerSession } from "../../../redux/slices/cashDrawer";
import { endTrackingSession } from "../../../redux/slices/dashboard";
import { amountFormat } from '../../../utilities/globalMethods';
import { restAllData } from "../../../redux/slices/commonActions";

const CloseBatch = ({amountToRemove, leftAmount, expectedAmount }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const sessionData = useSelector(selectCashDrawerData);
  const drawerSessionDetail = sessionData?.drawerSession?.payload;
  const drawerExpectedCash = sessionData?.expectedCashByDrawerId?.payload;

  const [isLoading, setIsLoading] = useState(false);

  const closeSession = () => {
    let params = {
      drawer_id: drawerSessionDetail?.id,
      amount: Number(amountToRemove),
      transaction_type: "end_tracking_session",
      mode_of_cash: "cash_out",
    };

    setIsLoading(true);
    dispatch(
      endTrackingSession({
        ...params,
        async cb(res) {
          if (res.status) {
            await dispatch(restAllData({skipAuth: true, skipCashDrawer: true}));
            await dispatch(setGetDrawerSession({...sessionData.drawerSession, has_session_closed: true}));

            setTimeout(() => {
              toast.success("Batch closed successfully");
            }, 200);
            
            router.push("/cashDrawer/sessionSummary");
          }
          else {
            setIsLoading(false);
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
                !isLoading ? closeSession() : false
              }}
            > 
              {isLoading ? <span className="spinner-border spinner-border-sm"></span> : 
                <>
                  Close Batch
                  <Image
                    src={Images.CrossWhite}
                    alt="rightArrow"
                    className="img-fluid rightImg"
                    width={20}
                    height={20}
                  />
                </>
              }
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CloseBatch;
