import React from 'react'
import * as Images from "../../../../utilities/images"
import Image from "next/image";

const ReturnInventory = () => {
    return (
        <>
            <h5 className='inventorySubheading'>
                All returned items will be adjusted with inventory
            </h5>
            <div className='productBoxDetails pe-2'>
                <div className='productcartBox mb-2'>
                    <p className='priceHeading'>1×</p>
                    <article>
                        <h6 className='priceHeading'>Lightweight Stylish Casual Daypack</h6>
                        <p className='productSize'>Yellow / M</p>
                    </article>
                    <div className='form-group flexBox addCart '>
                        <button className='removeProductBtn'>
                            <i className="fa-solid fa-minus plusMinus"></i>
                        </button>
                        <input className="form-control customTextarea" type="text" placeholder="1" />
                        <button className='addProductBtn'>
                            <i className="fa-solid fa-plus plusMinus"></i>
                        </button>
                    </div>
                </div>
                <div className='productcartBox mb-2'>
                    <p className='priceHeading'>1×</p>
                    <article>
                        <h6 className='priceHeading'>Lightweight Stylish Casual Daypack</h6>
                        <p className='productSize'>Yellow / M</p>
                    </article>
                    <div className='form-group flexBox addCart '>
                        <button className='removeProductBtn'>
                            <i className="fa-solid fa-minus plusMinus"></i>
                        </button>
                        <input className="form-control customTextarea" type="text" placeholder="1" />
                        <button className='addProductBtn'>
                            <i className="fa-solid fa-plus plusMinus"></i>
                        </button>
                    </div>
                </div>
                <div className='productcartBox mb-2'>
                    <p className='priceHeading'>1×</p>
                    <article>
                        <h6 className='priceHeading'>Lightweight Stylish Casual Daypack</h6>
                        <p className='productSize'>Yellow / M</p>
                    </article>
                    <div className='form-group flexBox addCart '>
                        <button className='removeProductBtn'>
                            <i className="fa-solid fa-minus plusMinus"></i>
                        </button>
                        <input className="form-control customTextarea" type="text" placeholder="1" value={2} />
                        <button className='addProductBtn'>
                            <i className="fa-solid fa-plus plusMinus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReturnInventory