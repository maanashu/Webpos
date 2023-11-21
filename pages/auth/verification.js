import React, { useState } from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";
import PhoneInput from 'react-phone-input-2';
import { useRouter } from 'next/router';
import { selectLoginAuth } from '../../redux/slices/auth';
import { toast } from "react-toastify";
import withAuth from '../../components/withAuth';
import { useSelector } from 'react-redux';

const Verification = () => {
    const authData = useSelector(selectLoginAuth)
    const toastId = React.useRef(null)
    const router = useRouter();

    const [phoneCode, SetPhoneCode] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    
    const generateRandomName = () => {
        return Math.random().toString(36).substr(2, 10);
    };

    // function for change the number and save number is state...............................
    const onChangePhoneNumber = (value, data) => {
        let phoneCode = data.dialCode;
        let phoneNumber = value.slice(data.dialCode.length);
        setPhoneNo(phoneNumber);
        SetPhoneCode(phoneCode);
    }

    // function for submit number(in next button)...............................
    const enterNumberSubmit = () => {
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneNo)) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Please enter valid phone number");
            }
            return;
        }

        // function for store the number in local storage...............................
        const dataToSave = {
            phoneCode: `+${phoneCode}`,
            phoneNo: phoneNo
        };
        localStorage.setItem("PhoneNumber", JSON.stringify(dataToSave));
        router.push(`/auth/verifyOtp`);
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
                            {/* <button className='backverifyBtn w-100' type='submit'>
                                <Image src={Images.ArrowLeft} alt="leftArrow" className="img-fluid leftImg" />
                                Back
                            </button> */}
                            {authData.loading ?
                                <button className='nextverifyBtn w-100' type='button' disabled>
                                    <span className="spinner-border spinner-border-sm"></span>
                                </button> :
                                <button className='nextverifyBtn w-100' type='button' onClick={() => enterNumberSubmit()} >
                                    Next
                                    <Image src={Images.ArrowRight} alt="rightArrow" className="img-fluid rightImg" />
                                </button>
                            }
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

export default withAuth(Verification)