import React from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";

const TaxPayerModal = () => {
    return (
        <>
            <div className='taxPayerSection'>
                <form className='addStoreForm'>
                    <div className='taxpayData'>
                        <div className='nameForm'>
                            <label className="form-label amountText m-0">Full Name</label>
                            <input className="form-control nameControl" type="text" placeholder="Marie" />
                        </div>
                        <div className='nameForm mt-3'>
                            <label className="form-label amountText m-0">SSN or EIN</label>
                            <input className="form-control nameControl" type="text" placeholder="SSN or EIN" />
                        </div>
                        <div className='emailField'>
                            <label className="form-label amountText m-0">Street Address</label>
                            <div className='phoneIcon'>
                                <input className="form-control verifyControl" type="Text" placeholder="Street, Ave, West..." />
                                <Image src={Images.lightLocation} alt="mailbox image" className="img-fluid lockImg" />
                            </div>
                        </div>
                        <div className='emailField'>
                            <label className="form-label amountText m-0">Apartment/Suite</label>
                            <div className='phoneIcon'>
                                <input className="form-control verifyControl" type="Text" placeholder="Building, Interior" />
                                <Image src={Images.lightLocation} alt="mailbox image" className="img-fluid lockImg" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='selectRole'>
                                    <label className="form-label amountText m-0">Country</label>
                                    <select class="form-select" aria-label="Default select example" >
                                        <option selected>USA</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='selectRole'>
                                    <label className="form-label amountText m-0">State</label>
                                    <select class="form-select" aria-label="Default select example" >
                                        <option selected>Florida (FL)</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='selectRole mt-3'>
                            <label className="form-label amountText m-0">State</label>
                            <select class="form-select" aria-label="Default select example" >
                                <option selected>Alabama</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-lg-6'>
                                <div className='nameForm'>
                                    <label className="form-label amountText m-0">City</label>
                                    <input className="form-control nameControl" type="text" placeholder="City" />
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='nameForm'>
                                    <label className="form-label amountText m-0">ZIP Code</label>
                                    <input className="form-control nameControl zipForm" type="number" placeholder="Zip Code" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='addCustomerBtn mt-4'>
                        <button className='serviceCancel w-100 ' type='button'>
                            Cancel
                        </button>
                        <button className='nextverifyBtn w-100' type='button'>
                            Save
                            <Image src={Images.ArrowRight} alt="rightArrow" className="img-fluid rightImg" />
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default TaxPayerModal