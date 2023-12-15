import React from 'react'
import * as Images from "../../utilities/images"
import Image from "next/image";

import CommonSideBar from '../../components/commanComonets/appointmentSide/commonSideBar';
const Booking = () => {
    return (
        <div className='commonFlex'>
            <div className='commanOuter mainBooking'>
                <div className='bookingNavBar'>
                    <div className='booking'>
                        <div className='d-flex'>
                            <figure className='book'>
                                <Image src={Images.bookImg} alt="" className="img-fluid bookiImg me-2 " />
                            </figure>
                            <h6 className='fontEighteen  me-4'>Bookings</h6>
                        </div>

                        <div className='appointmenMonth bookingCall'>
                            <div className='monthCalendar'>
                                <Image src={Images.calendarBlue} alt='calendarimage' className='img-fluid' />
                                <span className='monthText ms-2'>October 2023</span>
                                <Image src={Images.arrowDown} alt='calendarimage' className='img-fluid ms-5' />
                            </div>
                        </div>
                    </div>
                    <div className='bookingRight d-flex align-items-center'>
                        <Image src={Images.notification} alt='noti' className='img-fluid  me-3' />
                        <div className='seacrhBox me-3'>
                            <Image src={Images.SearchIcon} alt='blueSearch' className='img-fluid  blueSearch me-2' />
                            <div class="bookingsearchBar">
                                <input type="text" class="form-control searchControlbook" placeholder="" />
                            </div>
                        </div>

                        <div className='appointmenMonth bgBooking me-3'>
                            <div className='monthCalendar bgCalendar'>
                                <Image src={Images.calendarDark} alt='calendardark' className='img-fluid' />
                                <span className='monthText ms-2'>Calendar View</span>
                            </div>
                        </div>
                        <button className='listBtn me-3'> <Image src={Images.listImg} alt='listIMAGES' className='img-fluid me-2 ' />List View</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='customTab'>
                            fdbfhdbv
                        </div>
                    </div>
                </div>
            </div>
            <CommonSideBar/>
        </div>
    )
}

export default Booking