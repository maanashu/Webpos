import React, { useState } from 'react'
import * as Images from "../../../utilities/images";
import Image from "next/image";
import Link from 'next/link';
// import CustomModal from '../../../customModal/CustomModal';
import CustomModal from '../../customModal/CustomModal';
import CreateCustomerModal from './createCustomerModal';

const AddCustomerModal = () => {
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
    return (
        <>
            <div className='addCustomerSection'>
                <form className='addCustomerForm'>
                    <div className='customerControl'>
                        <input className="form-control customerInput" type="number" placeholder="+1 392 990 0200" />
                        <Image src={Images.SearchIcon} alt="SearchImageIcon" className="img-fluid addSearch" />
                    </div>
                    <Link className='customerLink w-100' href='#' onClick={() => {handleUserProfile("createCustomer")}}>Create new costumer</Link>
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
            <CustomModal
                key={key}
                show={modalDetail.show}
                backdrop="static"
                showCloseBtn={false}
                isRightSideModal={true}
                mediumWidth={false}
                className={modalDetail.flag === "createCustomer" ? "commonWidth customContent" : ""}
                ids={modalDetail.flag === "createCustomer" ? "createCustomerModal" : ""}
                child={
                    modalDetail.flag === "createCustomer" ? (
                        <CreateCustomerModal
                            close={() => handleOnCloseModal()}
                        />
                    ) :
                        ""
                }
                header=
                
                {modalDetail.flag === "createCustomer" ?
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

export default AddCustomerModal