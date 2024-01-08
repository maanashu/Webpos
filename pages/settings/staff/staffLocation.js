import React from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";
import Link from 'next/link';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


const StaffLocation = () => {
    return (
        <>
            <div className='settingMain staffLocationSection'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='deviceLeft settingOuter'>
                            <ListGroup>
                                <ListGroupItem className='settingListMain'>
                                    <Link href="#" className='settingList active'>
                                        <Image src={Images.securityTick} alt="securityTick image" className="SecurityImg" />
                                        <div className='securityHeading'>
                                            <h4 className='settingText'>Security</h4>
                                            <h4 className='settingSub mt-1'>Not Updated</h4>
                                        </div>
                                    </Link>
                                </ListGroupItem>
                                <ListGroupItem className='settingListMain'>
                                    <Link href="#" className='settingList '>
                                        <Image src={Images.settingsDevices} alt="settingsDevices image" className="SecurityImg" />
                                        <div className='securityHeading'>
                                            <h4 className='settingText'>Devices</h4>
                                            <h4 className='settingSub mt-1'>Not Connected</h4>
                                        </div>
                                    </Link>
                                </ListGroupItem>
                                <ListGroupItem className='settingListMain'>
                                    <Link href="#" className='settingList '>
                                        <Image src={Images.ringing} alt="ringing image" className="SecurityImg" />
                                        <div className='securityHeading'>
                                            <h4 className='settingText'>Notifications</h4>
                                            <h4 className='settingSub mt-1'>Not Updated</h4>
                                        </div>
                                    </Link>
                                </ListGroupItem>
                                <ListGroupItem className='settingListMain'>
                                    <Link href="#" className='settingList '>
                                        <Image src={Images.locationOutline} alt="locationOutline image" className="SecurityImg" />
                                        <div className='securityHeading'>
                                            <h4 className='settingText'>Locations</h4>
                                            <h4 className='settingSub mt-1'>1 Locations</h4>
                                        </div>
                                    </Link>
                                </ListGroupItem>
                                <ListGroupItem className='settingListMain'>
                                    <Link href="#" className='settingList '>
                                        <Image src={Images.settingsMoney} alt="settingsMoney image" className="SecurityImg" />
                                        <div className='securityHeading'>
                                            <h4 className='settingText'>Plans</h4>
                                            <h4 className='settingSub mt-1'>Expire on April 2024</h4>
                                        </div>
                                    </Link>
                                </ListGroupItem>
                                <ListGroupItem className='settingListMain'>
                                    <Link href="#" className='settingList '>
                                        <Image src={Images.settingsReceipt} alt="settingsReceipt image" className="SecurityImg" />
                                        <div className='securityHeading'>
                                            <h4 className='settingText'>Receipts</h4>
                                            <h4 className='settingSub mt-1'>Default</h4>
                                        </div>
                                    </Link>
                                </ListGroupItem>
                                <ListGroupItem className='settingListMain'>
                                    <Link href="#" className='settingList '>
                                        <Image src={Images.settingsTax} alt="settingsTax image" className="SecurityImg" />
                                        <div className='securityHeading'>
                                            <h4 className='settingText'>Taxes</h4>
                                            <h4 className='settingSub mt-1'>Not Updated</h4>
                                        </div>
                                    </Link>
                                </ListGroupItem>
                                <ListGroupItem className='settingListMain'>
                                    <Link href="#" className='settingList '>
                                        <Image src={Images.walletOutline} alt="walletOutline image" className="SecurityImg" />
                                        <div className='securityHeading'>
                                            <h4 className='settingText'>Wallet</h4>
                                            <h4 className='settingSub mt-1'>Not Connected</h4>
                                        </div>
                                    </Link>
                                </ListGroupItem>
                                <ListGroupItem className='settingListMain'>
                                    <Link href="#" className='settingList '>
                                        <Image src={Images.settingsBoxes} alt="settingsBoxes image" className="SecurityImg" />
                                        <div className='securityHeading'>
                                            <h4 className='settingText'>Shipping & Pick Up</h4>
                                            <h4 className='settingSub mt-1'>Default</h4>
                                        </div>
                                    </Link>
                                </ListGroupItem>
                                <ListGroupItem className='settingListMain'>
                                    <Link href="#" className='settingList '>
                                        <Image src={Images.usersOutline} alt="usersOutline image" className="SecurityImg" />
                                        <div className='securityHeading'>
                                            <h4 className='settingText'>Staff</h4>
                                            <h4 className='settingSub mt-1'>3</h4>
                                        </div>
                                    </Link>
                                </ListGroupItem>
                                <ListGroupItem className='settingListMain'>
                                    <Link href="#" className='settingList '>
                                        <Image src={Images.settingsLanguage} alt="settingsLanguage image" className="SecurityImg" />
                                        <div className='securityHeading'>
                                            <h4 className='settingText'>Language</h4>
                                            <h4 className='settingSub mt-1'>English</h4>
                                        </div>
                                    </Link>
                                </ListGroupItem>
                                <ListGroupItem className='settingListMain'>
                                    <Link href="#" className='settingList '>
                                        <Image src={Images.settingsLaw} alt="settingsLaw image" className="SecurityImg" />
                                        <div className='securityHeading'>
                                            <h4 className='settingText'>Legal</h4>
                                            <h4 className='settingSub mt-1'>English</h4>
                                        </div>
                                    </Link>
                                </ListGroupItem>
                                <ListGroupItem className='settingListMain'>
                                    <Link href="#" className='settingList '>
                                        <Image src={Images.settingsPolicies} alt="settingsPolicies image" className="SecurityImg" />
                                        <div className='securityHeading'>
                                            <h4 className='settingText'>Policies</h4>
                                            <h4 className='settingSub mt-1'>Default</h4>
                                        </div>
                                    </Link>
                                </ListGroupItem>
                                <ListGroupItem className='settingListMain'>
                                    <Link href="#" className='settingList '>
                                        <Image src={Images.settingHome} alt="settingHome image" className="SecurityImg" />
                                        <div className='securityHeading'>
                                            <h4 className='settingText'>Shop</h4>
                                            <h4 className='settingSub mt-1'>3 Locations</h4>
                                        </div>
                                    </Link>
                                </ListGroupItem>
                                <ListGroupItem className='settingListMain'>
                                    <Link href="#" className='settingList '>
                                        <Image src={Images.settingsDetails} alt="settingsDetails image" className="SecurityImg" />
                                        <div className='securityHeading'>
                                            <h4 className='settingText'>Devices Details</h4>
                                            <h4 className='settingSub mt-1'>Default</h4>
                                        </div>
                                    </Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </div>
                    <div className='col-lg-9'>
                        <div className='settingOuter staffLocateRight'>
                            <div className='JobrLocation'>
                                <Image src={Images.jobrIcon} alt="boldLeftArrow" className="img-fluid me-2" />
                                <div className='LocateDetail'>
                                    <div className='locateSubDetail'>
                                        <h4 className='LocateHeading'>Miami, FL.</h4>
                                        <h4 className='LocateSubText mt-2'>+1 (305) 305-0000</h4>
                                        <h4 className='LocateSubText'>contact@jobr.com</h4>
                                    </div>
                                    <button className='jobrBtn' type='button'>jobr.com</button>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-2'>
                                        <div className='locateLeft'>
                                            <h4 className='LocateHeading'>Invoice</h4>
                                            <h4 className='locateLightText mt-1'>Nº 0000A</h4>
                                            <h4 className='LocateHeading mt-3'>Date</h4>
                                            <h4 className='locateLightText mt-1'>07/10/2021</h4>
                                        </div>
                                    </div>
                                    <div className='col-lg-10'>
                                        <div className='locateRight'>
                                            <div className='billSection'>
                                                <h4 className='billHeading'>Bill To</h4>
                                                <div className='flexContent mt-2'>
                                                    <h4 className='LocateHeading'>Halton Company</h4>
                                                    <h4 className='LocateHeading '>+00325 625 632</h4>
                                                </div>
                                                <div className='flexContent mt-2'>
                                                    <h4 className='LocateHeading'>123 Miami Avenue - London</h4>
                                                    <h4 className='LocateHeading '>CIF 1238888B</h4>
                                                </div>
                                            </div>
                                            <div className='billDescription'>
                                                <div className='billFlex'>
                                                    <div className='descriptLeft'>
                                                        <h4 className='billHeading'> Add item description for service or equipment</h4>
                                                        <h4 className='locateLightText mt-1'>Add observations  </h4>
                                                    </div>
                                                    <div className='descriptRight'>
                                                        <h4 className='LocateSubText'>00</h4>
                                                        <h4 className='LocateSubText'>$0000</h4>
                                                    </div>
                                                </div>
                                                <div className='billFlex'>
                                                    <div className='descriptLeft'>
                                                        <h4 className='billHeading'> Add item description for service or equipment</h4>
                                                        <h4 className='locateLightText mt-1'>Add observations  </h4>
                                                    </div>
                                                    <div className='descriptRight'>
                                                        <h4 className='LocateSubText'>00</h4>
                                                        <h4 className='LocateSubText'>$0000</h4>
                                                    </div>
                                                </div>
                                                <div className='billFlex'>
                                                    <div className='descriptLeft'>
                                                        <h4 className='billHeading'> Add item description for service or equipment</h4>
                                                        <h4 className='locateLightText mt-1'>Add observations  </h4>
                                                    </div>
                                                    <div className='descriptRight'>
                                                        <h4 className='LocateSubText'>00</h4>
                                                        <h4 className='LocateSubText'>$0000</h4>
                                                    </div>
                                                </div>
                                                <div className='billFlex'>
                                                    <div className='descriptLeft'>
                                                        <h4 className='billHeading'> Add item description for service or equipment</h4>
                                                        <h4 className='locateLightText mt-1'>Add observations  </h4>
                                                    </div>
                                                    <div className='descriptRight'>
                                                        <h4 className='LocateSubText'>00</h4>
                                                        <h4 className='LocateSubText'>$0000</h4>
                                                    </div>
                                                </div>
                                                <div className='billSubtotal'>
                                                    <div className='billSubArea'>
                                                        <h4 className='LocateSubText'>Subtotal</h4>
                                                        <h4 className='LocateSubText'>$0000</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StaffLocation