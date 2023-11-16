import React, { useState } from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";
import Link from 'next/link';
import OTPInput from 'react-otp-input';

const VerifyOtp = () => {
    const [otp, setOtp] = useState("");
    const generateRandomName = () => {
        return Math.random().toString(36).substr(2, 10);
    };
    const onComplete = (code) => {

        // Validate the input to allow only numeric characters
        const regex = /^[0-9]*$/; // Regular expression to allow only numbers

        if (regex.test(code) || code === '') {
            setOtp(code);
        }
    }
    return (
        <>
            <div className='verifyOtpSection verificationSection'>
                <div className='verifyBox'>
                    <h1 className='verifyHeading'> Let’s verify your phone <br /> number.</h1>
                    <h4 className='verifySub'>Enter the code we’ve sent to +1 (438) 000-0000</h4>
                    <form>
                        <div className='otpMain'>
                            <div className="verify-part">
                                <div className="verify-box text-center">
                                    <div className="pin-box d-flex justify-content-center" >
                                        <OTPInput numInputs={5}
                                            className='input_digits_'
                                            value={otp}
                                            data-cy="pin-field"
                                            name={generateRandomName()}
                                            autoComplete="new-password"
                                            isInputNum={true}
                                            isInputSecure={true}
                                            renderInput={(props) => <input {...props} type="password" maxLength={5} />}
                                            onChange={onComplete}
                                        // onComplete={(code) => onComplete(code)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='errorMain'>
                                <Image src={Images.CrossCircle} alt="image" className="img-fluid" />
                                <span className='errorMsg'>Wrong code. Try again or correct your phone number.</span>
                            </div>
                        </div>
                        <div className='verifyBtn'>
                            <button className='backverifyBtn w-100' type='submit'>
                                <Image src={Images.DarkLeft} alt="image" className="img-fluid leftImg" />
                                Back
                            </button>

                            {/* <Link href="#" className='verifyTime w-100'>29s to resend code</Link> */}
                            <Link href="#" className='verifyTime w-100'>Resend</Link>
                        </div>
                    </form>
                </div>
                <div className='dottedImg'>
                    <Image src={Images.SecondStepper} alt="image" className="img-fluid" />
                </div>
            </div>
        </>
    )
}

export default VerifyOtp