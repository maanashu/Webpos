import Image from "next/image";
import React, { useState } from "react";

import { Chart as ChartJS, registerables } from "chart.js";
import Header from "../../../../components/commanComonets/cashdrawer/Header";
import {
  calendarDark,
  Cross,
  CrossCircle,
  DrawerBlue,
  DrawerIcon,
  DrawerID,
  Lock,
  LogOut,
  LogOutSky,
  userSale,
} from "../../../../utilities/images";
import CustomModal from "../../../../components/customModal/CustomModal";
import EndCashModal from "../../../../components/modals/cashDrawerModals/endCashModal";
import * as Images from "../../../../utilities/images";

const EndSession = () => {
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
      <div className="main-container-customers ">
        <Header mainIcon={CrossCircle} title={"End Tracking Session"} />
        <div className="innerContainer">
          <div className="drawerIdBox">
            <Image src={DrawerIcon} width={"24px"} height={"24px"} />
            <p className="drawerIdText">Drawer ID:1</p>
          </div>
          <div className="batchBox">
            <p className="batchText">Batch</p>

            <p className="dateText">Date</p>
          </div>
          <div className="closeBatchView">
            <div className="batchView">
              <p className="batchText">Batch</p>
            </div>
            <div className="batchView">
              <Image src={calendarDark} className="calendarStyle" />
              <p className="batchText">5/December/2023</p>
            </div>
            <div className="closeButtonView">
              <div
                className="closeBatchButton"
                onClick={() => handleShowModal("End Cash", "remove")}
              >
                <p className="closeBatchText">Close Batch</p>
                <Image src={Cross} className="crossStyle" />
              </div>
            </div>
          </div>
          <div className="loggedView">
            <div className="loggedTextView">
              <p className="loggedInTextStyle">Logged in as</p>
            </div>
            <div className="logoutView">
              <div className="profileView">
                <Image src={userSale} />
                <div className="profileNameView">
                  <p className="profileNameStyle">Michelle Graycastle</p>
                  <div className="profileTypeView">
                    <Image src={DrawerBlue} width={"18px"} height={"18px"} />
                    <p className="profileTypeTextStyle">POS Cashier</p>
                  </div>
                </div>
              </div>
              <div className="skuView">
                <div className="skuStyle">
                  <p className="skuTextStyle">SKU 0199 - 3221</p>
                </div>
              </div>
              <div className="logView">
                <div className="lockButton">
                  <p className="lockTextStyle">Lock Screen</p>
                  <Image src={Lock} width={" 24px"} height={" 24px"} />
                </div>

                <div className="logOutButton">
                  <p className="logoutTextStyle">Log Out</p>
                  <Image src={LogOutSky} width={" 24px"} height={" 24px"} />
                </div>
              </div>
            </div>
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
            <EndCashModal
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

export default EndSession;
