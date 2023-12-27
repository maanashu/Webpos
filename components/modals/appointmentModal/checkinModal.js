import React, { useState } from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";
import CustomModal from '../../customModal/CustomModal';
import CheckedInModal from '../../../components/modals/appointmentModal/checkedInModal'

const CheckinModal = () => {
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
            <div className='checkService_'>
                <div className='checkinDetails'>
                    <div className='checkUser'>
                        <div className='userCheckin'>
                            <h6 className='textSmall'>Customer</h6>
                            <span className='textSmall mt-4'>Unpaid</span>
                        </div>

                        <div className='customerCheck d-flex mt-2'>
                            <figure className=''>
                                <Image src={Images.userImages} alt="customerImg" className="img-fluid me-2" />
                            </figure>
                            <div className=''>
                                <span className='innerHeading'>
                                    Samara Schwansteiger
                                </span>
                                <div className=''>
                                    <Image src={Images.locatePurple} alt="locate" className="locate me-2" />
                                    <span className='purpleText'>Miami, FL</span>
                                </div>
                            </div>
                        </div>
                        <div className='userCheckin mt-4'>
                            <h6 className='textSmall fw-600'>Service Time:</h6>
                            <div className='userService'>
                                <span className='subHeadText me-2'>Haircut</span>
                                <span className='subHeadText'>Pet Bathing</span>
                            </div>
                        </div>
                        <div className='ServiceText mt-4 mb-4'>
                            <h6 className='textSmall'>Service Time</h6>
                            <div className='d-flex mt-3'>
                                <div className='serviceDate'>
                                    <Image src={Images.calendarDark} alt="calendarImg" className="calendaerImg me-2" />
                                    <span className='purpleText fw-600'>
                                        Sunday, 29/10/2023
                                    </span>
                                </div>
                                <div className='serviceDate'>
                                    <Image src={Images.timeImg} alt="timeIcon" className="timeImage me-2" />
                                    <span className='purpleText fw-600'>
                                        Sunday, 29/10/2023
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='borderDashed'></div>
                        <div className='serviceAmount mt-4 mb-2'>
                            <h6 className='textSmall fw-700'>Total</h6>
                            <h6 className='textSmall fw-700'>$254.60</h6>
                        </div>
                    </div>

                </div>
                <div className='CustomerBtn mt-4'>
                    <button className='declineBtn' type='submit'>
                        Decline
                    </button>
                    <button className='confirmbtn' type='submit' onClick={() => {
                        handleUserProfile("checkedIn")
                    }}>
                        Confirm
                        <Image src={Images.ArrowRight} alt="greenRight" className="img-fluid " />
                    </button>
                </div>
            </div>
            <CustomModal
                key={key}
                show={modalDetail.show}
                backdrop="static"
                showCloseBtn={false}
                isRightSideModal={true}
                mediumWidth={false}
                className={modalDetail.flag === "checkedIn" ? "commonWidth customContent" : ""}
                ids={modalDetail.flag === "checkedIn" ? "checkedIn" : ""}
                child={
                    modalDetail.flag === "checkedIn" ? (
                        <CheckedInModal
                            close={() => handleOnCloseModal()}
                        />
                    ) :
                        ""
                }
                header=
                {modalDetail.flag === "checkedIn" ?
                    <>
                        <div className='trackingSub headerModal '>
                            <figure className='profileImage '>
                                <Image src={Images.checkinSky} alt="check" className="img-fluid " />
                            </figure>
                            <h4 className='loginheading mt-2'>Check In</h4>
                            <h4 className='trackingHeading'>Confirm the details of your appointment.</h4>
                            <p onClick={handleOnCloseModal} className='crossModal'>
                                <Image src={Images.modalCross} alt="modalCross" className="img-fluid" />
                            </p>
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

export default CheckinModal