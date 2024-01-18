import React from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";

function Plan() {
    return (
        <>
            <div className='planRight settingOuter'>
                <Image src={Images.checkCircle} alt="darkDevices image" className="img-fluid" />
                <div className='planSubSection'>
                    <h4 className='appointMain'>Current Plan</h4>
                    <div className='planApps'>
                        <div className='planFlex'>
                            <div className='enterLeft'>
                                <h2 className='entreText'>Entrepreneur</h2>
                                <p className='orderPara'>Everything you need to create a store, make shipping and payments.</p>
                            </div>
                            <button className="createTaxBtn m-0" type="button">
                                Upgrade Plan?
                                <Image src={Images.Fast} alt="Fast image" className="ms-1 img-fluid" />
                            </button>
                        </div>
                        <div className='planAppSub'>
                            <div className='planAppLeft'>
                                <h4 className='settingText'>Apps included:</h4>
                                <div className='planTickBox'>
                                    <Image src={Images.cyanCircleTick} alt="Fast image" className="img-fluid" />
                                    <Image src={Images.blueCircleTick} alt="Fast image" className="img-fluid" />
                                    <h4 className='planCyan'>JOBR B2B</h4>
                                </div>
                                <div className='planTickBox'>
                                    <Image src={Images.cyanCircleTick} alt="Fast image" className="img-fluid" />
                                    <Image src={Images.blueCircleTick} alt="Fast image" className="img-fluid" />
                                    <h4 className='planCyan'>JOBR Wallet</h4>
                                </div>
                                <div className='planTickBox'>
                                    <Image src={Images.lightCircleTick} alt="Fast image" className="img-fluid" />
                                    <h4 className='planPara'>JOBR POS</h4>
                                </div>
                                <div className='planTickBox'>
                                    <Image src={Images.lightCircleTick} alt="Fast image" className="img-fluid" />
                                    <h4 className='planPara'>JOBR Driver</h4>
                                </div>
                            </div>
                            <div className='planAppRight'>
                                <div className='planTickBox m-0'>
                                    <Image src={Images.simpleCheck} alt="Fast image" className="img-fluid" />
                                    <h4 className='planCyan'>Online Store</h4>
                                </div>
                                <div className='planTickBox'>
                                    <Image src={Images.simpleCheck} alt="Fast image" className="img-fluid" />
                                    <h4 className='planCyan'>Shareable product pages</h4>
                                </div>
                                <div className='planTickBox'>
                                    <Image src={Images.simpleCheck} alt="Fast image" className="img-fluid" />
                                    <h4 className='planCyan'>Unlimited products</h4>
                                </div>
                                <div className='planTickBox'>
                                    <Image src={Images.simpleCheck} alt="Fast image" className="img-fluid" />
                                    <h4 className='planCyan'>24/7 support</h4>
                                </div>
                                <div className='planTickBox'>
                                    <Image src={Images.simpleCheck} alt="Fast image" className="img-fluid" />
                                    <h4 className='planCyan'>Abandoned cart recovery</h4>
                                </div>
                                <div className='planTickBox'>
                                    <Image src={Images.simpleCheck} alt="Fast image" className="img-fluid" />
                                    <h4 className='planCyan'>Advanced report builder</h4>
                                </div>
                            </div>
                        </div>
                        <div className='subscribeBox'>
                            <button className=''></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plan