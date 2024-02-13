import Image from "next/image";
import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Chart as ChartJS, registerables } from "chart.js";
import * as Images from "../../../utilities/images";
import { useRouter } from "next/router";
import CustomModal from "../../../components/customModal/CustomModal";
import AddRemoveCashModal from "../../../components/modals/cashDrawerModals/addRemoveCashModal";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  getSessionSummary,
  selectCashDrawerData,
} from "../../../redux/slices/cashDrawer";
import { amountFormat } from '../../../utilities/globalMethods';
import moment from "moment-timezone";
import { selectLoginAuth } from "../../../redux/slices/auth";

const ViewSession = () => {
  const router = useRouter();
  ChartJS.register(...registerables);
  const dispatch = useDispatch();
  const sessionData = useSelector(selectCashDrawerData);
  const drawerSessionDetail = sessionData?.drawerSession?.payload;
  const [sessionHistory, setSessionHistory] = useState({});
  const [key, setKey] = useState(Math.random());
  const [modalDetail, setModalDetail] = useState({
    show: false,
    type: ""
  });

  const handleOnCloseModal = () => {
    setModalDetail({show: false, type: ""});
    setKey(Math.random());
  };

  const fetchSessionSummary = () => {
    let params = {
      drawer_id: drawerSessionDetail.id
    }
    dispatch(
      getSessionSummary({
        ...params,
        cb(res) {
          if(res.status){
            setSessionHistory(res?.data?.payload);
          }
        }
      })
    );
  }

  useEffect(() => {
    fetchSessionSummary();
  }, []);

  return (
    <>
      <div className="main-container-customers">
        {/* <Header mainIcon={salesTracking} title="Sales Tracking" /> */}
        <div className="viewSessioncontainer">
          <button
            type="button"
            className="backButton px-3 py-2"
            onClick={() => {
              router.push("/cashDrawer");
            }}
            style={{ background: "#f2f3f9", borderRadius: "35px", fontWeight: 600 }}
          >
            <Image
              src={Images.arrowLeftPos}
              alt="backBtnIcon"
              className="img-fluid backBtnIcon"
            />
            Back
          </button>
          <div className="innerViewContainer">
            <div className="topBox">
              <div className="topBox1">
                <h5 className="textNeavyBlue me-5">Batch</h5>
                <div className="flexBox">
                  <h4 className="locateDistance">
                    Drawer ID: {drawerSessionDetail?.id}
                  </h4>
                </div>
                <div className="dateContainer">
                  <div className="dateBox">
                    <Image className="clockStyle" src={Images.Clock} />
                    <h6 className="dateStyle">
                      {moment.utc().format("dddd, Do MMMM YYYY")}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="cashContainer">
                <div className="cashInnerContainer">
                  <div className="cashbox">
                    <p className="cashTextStyle">
                      USD {sessionHistory?.net_amount ? amountFormat(sessionHistory.net_amount) : "$0.00"}
                    </p>
                    <p className="expectedCash">Expected cash balance</p>
                  </div>
                  <div className="buttonBox">
                    <div
                      onClick={() => {setModalDetail({show: true, type: "remove"}); setKey(Math.random());}}
                      className="removeCashButton"
                      style={{ cursor: "pointer" }}
                    >
                      <p className="removeTextStyle"><b>Remove Cash</b></p>
                    </div>
                    <div
                      onClick={() => {setModalDetail({show: true, type: "add"}); setKey(Math.random());}}
                      className="addCashButton"
                      style={{ cursor: "pointer" }}
                    >
                      <p className="addTextStyle"><b>Add Cash</b>&nbsp;</p>
                      <Image
                        // width={20}
                        // height={20}
                        // className="clockStyle"
                        src={Images.plusRound}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="allCashBox">
              <h6 className="allCashText">All Cash Payments</h6>
            </div>
            {/* Accordian First  */}
            <div className="accordianBox">
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="accordnHead">
                    <div className="flexDiv w-100 mainAccordn">
                      <h4 className="accordnText">Total Cash In</h4>
                      <h4 className="accordnText">
                        USD {sessionHistory?.cash_in?.total ? amountFormat(sessionHistory.cash_in.total) : '$0.00'}
                      </h4>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="saleAccordian">
                      <Accordion flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <div className="flexDiv w-100 subAccordn">
                              <h4 className="appointSub m-0">Sales</h4>
                              <h4 className="appointSub m-0">
                                USD {sessionHistory?.cash_in?.sales?.total ? amountFormat(sessionHistory.cash_in.sales.total) : '$0.00'}
                              </h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Cash</h4>
                              <h4 className="appointSub m-0">
                                USD {sessionHistory?.cash_in?.sales?.cash ? amountFormat(sessionHistory.cash_in.sales.cash) : '$0.00'}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Card</h4>
                              <h4 className="appointSub m-0">
                                USD {sessionHistory?.cash_in?.sales?.card ? amountFormat(sessionHistory.cash_in.sales.card) : '$0.00'}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                              <h4 className="appointSub m-0">
                                USD {sessionHistory?.cash_in?.sales?.jobr_coin ? amountFormat(sessionHistory.cash_in.sales.jobr_coin) : '$0.00'}
                              </h4>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                    <div className="saleAccordian">
                      <Accordion flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <div className="flexDiv w-100 subAccordn">
                              <h4 className="appointSub m-0">Manual</h4>
                              <h4 className="appointSub m-0">
                                USD {sessionHistory?.cash_in?.manual?.total ? amountFormat(sessionHistory.cash_in.manual.total) : '$0.00'}
                              </h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Cash</h4>
                              <h4 className="appointSub m-0">
                                USD {sessionHistory?.cash_in?.manual?.cash ? amountFormat(sessionHistory.cash_in.manual.cash) : "$0.00"}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Card</h4>
                              <h4 className="appointSub m-0">
                                USD {sessionHistory?.cash_in?.manual?.card ? amountFormat(sessionHistory.cash_in.manual.card) : "$0.00"}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                              <h4 className="appointSub m-0">
                                USD {sessionHistory?.cash_in?.manual?.jobr_coin ? amountFormat(sessionHistory.cash_in.manual.jobr_coin) : "$0.00"}
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
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="accordnHead">
                    <div className="flexDiv w-100 mainAccordn">
                      <h4 className="accordnText">Total Cash Out</h4>
                      <h4 className="accordnText">
                        USD {sessionHistory?.cash_out?.total ? amountFormat(sessionHistory.cash_out.total) : "$0.00"}
                      </h4>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="saleAccordian">
                      <Accordion flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <div className="flexDiv w-100 subAccordn">
                              <h4 className="appointSub m-0">Refund</h4>
                              <h4 className="appointSub m-0">
                                USD {sessionHistory?.cash_out?.refund?.total ? amountFormat(sessionHistory.cash_out.refund.total) : "$0.00"}
                              </h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Cash</h4>
                              <h4 className="appointSub m-0">
                                USD {sessionHistory?.cash_out?.refund?.cash ? amountFormat(sessionHistory.cash_out.refund.cash) : "$0.00"}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Card</h4>
                              <h4 className="appointSub m-0">
                                USD {sessionHistory?.cash_out?.refund?.card ? amountFormat(sessionHistory.cash_out.refund.card) : "$0.00"}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                              <h4 className="appointSub m-0">
                                USD {sessionHistory?.cash_out?.refund?.jobr_coin ? amountFormat(sessionHistory.cash_out.refund.jobr_coin) : "$0.00"}
                              </h4>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>

                    <div className="saleAccordian">
                      <Accordion flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <div className="flexDiv w-100 subAccordn">
                              <h4 className="appointSub m-0">Manual</h4>
                              <h4 className="appointSub m-0">
                                USD {sessionHistory?.cash_out?.manual?.total ? amountFormat(sessionHistory.cash_out.manual.total) : "$0.00"}
                              </h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Cash</h4>
                              <h4 className="appointSub m-0">
                                USD {sessionHistory?.cash_out?.manual?.cash ? amountFormat(sessionHistory.cash_out.manual.cash) : "$0.00"}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Card</h4>
                              <h4 className="appointSub m-0">
                                USD {sessionHistory?.cash_out?.manual?.card ? amountFormat(sessionHistory.cash_out.manual.card) : "$0.00"}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                              <h4 className="appointSub m-0">
                                USD {sessionHistory?.cash_out?.manual?.jobr_coin ? amountFormat(sessionHistory.cash_out.manual.jobr_coin) : "$0.00"}
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
              <h1 className="totalAmmount w-100" style={{textAlign: "right"}}>
                USD {sessionHistory?.net_amount ? amountFormat(sessionHistory.net_amount) : "$0.00"}
              </h1>
            </div>
            <Link href="viewSession/endSession" className="closeView">
              <div>
                <h6 className="closeText">{"Close Batch"}</h6>
                {/* <Image
                  // width={20}
                  // height={20}
                  // className="clockStyle"
                  src={Images.plusRound}
                /> */}
              </div>
            </Link>
          </div>
        </div>
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
          <AddRemoveCashModal
            modalType={modalDetail.type}
            close={() => {
              fetchSessionSummary(); 
              handleOnCloseModal();
            }}
            drawerSessionId={drawerSessionDetail.id}
          />
        }
        header={
          <p onClick={() => handleOnCloseModal()} className="modal_cancel">
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

export default ViewSession;
