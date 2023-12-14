import React from 'react'
import * as Images from "../../utilities/images"
import Image from "next/image";

const RefundsConfirmation = () => {
    return (
        <>
            <div className='refundConfirmation'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='commanOuter'>
                            <button type='button' className='backButton'>
                                <Image src={Images.ArrowLeft} alt="" className="img-fluid backBtnIcon" />
                                Back
                            </button>
                            <div className='refundMethod'>
                                <h4 className='totalRefund'>Total Return Amount</h4>
                                <h5 className='totalrefundAmount'>$304.75</h5>
                                <p className='userPosition'>Select a method of payment to refund.</p>
                            </div>
                            <div className='row'>
                                <div className='col-lg-4'>
                                    <div className='debitCreditBox'>
                                        <article className='flexBox justify-content-between'>
                                            <Image src={Images.Mastercard} alt='Mastercard' className='img-fluid Mastercard' />
                                            <p>debit/credit</p>
                                        </article>
                                        <p className='cardNumber pt-5'>●●●●  ●●●●  ●●●●  7224</p>
                                        <p className='priceRefunded'>$304.75</p>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className='refundCashBox'>
                                        <article className='flexBox justify-content-between'>
                                            <Image src={Images.MoneyOutline} alt='MoneyOutline' className='img-fluid MoneyOutline' />
                                            <p>debit/credit</p>
                                        </article>
                                        <p className='priceRefunded'>$304.75</p>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className='jobrCoinBox'>
                                        <article className='flexBox justify-content-between'>
                                            <Image src={Images.JOBRCoinOutline} alt='JOBRCoinOutline' className='img-fluid JOBRCoinOutline' />
                                            <p>debit/credit</p>
                                        </article>
                                        <p className='priceRefunded'>$304.75</p>
                                    </div>
                                </div>
                            </div>
                            <div className='receiptDetails'>
                                <Image src={Images.ReceiptOutline} alt="ReceiptOutline" className="img-fluid ReceiptOutline" />
                                <p className='selectedproductDetails'>Send your e-receipt?</p>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-3'>
                                        <div className='receiptCard'>
                                            <Image src={Images.Sms} alt="Sms" className="img-fluid Sms" />
                                            <p>SMS</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-3'>
                                        <div className='receiptCard'>
                                            <Image src={Images.Email} alt="Email" className="img-fluid Email" />
                                            <p>E-mail</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-3'>
                                        <div className='receiptCard'>
                                            <Image src={Images.Like} alt="Like" className="img-fluid Like" />
                                            <p>No, thanks</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button type='button' className='ConfirmReturn'>
                                    Confirm Return
                                    <Image src={Images.ShoppingReturnLite} alt="ShoppingReturnLite" className="img-fluid ShoppingReturnLite" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='commanOuter'>
                            <div className='MapleBox'>
                                <article className='mapleHeader'>
                                    <h6 className='mapleHeading'>Maple Inc.</h6>
                                    <p className='mapleAddress'>500 Rideau St. Ottawa, ON 5Z2 K1L</p>
                                    <p className='mapleAddress'>+1 (438) 459-0226</p>
                                </article>
                                <div className='mapleProductDetails'>
                                    <div className='flexBox mapleProductDetailsBox'>
                                        <p className='mapleProductcount'>× 1</p>
                                        <article>
                                            <p className='mapleProductHeading'>Lightweight Stylish Casual Daypack</p>
                                            <span className='mapleProductcount'>Yellow / M</span>
                                        </article>
                                        <article>
                                            <p className='mapleProductPrice'>$90.00</p>
                                        </article>
                                    </div>
                                    <div className='flexBox mapleProductDetailsBox'>
                                        <p className='mapleProductcount'>× 1</p>
                                        <article>
                                            <p className='mapleProductHeading'>Lightweight Stylish Casual Daypack</p>
                                            <span className='mapleProductcount'>Yellow / M</span>
                                        </article>
                                        <article>
                                            <p className='mapleProductPrice'>$90.00</p>
                                        </article>
                                    </div>
                                    <div className='flexBox mapleProductDetailsBox'>
                                        <p className='mapleProductcount'>× 1</p>
                                        <article>
                                            <p className='mapleProductHeading'>Lightweight Stylish Casual Daypack</p>
                                            <span className='mapleProductcount'>Yellow / M</span>
                                        </article>
                                        <article>
                                            <p className='mapleProductPrice'>$90.00</p>
                                        </article>
                                    </div>
                                </div>
                                <div className='flexBox mapleInvoiceBox'>
                                    <article>
                                        <p className='mapleProductPrice'>Payment Option</p>
                                        <p className='mapleProductHeading'>Cash</p>
                                        <p className='mapleProductPrice'>Invoice</p>
                                        <p className='mapleProductHeading'># 9836-1238</p>
                                    </article>
                                    <article>
                                        <p className='mapleProductPrice'>Date</p>
                                        <p className='mapleProductHeading'>Wed 10/10/23</p>
                                        <p className='mapleProductPrice'>POS No.</p>
                                        <p className='mapleProductHeading'>#Front-CC03</p>
                                    </article>
                                    <article>
                                        <p className='mapleProductPrice'>Mode</p>
                                        <p className='mapleProductHeading'>Walk-In</p>
                                        <p className='mapleProductPrice'>User UD</p>
                                        <p className='mapleProductHeading'>****331</p>
                                    </article>
                                </div>
                                <div className='flexBox maplePriceBox'>
                                    <article>
                                        <p className='productName'>Subtotal</p>
                                        <p className='productName'>Discount</p>
                                        <p className='productName'>Shipping</p>
                                        <p className='productName'>Total</p>
                                    </article>
                                    <article>
                                        <p className='productName'>$933.50</p>
                                        <p className='productName'>15% ($13.50)</p>
                                        <p className='productName'>$29.00</p>
                                        <p className='productName'>$304.75</p>
                                    </article>
                                </div>
                                <div className='text-center'>
                                    <Image src={Images.Logo} alt='logo' className='img-fluid logo'/> 
                                    <Image src={Images.barCodeScanImg} alt='barCodeScanImg' className='img-fluid barCodeScanImg'/> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RefundsConfirmation