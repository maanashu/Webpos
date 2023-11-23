import React from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";


const Product = () => {
    const products = Array(20).join().split(',').map(function (a) { return this.i++ }, { i: 1 });
    return (
        <>
            <div className='flexBox'>
                <div className='commanOuter'>
                    <div className='row'>
                        {products && products.map((val, i) => {
                            return (
                                <div className='col-xl-2 col-lg-3 col-md-4'>
                                    <div className='productsCard'>
                                        <figure>
                                            <Image src={Images.Marlboro} alt="image" className="img-fluid ProductIcon" />
                                        </figure>
                                        <article className='productDetails'>
                                            <p className='productName'>Cozy Premium Cotton Henly T-shirt</p>
                                            <p className='productGender'>Man</p>
                                            <p className='productPrice'>$19.00</p>
                                        </article>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='sidebarRight'>
                    <Image src={Images.SideLogo} alt="image" className="img-fluid rightSidebarIcon" />
                </div>
            </div>
        </>
    )
}
export default Product
