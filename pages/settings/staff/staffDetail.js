import React, { useEffect, useState } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import * as Images from "../../../utilities/images"
import Image from "next/image";
import Link from 'next/link';
import { getStaffDetails, settingInfo } from '../../../redux/slices/setting';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment-timezone';

const StaffDetail = ({ selectedItemId }) => {
    const [getStaffInfo, setGetStaffInfo] = useState("");
    const targetDate = moment(getStaffInfo?.pos_staff_detail?.created_at);
    const currentDate = moment();
    const differenceInDays = targetDate?.diff(currentDate, 'days');
    const settingData = useSelector(settingInfo)
    const originalemployementType = getStaffInfo?.pos_staff_detail?.employment_type;
    const words = originalemployementType?.split('_');
    const capitalizedWords = words?.map((word) => word?.charAt?.(0).toUpperCase() + word?.slice?.(1));
    const finalEmploymentType = capitalizedWords?.join(' ');
    const dispatch = useDispatch();
    // API for get all POS users...............................
    const getStaffDetail = () => {
        let params = {
            // id: 286,
            id: selectedItemId
        };
        dispatch(getStaffDetails({
            ...params,
            cb(res) {
                if (res.status) {
                    setGetStaffInfo(res?.data?.payload)
                }
            },
        })
        );
    };

    useEffect(() => {
        getStaffDetail();
    }, []);

    return (
        <>
            {settingData?.loading ? (
                <>
                    <div className="loaderOuter">
                        <div className="spinner-grow loaderSpinner text-center my-5"></div>
                    </div>
                </>
            ) : (
                <div className='settingOuter staffDetailRight'>
                    <div className='flexTable'>
                        <Image src={Images.boldLeftArrow} alt="boldLeftArrow " className="img-fluid me-2" />
                        <h4 className='appointMain'>Staff Details</h4>
                    </div>
                    <div className='staffInfoBox'>
                        <div className='staffProfileInfo'>
                            <Image src={getStaffInfo?.pos_staff_detail?.user?.user_profiles?.profile_photo ? getStaffInfo?.pos_staff_detail?.user?.user_profiles?.profile_photo : Images.staffProfile} alt="staffProfile image " className="staffProfileImg" width={100} height={100} />
                            <div className='staffProfileSub'>
                                <h4 className='appointMain'>{getStaffInfo?.pos_staff_detail?.user?.user_profiles?.firstname
                                    ? getStaffInfo?.pos_staff_detail?.user?.user_profiles?.lastname
                                        ? `${getStaffInfo?.pos_staff_detail?.user?.user_profiles?.firstname} ${getStaffInfo?.pos_staff_detail?.user?.user_profiles?.lastname}`
                                        : getStaffInfo?.pos_staff_detail?.user?.user_profiles?.firstname
                                    : ''}</h4>
                                <div className='staffAddress'>
                                    <Image src={Images.staffLocate} alt="staffProfile image " className="img-fluid" />
                                    <h4 className='appointSub m-0'>{getStaffInfo?.pos_staff_detail?.user?.user_profiles?.current_address ? `${getStaffInfo?.pos_staff_detail?.user?.user_profiles?.current_address?.street_address}, ${getStaffInfo?.pos_staff_detail?.user?.user_profiles?.current_address?.city}, ${getStaffInfo?.pos_staff_detail?.user?.user_profiles?.current_address?.state}, ${getStaffInfo?.pos_staff_detail?.user?.user_profiles?.current_address?.zipcode}` : "---------"}</h4>
                                </div>
                                <div className='staffAddress'>
                                    <Image src={Images.staffMobile} alt="staffProfile image " className="img-fluid" />
                                    <h4 className='appointSub m-0'>{getStaffInfo?.pos_staff_detail?.user?.user_profiles?.full_phone_number}</h4>
                                </div>
                                <div className='staffAddress'>
                                    <Image src={Images.emailStaff} alt="staffProfile image " className="img-fluid" />
                                    <h4 className='appointSub m-0'>{getStaffInfo?.pos_staff_detail?.user?.email}</h4>
                                </div>
                            </div>
                        </div>
                        <div className='staffProfileData'>
                            <div className='flexDiv'>
                                <h4 className='amountText m-0'>Joined Date</h4>
                                <h4 className='appointSub m-0'> {moment(getStaffInfo?.pos_staff_detail?.created_at).format('ll')}</h4>
                            </div>
                            <div className='flexDiv mt-1'>
                                <h4 className='amountText m-0'>Active since:</h4>
                                <h4 className='appointSub m-0'>{String(differenceInDays)?.replace('-', '')} {'days'}</h4>
                            </div>
                            <div className='flexDiv mt-1'>
                                <h4 className='amountText m-0'>Employment type</h4>
                                <h4 className='appointSub m-0'>{finalEmploymentType ?? '-----'}</h4>
                            </div>
                            <div className='flexDiv mt-1'>
                                <h4 className='amountText m-0'>Days Off</h4>
                                <h4 className='appointSub m-0'>{getStaffInfo?.pos_staff_detail?.leave ?? '-----'}</h4>
                            </div>
                        </div>
                    </div>
                    <div className='staffTimeSection'>
                        <div className='staffSubTime'>
                            <h4 className='amountText m-0'>Time Rate</h4>
                            <hr className='staffTimeDivide' />
                            <h4 className='appointSub m-0'>JBG {getStaffInfo?.pos_staff_detail?.hourly_rate}/hr</h4>
                        </div>
                        <div className='staffSubTime'>
                            <h4 className='amountText m-0'>Over Time Rate</h4>
                            <hr className='staffTimeDivide' />
                            <h4 className='appointSub m-0'>JBG {getStaffInfo?.pos_staff_detail?.overtime_rate}/hr</h4>
                        </div>
                        {/* {getStaffInfo?.pos_staff_detail?.hourly_rate?.length > 0 ?
                                        getStaffInfo?.pos_staff_detail?.payment_cycle?.map((data, index) => {
                                            return ( */}
                        <div className='staffSubTime'>
                            <h4 className='amountText m-0'>Payment Cycle</h4>
                            <hr className='staffTimeDivide' />
                            <h4 className='appointSub m-0'>{getStaffInfo?.pos_staff_detail?.payment_cycle}</h4>
                        </div>
                        {/* )
                                        })
                                        : ""
                                    } */}

                        {/* {getStaffInfo?.pos_staff_detail?.hourly_rate?.length > 0 ?
                                        getStaffInfo?.pos_staff_detail?.billing_type?.map((data, index) => {
                                            return ( */}
                        <div className='staffSubTime'>
                            <h4 className='amountText m-0'>Billing</h4>
                            <hr className='staffTimeDivide' />
                            <h4 className='appointSub m-0'>{getStaffInfo?.pos_staff_detail?.billing_type}</h4>
                        </div>
                        {/* )
                                        })
                                        : ""
                                    } */}
                    </div>
                    <div className='staffTimeSection mt-3'>
                        {/* {getStaffInfo?.pos_staff_detail?.current_billing_cycle?.start?.length > 0 ?
                                         getStaffInfo?.pos_staff_detail?.current_billing_cycle?.start?.map((data, index) => {
                                            return ( */}
                        <div className='staffSubTime'>
                            <h4 className='amountText m-0'>Current  Billing Cycle</h4>
                            <hr className='staffTimeDivide' />
                            <h4 className='appointSub m-0'>{getStaffInfo?.pos_staff_detail?.current_billing_cycle?.start ?? '__'} - {getStaffInfo?.pos_staff_detail?.current_billing_cycle?.end || '__'}</h4>

                        </div>
                        {/* )
                                        })
                                        : ""
                                    } */}
                        <div className='staffSubTime'>
                            <h4 className='amountText m-0'>Time Tracked</h4>
                            <hr className='staffTimeDivide' />
                            <h4 className='appointSub m-0'>JBR {getStaffInfo?.pos_staff_detail?.time_tracked ?? '__'} /h</h4>
                        </div>
                        <div className='staffSubTime'>
                            <h4 className='amountText m-0'>Weekly Tracking Limit</h4>
                            <hr className='staffTimeDivide' />
                            <h4 className='appointSub m-0'>{getStaffInfo?.pos_staff_detail?.weekly_time_tracking_limit ?? '__'}</h4>

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
                        {getStaffInfo?.results?.results.length > 0 ?

                            getStaffInfo?.results?.results?.map((data, index) => {
                                return (
                                    <div className='staffTableOuter'>
                                        <div className='staffTableData'>

                                            <div className='staffBoxData text-start'>
                                                <h4 className='staffTableText'>{data?.start_date} - {data?.end_date}</h4>
                                            </div>
                                            <div className='staffBoxData '>
                                                <h4 className='staffTableText'>{Number(data.duration)?.toFixed(2)}</h4>
                                            </div>
                                            <div className='staffBoxData'>
                                                <h4 className='staffTableText'>JBR {Number(data.amount)?.toFixed(2)}</h4>
                                            </div>
                                            <div className='staffBoxData '>
                                                <button className='paidBtn ' type='button'>{data.status == 0 ? 'Unpaid' : data.status == 1 ? 'Request Sent' : 'Paid'}</button>
                                            </div>
                                            <div className='staffBoxData'>
                                                <button className='viewBtn ' type='button'>view</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : ""
                        }
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
            )
            }
        </>
    )
}

export default StaffDetail