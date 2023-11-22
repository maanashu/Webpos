import React, { useState } from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";
import OTPInput from 'react-otp-input';
import { useRouter } from 'next/router';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { posUserLogin,selectLoginAuth } from '../../redux/slices/auth';

const Verify = () => {
    const authData = useSelector(selectLoginAuth)
    const toastId = React.useRef(null)
    const router = useRouter();
    const { id } = router.query;
    const UniqueId = authData?.usersInfo?.payload?.uniqe_id
    const dispatch = useDispatch();
    const [posSecurityPin, setPosSecurityPin] = useState("");
    
    const generateRandomName = () => {
        return Math.random().toString(36).substr(2, 10);
    };

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
                        router.push("/home/overview")
                        localStorage.removeItem('PhoneNumber');
                    }
                },
            })
        );
    };

    return (
        <>
            <div className='verifyOtpSection verificationSection'>
                <div className='verifyBox'>
                    <h1 className='verifyHeading'> Password</h1>
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
                                            renderInput={(props) => <input {...props} type="text" maxLength={4} />}
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
        </>
    )
}

export default Verify