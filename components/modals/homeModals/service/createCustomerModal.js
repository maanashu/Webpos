import React, { useState } from 'react'
import * as Images from "../../../../utilities/images";
import Image from "next/image";
import PhoneInput from 'react-phone-input-2';

const CreateCustomerModal = () => {
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
        <div className='createCustomerSection'>
            <form className='addCustomerForm createCustomForm'>
                <div className="phone-numbpart verifyNumber">
                    <div className="country-plugin verifySelect">
                        <label className="form-label">Phone Number</label>
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
                            <Image src={Images.AlertCircle} alt="alertImage" className="img-fluid alertImg" />
                        </div>
                    </div>
                </div>
                <div className='addCustomerBtn mt-4'>
                    <button className='serviceCancel ' type='submit'>
                        Cancel
                    </button>
                    <button className='nextverifyBtn ' type='submit'>
                        Add Costumer
                        <Image src={Images.plusRound} alt="rightArrow" className="img-fluid rightImg" />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateCustomerModal