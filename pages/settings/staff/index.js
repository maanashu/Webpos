import React, { useEffect, useState } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import * as Images from "../../../utilities/images"
import Image from "next/image";
import Link from 'next/link';
import CustomModal from '../../../components/customModal/CustomModal';
import AddStoreModal from '../../../components/settingModal/addStoreModal';
import { getAllPosUser, selectLoginAuth } from '../../../redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const StaffList = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const authData = useSelector(selectLoginAuth)
    const UniqueId = authData?.usersInfo?.payload?.uniqe_id
    const [key, setKey] = useState(Math.random());
    const [getAllStaffList, setGetAllStaffList] = useState("");
    const [modalDetail, setModalDetail] = useState({
        show: false,
        title: "",
        flag: "",
    });

    //closeModal
    const handleOnCloseModal = () => {
        setModalDetail({
            show: false,
            title: "",
            flag: "",
        });
        setKey(Math.random());
    };

    const handleUserProfile = (flag) => {

        setModalDetail({
            show: true,
            flag: flag,
            type: flag,
        });
        setKey(Math.random());
    };

    // API for get all POS users...............................
    const getUserList = () => {
        let params = {
            seller_id: UniqueId,
        };
        dispatch(getAllPosUser({
            ...params,
            cb(res) {
                if (res.status) {
                    setGetAllStaffList(res?.data?.payload?.pos_staff)
                }
            },
        })
        );
    };


    useEffect(() => {
        if (UniqueId) {
            getUserList();
        }
    }, [UniqueId]);

    return (
        <>
            <div className='settingMain staffSection'>
                <div className='row'>
                    {/* <div className='col-lg-3'>
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
                    </div> */}

                    <div className='col-lg-9'>
                        <div className='staffRight settingOuter'>
                            <Image src={Images.customerUsers} alt="customerUsers image" className="img-fluid" hight={100} width={100}/>
                            <div className='staffData'>
                                <h4 className='appointMain'>Staff List</h4>
                                <p className='lightOfferText mt-2'>Active in the markets they've been added to and visible to customers.</p>
                                <div className='staffListData'>
                                    {authData?.loading ? (
                                        <>
                                            <div className="loaderOuter">
                                                <div className="spinner-grow loaderSpinner text-center my-5"></div>
                                            </div>
                                        </>
                                    ) : (
                                        getAllStaffList?.length > 0 ? (
                                            <>
                                                {getAllStaffList?.map((data, index) => {
                                                    return (
                                                        <div className='staffListSub' key={index}>
                                                            <div className='staffUser'>
                                                                <Image src={data?.user?.user_profiles?.profile_photo ? data?.user?.user_profiles?.profile_photo : Images.LoginFirst} alt="staffUser image" className="staffUserImg" height={100} width={100}/>
                                                                <div className='staffUserSub'>
                                                                    <h4 className='cancelOrderText'>{data?.user?.user_profiles?.firstname} {data?.user?.user_profiles?.lastname}</h4>
                                                                    {data?.user?.user_roles.length > 0 ? (
                                                                        data?.user?.user_roles?.map((data, index) => {
                                                                            return (
                                                                                <h4 className='loginSub text-start mt-1' key={index}>{data?.role?.name}</h4>
                                                                            )
                                                                        })
                                                                    )
                                                                        :
                                                                        <h4 className='loginSub mt-3'>Admin / Manager</h4>
                                                                    }
                                                                </div>
                                                            </div>
                                                            <Image src={Images.RightArrow} alt="RightArrow image" className="staffArrow pointHand" hight={100} width={100} onClick={() => router.push({ pathname: '/settings/staff/staffDetail', query: { id: data } })}/>
                                                        </div>
                                                    );
                                                })}
                                            </>
                                        ) : (
                                            <h2 className='text-center my-5'>No Staff Found</h2>
                                        )
                                    )}
                                    {/* <div className='staffListSub'>
                                        <div className='staffUser'>
                                            <Image src={Images.staffUser} alt="staffUser image" className="staffUserImg" />
                                            <div className='staffUserSub'>
                                                <h4 className='cancelOrderText'>Alessa Penbroke</h4>
                                                <h4 className='loginSub text-start mt-1'>Senior POS Staff</h4>
                                            </div>
                                        </div>
                                        <Image src={Images.RightArrow} alt="RightArrow image" className="staffArrow pointHand" />
                                    </div> */}
                                    {/* <div className='staffListSub'>
                                        <div className='staffUser'>
                                            <Image src={Images.staffUser} alt="staffUser image" className="staffUserImg" />
                                            <div className='staffUserSub'>
                                                <h4 className='cancelOrderText'>Alessa Penbroke</h4>
                                                <h4 className='loginSub text-start mt-1'>Senior POS Staff</h4>
                                            </div>
                                        </div>
                                        <Image src={Images.RightArrow} alt="RightArrow image" className="staffArrow pointHand" />
                                    </div> */}
                                    <div className='addStaff' onClick={() => {
                                        handleUserProfile("addStaff")
                                    }}>
                                        <Image src={Images.addDark} alt="addDark image" className="staffUserImg" hight={100} width={100}/>
                                        <h4 className='cancelOrderText'>Add Staff</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CustomModal
                key={key}
                show={modalDetail.show}
                backdrop="static"
                showCloseBtn={false}
                isRightSideModal={true}
                mediumWidth={false}
                className={modalDetail.flag === "addStaff" ? "commonWidth customContent" : ""}
                ids={modalDetail.flag === "addStaff" ? "addStoreModal" : ""}
                child={
                    modalDetail.flag === "addStaff" ? (
                        <AddStoreModal
                            close={() => handleOnCloseModal()}
                        />
                    ) :
                        ""
                }
                header=

                {modalDetail.flag === "addStaff" ?
                    <>
                        <h4 className='appointMain'>Add New Store Employee</h4>
                    </>
                    :
                    ''
                }
                onCloseModal={() => handleOnCloseModal()}
            />
        </>
    )
}

export default StaffList