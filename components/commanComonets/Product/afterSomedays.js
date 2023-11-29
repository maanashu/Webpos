import React from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";

const AfterSomeappointment = () => {
    return (
        <>
            <div className='afterappointment'>
                <div className='productsCard'>
                    <figure className='productImageBox'>
                        <Image src={Images.CardIcons} alt="image" className="img-fluid ProductIcon" />
                        <div className='overlay'>
                            <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                        </div>
                    </figure>
                    <article className='productDetails'>
                        <p className='productName'>Classes for Kids</p>
                        <p className='productserviceName'>Classes for Kindergarden Boys and Girls</p>
                        <p className='productPrice'>$21.00</p>
                        <figure className='appointmentDate'>
                            <Image src={Images.afterSomeCalender} alt="image" className="img-fluid appointmentCalender" />
                            <span className='Ontime'>01/11/23 at 10:00hrs</span>
                        </figure>
                        <figure className='Timezone'>
                            <Image src={Images.Appointmenttime} alt="image" className="img-fluid AppointmenttimeIcon" />
                            <span className='AppointmentEstTime'>Est. 45-60min</span>
                        </figure>
                        <figure className='Appointmentusers'>
                            <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                            <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                            <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                            <Image src={Images.CardIcons} alt="image" className="img-fluid CardIcons" />
                        </figure>
                    </article>



                </div>
            </div>
        </>
    )
}

export default AfterSomeappointment