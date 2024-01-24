import Image from "next/image";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Chart as ChartJS, registerables } from "chart.js";
import * as Images from "../../../utilities/images";

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
// import AccordionBody from "react-bootstrap/esm/AccordionBody";

const ViewSession = () => {
  ChartJS.register(...registerables);
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
  return (
    <>
      <div className="main-container-customers">
        <Header mainIcon={salesTracking} title="Sales Tracking" />
        <div className="viewSessioncontainer">
          <div className="innerViewContainer">
            <div className="topBox">
              <div className="topBox1">
                <div className="batchBox">
                  <p className="batchTextStyle">Batch</p>
                </div>
                <div className="batchBox">
                  <Link href="viewSession/endSession">
                    <div className="drawerBox">
                      <Image className="clockStyle" src={DrawerID} />
                      <p className="drawerTestStyle">Drawer ID</p>
                    </div>
                  </Link>
                </div>
                <div className="dateContainer">
                  <div className="dateBox">
                    <Image className="clockStyle" src={Clock} />
                    <p className="dateStyle">Today, 10/10/23 | 10:04 am</p>
                  </div>
                </div>
              </div>
              <div className="cashContainer">
                <div className="cashInnerContainer">
                  <div className="cashbox">
                    <p className="cashTextStyle">$2.00</p>
                    <p className="expectedCash">Expected Cash Balance</p>
                  </div>
                  <div className="buttonBox">
                    <div
                      onClick={() => handleShowModal("Remove Cash", "remove")}
                      className="removeCashButton"
                    >
                      <p className="removeTextStyle">Remove Cash</p>
                    </div>
                    <div
                      onClick={() => handleShowModal("Add Cash", "add")}
                      className="addCashButton"
                    >
                      <p className="addTextStyle">Add Cash</p>
                      <Image
                        width={20}
                        height={20}
                        // className="clockStyle"
                        src={plusCircleOutline}
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
                      <h4 className="accordnText">$5,590.00</h4>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="saleAccordian">
                      <Accordion flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <div className="flexDiv w-100 subAccordn">
                              <h4 className="appointSub m-0">Sales</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Cash</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Card</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
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
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Cash</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Card</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
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
                              <h4 className="appointSub m-0">Refund</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Cash</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Card</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
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
                              <h4 className="appointSub m-0">Delivery Fees</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Cash</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Card</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
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
                              <h4 className="appointSub m-0">Shipping Fees</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Cash</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Card</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
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
                      <h4 className="accordnText">$5,590.00</h4>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="saleAccordian">
                      <Accordion flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <div className="flexDiv w-100 subAccordn">
                              <h4 className="appointSub m-0">Sales</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Cash</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Card</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
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
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Cash</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Card</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
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
                              <h4 className="appointSub m-0">Refund</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Cash</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Card</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
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
                              <h4 className="appointSub m-0">Delivery Fees</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Cash</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Card</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
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
                              <h4 className="appointSub m-0">Shipping Fees</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Cash</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Card</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
                            </div>
                            <div className="flexDiv mt-2">
                              <h4 className="appointSub m-0 ps-3">Jobr Coin</h4>
                              <h4 className="appointSub m-0">$5,590.00</h4>
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
              <h1 className="totalAmmount">$15220.00</h1>
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
