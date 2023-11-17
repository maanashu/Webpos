import React from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";
import Link from 'next/link';

const LoginPassword = () => {
    return (
        <>
            <div className='loginPasswordsection'>
                <div className='passwordSection'>
                    <div className='loginheading'>Welcome to <span>JOBR POS</span></div>
                    <div className='passwordEnter'>
                        <figure className='loginIds'>
                            <Image src={Images.LoginSecond} alt="LoginIdImage" className="loginIdImg" />
                        </figure>
                        <h1 className='verifyHeading'>Eugenia Salas</h1>
                        <h4 className='loginSub'>Store Cashier</h4>
                        <form className='passwordForm'>
                            <div className='passwordControl'>
                                <input class="form-control verifyControl" type="text" placeholder="Password" />
                                <Image src={Images.Lock} alt="Lockimage" className="img-fluid lockImg" />
                                <Image src={Images.CloseEye} alt="OpenEyeimage" className="img-fluid eyeImg " />
                                <Image src={Images.OpenEye} alt="CloseEyeimage" className="img-fluid eyeImg d-none" />
                                <div className='errorMain'>
                                    <p className='errorMsg'>Wrong password. Try again..</p>
                                </div>
                            </div>
                            <Link className='linkHeading' href='#'>Forgot Password?</Link>
                            <div className='verifyBtn mt-4'>
                                <button className='backverifyBtn w-100' type='submit'>
                                    <Image src={Images.DarkLeft} alt="leftArrow" className="img-fluid leftImg" />
                                    Back
                                </button>
                                <button className='nextverifyBtn w-100' type='submit'>
                                    Next
                                    <Image src={Images.ArrowRight} alt="rightArrow" className="img-fluid rightImg" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPassword