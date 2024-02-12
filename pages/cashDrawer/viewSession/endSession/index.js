import Image from "next/image";
import React, { useState, useEffect } from "react";

import { Chart as ChartJS, registerables } from "chart.js";
import Header from "../../../../components/commanComonets/cashdrawer/Header";
import {
  Cross,
  Lock,
  LogOutSky
} from "../../../../utilities/images";
import CustomModal from "../../../../components/customModal/CustomModal";
import EndCashModal from "../../../../components/modals/cashDrawerModals/endCashModal";
import * as Images from "../../../../utilities/images";
import { useSelector } from "react-redux";
import { selectLoginAuth } from "../../../../redux/slices/auth";
import { endTrackingSession } from "../../../../redux/slices/dashboard";
import { restAllData } from "../../../../redux/slices/commonActions";
import { getDrawerSession, selectCashDrawerData } from "../../../../redux/slices/cashDrawer";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const EndSession = () => {
  ChartJS.register(...registerables);

  const router = useRouter();
  const dispatch = useDispatch();
  const getUserData = useSelector(selectLoginAuth);
  const sessionData = useSelector(selectCashDrawerData);
  const drawerSessionDetail = sessionData?.drawerSession?.payload;
  const getPosUser = getUserData?.posUserLoginDetails?.payload;
  const [key, setKey] = useState(Math.random());

  const [modalDetail, setModalDetail] = useState({show: false});

  const ADMIN = () => {
    const admin = getUserData?.posUserLoginDetails?.payload?.user_roles?.filter(
      (item) => item?.role?.slug == "pos_admin"
    );
    return admin;
  };

  const handleShowModal = () => {
    setModalDetail({show: true});
    setKey(Math.random());
  };

  const handleOnCloseModal = () => {
    setModalDetail({show: false});
    setKey(Math.random());
  };

  // API for lock screen...............................
  const lockScreen = () => {
    let params = {
      // pos_user_id: posUserUniqueId,
      drawer_id: drawerSessionDetail?.id,
      amount: Number(drawerSessionDetail?.cash_balance),
      transaction_type: "end_tracking_session",
      mode_of_cash: "cash_out",
    };
    dispatch(
      endTrackingSession({
        ...params,
        async cb(res) {
          if (res.status) {
            await dispatch(restAllData({skipAuth: true}));
            // await dispatch(posUserLogout());
            // await dispatch(dashboardLogout());
            localStorage.removeItem("authToken");
            router.push("/auth/login");
          }
        },
      })
    );
  };

  const userLogout = async (e) => {
    e.preventDefault();

    let params = {
      // pos_user_id: posUserUniqueId,
      drawer_id: drawerSessionDetail?.id,
      amount: Number(drawerSessionDetail?.cash_balance),
      transaction_type: "end_tracking_session",
      mode_of_cash: "cash_out",
    };

    dispatch(
      endTrackingSession({
        ...params,
        async cb(res) {
          console.log("RESET_CALL_CALLED1");
          if (res.status) {
            await dispatch(restAllData());

            setTimeout(() => {
              toast.success("Logout successfully");
            }, 200);

            router.push("/auth/verification");

            localStorage.removeItem("merchantAuthToken");
            localStorage.removeItem("authToken");
            localStorage.removeItem("persist:root");
          }
        },
      })
    );
  };

  const closeSession = async () => {
    await dispatch(restAllData({skipAuth: true}));
    localStorage.removeItem("authToken");

    setTimeout(() => {
      toast.warning("Batch has been closed");
    }, 200);

    router.push("/auth/login");
  }

  useEffect(() => {
    if(sessionData?.drawerSession?.has_session_closed){
      closeSession();
    }
  }, []);

  return (
    <>
      <div className="main-container-customers ">
        {/* <Header mainIcon={CrossCircle} title={"Back"} /> */}
        <div className="innerContainer">
          <button
            type="button"
            className="backButton px-3 py-2"
            onClick={() => {
              router.push("/cashDrawer/viewSession");
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
          <div className="closeBatchView">
            <div className="batchView m-0">
              {/* <h4 className="appointMain">Batch</h4> */}
              <h5 className="textNeavyBlue">Batch</h5>
            </div>

            <div className="closeButtonView">
              <div
                className="closeBatchButton"
                onClick={() =>
                  handleShowModal()
                }
              >
                <p className="closeBatchText">Close Batch</p>
                <Image src={Cross} className="crossStyle" width={100} height={100}/>
              </div>
            </div>
          </div>
          <div className="loggedView">
            <div className="loggedTextView">
              <p className="loggedInTextStyle">Logged in as</p>
            </div>
            <div className="logoutView mt-4">
              <div className="profileView">
                <Image
                  src={
                    getPosUser?.user_profiles?.profile_photo
                      ? getPosUser?.user_profiles?.profile_photo
                      : Images.defaultUser
                  }
                  className="userImage"
                  width={100}
                  height={100}
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
                <div className="lockButton" onClick={() => lockScreen()}>
                  <p className="lockTextStyle">Lock Screen</p>
                  <Image src={Lock} width={" 24px"} height={" 24px"} />
                </div>
                
                {ADMIN()?.length > 0 && (
                  <div className="logOutButton" onClick={(e) => userLogout(e)}>
                    <p className="logoutTextStyle">Log Out</p>
                    <Image src={LogOutSky} width={" 24px"} height={" 24px"} />
                  </div>
                )}
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
        ids={"trackingModal"}
        child={
          <EndCashModal
            title={modalDetail.title}
            modalType={modalDetail.type}
            close={() => handleOnCloseModal()}
          />
        }
        header={
          <p onClick={handleOnCloseModal} className="modal_cancel">
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

export default EndSession;
