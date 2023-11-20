import React, { useState } from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";
import PhoneInput from 'react-phone-input-2';

const Verification = () => {
    const [phoneCode, SetPhoneCode] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const generateRandomName = () => {
        return Math.random().toString(36).substr(2, 10);
    };
    const onChangePhoneNumber = (value, data) => {
        let phoneCode = data.dialCode;
        let phoneNumber = value.slice(data.dialCode.length);
        setPhoneNo(phoneNumber);
        SetPhoneCode(phoneCode);
    }
    return (
        <>
            <div className='verificationSection'>
                <div className='verifyBox'>
                    <h1 className='verifyHeading'> Verify your phone <br /> number.</h1>
                    <h4 className='verifySub'>Enter your phone number to get started.</h4>
                    <form className='verifyForm'>
                        {/* <input className="form-control verifyControl" type="text" placeholder="Default input" /> */}
                        <div className="phone-numbpart verifyNumber">
                            <div className="country-plugin verifySelect">
                                {/* <label className="form-label">Phone Number</label> */}
                                <div id="result">
                                    <PhoneInput
                                        country="us"
                                        // value={phoneCode + phoneNo}
                                        enableSearch={true}
                                        name={generateRandomName}
                                        placeholder="Phone no."
                                        autoComplete="off"
                                        onChange={(value, data, event, formattedValue) => onChangePhoneNumber(value, data, event, formattedValue)}
                                    />
                                </div>
                            </div>
                            <Image src={Images.AlertCircle} alt="alertImage" className="img-fluid alertImg" />
                        </div>
                        <div className='verifyBtn'>
                            <button className='backverifyBtn w-100' type='submit'>
                                <Image src={Images.ArrowLeft} alt="leftArrow" className="img-fluid leftImg" />
                                Back
                            </button>
                            <button className='nextverifyBtn w-100' type='submit'>
                                Next
                                <Image src={Images.ArrowRight} alt="rightArrow" className="img-fluid rightImg" />
                            </button>
                        </div>
                    </form>
                </div>
                <div className='dottedImg'>
                <Image src={Images.FirstStepper} alt="firstStep" className="img-fluid" />
                </div>
            </div>
        </>
    )
}

export default Verification