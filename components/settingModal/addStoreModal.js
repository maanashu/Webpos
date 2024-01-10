import React, { useEffect, useState } from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";
import PhoneInput from 'react-phone-input-2';
import { addNewStaff, getStaffRoles } from '../../redux/slices/setting';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoginAuth } from '../../redux/slices/auth';
import Multiselect from 'multiselect-react-dropdown';
// import { ChromePicker } from 'react-colorful';
// import 'react-colorful/dist/';
import { ChromePicker } from 'react-color';


const AddStoreModal = (props) => {
    const dispatch = useDispatch();
    const authData = useSelector(selectLoginAuth)
    const UniqueId = authData?.usersInfo?.payload?.uniqe_id
    const [staffName, setStaffName] = useState("");
    const [staffPassword, setStaffPassword] = useState("");
    const [staffEmailAddress, setStaffEmailAddress] = useState("");
    const [isStaffMember, setIsStaffMember] = useState(false);
    const [phoneCode, SetPhoneCode] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [staffRoles, setStaffRoles] = useState("");
    const [selectedRoleId, setSelectedRoleId] = useState([]);
    const [selected, setSelected] = useState([]);
    const [selectedColor, setSelectedColor] = useState("");  
    console.log(selectedColor,"selectedColor");
    const [displayColorPicker, setDisplayColorPicker] = useState(false);

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

    // function for close color modal after select
    const handleColorPickerChangeComplete = () => {
        setDisplayColorPicker(false);
    };

    // function for open color modal after select
    const handleButtonClick = () => {
        setDisplayColorPicker(!displayColorPicker);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color.hex);
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
            role_ids: selectedRoleId,
            color_code: selectedColor,
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

    // API for get STAFF ROLE...............................
    const getAllStaffRoles = () => {
        let params = {
            seller_id: UniqueId,
        };
        dispatch(getStaffRoles({
            ...params,
            cb(res) {
                if (res.status) {
                    setStaffRoles(res?.data?.payload?.roles)
                }
            },
        })
        );
    };

    // driver supplier description
    const handleChanges = (data) => {
        setSelected(data)
        let arr = [];
        for (let i = 0; i < data.length; i++) { arr.push(data[i].id) }
        setSelectedRoleId(arr)
    }

    useEffect(() => {
        if (UniqueId) {
            getAllStaffRoles()
        }
    }, [UniqueId])

    return (
        <>
            <div className='addStoreSection'>
                <form className='addStoreForm'>
                    <div className='addStoreData'>
                        <div className='nameForm'>
                            <label className="form-label amountText m-0">Full Name</label>
                            <input className="form-control nameControl" type="text" placeholder="Marie" value={staffName} onChange={(e) => { setStaffName(e.target.value); }} />
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
                            <input className="form-control nameControl" max={4} type="password" placeholder="Password" value={staffPassword} onChange={(e) => { setStaffPassword(e.target.value); }} />
                        </div>
                        <div className='nameForm mt-2'>
                            <label className="form-label amountText m-0">Email Address</label>
                            <input className="form-control nameControl" type="email" placeholder="E-mail" value={staffEmailAddress} onChange={(e) => { setStaffEmailAddress(e.target.value); }} />
                        </div>
                        <div className='selectRole mt-2'>
                            <label className="form-label amountText m-0">Role</label>
                            {/* <select class="form-select" aria-label="Default select example" value={selectedRoleId} onChange={(e) => handleSelectChange(e.target.value)}>
                                <option selected>Open this select menu</option>
                                {staffRoles?.length > 0 ?
                                    <>
                                        {staffRoles.map((data) => {
                                            return <option value={data.id}>{data.name}</option>
                                        })}

                                    </>
                                    : ""}
                            </select> */}

                            {staffRoles &&
                                <Multiselect
                                    options={staffRoles} // Options to display in the dropdown
                                    selectedValues={selected} // Preselected value to persist in dropdown
                                    onSelect={handleChanges} // Function will trigger on select event
                                    onRemove={handleChanges} // Function will trigger on remove event
                                    displayValue="name" // Property name to display in the dropdown options
                                />
                            }

                        </div>
                        <div className='memberColor mt-4'>
                            <div className="roundCheck mb-0">
                                <input type="checkbox" checked={isStaffMember} onChange={handleCheckboxChange} />
                                <label className='amountText ms-1'>Staff Member</label>
                            </div>
                            <div className='colorSelect'>
                                <h4 className='amountText pointHand' onClick={handleButtonClick}>Select Color</h4>
                                <div className='colorPick'>
                                {displayColorPicker && (
                                    <ChromePicker color={selectedColor} onChange={handleColorChange} onChangeComplete={handleColorPickerChangeComplete}
                                    />
                                )}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className=''
                                        style={{
                                            // position: "absolute",
                                            background: selectedColor,
                                            width: '50px',
                                            height: '20px',
                                            marginRight: '10px',
                                        }}
                                    ></div>
                                </div>
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