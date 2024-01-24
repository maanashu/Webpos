import React from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";

const ConfirmReturn = () => {
    return (
        <>
            <div className='confirmReturnSection'>
                <div className='customerConfirm'>
                    <h4 className='amountText m-0'>Customer:</h4>
                    <div className='constomerBx active'>
                        <Image src={Images.customerImg} alt="customerImg image " className="customerConfirmImg" />
                        <div className='subConfirm'>
                            <h4 className='linkHeading text-start'>Samara Schwansteiger</h4>
                            <div className='locationOrder'>
                                <Image src={Images.OrderLocation} alt="OrderLocation image " className="img-fluid" />
                                <p className='locationText'>Miami, FL</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='driverConfirm'>
                    <h4 className='amountText m-0'>Driver:</h4>
                    <div className='constomerBx'>
                        <Image src={Images.customerImg} alt="customerImg image " className="customerConfirmImg" />
                        <div className='subConfirm'>
                            <h4 className='linkHeading text-start'>Margarita Plata</h4>
                            <div className='locationOrder'>
                                <Image src={Images.driverSolid} alt="driverSolid image " className="img-fluid" />
                                <p className='locationText'>0001 9509</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='cartDivide' />
                <div className='itemConfirm'>
                    <h4 className='linkHeading'>Total Items</h4>
                    <h4 className='linkHeading'>09</h4>
                </div>
                <div className='confirmReturnBtn'>
                    <button className='checkBtn' type='button'>
                        Check Later
                        <Image src={Images.timeCheck} alt="timeCheck image " className="img-fluid ms-2" />
                    </button>
                    <button className='reCheckBtn' type='button'>
                    Re-check
                        <Image src={Images.checkScan} alt="checkScan image " className="img-fluid ms-1" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default ConfirmReturn