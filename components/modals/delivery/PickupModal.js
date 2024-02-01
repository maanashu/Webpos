import React, { useEffect, useState } from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import OTPInput from "react-otp-input";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { userMerchantLogin, selectLoginAuth } from "../../../redux/slices/auth";
import ProtectedRoute from "../../../components/ProtectedRoute";
import { verifyPickupOtp } from "../../../redux/slices/delivery";

const PickupModal = ({ orderData, cancelHandler, confirmHandler }) => {
  const authData = useSelector(selectLoginAuth);
  const toastId = React.useRef(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const [securityPin, setSecurityPin] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generateRandomName = () => {
    return Math.random().toString(36).substr(2, 10);
  };

  // this is use forget phone number from local storage and send in params...............................
  var getPhoneInfo;
  if (typeof window !== "undefined") {
    const PhoneNumber = localStorage.getItem("PhoneNumber");
    getPhoneInfo = JSON.parse(PhoneNumber);
  }

  const onComplete = (code) => {
    // Validate the input to allow only numeric characters
    const regex = /^[0-9]*$/; // Regular expression to allow only numbers
    if (regex.test(code) || code === "") {
      setSecurityPin(code);
      return;
    }
  };

  // API for user Merchant Login...............................
  const enterOtpSubmit = async () => {
    if (!securityPin) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please enter Otp");
      }

      return;
    } else if (securityPin?.length < 4) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please enter valid Otp");
      }
      return;
    }
    setIsLoading(true);
    let params = {
      order_id: orderData?.id,
      otp: securityPin,
    };
    dispatch(
      verifyPickupOtp({
        ...params,
        cb(res) {
          setIsLoading(false);
          if (res?.status) {
            setSecurityPin("");
            confirmHandler();
          }
        },
      })
    );
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="verifyOtpSection ">
        {/* <h1 className='verifyHeading'> Let’s verify your phone <br /> number.</h1> */}
        {/* <h4 className='verifySub'>Enter the code we’ve sent to {getPhoneInfo?.phoneCode} {getPhoneInfo?.phoneNo}</h4> */}
        <h4 className="verifySub">Please enter your pickup pin</h4>
        <form className="otpForm">
          <div className="otpMain">
            <div className="verify-part">
              <div className="verify-box text-center">
                <div className="pin-box d-flex justify-content-center">
                  <OTPInput
                    numInputs={4}
                    className="input_digits_"
                    value={securityPin}
                    data-cy="pin-field"
                    name={generateRandomName()}
                    autoComplete="new-password"
                    isInputNum={true}
                    isInputSecure={true}
                    renderInput={(props) => (
                      <input {...props} type="text" maxLength={4} />
                    )}
                    onChange={onComplete}
                    // onComplete={(code) => onComplete(code)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="verifyBtn">
            <button
              className="backverifyBtn w-100"
              type="button"
              onClick={() => cancelHandler()}
            >
              <Image
                src={Images.DarkLeft}
                alt="leftArrow"
                className="img-fluid leftImg"
              />
              Cancel
            </button>
            {/* <Link href="#" className='verifyTime w-100'>29s to resend code</Link> */}
            {/* <Link href="#" className='verifyTime w-100'>Resend</Link> */}

            {isLoading ? (
              <button className="nextverifyBtn w-100" type="button" disabled>
                <span className="spinner-border spinner-border-sm"></span>
              </button>
            ) : (
              <button
                className="nextverifyBtn w-100"
                type="button"
                onClick={() => enterOtpSubmit()}
              >
                Confirm
                <Image
                  src={Images.ArrowRight}
                  alt="rightArrow"
                  className="img-fluid rightImg"
                />
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default PickupModal;
