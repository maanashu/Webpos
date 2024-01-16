import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import * as Images from "../../utilities/images"
import Image from 'next/image';
import Link from 'next/link';

const Polices = () => {
    return (
        <>
            <div className='refund settingMain'>
                <div className='row'>
                    <div className='col-lg-3'>
                    </div>
                    <div className='col-lg-9'>
                        <div className='settingOuter policiesDetails'>
                            <div className='agreePrimary'>
                                <Image src={Images.darkDevices} alt="darkDevices image" className="img-fluid" />
                                <div className='agreeSub'>
                                    <h4 className='appointMain'>Policies</h4>
                                    <p className='lightOfferText mt-1'>Active in the markets they've been added to and visible to customers.</p>
                                </div>
                            </div>
                            <div className='policyPublish'>
                                <div className='flexContent'>
                                    <h4 className='addServicePara m-0'>Published</h4>
                                    <div className='activeBox'>
                                        <div className='activeDot'></div>
                                        <h4 className='activeText'>Active</h4>
                                    </div>
                                </div>
                                <div className='agreementDate'>
                                    <Image src={Images.calendarLight} alt="calendarLight image" className="img-fluid agreeCalendar" />
                                    <h4 className='lightOfferText'>10 October 2024. 10:10 am</h4>
                                </div>
                                <div className='refundData'>
                                    <h4 className='amountText m-0'>Terms & Conditions</h4>
                                    <p className='orderPara'>These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com.<br></br>
                                        These Terms will be applied fully and affect to your use of </p>
                                </div>
                                <h4 className='addServicePara m-0'>Last update date:</h4>
                                <h4 className='lightOfferText mt-1'>10 October 2024. 10:10 am</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Polices