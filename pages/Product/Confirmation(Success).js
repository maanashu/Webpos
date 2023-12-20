import React from 'react'
import * as Images from "../../utilities/images"
import Image from "next/image";

const ConfirmationSuccess = () => {
    return (
        <>
            <div className='ConfirmationSuccess'>
                <div className='commanOuter'>
                    <div className='flexBox'>
                        <button type='button' className='backButton'>
                            <Image src={Images.ArrowLeft} alt="backBtnIcon" className="img-fluid backBtnIcon" />
                            Back
                        </button>
                        <button type='button' className='backButton ms-4'>
                            <Image src={Images.InvoiceIcon} alt="InvoiceIcon" className="img-fluid InvoiceIcon me-1" />
                            Return to Invoices
                        </button>
                    </div>
                    <div className='ReturnConfirmed'>
                        <div className='ReturnConfirmedBox'>
                            <Image src={Images.SuccessTick} className='img-fluid SuccessTick' alt='SuccessTick'/>
                            <h5 className='returnConfirmedHeading'>Return Confirmed</h5>
                            <p className='userPosition'>Invoice No. # 3467589 return  successfully Completed!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmationSuccess