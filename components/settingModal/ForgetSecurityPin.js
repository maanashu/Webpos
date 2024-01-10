import React, { useState } from 'react'
import OTPInput from 'react-otp-input';
import { useRouter } from 'next/router';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { resetGoogleAuthenticator, settingInfo } from '../../redux/slices/setting';

const ForgetSecurityPin = (props) => {
    const settingData = useSelector(settingInfo)
    const toastId = React.useRef(null)
    const router = useRouter();
    const dispatch = useDispatch();
    const [verificationOtp, setverificationOtp] = useState("");

    const generateRandomName = () => {
        return Math.random().toString(36).substr(2, 10);
    };

    const onComplete = (code) => {
        const regex = /^[0-9]*$/;
        if (regex.test(code) || code === '') {
            setverificationOtp(code);
            return
        }
    }

    // apply API for reset google security pin and open security scaner code modal
    const verificationOtpSubmit = (flag) => {
        if (!verificationOtp) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Please enter Verification Otp");
            }
            return;
        }
        else if (verificationOtp?.length < 5) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Please enter valid Verification Otp");
            }
            return
        }
        let params = {
            verification_id: props.getVerificationId,
            verification_otp: verificationOtp
        }
        dispatch(resetGoogleAuthenticator({
            ...params, cb(res) {
                if (res.status) {
                    props.getSecurityScanerInfo(res?.data?.payload?.qrCode)
                    props?.handleModalChange(flag)
                }
            },
        })
        );
    };

    return (
        <>

            <div className='verifyOtpSection loginPasswordOtp'>
                <div className='loginOtpSub'>
                    <div className='verifyBox'>
                        <h4 className='verifySub'>Please enter the 5 digit code </h4>
                        <form className='otpForm'>
                            <div className='otpMain'>
                                <div className="verify-part">
                                    <div className="verify-box text-center">
                                        <div className="pin-box d-flex justify-content-center" >
                                            <OTPInput numInputs={5}
                                                className='input_digits_'
                                                value={verificationOtp}
                                                data-cy="pin-field"
                                                name={generateRandomName()}
                                                autoComplete="new-password"
                                                isInputNum={true}
                                                isInputSecure={true}
                                                renderInput={(props) => <input {...props} type="text" maxLength={4} />}
                                                onChange={onComplete}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='verifyBtn mb-3'>
                                <button className='nextverifyBtn w-50' type='button' onClick={() => { router.back() }}>
                                    Back
                                </button>

                                {settingData.loading ?
                                    <button className='nextverifyBtn w-50' type='button' disabled>
                                        <span className="spinner-border spinner-border-sm"></span>
                                    </button> :
                                    <button className='nextverifyBtn w-50' type='button' onClick={() => verificationOtpSubmit("GetSecurityScaner")} >
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

export default ForgetSecurityPin