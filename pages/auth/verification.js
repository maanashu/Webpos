import React from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";

const Verification = () => {
    return (
        <>
            <div className='verificationSection'>
                <div className='verifyBox'>
                    <h1 className='verifyHeading'> Verify your phone <br /> number.</h1>
                    <h4 className='verifySub'>Enter your phone number to get started.</h4>
                    <form>
                        <input class="form-control verifyControl" type="text" placeholder="Default input" />
                        <div className='verifyBtn'>
                            <button className='backverifyBtn w-100' type='submit'>
                                <Image src={Images.ArrowLeft} alt="image" className="img-fluid leftImg" />
                                Back
                            </button>
                            <button className='nextverifyBtn w-100' type='submit'>
                                Next
                                <Image src={Images.ArrowRight} alt="image" className="img-fluid rightImg" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Verification