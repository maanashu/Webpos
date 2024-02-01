import React from 'react'
import * as Images from "../../../utilities/images";
import Image from "next/image";

const LegalPolicy = ({ policyInfo, handleTouch }) => {
    // const removeHtmlTag = (content) => {
    //     const withoutHtmlTags = content

    //     // Remove special characters and white spaces
    //     const withoutSpecialCharsAndSpaces = withoutHtmlTags?.trim().replace(/[^\w\s]/gi, '');
    //     return withoutSpecialCharsAndSpaces;
    // };
    return (
        <>
                <div className='refundRight settingOuter'>
                    <Image src={Images.boldLeftArrow} style={{ cursor: 'pointer' }} alt="boldLeftArrow " className="img-fluid pointHand" onClick={() => handleTouch("Legal")} />
                    <div className='refundSub legalpolicyContent_'>
                        <h4 className='appointMain'>{policyInfo?.title}</h4>
                        <div className='refundIntro'>
                            {/* <h4 className='refundMainText'>Introduction</h4> */}
                            <div dangerouslySetInnerHTML={{ __html: policyInfo?.content }} />
                        </div>
                    </div>
                </div>
        </>
    )
}

export default LegalPolicy