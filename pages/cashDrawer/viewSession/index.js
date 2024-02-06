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
  selectCashDrawerData,
} from "../../../redux/slices/cashDrawer";
import { amountFormat } from '../../../utilities/globalMethods';
import moment from "moment-timezone";
// import AccordionBody from "react-bootstrap/esm/AccordionBody";

const ViewSession = () => {
  const router = useRouter();
  ChartJS.register(...registerables);

  const dispatch = useDispatch();
  const sessionData = useSelector(selectCashDrawerData);
  const drawerSessionDetail = sessionData?.drawerSession?.payload;
  const drawerHistoryData = sessionData?.drawerHistory?.payload;
  const cashIn = drawerHistoryData?.cash_in;
  const cashOut = drawerHistoryData?.cash_out;

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

  useEffect(() => {
    const drawerId = {
      drawer_id: drawerSessionDetail?.id,
    };
    dispatch(
      getDrawerHistory({
        ...drawerId,
      })
    );
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
            style={{background: "#f2f3f9", borderRadius: "35px", fontWeight: 600}}
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
                      USD {amountFormat(drawerHistoryData?.net_amount?.toFixed(2))}
                    </p>
                    <p className="expectedCash">Expected cash balance</p>
                  </div>
                  <div className="buttonBox">
                    <div
                      onClick={() => handleShowModal("Remove Cash", "remove")}
                      className="removeCashButton"
                    >
                      <p className="removeTextStyle"><b>Remove Cash</b></p>
                    </div>
                    <div
                      onClick={() => handleShowModal("Add Cash", "add")}
                      className="addCashButton"
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
                        ${cashIn?.total?.toFixed(2)}
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
                                ${cashIn?.sales?.total?.toFixed(2)}
                              </h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Cash</h4>
                              <h4 className="appointSub m-0">
                                ${cashIn?.sales?.cash?.toFixed(2)}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Card</h4>
                              <h4 className="appointSub m-0">
                                ${cashIn?.sales?.card?.toFixed(2)}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                              <h4 className="appointSub m-0">
                                ${cashIn?.sales?.jobr_coin?.toFixed(2)}
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
                                ${cashIn?.manual?.total?.toFixed(2)}
                              </h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Cash</h4>
                              <h4 className="appointSub m-0">
                                ${cashIn?.manual?.cash?.toFixed(2)}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Card</h4>
                              <h4 className="appointSub m-0">
                                ${cashIn?.manual?.card?.toFixed(2)}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                              <h4 className="appointSub m-0">
                                ${cashIn?.manual?.jobr_coin?.toFixed(2)}
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
                        ${cashOut?.total?.toFixed(2)}
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
                                ${cashOut?.refund?.total?.toFixed(2)}
                              </h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Cash</h4>
                              <h4 className="appointSub m-0">
                                ${cashOut?.refund?.cash?.toFixed(2)}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Card</h4>
                              <h4 className="appointSub m-0">
                                ${cashOut?.refund?.card?.toFixed(2)}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                              <h4 className="appointSub m-0">
                                ${cashOut?.refund?.jobr_coin?.toFixed(2)}
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
                                ${cashOut?.manual?.total?.toFixed(2)}
                              </h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Cash</h4>
                              <h4 className="appointSub m-0">
                                ${cashOut?.manual?.cash?.toFixed(2)}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Card</h4>
                              <h4 className="appointSub m-0">
                                ${cashOut?.manual?.card?.toFixed(2)}
                              </h4>
                            </div>
                            <div className="flexDiv mt-2 py-1">
                              <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                              <h4 className="appointSub m-0">
                                ${cashOut?.manual?.jobr_coin?.toFixed(2)}
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
                ${drawerHistoryData?.net_amount.toFixed(2)}
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
