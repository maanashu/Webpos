import React, { useState } from 'react'
import * as Images from "../../../utilities/images";
import Image from "next/image";
import PhoneInput from 'react-phone-input-2';
import CustomModal from '../../customModal/CustomModal';
import CustomerFound from './customerFound';

const CreateCustomerModal = () => {
    const [key, setKey] = useState(Math.random());
    const [modalDetail, setModalDetail] = useState({
        show: false,
        title: "",
        flag: "",
    });

    //closeModal
    const handleOnCloseModal = () => {
        setModalDetail({
            show: false,
            title: "",
            flag: "",
        });
        setKey(Math.random());
    };

    const handleUserProfile = (flag) => {

        setModalDetail({
            show: true,
            flag: flag,
            type: flag,
        });
        setKey(Math.random());
    };
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
            <div className='createCustomerSection'>
                <div className='trackingSub'>
                    <figure className='profileImage '>
                        <Image src={Images.addCutomer} alt="trackingImage" className="img-fluid " />
                    </figure>
                    <h4 className='loginheading mt-2'>Create a new customer</h4>
                </div>
                <form className='createCustomForm'> 
                    <div className=" verifySelect">
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
                    <div className='emailField'>
                        <label className="form-label amountText m-0">E-mail Address</label>
                        <div className='phoneIcon'>
                            <input className="form-control verifyControl" type="email" placeholder="hello@email.com" />
                            <Image src={Images.mailBox} alt="mailbox image" className="img-fluid lockImg" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label className="form-label amountText m-0">First Name</label>
                            <input className="form-control nameControl" type="email" placeholder="First Name" />
                        </div>
                        <div className='col-lg-6'>
                            <label className="form-label amountText m-0">Last Name</label>
                            <input className="form-control nameControl" type="email" placeholder="Lastname" />
                        </div>
                    </div>
                    <div className='addCustomerBtn mt-4'>
                        <button className='serviceCancel ' type='submit'>
                            Cancel
                        </button>
                        <button className='nextverifyBtn ' type='submit' onClick={() => { handleUserProfile("customerFound") }}>
                            Add Costumer
                            <Image src={Images.plusRound} alt="rightArrow" className="img-fluid rightImg" />
                        </button>
                    </div>
                </form>
            </div>
            <CustomModal
                key={key}
                show={modalDetail.show}
                backdrop="static"
                showCloseBtn={false}
                isRightSideModal={true}
                mediumWidth={false}
                className={modalDetail.flag === "customerFound" ? "commonWidth customContent" : ""}
                ids={modalDetail.flag === "customerFound" ? "customerFoundModal" : ""}
                child={
                    modalDetail.flag === "customerFound" ? (
                        <CustomerFound
                            close={() => handleOnCloseModal()}
                        />
                    ) :
                        ""
                }
                header=
                
                {modalDetail.flag === "customerFound" ?
                    <>
                            <div onClick={handleOnCloseModal} className='modal_cancel'>
                                <Image src={Images.modalCross} alt="modalCross" className="img-fluid" />
                            </div>
                    </>
                    :
                    ''
                }
                onCloseModal={() => handleOnCloseModal()}
            />
        </>
    )
}

export default CreateCustomerModal