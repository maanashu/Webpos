import { useEffect, useState } from "react"
import Link from "next/link";
import * as Images from "../utilities/images";
import Image from "next/image";


const Footer = (props) => {
    return (
        <>
        <footer className="footer mt-auto  pt-0">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className="customFooter">
                            <div className="row">
                            <div className="col-md-3">
                                <Link href="/">
                                <Image src={Images.logo} alt="img"/>
                                </Link>
                                <ul className="mt-2">
                                    <li>
                                    <Link href="#" className="subHeading16"> About </Link>
                                    </li>
                                    <li>
                                    <Link href="#" className="subHeading16"> Press & Media </Link>
                                    </li>
                                    <li>
                                    <Link href="#" className="subHeading16"> Partners </Link>
                                    </li>
                                    <li>
                                    <Link href="/web/termsCondition" className="subHeading16"> Terms & Conditions </Link>
                                    </li>
                                    <li>
                                    <Link href="#" className="subHeading16"> Privacy Policy </Link>
                                    </li>
                                
                                </ul>
                                <h6 className="heading20 my-3">Contact</h6>
                                <ul className="mt-2">
                                    <li className="subHeading16">
                                    Sales Support: +1 900 457 34889 
                                    </li>
                                    <li className="subHeading16">
                                    Customer Support: +1 900 457 34889
                                    </li>
                                    <li className="subHeading16">
                                    All Right Reserve @ JOBR LLC 
                                    </li>
                                </ul>
                                </div>
                                <div className="col-md-3">
                                <h6 className="heading20">Solution</h6>
                                <ul className="mt-2">
                                    <li>
                                    <Link href="/web/pos" className="subHeading16"> JOBR POS </Link>
                                    </li>
                                    <li>
                                    <Link href="/web/b2b" className="subHeading16"> JOBR B2B </Link>
                                    </li>
                                    <li>
                                    <Link href="/web/b2c" className="subHeading16"> JOBR B2C </Link>
                                    </li>
                                    <li>
                                    <Link href="/web/wallet" className="subHeading16"> JOBR Wallet </Link>
                                    </li>
                                    <li>
                                    <Link href="/web/driver" className="subHeading16"> JOBR Driver </Link>
                                    </li>
                                </ul>
                                </div>
                                <div className="col-md-3">
                                <h6 className="heading20">Business type</h6>
                                <ul className="mt-2">
                                    {/* {/* <li>
                                    <Link href="#" className="subHeading16">  Food & Beverage </Link>
                                    </li>
                                    <li>
                                    <Link href="#" className="subHeading16"> Quick Service </Link>
                                    </li>
                                    <li>
                                    <Link href="#" className="subHeading16"> Full Service </Link>
                                    </li>
                                    <li>
                                    <Link href="#" className="subHeading16"> Fast Casual </Link>
                                    </li>
                                    <li>
                                    <Link href="#" className="subHeading16"> Bars & Breweries </Link>
                                    </li> */}
                                    <li> 
                                    <Link href="/web/retailBusiness" className="subHeading16"> Retail </Link>
                                    </li>
                                    <li>
                                    <Link href="/web/manufacturer" className="subHeading16"> Manufacturer  </Link>
                                    </li>
                                    <li>
                                    <Link href="#" className="subHeading16"> Wholesale </Link>
                                    </li>
                                    <li>
                                    <Link href="#" className="subHeading16"> Online Business </Link>
                                    </li>
                                    {/* <li>
                                    <Link href="#" className="subHeading16"> Health & Fitness </Link>
                                    </li>
                                    <li>
                                    <Link href="#" className="subHeading16"> Professional Services </Link>
                                    </li>
                                    <li>
                                    <Link href="#" className="subHeading16"> Home & Repair </Link>
                                    </li>
                                    <li>
                                    <Link href="#" className="subHeading16"> Large Businesses</Link>
                                    </li> */}
                                </ul>
                                </div>
                                <div className="col-md-3">
                                
                                    
                                    <h6 className="heading20">Resources</h6>
                                    <ul className="mt-2">
                                    <li>
                                        <Link href="/web/pricing" className="subHeading16">
                                        Pricing </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="subHeading16">
                                        Why JOBR? </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="subHeading16">
                                        Users testimonials </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="subHeading16">
                                        Sales Support track </Link>
                                    </li>
                                    </ul>
                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )

}

export default Footer;