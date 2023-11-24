import React from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";
import ProductSearch from '../../components/commanComonets/InvoiceSearch/productSearch';
import { ListGroup, ListGroupItem } from 'react-bootstrap';




const Product = () => {
    // const products = Array(20).join().split(',').map(function (a) { return this.i++ }, { i: 1 });
    return (
        <>
            <div className='flexBox'>
                <div className='commanOuter'>
                    <div className='productNavbar'>
                        <div className='productAll'>
                            <p className='ProductAbout'>All Products <span className='productCount'>(+1280)</span></p>
                        </div>
                        <div className='ProductSearch w-50'>
                            <ProductSearch />
                        </div>
                        <button className='BlueBtn'>Products
                            <Image src={Images.Shopping_Outline} alt="image" className="img-fluid BtnIcon" />
                        </button>
                        <button className='GreyBtn'>Services
                            <Image src={Images.Services} alt="image" className="img-fluid BtnIcon" />
                        </button>
                        <button className='GreyBtn'>Filters
                            <Image src={Images.FilterIcon} alt="image" className="img-fluid BtnIcon" />
                        </button>
                    </div>
                    <div className='commanscrollBar'>
                        <div className='row'>
                            <div className='col-xl-2 col-lg-3 col-md-4'>
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
                            <div className='col-xl-2 col-lg-3 col-md-4'>
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
                            <div className='col-xl-2 col-lg-3 col-md-4'>
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
                            <div className='col-xl-2 col-lg-3 col-md-4'>
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
                            <div className='col-xl-2 col-lg-3 col-md-4'>
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
                            <div className='col-xl-2 col-lg-3 col-md-4'>
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
                            <div className='col-xl-2 col-lg-3 col-md-4'>
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
                            <div className='col-xl-2 col-lg-3 col-md-4'>
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
                            <div className='col-xl-2 col-lg-3 col-md-4'>
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
                            <div className='col-xl-2 col-lg-3 col-md-4'>
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
                            </div><div className='col-xl-2 col-lg-3 col-md-4'>
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
                            <div className='col-xl-2 col-lg-3 col-md-4'>
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
                            <div className='col-xl-2 col-lg-3 col-md-4'>
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
                            </div><div className='col-xl-2 col-lg-3 col-md-4'>
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
                            <div className='col-xl-2 col-lg-3 col-md-4'>
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
                            <div className='col-xl-2 col-lg-3 col-md-4'>
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
                            <div className='col-xl-2 col-lg-3 col-md-4'>
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
                            <div className='col-xl-2 col-lg-3 col-md-4'>
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
                            </div><div className='col-xl-2 col-lg-3 col-md-4'>
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
                <div className='sidebarRight'>
                    <ListGroup>
                        <ListGroupItem className="rightSidebarItems" >
                            <Image src={Images.ProductsServices} alt="image" className="img-fluid rightSidebarIcons" />
                        </ListGroupItem>
                        <ListGroupItem className="rightSidebarItems" >
                            <Image src={Images.DeliveryOrders} alt="image" className="img-fluid rightSidebarIcons" />
                        </ListGroupItem>
                        <ListGroupItem className="rightSidebarItems" >
                            <Image src={Images.ShippingOrders} alt="image" className="img-fluid rightSidebarIcons" />
                        </ListGroupItem>
                        <ListGroupItem className='rightSidebarItems'>
                            <Image src={Images.LogOut} alt="image" className="img-fluid rightSidebarIcons" />
                        </ListGroupItem>
                    </ListGroup>
                </div>
            </div>
        </>
    )
}
export default Product
