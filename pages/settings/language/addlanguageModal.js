import React from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";
const AddlanguageModal = () => {
    return (
        <div className='addlanguageContent mt-3' >
            <div className='addStoreForm'>
                <div className='addlanguagebox_'>
                    <div className='countryLanguage_ activelang mb-3'>
                        <Image src={Images.lang1} alt="langImg" className="img-fluid rightImg me-3" />
                        <span className='smalblueText_' >French (CA)</span>
                    </div>
                    <div className='countryLanguage_  activelang mb-3'>
                        <Image src={Images.lang2} alt="langImg" className="img-fluid rightImg me-3" />
                        <span className='smalblueText_' >Spanish</span>
                    </div>
                    <div className='countryLanguage_  activelang mb-3'>
                        <Image src={Images.lang3} alt="langImg" className="img-fluid rightImg me-3" />
                        <span className='smalblueText_' >Portuguese</span>
                    </div>
                    <div className='countryLanguage_  mb-3'>
                        <Image src={Images.lang4} alt="langImg" className="img-fluid rightImg me-3" />
                        <span className='smalblueText_' >Russian</span>
                    </div>
                </div>
                <div className='addCustomerBtn mt-4'>
                    <button className='serviceCancel w-100 ' type='button'>
                        Cancel
                    </button>
                    <button className='nextverifyBtn w-100' type='button'>
                        Add
                        <Image src={Images.ArrowRight} alt="rightArrow" className="img-fluid rightImg" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddlanguageModal