import React, { useState } from 'react'
import Link from 'next/link'
import * as Images from "../utilities/images";
import Image from "next/image";
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Sidebar = (props) => {
    const [activeSidebar, setActiveSidebar] = useState(true)
    props?.sidebarToggle(activeSidebar)
    return (
        <div className={`main-sidebar ${activeSidebar ? 'full' : 'hide'}`} id="myNav">
            <div className='sidebarAuth sidebarMain'>
                <Image src={Images.SideLogo} alt="image" className="img-fluid" />
                <div onClick={() => setActiveSidebar(prev => !prev)} className='ToggleIcon'>
                    <Image src={Images.SideLogo} alt="image" className="img-fluid" />
                </div>
            </div>
            <div className='userDetails'>
                <figure>
                    <Image src={Images.SideLogo} alt="image" className="img-fluid" />
                </figure>
                <article>
                    <p className='userName'>Eugenia Salas</p>
                    <p className='userPosition'>POS Cashier</p>
                </article>
            </div>
            <ListGroup className="sidebarMenus navbar_overlay_content_">
                <div className='sidebarStaticMenus'>
                    <ListGroupItem className="sidebarItems" >
                        <Link href="/dashboard" className="sidebarLinks active" >
                            <Image src={Images.SideLogo} alt="image" className="img-fluid showImg" />
                            <span className='sidebarTxt'>Products & Services</span>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="sidebarItems" >
                        <Link href="/dashboard" className="sidebarLinks" >
                            <Image src={Images.SideLogo} alt="image" className="img-fluid showImg" />
                            <span className='sidebarTxt'>Delivery  Orders</span>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="sidebarItems" >
                        <Link href="/dashboard" className="sidebarLinks" >
                            <Image src={Images.SideLogo} alt="image" className="img-fluid showImg" />
                            <span className='sidebarTxt'>Shipping Orders</span>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="sidebarItems" >
                        <Link href="/dashboard" className="sidebarLinks" >
                            <Image src={Images.SideLogo} alt="image" className="img-fluid showImg" />
                            <span className='sidebarTxt'>Appointments</span>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="sidebarItems" >
                        <Link href="/dashboard" className="sidebarLinks" >
                            <Image src={Images.SideLogo} alt="image" className="img-fluid showImg" />
                            <span className='sidebarTxt'>Analytics</span>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="sidebarItems" >
                        <Link href="/dashboard" className="sidebarLinks" >
                            <Image src={Images.SideLogo} alt="image" className="img-fluid showImg" />
                            <span className='sidebarTxt'>Wallets</span>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="sidebarItems" >
                        <Link href="/dashboard" className="sidebarLinks" >
                            <Image src={Images.SideLogo} alt="image" className="img-fluid showImg" />
                            <span className='sidebarTxt'>Cash Drawer</span>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="sidebarItems" >
                        <Link href="/dashboard" className="sidebarLinks" >
                            <Image src={Images.SideLogo} alt="image" className="img-fluid showImg" />
                            <span className='sidebarTxt'>Customer</span>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="sidebarItems" >
                        <Link href="/dashboard" className="sidebarLinks" >
                            <Image src={Images.SideLogo} alt="image" className="img-fluid showImg" />
                            <span className='sidebarTxt'>Rewards</span>

                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="sidebarItems" >
                        <Link href="/dashboard" className="sidebarLinks" >
                            <Image src={Images.SideLogo} alt="image" className="img-fluid showImg" />
                            <span className='sidebarTxt'>Settings</span>
                        </Link>
                    </ListGroupItem>
                    {/* <ListGroupItem className="sidebarItems" >
                        <Link href="/dashboard" className="sidebarLinks" >
                            <Image src={Images.Addsquarelight} className="img-fluid showImg" alt="" />
                            <Image src={Images.AddsquarelightDark} className="img-fluid hoverImg active" alt="" />
                            <span className='sidebarTxt'>Settings</span>
                        </Link>
                    </ListGroupItem> */}
                </div>
                <div className='sidbarfixedMenus'>
                    <ListGroupItem className="sidebarItems" onClick={() => { userLogout() }}>
                        <Link href="#" className="sidebarLinks" onClick={() => setActiveData("power")}>
                            <Image src={props?.auth?.userProfile?.user_profiles?.pos_role === null ? power : ''} className="img-fluid" alt="" />
                        </Link>
                    </ListGroupItem>
                </div>

            </ListGroup>

        </div>
    )
}

export default Sidebar