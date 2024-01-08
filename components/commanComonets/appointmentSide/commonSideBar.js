import React, { useState } from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Link from 'next/link';



const CommonSideBar = () => {
    const [filterShow, setFilterShow] = useState(false)
    const [key, setKey] = useState(Math.random());
    const [modalDetail, setModalDetail] = useState({
        show: false,
        title: "",
        flag: "",
    });
    const handleOnCloseModal = () => {
        setModalDetail({
            show: false,
            title: "",
            flag: "",
        });
        setKey(Math.random());
    };
    return (
        <>

            <div className='sidebarRightBooking'>
                <ListGroup>
                    <ListGroupItem className="SidebarRightItems">
                        <Link className="sideBarUser" href="#"> <Image src={Images.backArrow} alt="image" className="img-fluid arrowBack sidebarIcons  " />
                        </Link>

                    </ListGroupItem>
                    <ListGroupItem className="SidebarRightItems active " onClick={() => setFilterShow(prev => !prev)}>
                        <div className='sidebarBack'>
                            <Image src={Images.calendarSmall} alt="image" className="img-fluid  sideBarImg" />
                            <span className='bottomDots'>1</span>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem className="SidebarRightItems mt-2">
                        <Image src={Images.userImages} alt="image" className="img-fluid  sidebarIcons" />
                        <span className='bottomdot'>3</span>
                    </ListGroupItem>
                    <ListGroupItem className="SidebarRightItems mt-2">
                        <Image src={Images.userAvtar} alt="image" className="img-fluid   sidebarIcons" />
                        <span className='bottomdot'>3</span>
                    </ListGroupItem>
                    <ListGroupItem className="SidebarRightItems mt-2">
                        <Image src={Images.userImages} alt="image" className="img-fluid   sidebarIcons " />
                        <span className='bottomdot'>3</span>
                    </ListGroupItem>
                    <ListGroupItem className="SidebarRightItems mt-2">
                        <Image src={Images.userImages} alt="image" className="img-fluid   sidebarIcons " />
                        <span className='bottomdot'>3</span>
                    </ListGroupItem>
                    <ListGroupItem className="SidebarRightItems mt-2">
                        <Image src={Images.userImages} alt="image" className="img-fluid   sidebarIcons " />
                        <span className='bottomdot'>3</span>
                    </ListGroupItem>
                    <ListGroupItem className="SidebarRightItems mt-2">
                        <Image src={Images.userImages} alt="image" className="img-fluid   sidebarIcons " />
                        <span className='bottomdot'>3</span>
                    </ListGroupItem>

                    <ListGroupItem className="SidebarRightItems mt-2">
                        <Image src={Images.userImages} alt="image" className="img-fluid   sidebarIcons " />
                        <span className='bottomdot'>3</span>
                    </ListGroupItem>

                    <ListGroupItem className="SidebarRightItems mt-2">
                        <Image src={Images.userImages} alt="image" className="img-fluid   sidebarIcons " />
                        <span className='bottomdot'>3</span>
                    </ListGroupItem>


                    <ListGroupItem className="SidebarRightItems">
                        <div className='userSideBar'>
                            <Link className='userBook' href="#">
                                <Image src={Images.usersImages} alt="image" className="img-fluid userImage  sidebarIcons  " />
                                <span className='bottomdot'>8</span>
                            </Link>
                        </div>
                        <Image src={Images.settingBlue} alt="image" className="img-fluid  sidebarIcons  settingImgs" />
                    </ListGroupItem>
                </ListGroup>
            </div>
            {
                filterShow ?
                    <div className='addBucket AddtoCart'>
                        <div className='bucket_'>
                            <div className='addBucketInfo'>
                                <Image src={Images.calendarDark} alt="calendar" className="img-fluid" />
                                <span className='countNumber'>2</span>
                                <span className='fontEighteen ms-2'> Requests</span>
                            </div>
                            <Image src={Images.crossBlue} alt="crossBlue" className="img-fluid  text-end" />
                        </div>
                        <div className='checkinDetails'>
                            <div className='checkUser'>
                                <div className='userCheckin unpaidDetails'>
                                    <h6 className='userText'>Customer:</h6>
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
                                <div className='userCheckin  mt-4'>
                                    <h6 className='textSmall fw-600'>Services requested:</h6>
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
                                                10 - 11 hrs (1:00 hrs)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='borderDashed'></div>
                                <div className='serviceAmount mt-4 mb-2'>
                                    <h6 className='textSmall fw-700'>Total</h6>
                                    <h6 className='textSmall fw-700'>$254.60</h6>
                               
                                <div className='CustomerBtn'>
                                    <button className='declineBtn'>Decline</button>
                                    <div className='confirmbtn'>Confirm
                                    <Image src={Images.ArrowRight} alt="greenRight" className="img-fluid " />
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <></>
            }
        </>
    )
}

export default CommonSideBar