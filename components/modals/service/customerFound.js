import React from 'react'
import * as Images from "../../../utilities/images";
import Image from "next/image";

const CustomerFound = () => {
    return (
        <>
            <div className='customerFoundSection'>
                <div className='trackingSub'>
                    <figure className='profileImage '>
                        <Image src={Images.addCutomer} alt="trackingImage" className="img-fluid " />
                    </figure>
                    <h4 className='loginheading mt-2'>Create a new customer</h4>
                </div>
                <div className='customerFoundSub'>
                    <form className='addCustomerForm'>
                        <div className='customerControl m-0'>
                            <input className="form-control customerInput" type="number" placeholder="+1 392 990 0200" />
                            <Image src={Images.SearchIcon} alt="SearchImageIcon" className="img-fluid addSearch" />
                        </div>
                    </form>
                    <div className='detailSection'>
                        <div className='phoneDetail'>
                            <label className="loginSub text-start">Phone number</label>
                            <div className='flexDiv '>
                                <h4 className='trackingHeading'>(438) 000-0000 </h4>
                                <Image src={Images.AlertCircle} alt="alertImage" className="img-fluid " />
                            </div>
                        </div>
                        <div className='emailDetail'>
                            <label className="loginSub text-start">E-mail Address</label>
                            <div className='emailDetailSub '>
                                <Image src={Images.mailBox} alt="mailbox image" className="img-fluid" />
                                <h4 className='trackingHeading'>marie.jenkins@email.com</h4>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <label className="loginSub text-start">First Name</label>
                                <h4 className='trackingHeading text-start'>Marie</h4>
                            </div>
                            <div className='col-lg-6'>
                                <label className="loginSub text-start">Last Name</label>
                                <h4 className='trackingHeading text-start'>Jenkins</h4>
                            </div>
                        </div>
                        <div className='payDetail'>
                            <label className="loginSub text-start">Payment Methods</label>
                            <div className='emailDetailSub '>
                                <Image src={Images.visa} alt="mailbox image" className="img-fluid" />
                                <h4 className='trackingHeading'>●●●●   ●●●●   ●●●●   7552</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <form>
                    <div className='addCustomerBtn mt-4'>
                        <button className='serviceCancel ' type='submit'>
                            Cancel
                        </button>
                        <button className='nextverifyBtn ' type='submit'>
                            Add Costumer
                            <Image src={Images.plusRound} alt="rightArrow" className="img-fluid rightImg" />
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CustomerFound