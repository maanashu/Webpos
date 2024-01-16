import React, { useEffect, useState } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import * as Images from "../../../utilities/images"
import Image from "next/image";
import Link from 'next/link';
import { getStaffDetails, requestPayment, settingInfo } from '../../../redux/slices/setting';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment-timezone';
import { useRouter } from 'next/router';

const StaffDetail = ({ selectedItemId }) => {
    const router = useRouter();
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
            id: 2,
            // id:selectedItemId
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

    function convertMinutesToHoursAndMinutes(minutes) {
        if (typeof minutes !== 'number' || minutes < 0) {
            return 'Invalid input';
        }

        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;

        return hours + ' h ' + remainingMinutes?.toFixed(0) + ' m';
    }

    const handleRequest = (status, startDate, endDate) => {
        if (status === 0) {
            let data = {
                "start_date": moment(startDate).format('YYYY-MM-DD'),
                "end_date": moment(endDate).format('YYYY-MM-DD'),
                // "staff_details_id": selectedItemId?.toString()
                "staff_details_id": '2'
            }
            dispatch(requestPayment({
                ...data,
                cb(res) {
                    if (res) {
                        getStaffDetail()
                    }
                },
            })
            );
        }
        else {
            router.push("/StaffLocation")
        }
    }

    useEffect(() => {
        getStaffDetail();
    }, []);

    return (
        <>
            <div className='settingMain staffDetailSection'>
                <div className='row'>
                    <div className='col-lg-9'>
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
                                        <h4 className='appointSub m-0'>JBR {getStaffInfo?.pos_staff_detail?.hourly_rate ? getStaffInfo?.pos_staff_detail?.hourly_rate : 0}/hr</h4>
                                    </div>
                                    <div className='staffSubTime'>
                                        <h4 className='amountText m-0'>Over Time Rate</h4>
                                        <hr className='staffTimeDivide' />
                                        <h4 className='appointSub m-0'>JBR {getStaffInfo?.pos_staff_detail?.overtime_rate ? getStaffInfo?.pos_staff_detail?.overtime_rate : 0}/hr</h4>
                                    </div>
                                    {/* {getStaffInfo?.pos_staff_detail?.hourly_rate?.length > 0 ?
                                        getStaffInfo?.pos_staff_detail?.payment_cycle?.map((data, index) => {
                                            return ( */}
                                    <div className='staffSubTime'>
                                        <h4 className='amountText m-0'>Payment Cycle</h4>
                                        <hr className='staffTimeDivide' />
                                        <h4 className='appointSub m-0'>{getStaffInfo?.pos_staff_detail?.payment_cycle ?? "--"}</h4>
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
                                        <h4 className='appointSub m-0'>{getStaffInfo?.pos_staff_detail?.billing_type ?? '--'}</h4>
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
                                                <div key={index} className='staffTableOuter'>
                                                    <div className='staffTableData'>

                                                        <div className='staffBoxData text-start'>
                                                            <h4 className='staffTableText'>{moment(data?.start_date).format("MMM DD, YYYY")} - {moment(data?.end_date).format("MMM DD, YYYY")}</h4>
                                                        </div>
                                                        <div className='staffBoxData '>
                                                            <h4 className='staffTableText'>{convertMinutesToHoursAndMinutes(data?.duration)}</h4>
                                                        </div>
                                                        <div className='staffBoxData'>
                                                            <h4 className='staffTableText'>JBR {Number(data?.amount)?.toFixed(2)}</h4>
                                                        </div>
                                                        <div className='staffBoxData '>
                                                            <button className={data?.status === 2 ? 'paidBtn ' : "unpaidBtn"} type='button'>{data?.status === 2 ? 'Paid' : 'Unpaid'}</button>
                                                        </div>
                                                        <div className='staffBoxData'>
                                                            <button className={data?.status === 2 ? 'viewBtn ' : 'requestBtn'} onClick={() => handleRequest(data?.status, data?.start_date, data?.end_date)} type='button'>{data?.status === 0 ? "Request" : data?.status === 1 ? "Requested" : 'view'}</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }) : ""
                                    }
                                    {/* <div className='staffTableOuter'>
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
                                    </div> */}
                                </div>
                            </div>
                        )
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default StaffDetail