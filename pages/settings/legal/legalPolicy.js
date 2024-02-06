import React, { useEffect } from 'react'
import * as Images from "../../../utilities/images";
import Image from "next/image";

const LegalPolicy = (props) => {
    // const removeHtmlTag = (content) => {
    //     const withoutHtmlTags = content

    //     // Remove special characters and white spaces
    //     const withoutSpecialCharsAndSpaces = withoutHtmlTags?.trim().replace(/[^\w\s]/gi, '');
    //     return withoutSpecialCharsAndSpaces;
    // };
    useEffect(() => {
        props?.setShowSideBar(false)
    }, [])
    return (
        <>
            <div className='refundRight settingOuter'>
                <Image src={Images.boldLeftArrow} style={{ cursor: 'pointer' }} alt="boldLeftArrow " className="img-fluid pointHand" onClick={() => props?.handleTouch("Legal")} />
                <div className='refundSub legalpolicyContent_'>
                    <h4 className='appointMain'>{props?.policyInfo?.title}</h4>
                    <div className='refundIntro'>
                        {/* <h4 className='refundMainText'>Introduction</h4> */}
                        <div dangerouslySetInnerHTML={{ __html: props?.policyInfo?.content }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LegalPolicy