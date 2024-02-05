import React, { useEffect } from 'react'
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useRouter } from 'next/router';

const PolicyInfo = (props) => {
    const router = useRouter();
    // const removeHtmlTag = (content) => {
    //     const withoutHtmlTags = content?.replace(/<\/?[^>]+(>|$)|&nbsp;/g, '');

    //     // Remove special characters and white spaces
    //     const withoutSpecialCharsAndSpaces = withoutHtmlTags?.trim().replace(/[^\w\s]/gi, '');
    //     return withoutSpecialCharsAndSpaces;
    // };

    useEffect(() => {
        props?.setShowSideBar(false)
    }, [])
    return (
        <>
            {/* <div className='col-lg-3'></div> */}
            <div className='col-lg-12'>
                <div className='refundRight settingOuter'>
                    <Image src={Images.boldLeftArrow} style={{ cursor: 'pointer' }} alt="boldLeftArrow " className="img-fluid pointHand" onClick={() => props?.handleTouch("Policies")} />
                    <div className='refundSub'>
                        <h4 className='appointMain'>{props?.policyInfo?.title}</h4>
                        <div className='refundIntro'>
                            {/* <h4 className='refundMainText'>Introduction</h4> */}
                            <div dangerouslySetInnerHTML={{ __html: props?.policyInfo?.content }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PolicyInfo