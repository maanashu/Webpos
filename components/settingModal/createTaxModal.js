import React from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";

const CreateTaxModal = () => {
    return (
        <>
            <div className='createTaxSection'>
                <form className='taxForm'>
                <div className='createTaxData'>
                    <div className='nameForm'>
                        <label className="form-label amountText m-0">Tax Name</label>
                        <input className="form-control nameControl" type="text" placeholder="Tax Name" />
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-6'>
                            <div className='nameForm'>
                                <label className="form-label amountText m-0">Tax Rate</label>
                                <input className="form-control nameControl zipForm" type="number" placeholder="%  10.00" />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='selectRole '>
                                <label className="form-label amountText m-0">Locations</label>
                                <select class="form-select" aria-label="Default select example" >
                                    <option selected>Florida</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <h4 className='totalRefund text-center my-3'>Tax Calculation </h4>
                    <div className='createTaxInfo'>
                        <div className="form-group checkBlue">
                            <input type="checkbox" id="Incoming Orders" />
                            <label for="Incoming Orders" className='appointSub  m-0'></label>
                        </div>
                        <div className='taxInfoText'>
                            <h4 className='monthText'>Include tax in item price</h4>
                            <p className='productSize p-0'>If tax is included, the tax will appear in your reports, but your customers will not see the tax on their receipt.</p>
                        </div>
                    </div>
                    <div className='TaxExemptionBx'>
                        <div className='createTaxInfo'>
                            <div className="roundCheck mb-0">
                                <input type="checkbox" />
                                <label className='amountText d-none '></label>
                            </div>
                            <div className='taxInfoText'>
                                <h4 className='monthText'>Add exemption rule</h4>
                                <p className='productSize p-0'>Specify when this tax should not be applied.</p>
                            </div>
                        </div>
                        <hr className='dottedDivide' />
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='nameForm'>
                                    <label className="form-label amountText m-0">Tax Exemption Name</label>
                                    <input className="form-control nameControl" type="text" placeholder="Tax Name" />
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='selectRole '>
                                    <label className="form-label amountText m-0">Locations</label>
                                    <select class="form-select" aria-label="Default select example" >
                                        <option selected>Florida</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='selectRole mt-3'>
                                    <label className="form-label amountText m-0">Exempt Tax</label>
                                    <select class="form-select" aria-label="Default select example" >
                                        <option selected>Select Exempt Tax</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='nameForm mt-3'>
                                    <label className="form-label amountText m-0">Amount</label>
                                    <input className="form-control nameControl zipForm" type="number" placeholder="$  00.00" />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='activateTaxBtn'>
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

export default CreateTaxModal