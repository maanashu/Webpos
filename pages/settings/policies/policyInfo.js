import React from 'react'
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useRouter } from 'next/router';

const PolicyInfo = ({ policyInfo,handleTouch }) => {
    const router = useRouter();
    // const removeHtmlTag = (content) => {
    //     const withoutHtmlTags = content?.replace(/<\/?[^>]+(>|$)|&nbsp;/g, '');

    //     // Remove special characters and white spaces
    //     const withoutSpecialCharsAndSpaces = withoutHtmlTags?.trim().replace(/[^\w\s]/gi, '');
    //     return withoutSpecialCharsAndSpaces;
    // };
    return (
        <>
                    {/* <div className='col-lg-3'></div> */}
                    <div className='col-lg-12'>
                        <div className='refundRight settingOuter'>
                            <Image src={Images.boldLeftArrow} style={{cursor:'pointer'}} alt="boldLeftArrow " className="img-fluid pointHand"  onClick={()=>handleTouch("Policies")}/>
                            <div className='refundSub'>
                                <h4 className='appointMain'>{policyInfo?.title}</h4>
                                <div className='refundIntro'>
                                    {/* <h4 className='refundMainText'>Introduction</h4> */}
                                    <div dangerouslySetInnerHTML={{ __html: policyInfo?.content }} />
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default PolicyInfo