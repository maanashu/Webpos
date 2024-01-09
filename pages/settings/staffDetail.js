import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import * as Images from "../../utilities/images"
import Image from "next/image";
import Link from 'next/link';

const StaffDetail = () => {
    return (
        <>
            <div className='settingMain staffDetailSection'>
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
                        <div className='settingOuter staffDetailRight'>
                            <div className='flexTable'>
                                <Image src={Images.boldLeftArrow} alt="boldLeftArrow " className="img-fluid me-2" />
                                <h4 className='appointMain'>Staff Details</h4>
                            </div>
                            <div className='staffInfoBox'>
                                <div className='staffProfileInfo'>
                                    <Image src={Images.staffProfile} alt="staffProfile image " className="staffProfileImg" />
                                    <div className='staffProfileSub'>
                                        <h4 className='appointMain'>Andrea Gonzalez-Iturbide</h4>
                                        <div className='staffAddress'>
                                            <Image src={Images.staffLocate} alt="staffProfile image " className="img-fluid" />
                                            <h4 className='appointSub m-0'>Daffodil Lane, Savage, Virginia(VA), 20763</h4>
                                        </div>
                                        <div className='staffAddress'>
                                            <Image src={Images.staffMobile} alt="staffProfile image " className="img-fluid" />
                                            <h4 className='appointSub m-0'>+1 991 012 0998</h4>
                                        </div>
                                        <div className='staffAddress'>
                                            <Image src={Images.emailStaff} alt="staffProfile image " className="img-fluid" />
                                            <h4 className='appointSub m-0'>andrea.giturbide@gmail.com</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='staffProfileData'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StaffDetail