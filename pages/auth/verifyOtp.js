import React, { useState } from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";
import Link from 'next/link';
import OTPInput from 'react-otp-input';
import { useRouter } from 'next/router';
import { toast } from "react-toastify";

import { useDispatch } from 'react-redux';
import { userMerchantLogin } from '../../redux/slices/auth';

const VerifyOtp = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [otp, setOtp] = useState("");
    const generateRandomName = () => {
        return Math.random().toString(36).substr(2, 10);
    };

    var getPhoneInfo;
    if (typeof window !== "undefined") {
        const PhoneNumber = localStorage.getItem("PhoneNumber");
        getPhoneInfo = JSON.parse(PhoneNumber);
    }

    const onComplete = (code) => {
        // Validate the input to allow only numeric characters
        const regex = /^[0-9]*$/; // Regular expression to allow only numbers
        if (regex.test(code) || code === '') {
            setOtp(code);
            return
        }
    }
    const enterOtpSubmit = () => {
        if (!otp) {
            toast.error("Please enter Otp");
            return;
        }
        else if (otp?.length < 4) {
            toast.error("Please enter valid Otp");
            return
          } 
        let params = {
            type: "phone",
            phone_code: getPhoneInfo?.phoneCode,
            phone_number: getPhoneInfo?.phoneNo,
            security_pin: otp
        };
        dispatch(
            userMerchantLogin({
                ...params,
                cb(res) {
                    if (res) {
                        router.push("/auth/login")
                    }
                },
            })
        );
    };

    return (
        <>
            <div className='verifyOtpSection verificationSection'>
                <div className='verifyBox'>
                    <h1 className='verifyHeading'> Let’s verify your phone <br /> number.</h1>
                    <h4 className='verifySub'>Enter the code we’ve sent to +1 (438) 000-0000</h4>
                    <form className='otpForm'>
                        <div className='otpMain'>
                            <div className="verify-part">
                                <div className="verify-box text-center">
                                    <div className="pin-box d-flex justify-content-center" >
                                        <OTPInput numInputs={4}
                                            className='input_digits_'
                                            value={otp}
                                            data-cy="pin-field"
                                            name={generateRandomName()}
                                            autoComplete="new-password"
                                            isInputNum={true}
                                            isInputSecure={true}
                                            renderInput={(props) => <input {...props} type="text" maxLength={4} />}
                                            onChange={onComplete}
                                        // onComplete={(code) => onComplete(code)}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* <div className='errorMain'>
                                <Image src={Images.CrossCircle} alt="crossImage" className="img-fluid" />
                                <span className='errorMsg'>Wrong code. Try again or correct your phone number.</span>
                            </div> */}
                        </div>
                        <div className='verifyBtn'>
                            <button className='backverifyBtn w-100' type='button' onClick={() => router.push(`/auth/verification`)}>
                                <Image src={Images.DarkLeft} alt="leftArrow" className="img-fluid leftImg" />
                                Back
                            </button>
                            {/* <Link href="#" className='verifyTime w-100'>29s to resend code</Link> */}
                            {/* <Link href="#" className='verifyTime w-100'>Resend</Link> */}
                            <button className='nextverifyBtn w-100' type='button' onClick={() => enterOtpSubmit()}>
                                Next
                                <Image src={Images.ArrowRight} alt="rightArrow" className="img-fluid rightImg" />
                            </button>
                        </div>
                    </form>
                </div>
                <div className='dottedImg'>
                    <Image src={Images.SecondStepper} alt="secondStep" className="img-fluid" />
                </div>
            </div>
        </>
    )
}

export default VerifyOtp