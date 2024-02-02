import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import * as Images from "../../../utilities/images"
import Image from "next/image";

const PhoneReceiptModal = () => {
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
    return (
        <>
            <div className='phoneReceiptSection'>
                <form className='createCustomForm'>
                    <div className=" verifySelect">
                        <div id="result" className='phoneIcon'>
                            <PhoneInput
                                country="us"
                                // value={phoneCode + phoneNo}
                                enableSearch={true}
                                name={generateRandomName}
                                placeholder="Phone no."
                                autoComplete="off"
                                onChange={(value, data, event, formattedValue) => onChangePhoneNumber(value, data, event, formattedValue)}
                            />
                            <Image src={Images.AlertCircle} alt="alertImage" className="img-fluid alertImg" />
                        </div>
                    </div>
                    <div className='addCustomerBtn mt-4 phoneReceiptBtn'>
                        <button className='serviceCancel ' type='submit'>
                            Cancel
                        </button>
                        <button className='nextverifyBtn ' type='submit'>
                            Send E-receipt
                        </button>
                        <button className='eReciptBtn d-none' type='submit'>
                            E-receipt sent
                            <Image src={Images.btnTick} alt="btnTick image" className="img-fluid ms-2" />
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default PhoneReceiptModal