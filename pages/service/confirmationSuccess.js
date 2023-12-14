import React from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";

const ConfirmationSuccess = () => {
    return (
        <div className='confirmationSuccesSection'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='commanOuter confirmSubSuccess p-0'>
                        <div className='fullCartInfo backArrow'>
                            <div className='appointmentHeading'>
                                <Image src={Images.boldLeftArrow} alt="leftarrow image" className="img-fluid arrowShort" />
                                <h4 className='confirmBack ms-2'>Back</h4>
                            </div>
                        </div>
                        <div className='ThankBox'>
                            <figure className='successImg'>
                                <Image src={Images.SuccessTick} alt="tickImage" className="img-fluid" />
                            </figure>
                            <h4 className='verifyHeading mt-3'>Thank you !</h4>
                            <p className='verifySub'>Your tip is the extra fuel that drives our excellence!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationSuccess