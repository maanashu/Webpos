import React from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";

const Notifications = () => {
    return (
        <>
            <div className='notifySection'>
                <div className='flexTable mb-4'>
                    <Image src={Images.boldLeftArrow} alt="boldLeftArrow " className="img-fluid me-2 pointHand" />
                    <h4 className='appointMain text-start m-0'>Notification</h4>
                </div>
                <div className='notificationArea'>
                    <h4 className='selectedproductDetails'>Today</h4>
                    <div className='NotificationSubArea'>
                        <div className="taxCountryMain">
                            <div className="operatingCountry">
                                <Image src={Images.countryImg} className="countryImg" alt="countryImage" />
                                <div className="countryText">
                                    <h4 className="cancelOrderText">Operating Country</h4>
                                    <p className="settingText mt-1">United States</p>
                                </div>
                            </div>
                            <button className='notifyBtn' type='button'> 3 hoours ago</button>
                        </div>
                        <div className="taxCountryMain">
                            <div className="operatingCountry">
                                <Image src={Images.countryImg} className="countryImg" alt="countryImage" />
                                <div className="countryText">
                                    <h4 className="cancelOrderText">Operating Country</h4>
                                    <p className="settingText mt-1">United States</p>
                                </div>
                            </div>
                            <button className='notifyBtn' type='button'> 3 hoours ago</button>
                        </div>
                        <div className="taxCountryMain">
                            <div className="operatingCountry">
                                <Image src={Images.countryImg} className="countryImg" alt="countryImage" />
                                <div className="countryText">
                                    <h4 className="cancelOrderText">Operating Country</h4>
                                    <p className="settingText mt-1">United States</p>
                                </div>
                            </div>
                            <button className='notifyBtn' type='button'> 3 hoours ago</button>
                        </div>
                    </div>
                </div>
                <div className='notificationArea'>
                    <h4 className='selectedproductDetails'>Yesterday</h4>
                    <div className='NotificationSubArea'>
                        <div className="taxCountryMain">
                            <div className="operatingCountry">
                                <Image src={Images.countryImg} className="countryImg" alt="countryImage" />
                                <div className="countryText">
                                    <h4 className="cancelOrderText">Operating Country</h4>
                                    <p className="settingText mt-1">United States</p>
                                </div>
                            </div>
                            <button className='notifyBtn' type='button'> 3 hoours ago</button>
                        </div>
                        <div className="taxCountryMain">
                            <div className="operatingCountry">
                                <Image src={Images.countryImg} className="countryImg" alt="countryImage" />
                                <div className="countryText">
                                    <h4 className="cancelOrderText">Operating Country</h4>
                                    <p className="settingText mt-1">United States</p>
                                </div>
                            </div>
                            <button className='notifyBtn' type='button'> 3 hoours ago</button>
                        </div>
                        <div className="taxCountryMain">
                            <div className="operatingCountry">
                                <Image src={Images.countryImg} className="countryImg" alt="countryImage" />
                                <div className="countryText">
                                    <h4 className="cancelOrderText">Operating Country</h4>
                                    <p className="settingText mt-1">United States</p>
                                </div>
                            </div>
                            <button className='notifyBtn' type='button'> 3 hoours ago</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notifications