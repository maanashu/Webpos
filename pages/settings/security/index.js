import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import CustomModal from "../../../components/customModal/CustomModal";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginAuth } from "../../../redux/slices/auth";
import SecurityVerification from "../../../components/settingModal/SecurityVerify";
import ActivateSecurityModal from "../../../components/settingModal/activateSecurityModal";
import ForgetSecurityPin from "../../../components/settingModal/ForgetSecurityPin";
import GetSecurityScanerCode from "../../../components/settingModal/GetSecurityScaner";
import { getProfile } from "../../../redux/slices/dashboard";

const Security = (props) => {
  const authData = useSelector(selectLoginAuth)
  const userId = authData?.usersInfo?.payload?.user?.user_profiles?.user_id ? authData?.usersInfo?.payload?.user?.user_profiles?.user_id : ""
  const dispatch = useDispatch();
  const [key, setKey] = useState(Math.random());
  const [getVerificationId, setGetVerificationId] = useState("")
  const [getSecurityScnerCode, setGetSecurityScnerCode] = useState("")
  const [getProfileDetails, setGetProfileDetails] = useState("");
  const [modalDetail, setModalDetail] = useState({
    show: false,
    title: "",
    flag: "",
  });

  // apply API for get user profile information
  const getProfileInfo = (userId) => {
    let params = {
      id: userId
    }
    dispatch(getProfile({
      ...params, cb(res) {
        if (res.status) {
          setGetProfileDetails(res?.data?.payload?.user_profiles?.is_two_fa_enabled)
        }
      },
    })
    );
  };

  // function for change modal
  const handleModalChange = (flag) => {
    setModalDetail({ show: true, flag: flag });
    setKey(Math.random());
  }

  // function for get Verification Id from security verify modal
  const handleGetVerificationId = (data) => {
    setGetVerificationId(data)
  }

  // function for get Security Scner Code from reset security pin verify modal
  const getSecurityScanerInfo = (data) => {
    setGetSecurityScnerCode(data)
  }

  //closeModal
  const handleOnCloseModal = () => {
    setModalDetail({
      show: false,
      title: "",
      flag: "",
    });
    setKey(Math.random());
  };

  // function for Activate and deactivate google Security
  const handleChangeActivateSecurity = (e) => {
    if (!getProfileDetails) {
      setModalDetail({
        show: true,
        flag: "ActivateSecurity",
        type: "ActivateSecurity",
      });
      setKey(Math.random());
    }
    else {
      setModalDetail({
        show: true,
        flag: "SecurityVerification",
        type: "SecurityVerification",
      });
      setKey(Math.random());
    }
  };

  useEffect(() => {
    if (userId) {
      getProfileInfo(userId)
    }
  }, [userId])


  useEffect(() => {
    props?.setShowSideBar(false)
  },[])

  return (
    <>
      <div className="securityRight settingOuter">
        <div className="topsettingContent_">
          <Image src={Images.passwordLock} alt="darkDevices image" className="img-fluid me-3" />
          <div className="rightboxContent_ w-100">
            <h3 className="headingTextStyle mb-2">2-Step Verification</h3>
            <p className="lightOfferText">
              An extra layer to boost your team members account security. A
              verification code will be required in addition to password each time you
              sign in.
            </p>
          </div>

        </div>
        <div className="w-100 bottonContent_">

          <div className="shadowBox twofaBox_">
            <div className="twofsContent">
              <h4 className="cancelOrderText mb-3">2-step verification for team members</h4>
              {/* <div >
              <input
                type="checkbox"
                checked={getProfileDetails}
                onChange={(e) => {
                  handleChangeActivateSecurity(e)
                }} />
            </div> */}
              <h6 className="settingText">
                Team members must enable their own verification methods.
              </h6>
            </div>

            <div class="roundCheck mb-0">
              <input class="checkbox" type="checkbox" id="flexSwitchCheckChecked" checked={getProfileDetails} onChange={(e) => {
                handleChangeActivateSecurity(e)
              }} />
              <label class="form-check-label d-none" for="flexSwitchCheckChecked"></label>
            </div>
          </div>
        </div>
      </div>

      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="true"
        showCloseBtn={false}
        isRightSideModal={true}
        mediumWidth={false}
        className={"commonWidth customContent"}
        ids={modalDetail.flag === "ActivateSecurity" ? "ActivateSecurity" : modalDetail.flag === "GetSecurityScaner" ? "GetSecurityScaner" : modalDetail.flag === "SecurityVerification" ? "SecurityVerification" : modalDetail.flag === "ResetSecurityPin" ? "ResetSecurityPin" : ""}
        child={
          modalDetail.flag === "ActivateSecurity" ? (
            <ActivateSecurityModal
              close={() => handleOnCloseModal()}
              handleModalChange={(e) => handleModalChange(e)}
              getSecurityScanerInfo={(e) => getSecurityScanerInfo(e)}
            />
          )
            : modalDetail.flag === "GetSecurityScaner" ? (
              <GetSecurityScanerCode
                close={() => handleOnCloseModal()}
                handleModalChange={(e) => handleModalChange(e)}
                getSecurityScnerCode={getSecurityScnerCode}
              />
            )
              : modalDetail.flag === "SecurityVerification" ? (
                <SecurityVerification
                  close={() => handleOnCloseModal()}
                  handleModalChange={(e) => handleModalChange(e)}
                  handleGetVerificationId={(e) => handleGetVerificationId(e)}
                  getProfileDetails={getProfileDetails}
                  refereshGetProfileApi={() => { getProfileInfo(userId) }}
                />
              )
                : modalDetail.flag === "ResetSecurityPin" ? (
                  <ForgetSecurityPin
                    close={() => handleOnCloseModal()}
                    handleModalChange={(e) => handleModalChange(e)}
                    getSecurityScanerInfo={(e) => getSecurityScanerInfo(e)}
                    getVerificationId={getVerificationId}
                  />
                )
                  :
                  ""
        }

        header={
          <div className="modalHeader_ mainheader-modal {
            display: inline-block;
            width: 100%;
        }">
            <div className="common_ common_crossBtn">
              {modalDetail.flag === "GetSecurityScaner" || modalDetail.flag === "SecurityVerification" || modalDetail.flag === "ResetSecurityPin" ? (
                <>
                  <button type="button " className="crossBtn" data-bs-dismiss="modal" aria-label="Close" onClick={() => handleOnCloseModal()}>
                    <i class="fas fa-times"></i>
                  </button>
                </>
              ) : ""}
            </div>
          </div>
        }
        onCloseModal={() => handleOnCloseModal()}
      />
    </>
  );

}
export default Security 