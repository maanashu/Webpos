import React from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Link from 'next/link';



const CommonSideBar = () => {
    return (
        <>

            <div className='sidebarRightBooking'>
                <ListGroup>
                    <ListGroupItem className="SidebarRightItems">
                        <Link className="sideBarUser" href="#"> <Image src={Images.backArrow} alt="image" className="img-fluid arrowBack sidebarIcons  " />
                        </Link>

                    </ListGroupItem>
                    <ListGroupItem className="SidebarRightItems active">
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

        </>
    )
}

export default CommonSideBar