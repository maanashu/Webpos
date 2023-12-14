import React from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";

const ConfirmSelect = () => {
    return (
        <>
            <div className='confirmSelectSection'>
                <div className='row'>
                    <div className='col-lg-7 col-md-7'>
                        <div className='commanOuter me-0 commonSubOuter p-0 confirmSelectLeft'>
                            <div className='fullCartInfo'>
                                <div className='appointmentHeading'>
                                    <Image src={Images.boldLeftArrow} alt="leftarrow image" className="img-fluid" />
                                    <h4 className='confirmBack ms-2'>Back</h4>
                                </div>
                            </div>
                            <div className='confirmStep'>
                                <div className='confirmFirst'>
                                    <p className='customerLink'>1. Did we do it well?, Give us a <span className='fw-bold'>tip.</span></p>
                                    <div className='coinAverageSelect'>
                                        <div className='coinPercentSelect'>
                                            <h2 className='coinHeading'>10%</h2>
                                            <h6 className='coinSubText mt-1'>$3.00</h6>
                                        </div>
                                        <div className='coinPercentSelect'>
                                            <h2 className='coinHeading'>15%</h2>
                                            <h6 className='coinSubText mt-1'>$6.00</h6>
                                        </div>
                                        <div className='coinPercentSelect'>
                                            <h2 className='coinHeading'>20%</h2>
                                            <h6 className='coinSubText mt-1'>$12.00</h6>
                                        </div>
                                        <div className='coinPercentSelect'>
                                            <h2 className='coinHeading'>No, thanks</h2>
                                            <h6 className='coinSubText mt-1'>$0.00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-5'>
                        <div className='commanOuter me-0 ms-0 commonSubOuter confirmRight p-0'>
                            <div className='confirmRightSub confirmAddress'>
                                <h2 className='mapleHeading text-center'>Maple Inc.</h2>
                                <h4 className='mapleAddress text-center'>500 Rideau St. Ottawa, ON 5Z2 K1L</h4>
                                <h4 className='mapleAddress text-center p-0'>+1 (438) 459-0226</h4>
                            </div>
                            <div className='mapleProductDetails confirmRightSub'>
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
                            <div className='flexBox mapleInvoiceBox confirmRightSub'>
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
                            <div className='confirmFooter'>
                                <Image src={Images.Logo} alt='logo' className='img-fluid logo' />
                                <Image src={Images.barCodeScanImg} alt='barCodeScanImg' className='img-fluid barCodeScanImg' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmSelect