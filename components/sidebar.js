import React, { useState } from 'react'
import Link from 'next/link'
import * as Images from "../utilities/images";
import Image from "next/image";
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Sidebar = (props) => {
    const [activeSidebar, setActiveSidebar] = useState(true)
    props?.sidebarToggle(activeSidebar)
    return (
        <div className={`main-sidebar ${activeSidebar ? 'hide' : 'full'}`} id="myNav">
            <div className='sidebarAuth sidebarMain'>
                <Image src={Images.SideLogo} alt="image" className="img-fluid SideLogo" />
                <Image src={Images.Logo} alt="image" className="img-fluid Logo" />
                <div onClick={() => setActiveSidebar(prev => !prev)} className='ToggleIcon'>
                    <Image src={Images.sideToggle} alt="image" className="img-fluid sideToggle" />
                </div>
            </div>
            <div className='userDetails'>
                <figure>
                    <Image src={Images.LoginSecond} alt="image" className="img-fluid sidebarProfile" />
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
                            <Image src={Images.ProductsServices} alt="image" className="img-fluid showImg" />
                            {/* <Image src={Images.ProductsServices} alt="image" className="img-fluid showImg" /> */}
                            <span className='sidebarTxt'>Products & Services</span>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="sidebarItems" >
                        <Link href="/dashboard" className="sidebarLinks" >
                            <Image src={Images.DeliveryOrders} alt="image" className="img-fluid showImg" />
                            <span className='sidebarTxt'>Delivery  Orders</span>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="sidebarItems" >
                        <Link href="/dashboard" className="sidebarLinks" >
                            <Image src={Images.ShippingOrders} alt="image" className="img-fluid showImg" />
                            <span className='sidebarTxt'>Shipping Orders</span>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="sidebarItems" >
                        <Link href="/dashboard" className="sidebarLinks" >
                            <Image src={Images.Appointments} alt="image" className="img-fluid showImg" />
                            <span className='sidebarTxt'>Appointments</span>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="sidebarItems" >
                        <Link href="/dashboard" className="sidebarLinks" >
                            <Image src={Images.Analytics} alt="image" className="img-fluid showImg" />
                            <span className='sidebarTxt'>Analytics</span>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="sidebarItems" >
                        <Link href="/dashboard" className="sidebarLinks" >
                            <Image src={Images.Wallets} alt="image" className="img-fluid showImg" />
                            <span className='sidebarTxt'>Wallets</span>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="sidebarItems" >
                        <Link href="/dashboard" className="sidebarLinks" >
                            <Image src={Images.CashDrawer} alt="image" className="img-fluid showImg" />
                            <span className='sidebarTxt'>Cash Drawer</span>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="sidebarItems" >
                        <Link href="/dashboard" className="sidebarLinks" >
                            <Image src={Images.Customer} alt="image" className="img-fluid showImg" />
                            <span className='sidebarTxt'>Customer</span>
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="sidebarItems" >
                        <Link href="/dashboard" className="sidebarLinks" >
                            <Image src={Images.Rewards} alt="image" className="img-fluid showImg" />
                            <span className='sidebarTxt'>Rewards</span>

                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className="sidebarItems" >
                        <Link href="/dashboard" className="sidebarLinks" >
                            <Image src={Images.Settings} alt="image" className="img-fluid showImg" />
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
                {/* <div className='sidbarfixedMenus '>
                    <ListGroupItem className="sidebarItems" onClick={() => { userLogout() }}>
                        <Link href="#" className="sidebarLinks" onClick={() => setActiveData("power")}>
                        <Image src={Images.LogOut} alt="image" className="img-fluid showImg" />
                        <span className='sidebarTxt'>LogOut</span>
                             <Image src={props?.auth?.userProfile?.user_profiles?.pos_role === null ? power : 'LogOut'} className="img-fluid" alt="" />
                        </Link>
                    </ListGroupItem>
                </div> */}
                <div className='sidbarfixedMenus '>
                    <ListGroupItem>
                        <Link href="" className="sidebarLinks" >
                            <button className='logOut'>
                                <Image src={Images.LogOut} alt="image" className="img-fluid showImg" />
                                <span className='sidebarTxt'>LogOut</span>
                            </button>
                        </Link>
                    </ListGroupItem>
                </div>
            </ListGroup>

        </div>
    )
}

export default Sidebar