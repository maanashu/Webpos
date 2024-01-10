import React from 'react'
import * as Images from "../../utilities/images"
import Image from "next/image";

const BussinessLocation = () => {
    return (
        <>
            <div className='settingMain'>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-9'>
                        <div className='settingOuter bussinessRight'>
                            <Image src={Images.darkDevices} alt="darkDevices image" className="img-fluid" />
                            <div className='bussinessData'>
                                <h4 className='appointMain'>Business Locations</h4>
                                <p className='lightOfferText mt-2'>An extra layer to boost your team members account security. A verification code will be required in addition to password each time you sign in.</p>
                                <div className='bussinessMain'>
                                    <div className='bussinessSub'>
                                        <div className='locationHead'>
                                            <Image src={Images.outlineLocation} alt="staffLocate image" className="img-fluid" />
                                            <div className='bussinessHeading'>
                                                <h4 className='cancelOrderText'>JOBR Outlet</h4>
                                                <p className='settingText'>2598 West Street, Holland, MI 49424</p>
                                            </div>
                                        </div>
                                        <div className="roundCheck mb-0">
                                            <input type="checkbox" checked="checked"/>
                                            <label className='amountText '></label>
                                        </div>
                                    </div>
                                    <div className='bussinessSub'>
                                        <div className='locationHead'>
                                            <Image src={Images.outlineLocation} alt="staffLocate image" className="img-fluid" />
                                            <div className='bussinessHeading'>
                                                <h4 className='cancelOrderText'>Wear House</h4>
                                                <p className='settingText'>2598 West Street, Holland, MI 49424</p>
                                            </div>
                                        </div>
                                        <div className="roundCheck mb-0">
                                            <input type="checkbox" checked="checked"/>
                                            <label className='amountText '></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BussinessLocation