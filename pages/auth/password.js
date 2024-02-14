import React, { useState } from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";
import OTPInput from 'react-otp-input';
import { useRouter } from 'next/router';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { posUserLogin, selectLoginAuth } from '../../redux/slices/auth';
import CustomModal from '../../components/customModal/CustomModal';
import SecurityVerification from "../../components/settingModal/SecurityVerify";
import ForgetSecurityPin from "../../components/settingModal/ForgetSecurityPin";
import GetSecurityScanerCode from "../../components/settingModal/GetSecurityScaner";
import ProtectedRoute from '../../components/ProtectedRoute';
import moment from 'moment-timezone';


const Verify = () => {
  const authData = useSelector(selectLoginAuth)
  const data = authData?.usersInfo?.payload?.user?.user_profiles;
  console.log(authData

    , "authDataauthData");

  const selectedposusernfo = authData?.selectedUserData ? authData?.selectedUserData:""
  console.log(selectedposusernfo, "selectedposusernfo");
  const toastId = React.useRef(null)
  const router = useRouter();
  const { id } = router.query;
  const UniqueId = authData?.usersInfo?.payload?.uniqe_id
  const dispatch = useDispatch();
  const [posSecurityPin, setPosSecurityPin] = useState("");
  const [key, setKey] = useState(Math.random());
  const generateRandomName = () => {
    return Math.random().toString(36).substr(2, 10);
  };
  // const location = 
  const [getSecurityScnerCode, setGetSecurityScnerCode] = useState("")
  const [userLoginInfo, setUserLoginInfo] = useState("")
  const [getUserToken, setGetUserToken] = useState("")

  const [getVerificationId, setGetVerificationId] = useState("")
  const [modalDetail, setModalDetail] = useState({
    show: false,
    title: "",
    flag: "",
  });


  //closeModal
  const handleOnCloseModal = () => {
    setModalDetail({
      show: false,
      title: "",
      flag: "",
    });
    setKey(Math.random());
  };

  const handleModalChange = (flag) => {
    setModalDetail({ show: true, flag: flag });
    setKey(Math.random());
  }
  const getSecurityScanerInfo = (data) => {
    setGetSecurityScnerCode(data)
  }
  const handleGetVerificationId = (data) => {
    setGetVerificationId(data)
  }

  const onComplete = (code) => {
    // Validate the input to allow only numeric characters
    const regex = /^[0-9]*$/; // Regular expression to allow only numbers
    if (regex.test(code) || code === '') {
      setPosSecurityPin(code);
      return
    }
  }

  // API for POS user login..............................
  const enterPinSubmit = () => {
    if (!posSecurityPin) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please enter POS Security Pin");
      }
      return;
    }
    else if (posSecurityPin?.length < 4) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please enter valid POS Security Pin");
      }
      return
    }
    let params = {
      merchant_id: UniqueId,
      pos_user_id: id,
      pos_security_pin: posSecurityPin
    };
    dispatch(
      posUserLogin({
        ...params,
        cb(res) {
          if (res) {
            setGetUserToken(res?.data?.payload?.token)
            setUserLoginInfo(res?.data?.payload?.user_profiles?.is_two_fa_enabled)
            if (res?.data?.payload?.user_profiles?.is_two_fa_enabled === true) {
              setModalDetail({
                show: true,
                flag: "SecurityVerification",
                type: "SecurityVerification",
              });
              setKey(Math.random());
            }

            else if (res?.data?.payload?.user_profiles?.is_two_fa_enabled === false) {
              router.push("/home/overview")
              localStorage.removeItem('PhoneNumber');
            }

          }
        },
      })
    );
  };

  return (
    <>
      <ProtectedRoute>
        <div className='verifyOtpSection loginPasswordOtp passwordLogin'>
          <div className='loginOtpSub '>
            <div className='loginheading'>Welcome to <span>JOBR POS</span></div>
            <div className='verifyBox'>
              <div className='loginCard'>
                <figure className='loginIds'>
                  <Image src={selectedposusernfo?.user?.user_profiles?.profile_photo ? selectedposusernfo?.user?.user_profiles?.profile_photo : Images.userDummy} alt="LoginIdImage" width="100" height="100" className="img-fluid loginIdImg" />
                </figure>
                <div className='loginMainHead'>
                  <h2 className='loginMain'>{selectedposusernfo?.user?.user_profiles?.firstname} {selectedposusernfo?.user?.user_profiles?.lastname}</h2>

                  {selectedposusernfo?.user?.user_roles.length > 0 ? (
                    selectedposusernfo?.user?.user_roles?.map((data, index) => {
                      return (
                        <h4 className='loginSub'>{data?.role?.name}</h4>
                      )
                    })
                  )
                    :
                    <h4 className='loginSub mt-3'>Admin / Manager</h4>
                  }

                  {selectedposusernfo?.user?.api_tokens?.length > 0 ? (
                    <>
                      <h4 className='loginPara mt-3'>{moment(selectedposusernfo?.user?.api_tokens[0]?.updated_at).fromNow()}</h4>
                      <h4 className='loginPara '>{moment(selectedposusernfo?.user?.api_tokens[0]?.updated_at).format('LT')}</h4>
                    </>
                  ) :
                    ""}
                </div>
              </div>
              <h1 className='verifyHeading'> Passcode</h1>
              <h4 className='verifySub'>Please enter the 4 digit code </h4>
              <form className='otpForm'>
                <div className='otpMain'>
                  <div className="verify-part">
                    <div className="verify-box text-center">
                      <div className="pin-box d-flex justify-content-center" >
                        <OTPInput numInputs={4}
                          className='input_digits_'
                          value={posSecurityPin}
                          data-cy="pin-field"
                          name={generateRandomName()}
                          autoComplete="new-password"
                          isInputNum={true}
                          isInputSecure={true}
                          renderInput={(props) => <input {...props} type="password" maxLength={4} />}
                          onChange={onComplete}
                        // onComplete={(code) => onComplete(code)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='verifyBtn'>
                  <button className='backverifyBtn w-100' type='button' onClick={() => router.push(`/auth/login`)}>
                    <Image src={Images.DarkLeft} alt="leftArrow" className="img-fluid leftImg" />
                    Back
                  </button>

                  {authData.loading ?
                    <button className='nextverifyBtn w-100' type='button' disabled>
                      <span className="spinner-border spinner-border-sm"></span>
                    </button> :
                    <button className='nextverifyBtn w-100' type='button' onClick={() => enterPinSubmit()} >
                      Next
                      <Image src={Images.ArrowRight} alt="rightArrow" className="img-fluid rightImg" />
                    </button>
                  }
                </div>
              </form>
            </div>
          </div>
          <div className='loginLogo'>
            <Image src={Images.headLogo} className='img-fluid' alt='headLogo image' />
          </div>
        </div>
      </ProtectedRoute>

      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={true}
        mediumWidth={false}
        className={"commonWidth customContent"}
        ids={modalDetail.flag === "GetSecurityScaner" ? "GetSecurityScaner" : modalDetail.flag === "SecurityVerification" ? "SecurityVerification" : modalDetail.flag === "ResetSecurityPin" ? "ResetSecurityPin" : ""}
        child={
          modalDetail.flag === "GetSecurityScaner" ? (
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
                getProfileDetails={userLoginInfo}
                flag={"loginModal"}
                getUserToken={getUserToken}
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
                    <Image src={Images.modalCross} alt='crossIcon' className='crossIcon' width="10" height='10' />
                  </button>
                </>
              ) : ""}
            </div>
          </div>
        }
        onCloseModal={() => handleOnCloseModal()}
      />
    </>
  )
}

export default Verify