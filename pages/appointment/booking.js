import React from 'react'
import * as Images from "../../utilities/images"
import Image from "next/image";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Link from 'next/link';

import CommonSideBar from '../../components/commanComonets/appointmentSide/commonSideBar';
const Booking = () => {
    return (
        <>
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
                        <div className='col-lg-12'>

                            <ListGroup className='navtabs'>
                                <ListGroupItem className="tabsappointment"><Link className="navLink active" href="aboutUs">01</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">02</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">03</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">04</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">05</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">06</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">07</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">08</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">09</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">10</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">11</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">12</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">13</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">14</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">15</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">16</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">17</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">18</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">19</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">20</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">21</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">21</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">23</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">24</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">25</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">26</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">27</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">28</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">29</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">30</Link>
                                </ListGroupItem>
                                <ListGroupItem className="tabsappointment"><Link className="navLink" href="aboutUs">31</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                        <div className='col-md-12'>
                            <div className='bookingDay'>
                                <h5 className='totalrefundAmount'>Monday <span className='fontEighteen'>12th </span></h5>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="table-responsive">
                                <table id="bookingTable " className="bookingTable ">
                                    <thead>
                                        <tr>
                                            <th className="recent_head">Client</th>
                                            <th className="recent_head">Staff</th>
                                            <th className="recent_head">Service</th>
                                            <th className="recent_head">Time</th>
                                            <th className="recent_head"></th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="activities_user">
                                            <td className="recent_subhead">
                                                <div className='d-flex'>
                                                    <figure className=''>
                                                        <Image src={Images.userAvtar} alt="avtar" className="avtarImg me-2" />
                                                    </figure>
                                                    <div className=''>
                                                        <span className='subHeadText' >Elena Sergeyevna</span>
                                                        <div>
                                                            <Image src={Images.locatePurple} alt="locate" className="locate me-2" />
                                                            <span className='purpleText'>Kiev, Ukraine</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="recent_subhead">
                                                <span className="subHeadText">Marianne Müller</span>
                                            </td>

                                            <td className='recent_subhead'>
                                                <span className='subHeadText'>Haircut</span>
                                            </td>
                                            <td className="recent_subhead">
                                                <Image src={Images.clockImg} alt="clock" className="clockImg me-2" />
                                                <span className='subHeadText'>10:00 - 11:00 am</span>
                                            </td>

                                            <td className="recent_subhead">
                                                <div className='checkinBg'>
                                                    <div className='checkinBox'>
                                                        <span className='textSmall me-2'>Check-in</span>
                                                        <Image src={Images.checkImg} alt="money" className="moneyImg" />
                                                    </div>
                                                    <button className='editBtn me-2'>
                                                        <Image src={Images.editImg} alt="editImg" className="editImg" />
                                                    </button>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr className="activities_user">
                                            <td className="recent_subhead">
                                                <div className='d-flex'>
                                                    <figure className=''>
                                                        <Image src={Images.userAvtar} alt="avtar" className="avtarImg me-2" />
                                                    </figure>
                                                    <div className=''>
                                                        <span className='subHeadText' >Elena Sergeyevna</span>
                                                        <div>
                                                            <Image src={Images.locatePurple} alt="locate" className="locate me-2" />
                                                            <span className='purpleText'>Kiev, Ukraine</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="recent_subhead">
                                                <span className="subHeadText">Marianne Müller</span>
                                            </td>

                                            <td className='recent_subhead'>
                                                <span className='subHeadText'>Haircut</span>
                                            </td>
                                            <td className="recent_subhead">
                                                <Image src={Images.clockImg} alt="clock" className="clockImg me-2" />
                                                <span className='subHeadText'>10:00 - 11:00 am</span>
                                            </td>

                                            <td className="recent_subhead">
                                                <div className='checkinBg'>
                                                    <div className='checkinBox'>
                                                        <span className='textSmall me-2'>Check-in</span>
                                                        <Image src={Images.checkImg} alt="money" className="moneyImg" />
                                                    </div>
                                                    <button className='editBtn me-2'>
                                                        <Image src={Images.editImg} alt="editImg" className="editImg" />
                                                    </button>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr className="activities_user">
                                            <td className="recent_subhead">
                                                <div className='d-flex'>
                                                    <figure className=''>
                                                        <Image src={Images.userAvtar} alt="avtar" className="avtarImg me-2" />
                                                    </figure>
                                                    <div className=''>
                                                        <span className='subHeadText' >Elena Sergeyevna</span>
                                                        <div>
                                                            <Image src={Images.locatePurple} alt="locate" className="locate me-2" />
                                                            <span className='purpleText'>Kiev, Ukraine</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="recent_subhead">
                                                <span className="subHeadText">Marianne Müller</span>
                                            </td>

                                            <td className='recent_subhead'>
                                                <span className='subHeadText'>Haircut</span>
                                            </td>
                                            <td className="recent_subhead">
                                                <Image src={Images.clockImg} alt="clock" className="clockImg me-2" />
                                                <span className='subHeadText'>10:00 - 11:00 am</span>
                                            </td>

                                            <td className="recent_subhead">
                                                <div className='checkinBg'>
                                                    <div className='checkinBox'>
                                                        <span className='textSmall me-2'>Check-in</span>
                                                        <Image src={Images.checkImg} alt="money" className="moneyImg" />
                                                    </div>
                                                    <button className='editBtn me-2'>
                                                        <Image src={Images.editImg} alt="editImg" className="editImg" />
                                                    </button>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr className="activities_user">
                                            <td className="recent_subhead">
                                                <div className='d-flex'>
                                                    <figure className=''>
                                                        <Image src={Images.userAvtar} alt="avtar" className="avtarImg me-2" />
                                                    </figure>
                                                    <div className=''>
                                                        <span className='subHeadText' >Elena Sergeyevna</span>
                                                        <div>
                                                            <Image src={Images.locatePurple} alt="locate" className="locate me-2" />
                                                            <span className='purpleText'>Kiev, Ukraine</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="recent_subhead">
                                                <span className="subHeadText">Marianne Müller</span>
                                            </td>

                                            <td className='recent_subhead'>
                                                <span className='subHeadText'>Haircut</span>
                                            </td>
                                            <td className="recent_subhead">
                                                <Image src={Images.clockImg} alt="clock" className="clockImg me-2" />
                                                <span className='subHeadText'>10:00 - 11:00 am</span>
                                            </td>

                                            <td className="recent_subhead">
                                                <div className='checkinBg'>
                                                    <div className='checkinBox'>
                                                        <span className='textSmall me-2'>Check-in</span>
                                                        <Image src={Images.checkImg} alt="money" className="moneyImg" />
                                                    </div>
                                                    <button className='editBtn me-2'>
                                                        <Image src={Images.editImg} alt="editImg" className="editImg" />
                                                    </button>
                                                </div>
                                            </td>

                                        </tr>
                                          <tr className="activities_user">
                                            <td className="recent_subhead">
                                                <div className='d-flex'>
                                                    <figure className=''>
                                                        <Image src={Images.userAvtar} alt="avtar" className="avtarImg me-2" />
                                                    </figure>
                                                    <div className=''>
                                                        <span className='subHeadText' >Elena Sergeyevna</span>
                                                        <div>
                                                            <Image src={Images.locatePurple} alt="locate" className="locate me-2" />
                                                            <span className='purpleText'>Kiev, Ukraine</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="recent_subhead">
                                                <span className="subHeadText">Marianne Müller</span>
                                            </td>

                                            <td className='recent_subhead'>
                                                <span className='subHeadText'>Haircut</span>
                                            </td>
                                            <td className="recent_subhead">
                                                <Image src={Images.clockImg} alt="clock" className="clockImg me-2" />
                                                <span className='subHeadText'>10:00 - 11:00 am</span>
                                            </td>

                                            <td className="recent_subhead">
                                                <div className='checkinBg'>
                                                    <div className='checkinBox'>
                                                        <span className='textSmall me-2'>Check-in</span>
                                                        <Image src={Images.checkImg} alt="money" className="moneyImg" />
                                                    </div>
                                                    <button className='editBtn me-2'>
                                                        <Image src={Images.editImg} alt="editImg" className="editImg" />
                                                    </button>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr className="activities_user">
                                            <td className="recent_subhead">
                                                <div className='d-flex'>
                                                    <figure className=''>
                                                        <Image src={Images.userAvtar} alt="avtar" className="avtarImg me-2" />
                                                    </figure>
                                                    <div className=''>
                                                        <span className='subHeadText' >Elena Sergeyevna</span>
                                                        <div>
                                                            <Image src={Images.locatePurple} alt="locate" className="locate me-2" />
                                                            <span className='purpleText'>Kiev, Ukraine</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="recent_subhead">
                                                <span className="subHeadText">Marianne Müller</span>
                                            </td>

                                            <td className='recent_subhead'>
                                                <span className='subHeadText'>Haircut</span>
                                            </td>
                                            <td className="recent_subhead">
                                                <Image src={Images.clockImg} alt="clock" className="clockImg me-2" />
                                                <span className='subHeadText'>10:00 - 11:00 am</span>
                                            </td>

                                            <td className="recent_subhead">
                                                <div className='checkinBg'>
                                                    <div className='completed'>
                                                        <span className='textSmall me-2'>Completed</span>
                                                        <Image src={Images.complete} alt="complete" className="completeimg" />
                                                    </div>
                                                    
                                                </div>
                                            </td>

                                        </tr>
                                      
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <CommonSideBar />
            </div>
        </>
    )
}

export default Booking