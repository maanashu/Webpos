import React from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";

const TermsCondition = () => {
  return (
    <>
        <div className='settingMain'>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-9'>
                        <div className='refundRight settingOuter'>
                            <Image src={Images.boldLeftArrow} alt="boldLeftArrow " className="img-fluid pointHand" />
                            <div className='refundSub'>
                                <h4 className='appointMain'>Terms & Conditions</h4>
                                <div className='refundIntro'>
                                    <h4 className='refundMainText'>Introduction</h4>
                                    <p className='refundSubText mt-3'>These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Website Name accessible at Website.com.</p>
                                    <p className='refundSubText mt-3'>These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.</p>
                                    <p className='refundSubText'>Minors or people below 18 years old are not allowed to use this Website.</p>
                                </div>
                                <div className='refundIntro'>
                                    <h4 className='refundMainText'>Intellectual Property Rights</h4>
                                    <p className='refundSubText mt-3'>Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website. </p>
                                    <p className='refundSubText'>You are granted limited license only for purposes of viewing the material contained on this Website.</p>
                                </div>
                                <div className='refundIntro'>
                                    <h4 className='refundMainText'> Restrictions</h4>
                                    <p className='refundSubText mt-3'>You are specifically restricted from all of the following:</p>
                                    <ul className='refundList'>
                                        <li className='refundSubText'>publishing any Website material in any other media;</li>
                                        <li className='refundSubText mt-1'>selling, sublicensing and/or otherwise commercializing any Website material;</li>
                                        <li className='refundSubText mt-1'>publicly performing and/or showing any Website material;</li>
                                        <li className='refundSubText mt-1'>using this Website in any way that is or may be damaging to this Website;</li>
                                        <li className='refundSubText mt-1'>using this Website in any way that impacts user access to this Website; </li>
                                        <li className='refundSubText mt-1'>using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity.</li>
                                        <li className='refundSubText mt-1'>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default TermsCondition