import React from 'react'
import * as Images from "../../../utilities/images"
import Image from "next/image";

const ProductDetail = () => {
    return (
        <>
            <div className='selectedProductDetails'>
                <div className='d-flex'>
                    <figure>
                        <Image src={Images.jokerImg} alt="tableImg" className="costumerImg" />
                    </figure>
                    <div className='ps-1'>
                        <p className='aboutProduct'>Name Product Gender and Quality</p>
                        <div className='d-flex'>
                            <article className='productColor'>
                                <span className='Yellow'></span>
                                <span className='Red'></span>
                                <span className='Pink'></span>
                                <span className='Blue'></span>
                                <span className='Black'></span>
                                <span className='White'></span>
                            </article>
                            <span className='productSize'>Colors / Size</span>
                        </div>
                    </div>
                </div>
                <p className='productPriceinvoice'>$90.00</p>
                <p className='productPriceinvoice'>1</p>
                <p className='productPriceinvoice'>$90.00</p>
                <article>
                    <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                </article>
            </div>
        </>
    )
}

export default ProductDetail