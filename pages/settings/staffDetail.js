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
                                    <div className='flexDiv'>
                                        <h4 className='amountText m-0'>Joined Data</h4>
                                        <h4 className='appointSub m-0'>Joined Data</h4>
                                    </div>
                                    <div className='flexDiv mt-1'>
                                        <h4 className='amountText m-0'>Active since:</h4>
                                        <h4 className='appointSub m-0'>265 Days</h4>
                                    </div>
                                    <div className='flexDiv mt-1'>
                                        <h4 className='amountText m-0'>Employment type</h4>
                                        <h4 className='appointSub m-0'>Full Time</h4>
                                    </div>
                                    <div className='flexDiv mt-1'>
                                        <h4 className='amountText m-0'>Days Off</h4>
                                        <h4 className='appointSub m-0'>3 Days</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='staffTimeSection'>
                                <div className='staffSubTime'>
                                    <h4 className='amountText m-0'>Hour Rate</h4>
                                    <hr className='staffTimeDivide' />
                                    <h4 className='appointSub m-0'>JBG 250/hr</h4>
                                </div>
                                <div className='staffSubTime'>
                                    <h4 className='amountText m-0'>Over Time Rate</h4>
                                    <hr className='staffTimeDivide' />
                                    <h4 className='appointSub m-0'>JBG 150/hr</h4>
                                </div>
                                <div className='staffSubTime'>
                                    <h4 className='amountText m-0'>Payment Cycle</h4>
                                    <hr className='staffTimeDivide' />
                                    <h4 className='appointSub m-0'>Weekly</h4>
                                </div>
                                <div className='staffSubTime'>
                                    <h4 className='amountText m-0'>Billing</h4>
                                    <hr className='staffTimeDivide' />
                                    <h4 className='appointSub m-0'>Automatic</h4>
                                </div>
                            </div>
                            <div className='staffTimeSection mt-3'>
                                <div className='staffSubTime'>
                                    <h4 className='amountText m-0'>Current  Billing Cycle</h4>
                                    <hr className='staffTimeDivide' />
                                    <h4 className='appointSub m-0'>May 29, 2023 - Jun 4, 2023</h4>
                                </div>
                                <div className='staffSubTime'>
                                    <h4 className='amountText m-0'>Time Tracked</h4>
                                    <hr className='staffTimeDivide' />
                                    <h4 className='appointSub m-0'>JBR 2500/h</h4>
                                </div>
                                <div className='staffSubTime'>
                                    <h4 className='amountText m-0'>Weekly Tracking Limit</h4>
                                    <hr className='staffTimeDivide' />
                                    <h4 className='appointSub m-0'>1h 30m</h4>
                                </div>
                            </div>
                            <div className='staffDetailtable'>
                                <div className='staffTableHeading'>
                                    <div className='staffBoxData text-start'>
                                        <h4 className='invoiceHeading '>Date</h4>
                                    </div>
                                    <div className='staffBoxData'>
                                        <h4 className='invoiceHeading p-0'>Duration</h4>
                                    </div>
                                    <div className='staffBoxData'>
                                        <h4 className='invoiceHeading p-0'>Amount</h4>
                                    </div>
                                    <div className='staffBoxData'>
                                        <h4 className='invoiceHeading p-0'>Status</h4>
                                    </div>
                                    <div className='staffBoxData'>
                                        <h4 className='invoiceHeading p-0'>Action</h4>
                                    </div>
                                </div>
                                <div className='staffTableOuter'>
                                    <div className='staffTableData'>
                                        <div className='staffBoxData text-start'>
                                            <h4 className='staffTableText'>May 29, 2023 - Jun 4, 2023</h4>
                                        </div>
                                        <div className='staffBoxData '>
                                            <h4 className='staffTableText'>4 h 20 m</h4>
                                        </div>
                                        <div className='staffBoxData'>
                                            <h4 className='staffTableText'>JBR 70,500</h4>
                                        </div>
                                        <div className='staffBoxData '>
                                            <button className='paidBtn ' type='button'>Paid</button>
                                        </div>
                                        <div className='staffBoxData'>
                                            <button className='viewBtn ' type='button'>view</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='staffTableOuter'>
                                    <div className='staffTableData'>
                                        <div className='staffBoxData text-start'>
                                            <h4 className='staffTableText'>May 29, 2023 - Jun 4, 2023</h4>
                                        </div>
                                        <div className='staffBoxData '>
                                            <h4 className='staffTableText'>4 h 20 m</h4>
                                        </div>
                                        <div className='staffBoxData'>
                                            <h4 className='staffTableText'>JBR 70,500</h4>
                                        </div>
                                        <div className='staffBoxData '>
                                            <button className='unpaidBtn ' type='button'>Unpaid</button>
                                        </div>
                                        <div className='staffBoxData'>
                                            <button className='requestBtn ' type='button'>Request</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='staffTableOuter active'>
                                    <div className='staffTableData'>
                                        <div className='staffBoxData text-start'>
                                            <h4 className='staffTableText'>May 29, 2023 - Jun 4, 2023</h4>
                                        </div>
                                        <div className='staffBoxData '>
                                            <h4 className='staffTableText'>4 h 20 m</h4>
                                        </div>
                                        <div className='staffBoxData'>
                                            <h4 className='staffTableText'>JBR 70,500</h4>
                                        </div>
                                        <div className='staffBoxData '>
                                            <button className='paidBtn ' type='button'>Paid</button>
                                        </div>
                                        <div className='staffBoxData'>
                                            <button className='viewBtn ' type='button'>view</button>
                                        </div>
                                    </div>
                                    <div className='staffTableSub mt-2'>
                                        <div className='staffBoxSub'>
                                            <div className='staffBoxData text-start'>
                                                <h4 className='staffTableText'>May 1, 2022</h4>
                                            </div>
                                            <div className='staffBoxData text-start'>
                                                <h4 className='staffTableText'>10:05:32 pm</h4>
                                            </div>
                                            <div className='staffBoxData text-start'>
                                                <h4 className='staffTableText'>10:05:32 pm</h4>
                                            </div>
                                            <div className='staffBoxData text-start'>
                                                <h4 className='staffTableText'>10:05:32 pm</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='staffTableSub '>
                                        <div className='staffSecond'>
                                            <div className='staffBoxData text-start'>
                                                <h4 className='staffTableText'>May 1, 2022</h4>
                                            </div>
                                            <div className='staffBoxData text-start'>
                                                <h4 className='staffTableText'>10:05:32 pm</h4>
                                            </div>
                                            <div className='staffBoxData text-start'>
                                                <h4 className='staffTableText'>10:05:32 pm</h4>
                                            </div>
                                            <div className='staffBoxData text-start'>
                                                <h4 className='staffTableText'>10:05:32 pm</h4>
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

export default StaffDetail