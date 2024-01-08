import React, { useState } from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";
import OTPInput from 'react-otp-input';
import { useRouter } from 'next/router';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { selectLoginAuth } from '../../redux/slices/auth';
import { configureGoogleAuthenticator, forgetGoogleAuthenticator, settingInfo, verifyGoogleAuthenticator } from '../../redux/slices/setting';

const SecurityVerification = (props) => {
    const settingData = useSelector(settingInfo)
    const authData = useSelector(selectLoginAuth)
    const toastId = React.useRef(null)
    const router = useRouter();
    const dispatch = useDispatch();
    const [verifySecurityPin, setVerifySecurityPin] = useState("");

    // Apply API for forget Security Pin
    const forgetGoogleSecurityPin = (flag) => {
        props?.handleModalChange(flag)
        dispatch(forgetGoogleAuthenticator({
            cb(res) {
                if (res.status) {
                    props?.handleGetVerificationId(res?.data?.payload?.verification_id)
                }
            },
        })
        );
    };

    const generateRandomName = () => {
        return Math.random().toString(36).substr(2, 10);
    };

    const onComplete = (code) => {
        const regex = /^[0-9]*$/;
        if (regex.test(code) || code === '') {
            setVerifySecurityPin(code);
            return
        }
    }

    // apply API for verify google security(enable 2FA), (disable 2FA) and also verify google security on login pop screen
    const enterPinSubmit = () => {
        if (!verifySecurityPin) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Please enter Google Security Pin");
            }
            return;
        }
        else if (verifySecurityPin?.length < 6) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Please enter valid Google Security Pin");
            }
            return
        }
        else if (props?.getProfileDetails === false) {
            let params = {
                code: verifySecurityPin
            }
            dispatch(configureGoogleAuthenticator({
                ...params, cb(res) {
                    if (res.status) {
                        if (props?.flag === "loginModal") {
                            setTimeout(() => {
                                props?.close()
                            }, 1000)
                        }
                        props?.refereshGetProfileApi()
                        setTimeout(() => {
                            props?.close()
                        }, 1000)
                    }
                },
            })
            );
        }
        else if (props?.getProfileDetails === true) {
            let params
            if (props?.flag === "loginModal") {
                params = {
                    code: verifySecurityPin,
                }
            }
            else {
                params = {
                    code: verifySecurityPin,
                    disable_2fa: true
                }
            }
            dispatch(verifyGoogleAuthenticator({
                ...params, cb(res) {
                    if (res.status) {
                        if (props?.flag === "loginModal") {
                            router.push("/home/overview")
                            localStorage.removeItem('PhoneNumber');
                            localStorage.removeItem('2FAToken');
                            localStorage.setItem("authToken", props?.getUserToken ? props?.getUserToken : "")
                            setTimeout(() => {
                                props?.close()
                            }, 1000)
                        }
                        props?.refereshGetProfileApi()
                        setTimeout(() => {
                            props?.close()
                        }, 1000)
                    }
                },
            })
            );
        }
    };

    return (
        <>
            <div className='verifyOtpSection loginPasswordOtp'>
                <div className='loginOtpSub'>
                    <div className='verifyBox'>
                        <h4 className='verifySub'>Please enter the 6 digit code </h4>
                        <form className='otpForm'>
                            <div className='otpMain'>
                                <div className="verify-part">
                                    <div className="verify-box text-center">
                                        <div className="pin-box d-flex justify-content-center mb-5" >
                                            <OTPInput numInputs={6}
                                                className='input_digits_'
                                                value={verifySecurityPin}
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
                            </div>
                            <button className='nextverifyBtn w-100 mb-5' type='button' onClick={() => forgetGoogleSecurityPin("ResetSecurityPin")}>
                                Forget Pin
                            </button>
                            <div className='verifyBtn mb-3'>
                                <button className='nextverifyBtn w-50' type='button' onClick={() => { router.back() }}>
                                    Back
                                </button>

                                {settingData.loading ?
                                    <button className='nextverifyBtn w-50' type='button' disabled>
                                        <span className="spinner-border spinner-border-sm"></span>
                                    </button> :
                                    <button className='nextverifyBtn w-50' type='button' onClick={() => enterPinSubmit()} >
                                        Submit
                                    </button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecurityVerification