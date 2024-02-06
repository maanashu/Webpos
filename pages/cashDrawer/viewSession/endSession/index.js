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
import { useSelector } from "react-redux";
import { selectLoginAuth } from "../../../../redux/slices/auth";

const EndSession = () => {
  ChartJS.register(...registerables);

  const getUserData = useSelector(selectLoginAuth);
  const getPosUser = getUserData?.posUserLoginDetails?.payload;
  const [key, setKey] = useState(Math.random());

  const [modalDetail, setModalDetail] = useState({
    show: false,
    title: "End Cash Tracking Session",
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
        <Header mainIcon={CrossCircle} title={"Back"} />
        <div className="innerContainer">
          <div className="closeBatchView">
            <div className="batchView">
              <h4 className="appointMain">Batch</h4>
            </div>

            <div className="closeButtonView">
              <div
                className="closeBatchButton"
                onClick={() =>
                  handleShowModal("End Cash Tracking Session", "remove")
                }
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
                <Image
                  src={
                    getPosUser?.user_profiles?.profile_photo
                      ? getPosUser?.user_profiles?.profile_photo
                      : Images.defaultUser
                  }
                  className="userImage"
                />
                <div className="profileNameView">
                  <p className="profileNameStyle">
                    {`${getPosUser?.user_profiles?.firstname} ${getPosUser?.user_profiles?.lastname}`}
                  </p>
                  <div className="profileTypeView">
                    <p className="profileTypeTextStyle">
                      {getPosUser?.user_roles?.length > 0
                        ? getPosUser?.user_roles?.map((item) => item.role?.name)
                        : "admin"}
                    </p>
                  </div>
                  <div className="profileTypeView">
                    <p className="profileNameStyle">
                      ID: {getPosUser?.user_profiles?.user_id ?? "0"}
                    </p>
                  </div>
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
