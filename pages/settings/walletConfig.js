import React from 'react'
import * as Images from "../../utilities/images"
import Image from "next/image";

const WalletConfig = () => {
    return (
        <>
            <div className='settingMain'>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-9'>
                        <div className='settingOuter walletConfigRight'>
                            <Image src={Images.darkDevices} alt="darkDevices image" className="img-fluid" />
                            <div className='bussinessData'>
                                <h4 className='appointMain'>Wallet Config</h4>
                                <div className='bussinessMain'>
                                    <div className='bussinessSub'>
                                        <div className='locationHead'>
                                            <Image src={Images.customerWallet} alt="staffLocate image" className="img-fluid" />
                                            <div className='bussinessHeading'>
                                                <h4 className='customerLink text-start'>Pay with JOBR Coin</h4>
                                                <h5 className='monthText mt-2'>Online Shop / POS</h5>
                                                <h5 className='walletPara'>Default Payment</h5>
                                                <p className='settingText mt-3'>You need to provide some additional information about your business to start receiving payouts from Shopify Payments.</p>
                                            </div>
                                        </div>
                                        <div className="roundCheck  mb-0">
                                            <input type="checkbox" checked="checked" />
                                            <label className='amountText '></label>
                                        </div>
                                    </div>
                                    <div className='bussinessSub'>
                                        <div className='locationHead'>
                                            <Image src={Images.moneyOuter} alt="staffLocate image" className="img-fluid" />
                                            <div className='bussinessHeading'>
                                                <h4 className='customerLink text-start'>Pay with Cash</h4>
                                                <h5 className='monthText mt-2'>POS</h5>
                                                <p className='settingText mt-3'>You need to provide some additional information about your business to start receiving payouts from Shopify Payments.</p>
                                            </div>
                                        </div>
                                        <div className="roundCheck  mb-0">
                                            <input type="checkbox"/>
                                            <label className='amountText '></label>
                                        </div>
                                    </div>
                                    <div className='bussinessSub'>
                                        <div className='locationHead'>
                                            <Image src={Images.outlineLocation} alt="staffLocate image" className="img-fluid" />
                                            <div className='bussinessHeading'>
                                                <h4 className='customerLink text-start'>Pay by Card Contactless</h4>
                                                <h5 className='monthText mt-2'>POS</h5>
                                                <p className='settingText mt-3'>You need to provide some additional information about your business to start receiving payouts from Shopify Payments.</p>
                                            </div>
                                        </div>
                                        <div className="roundCheck  mb-0">
                                            <input type="checkbox" />
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

export default WalletConfig