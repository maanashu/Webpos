import React, { useState } from 'react'
import Link from 'next/link'
import * as Images from "../../utilities/images";
import Image from "next/image";

const Sidebar = () => {

    return (
        <div className='main-sidebar' id="myNav">
            <div className='sidebarAuth sidebarMain'>
                <Image src={Images.SideLogo} alt="image" className="img-fluid"/>
            </div>
            {/* <Link href="/retailHome" className="brandLogo" >
                <Image src={Images.BrandLogo} alt="image" className="footerLogo" />
            </Link>
            <Link href="#" className="closebtn" ><i className="las la-times"></i></Link> */}

            {/* <ul className="sidebarMenus navbar_overlay_content_">
                <div className='sidebarStaticMenus'>
                    <li className= "sidebarItems active" >
                        <Link href="/dashboard" className="sidebarLinks" >
                            <Image src={Images.Addsquarelight} className="img-fluid showImg" alt="" />
                            <Image src={Images.AddsquarelightDark} className="img-fluid hoverImg active" alt="" />
                        </Link>
                    </li>
                    <li className= "sidebarItems">
                        <Link href="/delivery" className="sidebarLinks" >
                            <Image src={Images.deliveryOrder} className="img-fluid showImg" alt="" />
                            <Image src={Images.deliveryOrderDark} className="img-fluid hoverImg" alt="" />
                        </Link>
                    </li>
                    <li className="sidebarItems">
                        <Link href="/shipping" className="sidebarLinks">
                            <Image src={Images.shippingOrder} className="img-fluid showImg" alt="" />
                            <Image src={Images.shippingOrderDark} className="img-fluid hoverImg" alt="" />
                        </Link>
                    </li>
                    <li className="sidebarItems">
                        <Link href="/calender" className="sidebarLinks" >
                            <Image src={Images.calendar} className="img-fluid showImg" alt="" />
                            <Image src={Images.calendars} className="img-fluid hoverImg" alt="" />
                        </Link>
                    </li>
                    <li className="sidebarItems">
                        <Link href="/analytics" className="sidebarLinks" >
                            <Image src={Images.analytics} className="img-fluid showImg" alt="" />
                            <Image src={Images.analyticsDark} className="img-fluid hoverImg" alt="" />
                        </Link>
                    </li>
                    <li className="sidebarItems">
                        <Link href="/wallet" className="sidebarLinks" >
                            <Image src={Images.wallet} className="img-fluid showImg" alt="" />
                            <Image src={Images.walletDark} className="img-fluid hoverImg" alt="" />
                        </Link>
                    </li>
                    <li className="sidebarItems">
                        <Link href="/drawerCash" className="sidebarLinks" >
                            <Image src={Images.tray} className="img-fluid showImg" alt="" />
                            <Image src={Images.trayDark} className="img-fluid hoverImg" alt="" />
                        </Link>
                    </li>
                    <li className="sidebarItems">
                        <Link href="/customers" className="sidebarLinks" >
                            <Image src={Images.customerD} className="img-fluid showImg" alt="" />
                            <Image src={Images.EditCustomer} className="img-fluid hoverImg" alt="" />
                        </Link>
                    </li>
                    <li className="sidebarItems">
                        <Link href="/rewards" className="sidebarLinks" >
                            <Image src={Images.reward} className="img-fluid showImg" alt="" />
                            <Image src={Images.editRewards} className="img-fluid hoverImg" alt="" />
                        </Link>
                    </li>
                    <li className="sidebarItems">
                        <Link href="/settings" className="sidebarLinks" >
                            <Image src={Images.Subtract} className="img-fluid showImg" alt="" />
                            <Image src={Images.Editsetting} className="img-fluid hoverImg" alt="" />
                        </Link>
                    </li>
                </div>
                <div className='sidbarfixedMenus'>
                    <li className="sidebarItems" onClick={() => { userLogout() }}>
                        <Link to="#" className="sidebarLinks" onClick={() => setActiveData("power")}>
                            <Image src={props?.auth?.userProfile?.user_profiles?.pos_role === null ? power : ''} className="img-fluid" alt="" />
                        </Link>
                    </li>
                </div>
            </ul> */}
        </div>
    )
}

export default Sidebar