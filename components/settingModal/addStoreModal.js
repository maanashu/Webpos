import React, { useState } from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";
import PhoneInput from 'react-phone-input-2';
import { addNewStaff } from '../../redux/slices/setting';
import { useDispatch } from 'react-redux';

const AddStoreModal = (props) => {
    const dispatch = useDispatch();
    const [staffName, setStaffName] = useState("");
    const [staffPassword, setStaffPassword] = useState("");
    const [staffEmailAddress, setStaffEmailAddress] = useState("");
    const [isStaffMember, setIsStaffMember] = useState(false);
    console.log(isStaffMember,"isStaffMember");
    const [phoneCode, SetPhoneCode] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const generateRandomName = () => {
        return Math.random().toString(36).substr(2, 10);
    };

    // Function to handle checkbox change
    const handleCheckboxChange = () => {
        setIsStaffMember(!isStaffMember); // Toggle the checkbox value
    };
    // function for change the number and save number is state...............................
    const onChangePhoneNumber = (value, data) => {
        let phoneCode = data.dialCode;
        let phoneNumber = value.slice(data.dialCode.length);
        setPhoneNo(phoneNumber);
        SetPhoneCode(phoneCode);
    }


  const handleSelectChange = (value) => {

  };

    // API for POS user login..............................
    const handleAddStaff = () => {
        // if (!posSecurityPin) {
        //   if (!toast.isActive(toastId.current)) {
        //     toastId.current = toast.error("Please enter POS Security Pin");
        //   }
        //   return;
        // }
        // else if (posSecurityPin?.length < 4) {
        //   if (!toast.isActive(toastId.current)) {
        //     toastId.current = toast.error("Please enter valid POS Security Pin");
        //   }
        //   return
        // }
        let params = {
            firstname: staffName,
            pos_security_pin: staffPassword,
            phone_code: phoneCode,
            phone_no: phoneNo,
            email: staffEmailAddress,
            is_staff_member: isStaffMember,
            role_ids: [1],
            color_code: "#456413",
        };
        dispatch(
            addNewStaff({
            ...params,
            cb(res) {
              if (res) {
               
    
              }
            },
          })
        );
      };
    return (
        <>
            <div className='addStoreSection'>
                <form className='addStoreForm'>
                    <div className='addStoreData'>
                        <div className='nameForm'>
                            <label className="form-label amountText m-0">Full Name</label>
                            <input className="form-control nameControl" type="text" placeholder="Marie" value={staffName} onChange={(e) => {setStaffName(e.target.value);}}/>
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
                            <input className="form-control nameControl" type="password" placeholder="Password" value={staffPassword} onChange={(e) => {setStaffPassword(e.target.value);}}/>
                        </div>
                        <div className='nameForm mt-2'>
                            <label className="form-label amountText m-0">Email Address</label>
                            <input className="form-control nameControl" type="email" placeholder="E-mail" value={staffEmailAddress} onChange={(e) => {setStaffEmailAddress(e.target.value);}}/>
                        </div>
                        <div className='selectRole mt-2'>
                            <label className="form-label amountText m-0">Role</label>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => handleSelectChange(e.target.value)}>
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className='memberColor mt-4'>
                            <div className="roundCheck mb-0">
                                <input type="checkbox" checked={isStaffMember} onChange={handleCheckboxChange}/>
                                <label className='amountText ms-1'>Staff Member</label>
                            </div>
                            <div className='colorSelect'>
                                <h4 className='amountText'>Select Color</h4>
                                <span className='colorBox'></span>
                            </div>
                        </div>
                    </div>
                    <div className='addCustomerBtn mt-4'>
                        <button className='serviceCancel w-100 ' type='button' onClick={props?.close}>
                            Cancel
                        </button>
                        <button className='nextverifyBtn w-100' type='button' onClick={handleAddStaff}>
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