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
                        <Image src={Images.backArrow} alt="image" className="img-fluid sidebarIcons  " />
                        <span className='redUser'></span>
                    </ListGroupItem>
                    <ListGroupItem className="SidebarRightItems callendarbg">
                        <Image src={Images.calendarSmall} alt="image" className="img-fluid  sidebarIcons siderBarbg " />

                    </ListGroupItem>
                    <ListGroupItem className="SidebarRightItems">
                        <Image src={Images.userImages} alt="image" className="img-fluid  sidebarIcons" />
                        <span className='bottomdot'>3</span>
                    </ListGroupItem>
                    <ListGroupItem className="SidebarRightItems">
                        <Image src={Images.userAvtar} alt="image" className="img-fluid   sidebarIcons" />
                        <span className='bottomdot'>3</span>
                    </ListGroupItem>
                    <ListGroupItem className="SidebarRightItems">
                        <Image src={Images.userImages} alt="image" className="img-fluid   sidebarIcons " />
                        <span className='bottomdot'>3</span>
                    </ListGroupItem>
                    <ListGroupItem className="SidebarRightItems">
                        <Image src={Images.userImages} alt="image" className="img-fluid   sidebarIcons " />
                        <span className='bottomdot'>3</span>
                    </ListGroupItem>
                    <ListGroupItem className="SidebarRightItems">
                        <Image src={Images.userImages} alt="image" className="img-fluid   sidebarIcons " />
                        <span className='bottomdot'>3</span>
                    </ListGroupItem>
                    <ListGroupItem className="SidebarRightItems">
                        <Image src={Images.userImages} alt="image" className="img-fluid   sidebarIcons " />
                        <span className='bottomdot'>3</span>
                    </ListGroupItem>

                    <ListGroupItem className="SidebarRightItems">
                        <Image src={Images.userImages} alt="image" className="img-fluid   sidebarIcons " />
                        <span className='bottomdot'>3</span>
                    </ListGroupItem>
                    <ListGroupItem className="SidebarRightItems">
                        <Image src={Images.usersImages} alt="image" className="img-fluid   sidebarIcons " />
                        <span className='bottomdot'>3</span>
                    </ListGroupItem>

                    <ListGroupItem className="SidebarRightItems">
                        <Image src={Images.settingBlue} alt="image" className="img-fluid  sidebarIcons  settingImgs" />

                    </ListGroupItem>
                </ListGroup>
            </div>

        </>
    )
}

export default CommonSideBar