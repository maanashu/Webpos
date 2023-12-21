import React from 'react'
import * as Images from "../../utilities/images"
import Image from "next/image";
import ProductInnerNav from '../../components/commanComonets/Product/productInnerNav';
import ProductRightSidebar from '../../components/commanComonets/Product/ProductRightSidebar';
import { useRouter } from 'next/router';




const Product = () => {
    const router = useRouter();
    return (
        <>
            <div className='flexBox'>
                <div className='commanOuter'>
                    <ProductInnerNav/>
                    <div className='commanscrollBar'>
                        <div className='row'>
                            <div className='col-xl-2 col-lg-3 col-md-4 mb-3' >
                                <div className='productsCard'>
                                    <figure className='productImageBox'>
                                        <Image src={Images.ProductIcon} alt="image" className="img-fluid ProductIcon" />
                                        <div className='overlay'>
                                            <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                                        </div>
                                    </figure>
                                    <article className='productDetails'>
                                        <p className='productName'>Cozy Premium Cotton Henly T-shirt</p>
                                        <p className='productGender'>Man</p>
                                        <p className='productPrice'>$19.00</p>
                                    </article>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                                <div className='productsCard active'>
                                    <figure className='productImageBox'>
                                        <Image src={Images.ProductIcon} alt="image" className="img-fluid ProductIcon" />
                                        <div className='overlay'>
                                            <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                                        </div>
                                    </figure>
                                    <article className='productDetails'>
                                        <p className='productName'>Cozy Premium Cotton Henly T-shirt</p>
                                        <p className='productGender'>Man</p>
                                        <p className='productPrice'>$19.00</p>
                                    </article>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                                <div className='productsCard'>
                                    <figure className='productImageBox'>
                                        <Image src={Images.ProductIcon} alt="image" className="img-fluid ProductIcon" />
                                        <div className='overlay'>
                                            <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                                        </div>
                                    </figure>
                                    <article className='productDetails'>
                                        <p className='productName'>Cozy Premium Cotton Henly T-shirt</p>
                                        <p className='productGender'>Man</p>
                                        <p className='productPrice'>$19.00</p>
                                    </article>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                                <div className='productsCard'>
                                    <figure className='productImageBox'>
                                        <Image src={Images.ProductIcon} alt="image" className="img-fluid ProductIcon" />
                                        <div className='overlay'>
                                            <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                                        </div>
                                    </figure>
                                    <article className='productDetails'>
                                        <p className='productName'>Cozy Premium Cotton Henly T-shirt</p>
                                        <p className='productGender'>Man</p>
                                        <p className='productPrice'>$19.00</p>
                                    </article>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                                <div className='productsCard'>
                                    <figure className='productImageBox'>
                                        <Image src={Images.ProductIcon} alt="image" className="img-fluid ProductIcon" />
                                        <div className='overlay'>
                                            <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                                        </div>
                                    </figure>
                                    <article className='productDetails'>
                                        <p className='productName'>Cozy Premium Cotton Henly T-shirt</p>
                                        <p className='productGender'>Man</p>
                                        <p className='productPrice'>$19.00</p>
                                    </article>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                                <div className='productsCard'>
                                    <figure className='productImageBox'>
                                        <Image src={Images.ProductIcon} alt="image" className="img-fluid ProductIcon" />
                                        <div className='overlay'>
                                            <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                                        </div>
                                    </figure>
                                    <article className='productDetails'>
                                        <p className='productName'>Cozy Premium Cotton Henly T-shirt</p>
                                        <p className='productGender'>Man</p>
                                        <p className='productPrice'>$19.00</p>
                                    </article>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                                <div className='productsCard'>
                                    <figure className='productImageBox'>
                                        <Image src={Images.ProductIcon} alt="image" className="img-fluid ProductIcon" />
                                        <div className='overlay'>
                                            <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                                        </div>
                                    </figure>
                                    <article className='productDetails'>
                                        <p className='productName'>Cozy Premium Cotton Henly T-shirt</p>
                                        <p className='productGender'>Man</p>
                                        <p className='productPrice'>$19.00</p>
                                    </article>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                                <div className='productsCard'>
                                    <figure className='productImageBox'>
                                        <Image src={Images.ProductIcon} alt="image" className="img-fluid ProductIcon" />
                                        <div className='overlay'>
                                            <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                                        </div>
                                    </figure>
                                    <article className='productDetails'>
                                        <p className='productName'>Cozy Premium Cotton Henly T-shirt</p>
                                        <p className='productGender'>Man</p>
                                        <p className='productPrice'>$19.00</p>
                                    </article>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                                <div className='productsCard'>
                                    <figure className='productImageBox'>
                                        <Image src={Images.ProductIcon} alt="image" className="img-fluid ProductIcon" />
                                        <div className='overlay'>
                                            <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                                        </div>
                                    </figure>
                                    <article className='productDetails'>
                                        <p className='productName'>Cozy Premium Cotton Henly T-shirt</p>
                                        <p className='productGender'>Man</p>
                                        <p className='productPrice'>$19.00</p>
                                    </article>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                                <div className='productsCard'>
                                    <figure className='productImageBox'>
                                        <Image src={Images.ProductIcon} alt="image" className="img-fluid ProductIcon" />
                                        <div className='overlay'>
                                            <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                                        </div>
                                    </figure>
                                    <article className='productDetails'>
                                        <p className='productName'>Cozy Premium Cotton Henly T-shirt</p>
                                        <p className='productGender'>Man</p>
                                        <p className='productPrice'>$19.00</p>
                                    </article>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                                <div className='productsCard'>
                                    <figure className='productImageBox'>
                                        <Image src={Images.ProductIcon} alt="image" className="img-fluid ProductIcon" />
                                        <div className='overlay'>
                                            <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                                        </div>
                                    </figure>
                                    <article className='productDetails'>
                                        <p className='productName'>Cozy Premium Cotton Henly T-shirt</p>
                                        <p className='productGender'>Man</p>
                                        <p className='productPrice'>$19.00</p>
                                    </article>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                                <div className='productsCard'>
                                    <figure className='productImageBox'>
                                        <Image src={Images.ProductIcon} alt="image" className="img-fluid ProductIcon" />
                                        <div className='overlay'>
                                            <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                                        </div>
                                    </figure>
                                    <article className='productDetails'>
                                        <p className='productName'>Cozy Premium Cotton Henly T-shirt</p>
                                        <p className='productGender'>Man</p>
                                        <p className='productPrice'>$19.00</p>
                                    </article>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                                <div className='productsCard'>
                                    <figure className='productImageBox'>
                                        <Image src={Images.ProductIcon} alt="image" className="img-fluid ProductIcon" />
                                        <div className='overlay'>
                                            <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                                        </div>
                                    </figure>
                                    <article className='productDetails'>
                                        <p className='productName'>Cozy Premium Cotton Henly T-shirt</p>
                                        <p className='productGender'>Man</p>
                                        <p className='productPrice'>$19.00</p>
                                    </article>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                                <div className='productsCard'>
                                    <figure className='productImageBox'>
                                        <Image src={Images.ProductIcon} alt="image" className="img-fluid ProductIcon" />
                                        <div className='overlay'>
                                            <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                                        </div>
                                    </figure>
                                    <article className='productDetails'>
                                        <p className='productName'>Cozy Premium Cotton Henly T-shirt</p>
                                        <p className='productGender'>Man</p>
                                        <p className='productPrice'>$19.00</p>
                                    </article>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                                <div className='productsCard'>
                                    <figure className='productImageBox'>
                                        <Image src={Images.ProductIcon} alt="image" className="img-fluid ProductIcon" />
                                        <div className='overlay'>
                                            <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                                        </div>
                                    </figure>
                                    <article className='productDetails'>
                                        <p className='productName'>Cozy Premium Cotton Henly T-shirt</p>
                                        <p className='productGender'>Man</p>
                                        <p className='productPrice'>$19.00</p>
                                    </article>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                                <div className='productsCard'>
                                    <figure className='productImageBox'>
                                        <Image src={Images.ProductIcon} alt="image" className="img-fluid ProductIcon" />
                                        <div className='overlay'>
                                            <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                                        </div>
                                    </figure>
                                    <article className='productDetails'>
                                        <p className='productName'>Cozy Premium Cotton Henly T-shirt</p>
                                        <p className='productGender'>Man</p>
                                        <p className='productPrice'>$19.00</p>
                                    </article>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                                <div className='productsCard'>
                                    <figure className='productImageBox'>
                                        <Image src={Images.ProductIcon} alt="image" className="img-fluid ProductIcon" />
                                        <div className='overlay'>
                                            <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                                        </div>
                                    </figure>
                                    <article className='productDetails'>
                                        <p className='productName'>Cozy Premium Cotton Henly T-shirt</p>
                                        <p className='productGender'>Man</p>
                                        <p className='productPrice'>$19.00</p>
                                    </article>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                                <div className='productsCard'>
                                    <figure className='productImageBox'>
                                        <Image src={Images.ProductIcon} alt="image" className="img-fluid ProductIcon" />
                                        <div className='overlay'>
                                            <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                                        </div>
                                    </figure>
                                    <article className='productDetails'>
                                        <p className='productName'>Cozy Premium Cotton Henly T-shirt</p>
                                        <p className='productGender'>Man</p>
                                        <p className='productPrice'>$19.00</p>
                                    </article>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-3 col-md-4 mb-3'>
                                <div className='productsCard'>
                                    <figure className='productImageBox'>
                                        <Image src={Images.ProductIcon} alt="image" className="img-fluid ProductIcon" />
                                        <div className='overlay'>
                                            <Image src={Images.Add} alt="image" className="img-fluid addIcon" />
                                        </div>
                                    </figure>
                                    <article className='productDetails'>
                                        <p className='productName'>Cozy Premium Cotton Henly T-shirt</p>
                                        <p className='productGender'>Man</p>
                                        <p className='productPrice'>$19.00</p>
                                    </article>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <ProductRightSidebar/>
            </div>
        </>
    )
}
export default Product
