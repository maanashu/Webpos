import React, { useState } from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";
import PhoneInput from 'react-phone-input-2';

const AddStoreModal = () => {
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
            <div className='addStoreSection'>
                <form className='addStoreForm'>
                    <div className='addStoreData'>
                        <div className='nameForm'>
                            <label className="form-label amountText m-0">Full Name</label>
                            <input className="form-control nameControl" type="text" placeholder="Marie" />
                        </div>
                        <div className="verifySelect mt-2">
                            <label className="form-label amountText m-0">Phone Number</label>
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
                        <div className='nameForm mt-2'>
                            <label className="form-label amountText m-0">One Time Password</label>
                            <input className="form-control nameControl" type="password" placeholder="Password" />
                        </div>
                        <div className='nameForm mt-2'>
                            <label className="form-label amountText m-0">Email Address</label>
                            <input className="form-control nameControl" type="email" placeholder="E-mail" />
                        </div>
                        <div className='selectRole mt-2'>
                            <label className="form-label amountText m-0">Role</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className='memberColor mt-4'>
                            <div className="roundCheck mb-0">
                                <input type="checkbox" />
                                <label className='amountText ms-1'>Staff Member</label>
                            </div>
                            <div className='colorSelect'>
                                <h4 className='amountText'>Select Color</h4>
                                <span className='colorBox'></span>
                            </div>
                        </div>
                    </div>
                    <div className='addCustomerBtn mt-4'>
                        <button className='serviceCancel w-100 ' type='submit'>
                            Cancel
                        </button>
                        <button className='nextverifyBtn w-100' type='submit'>
                            Save
                            <Image src={Images.ArrowRight} alt="rightArrow" className="img-fluid rightImg" />
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddStoreModal