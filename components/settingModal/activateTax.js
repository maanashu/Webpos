import React from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";

const ActivateTax = () => {
    return (
        <>
            <div className='activateTaxSection'>
                <div className='activateCountry'>
                    <div className='activteOperating'>
                        <Image src={Images.countryImg} className="countryImg" alt="countryImage" />
                        <div className="countryText">
                            <h4 className="cancelOrderText">Operating Country</h4>
                            <h4 className="settingText mt-1">United States</h4>
                        </div>
                    </div>
                    <div className="taxCountrySub">
                        <div className="activateSubCountry">
                            <Image src={Images.countryImg} className="countryImg" alt="countryImage" />
                            <div className="countryText">
                                <h4 className="cancelOrderText">Miami, FL</h4>
                                <p className="orderPara">Florida's General Sales Tax Rate is <span className='taxPrimary'>6%</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='activateTaxBtn'>
                    <button className='serviceCancel w-100 ' type='button'>
                        Cancel
                    </button>
                    <button className='nextverifyBtn w-100' type='button'>
                        Activate
                        <Image src={Images.ArrowRight} alt="rightArrow" className="img-fluid rightImg" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default ActivateTax