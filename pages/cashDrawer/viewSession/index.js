import Image from "next/image";
import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Chart as ChartJS, registerables } from "chart.js";
import * as Images from "../../../utilities/images";
import { useRouter } from "next/router";
import Header from "../../../components/commanComonets/cashdrawer/Header";
import {
  arrowDown,
  Clock,
  DrawerID,
  plusCircleOutline,
  salesTracking,
} from "../../../utilities/images";
import CustomModal from "../../../components/customModal/CustomModal";
import AddCashModal from "../../../components/modals/cashDrawerModals/addCashModal";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  getDrawerHistory,
  getDrawerSession,
  selectCashDrawerData,
} from "../../../redux/slices/cashDrawer";
import { amountFormat } from '../../../utilities/globalMethods';
import moment from "moment-timezone";
import { selectLoginAuth } from "../../../redux/slices/auth";
// import AccordionBody from "react-bootstrap/esm/AccordionBody";

const ViewSession = () => {
  const router = useRouter();
  ChartJS.register(...registerables);
  const authData = useSelector(selectLoginAuth);
  const dispatch = useDispatch();
  const sessionData = useSelector(selectCashDrawerData);
  const drawerSessionDetail = sessionData?.drawerSession?.payload;
  const [netAmount, setNetAmount] = useState("")
  const [cashIn, setCashIn] = useState("")
  const [cashOut, setCashOut] = useState("")

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

  const drawerSessionInfo = () => {
    const sellerId = {
      seller_id: authData?.usersInfo?.payload?.uniqe_id,
    };
    dispatch(
      getDrawerSession({
        ...sellerId
      })
    );
  };

  const getDrawerHistoryHandle = () => {
    const drawerId = {
      drawer_id: drawerSessionDetail?.id,
    };
    dispatch(
      getDrawerHistory({
        ...drawerId,
        cb(res) {
          setCashIn(res?.data?.payload?.cash_in)
          setCashOut(res?.data?.payload?.cash_out)
          setNetAmount(res?.data?.payload?.net_amount)
        }
      })
    );
  }

  useEffect(() => {
    getDrawerHistoryHandle()
    drawerSessionInfo()
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
                    <Image className="clockStyle" src={Clock} />
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
                      USD {amountFormat(Number(netAmount)?.toFixed(2))}
                    </p>
                    <p className="expectedCash">Expected cash balance</p>
                  </div>
                  <div className="buttonBox">
                    <div
                      onClick={() => handleShowModal("Remove Cash", "remove")}
                      className="removeCashButton"
                      style={{ cursor: "pointer" }}
                    >
                      <p className="removeTextStyle"><b>Remove Cash</b></p>
                    </div>
                    <div
                      onClick={() => handleShowModal("Add Cash", "add")}
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
                        ${cashIn?.total ? cashIn?.total?.toFixed(2) : '0.00'}
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
                                ${cashIn?.sales?.total ? cashIn?.sales?.total?.toFixed(2) : "0.00"}
                              </h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Cash</h4>
                              <h4 className="appointSub m-0">
                                ${cashIn?.sales?.cash ? cashIn?.sales?.cash?.toFixed(2) : "0.00"}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Card</h4>
                              <h4 className="appointSub m-0">
                                ${cashIn?.sales?.card ? cashIn?.sales?.card?.toFixed(2) : "0.00"}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                              <h4 className="appointSub m-0">
                                ${cashIn?.sales?.jobr_coin ? cashIn?.sales?.jobr_coin?.toFixed(2) : "0.00"}
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
                                ${cashIn?.manual?.total ? cashIn?.manual?.total?.toFixed(2) : "0.00"}
                              </h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Cash</h4>
                              <h4 className="appointSub m-0">
                                ${cashIn?.manual?.cash ? cashIn?.manual?.cash?.toFixed(2) : "0.00"}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Card</h4>
                              <h4 className="appointSub m-0">
                                ${cashIn?.manual?.card ? cashIn?.manual?.card?.toFixed(2) : "0.00"}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                              <h4 className="appointSub m-0">
                                ${cashIn?.manual?.jobr_coin ? cashIn?.manual?.jobr_coin?.toFixed(2) : "0.00"}
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
                        ${cashOut?.total ? cashOut?.total?.toFixed(2) : "0.00"}
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
                                ${cashOut?.refund?.total ? cashOut?.refund?.total?.toFixed(2) : "0.00"}
                              </h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Cash</h4>
                              <h4 className="appointSub m-0">
                                ${cashOut?.refund?.cash ? cashOut?.refund?.cash?.toFixed(2) : "0.00"}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Card</h4>
                              <h4 className="appointSub m-0">
                                ${cashOut?.refund?.card ? cashOut?.refund?.card?.toFixed(2) : "0.00"}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                              <h4 className="appointSub m-0">
                                ${cashOut?.refund?.jobr_coin ? cashOut?.refund?.jobr_coin?.toFixed(2) : "0.00"}
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
                                ${cashOut?.manual?.total ? cashOut?.manual?.total?.toFixed(2) : "0.00"}
                              </h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Cash</h4>
                              <h4 className="appointSub m-0">
                                ${cashOut?.manual?.cash ? cashOut?.manual?.cash?.toFixed(2) : "0.00"}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Card</h4>
                              <h4 className="appointSub m-0">
                                ${cashOut?.manual?.card ? cashOut?.manual?.card?.toFixed(2) : "0.00"}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                              <h4 className="appointSub m-0">
                                ${cashOut?.manual?.jobr_coin ? cashOut?.manual?.jobr_coin?.toFixed(2) : "0.00"}
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
                ${netAmount ? Number(netAmount)?.toFixed(2) : "0.00"}
              </h1>
            </div>
            <Link href="viewSession/endSession" className="closeView">
              <div>
                <h6 className="closeText">{"Close Batch"}</h6>
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
        ids={modalDetail.flag === "trackingmodal" ? "trackingModal" : ""}
        child={
          modalDetail.flag === "trackingmodal" ? (
            <AddCashModal
              title={modalDetail.title}
              modalType={modalDetail.type}
              handleDrawerSessionChange={drawerSessionInfo}
              handleDrawerHistoryChange={getDrawerHistoryHandle}
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

export default ViewSession;
