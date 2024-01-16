import React, { useEffect, useState } from 'react'
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux';
import { selectLoginAuth } from '../../../redux/slices/auth';
import { getSecuritySettingInfo, settingInfo } from '../../../redux/slices/setting';
import moment from 'moment-timezone';

const Policy = ({handleTouch}) => {
    const dispatch = useDispatch();
    const authData = useSelector(selectLoginAuth)
    const settingData = useSelector(settingInfo)
    const [getUserPolicyInfo, setGetUserPolicyInfo] = useState("");
    console.log(getUserPolicyInfo, "getUserPolicyInfo");
    // const settingData = useSelector(settingInfo)
    const UniqueId = authData?.usersInfo?.payload?.uniqe_id

    const removeHtmlTag = (content, maxWords) => {
        const withoutHtmlTags = content?.replace(/<\/?[^>]+(>|$)|&nbsp;/g, '');

        // Split the text into words
        const words = withoutHtmlTags?.split(/\s+/);

        // Limit the number of words
        const truncatedWords = words?.slice(0, maxWords);

        // Join the words back together
        const truncatedText = truncatedWords?.join(' ');

        return truncatedText;
    };
    const getSecuritySetting = () => {
        let params = {
            app_name: "pos",
            seller_id: UniqueId
        };
        dispatch(getSecuritySettingInfo({
            ...params,
            cb(res) {
                if (res.status) {
                    setGetUserPolicyInfo(res?.data?.payload?.user_policies)
                }
            },
        })
        );
    };

    useEffect(() => {
        if (UniqueId) {
            getSecuritySetting();
        }
    }, [UniqueId]);

    return (
        <>
            <div className='settingMain'>
                <div className='row'>
                    {/* <div className='col-lg-3'></div> */}
                    <div className='col-lg-9'>
                        <div className='agreementRight settingOuter'>
                            <div className='agreePrimary'>
                                <Image src={Images.darkDevices} alt="darkDevices image" className="img-fluid" />
                                <div className='agreeSub'>
                                    <h4 className='appointMain'>Agreements</h4>
                                    <p className='lightOfferText mt-1'>Active in the markets they've been added to and visible to customers.</p>
                                </div>
                            </div>
                            <div className='publishMain'>
                                <div className='row'>

                                    {settingData?.loading ? (
                                        <>
                                            <div className="loaderOuter">
                                                <div className="spinner-grow loaderSpinner text-center my-5"></div>
                                            </div>
                                        </>
                                    ) : (
                                        getUserPolicyInfo?.length > 0 ? (
                                            <>
                                                {getUserPolicyInfo?.map((data, index) => {
                                                    console.log(data, "nareshdata");
                                                    return (
                                                        <div className='col-lg-4 mt-4' key={index}>
                                                            <div className='publishSection' onClick={() => handleTouch("PolicyInfo",data)} style={{cursor:'pointer'}}>
                                                                <div className='flexContent'>
                                                                    <h4 className='addServicePara m-0'>Published</h4>
                                                                    <div className='activeBox'>
                                                                        <div className='activeDot'></div>
                                                                        {data.is_active ? (
                                                                            <h4 className='activeText'>Active</h4>
                                                                        ) : (
                                                                            <h4 className='activeText'>Inactive</h4>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className='agreementDate'>
                                                                    <Image src={Images.calendarLight} alt="calendarLight image" className="img-fluid agreeCalendar" />
                                                                    <h4 className='lightOfferText'>{moment(data?.created_at).format('MMM D, YYYY h:mm A')}</h4>
                                                                </div>
                                                                <div className='refundData'>
                                                                    <h4 className='amountText m-0'>{data?.title}</h4>
                                                                    <p className='orderPara'>{removeHtmlTag(data?.content, 50)}.... </p>
                                                                </div>
                                                                <h4 className='addServicePara m-0'>Last update date:</h4>
                                                                <h4 className='lightOfferText mt-1'> {moment(data?.updated_at).format('MMM D, YYYY h:mm A')}</h4>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </>
                                        ) : (
                                            <h2 className='text-center my-5'>No Record Found</h2>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Policy