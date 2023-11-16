import React from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";
import Link from 'next/link';


const VerifyOtp = () => {
    return (
        <>
            <div className='verifyOtpSection verificationSection'>
                <div className='verifyBox'>
                    <h1 className='verifyHeading'> Let’s verify your phone <br /> number.</h1>
                    <h4 className='verifySub'>Enter the code we’ve sent to +1 (438) 000-0000</h4>
                    <form>
                       <div className='otpMain'></div>
                        <div className='verifyBtn'>
                            <button className='backverifyBtn w-100' type='submit'>
                                <Image src={Images.DarkLeft} alt="image" className="img-fluid leftImg" />
                                Back
                            </button>
                            <Link href="#" className='verifyTime w-100'>29s to resend code</Link>
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