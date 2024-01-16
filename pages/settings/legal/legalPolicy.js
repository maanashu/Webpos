import React from 'react'
import * as Images from "../../../utilities/images";
import Image from "next/image";

const LegalPolicy = ({ policyInfo }) => {
    // const removeHtmlTag = (content) => {
    //     const withoutHtmlTags = content

    //     // Remove special characters and white spaces
    //     const withoutSpecialCharsAndSpaces = withoutHtmlTags?.trim().replace(/[^\w\s]/gi, '');
    //     return withoutSpecialCharsAndSpaces;
    // };
    return (
        <>
            <div className='settingMain'>
                <div className='row'>
                    {/* <div className='col-lg-3'></div> */}
                    <div className='col-lg-9'>
                        <div className='refundRight settingOuter'>
                            <Image src={Images.boldLeftArrow} alt="boldLeftArrow " className="img-fluid pointHand" />
                            <div className='refundSub'>
                                <h4 className='appointMain'>{policyInfo?.title}</h4>
                                <div className='refundIntro'>
                                    {/* <h4 className='refundMainText'>Introduction</h4> */}
                                    <div dangerouslySetInnerHTML={{ __html: policyInfo?.content }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LegalPolicy