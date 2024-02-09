import Image from "next/image";
import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Chart as ChartJS, registerables } from "chart.js";
import {
  getSessionSummary,
  selectCashDrawerData,
  sendPaymentHistory
} from "../../../redux/slices/cashDrawer";
import { endTrackingSession } from "../../../redux/slices/dashboard";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment-timezone";
import * as Images from "../../../utilities/images";
import { amountFormat } from '../../../utilities/globalMethods';
import { restAllData } from "../../../redux/slices/commonActions";
import { useRouter } from "next/router";

const SessionSummary = () => {
  ChartJS.register(...registerables);

  const dispatch = useDispatch();
  const router = useRouter();

  const drawerData = useSelector(selectCashDrawerData);
  const [sessionSummary, setSessionSummary] = useState();
  const [sendingEmail, setSendingEmail] = useState(false);
  const drawerSessionDetail = drawerData?.drawerSession?.payload;

  const closeSession = () => {
    let params = {
      // pos_user_id: posUserUniqueId,
      drawer_id: drawerSessionDetail?.id,
      amount: drawerData?.drawerSession?.amount_to_remove ? Number(drawerData.drawerSession.amount_to_remove): 0,
      transaction_type: "end_tracking_session",
      mode_of_cash: "cash_out",
    };
    dispatch(
      endTrackingSession({
        ...params,
        async cb(res) {
          if (res.status) {
            await dispatch(restAllData({skipAuth: true}));
            localStorage.removeItem("authToken");
            router.push("/auth/login");
          }
          else {
            setSendingEmail(false);
          }
        },
      })
    );
  };

  const sendSessionSummary = () => {
    const params = {
      drawer_id: drawerSessionDetail?.id,
    };
    setSendingEmail(true);
    dispatch(
      sendPaymentHistory({
        ...params,
        cb(res) {
          closeSession()
        }
      })
    );
  }

  useEffect(() => {
    // console.log(drawerData?.drawerSession?.amount_to_remove);
    // if(drawerData?.drawerSession?.amount_to_remove != undefined){
      dispatch(
        getSessionSummary({
          cb(res) {
            setSessionSummary(res?.data?.payload);
          }
        })
      );
    // }
    // else{
    //   router.push("/cashDrawer");
    // }
      
  }, []);

  return (
    <div className="main-container-customers">
      <div className="viewSessioncontainer">
        <div className="d-flex align-items-center justify-content-center w-100">
          <button
            type="button"
            className="backButton px-3 py-2"
            onClick={() => {closeSession()}}
            style={{ background: "#f2f3f9", borderRadius: "35px", fontWeight: 600 }}
          >
            <Image
              src={Images.arrowLeftPos}
              alt="backBtnIcon"
              className="img-fluid backBtnIcon"
            />
            Back
          </button>
          <p className="m-auto"><b>Summary&nbsp;&nbsp;<span className="textNeavyBlue">{moment().format("LL")}</span></b></p>
        </div>
        <div className="innerViewContainer">
          <div className="allCashBox">
            <h6 className="allCashText">All Cash Payments</h6>
          </div>
          {/* Accordian First  */}
          <div className="accordianBox">
            <Accordion flush defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="accordnHead">
                  <div className="flexDiv w-100 mainAccordn">
                    <h4 className="accordnText">Total Cash In</h4>
                    <h4 className="accordnText">
                      {sessionSummary?.cash_in?.total ? amountFormat(sessionSummary.cash_in.total) : '$0.00'}
                    </h4>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="saleAccordian">
                    <Accordion flush defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <div className="flexDiv w-100 subAccordn">
                            <h4 className="appointSub m-0">Sales</h4>
                            <h4 className="appointSub m-0">
                              {sessionSummary?.cash_in?.sales?.total ? amountFormat(sessionSummary.cash_in.sales.total) : '$0.00'}
                            </h4>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="flexDiv mt-2 py-1">
                            <h4 className="appointSub m-0 ps-3">Cash</h4>
                            <h4 className="appointSub m-0">
                              {sessionSummary?.cash_in?.sales?.cash ? amountFormat(sessionSummary.cash_in.sales.cash) : '$0.00'}
                            </h4>
                          </div>
                          <div className="flexDiv mt-2 py-1">
                            <h4 className="appointSub m-0 ps-3">Card</h4>
                            <h4 className="appointSub m-0">
                              {sessionSummary?.cash_in?.sales?.card ? amountFormat(sessionSummary.cash_in.sales.card) : '$0.00'}
                            </h4>
                          </div>
                          <div className="flexDiv mt-2 py-1">
                            <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                            <h4 className="appointSub m-0">
                              {sessionSummary?.cash_in?.sales?.jobr_coin ? amountFormat(sessionSummary.cash_in.sales.jobr_coin) : '$0.00'}
                            </h4>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                  <div className="saleAccordian">
                    <Accordion flush defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <div className="flexDiv w-100 subAccordn">
                            <h4 className="appointSub m-0">Manual</h4>
                            <h4 className="appointSub m-0">
                              {sessionSummary?.cash_in?.manual?.total ? amountFormat(sessionSummary.cash_in.manual.total) : '$0.00'}
                            </h4>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="flexDiv mt-2 py-1">
                            <h4 className="appointSub m-0 ps-3">Cash</h4>
                            <h4 className="appointSub m-0">
                              {sessionSummary?.cash_in?.manual?.cash ? amountFormat(sessionSummary.cash_in.manual.cash) : "$0.00"}
                            </h4>
                          </div>
                          <div className="flexDiv mt-2 py-1">
                            <h4 className="appointSub m-0 ps-3">Card</h4>
                            <h4 className="appointSub m-0">
                              {sessionSummary?.cash_in?.manual?.card ? amountFormat(sessionSummary.cash_in.manual.card) : "$0.00"}
                            </h4>
                          </div>
                          <div className="flexDiv mt-2 py-1">
                            <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                            <h4 className="appointSub m-0">
                              {sessionSummary?.cash_in?.manual?.jobr_coin ? amountFormat(sessionSummary.cash_in.manual.jobr_coin) : "$0.00"}
                            </h4>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          {/* Accordian Second  */}
          <div className="accordianBox">
            <Accordion flush defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="accordnHead">
                  <div className="flexDiv w-100 mainAccordn">
                    <h4 className="accordnText">Total Cash Out</h4>
                    <h4 className="accordnText">
                      {sessionSummary?.cash_out?.total ? amountFormat(sessionSummary.cash_out.total) : "$0.00"}
                    </h4>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="saleAccordian">
                    <Accordion flush defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <div className="flexDiv w-100 subAccordn">
                            <h4 className="appointSub m-0">Refund</h4>
                            <h4 className="appointSub m-0">
                              {sessionSummary?.cash_out?.refund?.total ? amountFormat(sessionSummary.cash_out.refund.total) : "$0.00"}
                            </h4>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="flexDiv mt-2 py-1">
                            <h4 className="appointSub m-0 ps-3">Cash</h4>
                            <h4 className="appointSub m-0">
                              {sessionSummary?.cash_out?.refund?.cash ? amountFormat(sessionSummary.cash_out.refund.cash) : "$0.00"}
                            </h4>
                          </div>
                          <div className="flexDiv mt-2 py-1">
                            <h4 className="appointSub m-0 ps-3">Card</h4>
                            <h4 className="appointSub m-0">
                              {sessionSummary?.cash_out?.refund?.card ? amountFormat(sessionSummary.cash_out.refund.card) : "$0.00"}
                            </h4>
                          </div>
                          <div className="flexDiv mt-2 py-1">
                            <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                            <h4 className="appointSub m-0">
                              {sessionSummary?.cash_out?.refund?.jobr_coin ? amountFormat(sessionSummary.cash_out.refund.jobr_coin) : "$0.00"}
                            </h4>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>

                  <div className="saleAccordian">
                    <Accordion flush defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <div className="flexDiv w-100 subAccordn">
                            <h4 className="appointSub m-0">Manual</h4>
                            <h4 className="appointSub m-0">
                              {sessionSummary?.cash_out?.manual?.total ? amountFormat(sessionSummary.cash_out.manual.total) : "$0.00"}
                            </h4>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="flexDiv mt-2 py-1">
                            <h4 className="appointSub m-0 ps-3">Cash</h4>
                            <h4 className="appointSub m-0">
                              {sessionSummary?.cash_out?.manual?.cash ? amountFormat(sessionSummary.cash_out.manual.cash) : "$0.00"}
                            </h4>
                          </div>
                          <div className="flexDiv mt-2 py-1">
                            <h4 className="appointSub m-0 ps-3">Card</h4>
                            <h4 className="appointSub m-0">
                              {sessionSummary?.cash_out?.manual?.card ? amountFormat(sessionSummary.cash_out.manual.card) : "$0.00"}
                            </h4>
                          </div>
                          <div className="flexDiv mt-2 py-1">
                            <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                            <h4 className="appointSub m-0">
                              {sessionSummary?.cash_out?.manual?.jobr_coin ? amountFormat(sessionSummary.cash_out.manual.jobr_coin) : "$0.00"}
                            </h4>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="netPaymentView">
            <h2 className="netPaymentText">Net Payment</h2>
            <h1 className="totalAmmount">
              {sessionSummary?.net_amount ? amountFormat(sessionSummary.net_amount) : "$0.00"}
            </h1>
          </div>
          <button
            type="button"
            className="sendToEmailBtn px-5 py-2"
            onClick={() => {sendSessionSummary()}}
          >
            {sendingEmail && <span className="spinner-border spinner-border-sm"></span>}&nbsp;Send to email
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionSummary;
