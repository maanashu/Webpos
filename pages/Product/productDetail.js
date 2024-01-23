import React from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";

const ProductDetail = () => {
    return (
        <>
            <div className='productDetailSection'>
                <div className='row'>
                    <div className='col-lg-5 col-md-5'>
                        <div className='commanOuter me-0 commonSubOuter productDetailLeft'>
                            <div className='newServiceDetail'>
                                <Image src={Images.boldLeftArrow} alt="leftarrow image" className="img-fluid" />
                                <div className='addserviceInfo ms-3'>
                                    <h4 className='loginMain m-0 text-start'>Add a new product</h4>
                                    <p className='addServicePara'>Configure the service to add it to the cart</p>
                                </div>
                            </div>
                            <div className='productInfo'>
                                <figure className='productRefresh'>
                                    <Image src={Images.bagImg} alt="leftarrow image" className="productBag" />
                                    <figure className='rotateImage'>
                                        <Image src={Images.rotateArrow} alt="rotateImage" className="img-fluid  " />
                                    </figure>
                                </figure>
                                <h4 className='loginMain mt-4'>Lightweight Stylish Casual Daypack</h4>
                                <button type='button' className='productId'><span className='productDot'></span>SKU 0199 - 3221</button>
                                <p className='linkHeading'>$90.00</p>
                            </div>
                            <div className='colorChart'>
                                <p className='priceHeading'>Color</p>
                                <article className='manual-entryColor'>
                                    <span className='Pink'></span>
                                    <span className='Red'></span>
                                    <span className='Yellow active'></span>
                                    <span className='Blue'></span>
                                    <span className='Black'></span>
                                    <span className='White'></span>
                                </article>
                            </div>
                            <div className='sizeChart'>
                                <p className='priceHeading'>Size</p>
                                <article className='productSizeBtnBox'>
                                    <button className='productSizeBtn'>S</button>
                                    <button className='productSizeBtn active'>M</button>
                                    <button className='productSizeBtn'>L</button>
                                    <button className='productSizeBtn'>XL</button>
                                    <button className='productSizeBtn '>XXL</button>
                                </article>
                            </div>
                            <div className='incrementBtn productIncrement'>
                                <i className="fa-solid fa-minus plusMinus"></i>
                                <input className="form-control addBtnControl" type="number" placeholder="1" />
                                <i className="fa-solid fa-plus plusMinus"></i>
                            </div>
                            <button className='nextverifyBtn w-100 mt-3' type='submit'>
                                Add Item
                                <Image src={Images.serviceCart} alt="rightArrow" className="img-fluid rightImg ms-2" />
                            </button>
                        </div>
                    </div>
                    <div className='col-lg-7 col-md-7'>
                        <div className='commanOuter  ms-0 commonSubOuter productDetailRight'>
                            <h2 className='appointMain'>Product details</h2>
                            <div className='productData'>
                                <div className='productSubData'>
                                    <h4 className='detailText'>SKU</h4>
                                    <h4 className='detailText'>7044085C</h4>
                                </div>
                                <div className='productSubDataLight'>
                                    <h4 className='detailText'>Barcode</h4>
                                    <h4 className='detailText'>003  01008  9999  0233</h4>
                                </div>
                                <div className='productSubData'>
                                    <h4 className='detailText'>Unit Type</h4>
                                    <h4 className='detailText'>Piece</h4>
                                </div>
                                <div className='productSubDataLight'>
                                    <h4 className='detailText'>Unit Weight</h4>
                                    <h4 className='detailText'>800g</h4>
                                </div>
                                <div className='productSubData'>
                                    <h4 className='detailText'>Other Locations</h4>
                                    <h4 className='detailText'>NA</h4>
                                </div>
                            </div>
                            <div className='stockHandSetion'>
                                <h4 className='payHeading text-start m-0'>Stock on hand</h4>
                                <div className='stockSub'>
                                    <div className='stockSlider'></div>
                                    <div className='stockBox'>
                                        <div className='stockSubBox'>
                                            <div className='flexDiv'>
                                                <h4 className='dayTimeText'>Sizes</h4>
                                                <h4 className='dayTimeText'>Stock</h4>
                                                <h4 className='dayTimeText'>Notify</h4>
                                            </div>
                                            <div className='flexDiv mt-1'>
                                                <div className='blueSize'>
                                                    <h6 className='sizeText'>S</h6>
                                                </div>
                                                <h6 className='sizeText'>15</h6>
                                                <figure className='noNotify'>
                                                    <Image src={Images.lightBell} alt="leftarrow image" className="img-fluid" />
                                                </figure>
                                            </div>
                                            <div className='flexDiv mt-1'>
                                                <div className='redSize'>
                                                    <h6 className='sizeText'>S</h6>
                                                </div>
                                                <div className='redStock'>
                                                    <h6 className='sizeText'>15</h6>
                                                </div>
                                                <figure className='Notify'>
                                                    <Image src={Images.darkBell} alt="leftarrow image" className="img-fluid" />
                                                </figure>
                                            </div>
                                            <div className='flexDiv mt-1'>
                                                <div className='yellowSize'>
                                                    <h6 className='sizeText'>S</h6>
                                                </div>
                                                <div className='yellowStock'>
                                                    <h6 className='sizeText'>15</h6>
                                                </div>
                                                <figure className='Notify'>
                                                    <Image src={Images.darkBell} alt="leftarrow image" className="img-fluid" />
                                                </figure>
                                            </div>
                                            <div className='flexDiv mt-1'>
                                                <div className='blueSize'>
                                                    <h6 className='sizeText'>S</h6>
                                                </div>
                                                <h6 className='sizeText'>15</h6>
                                                <figure className='noNotify'>
                                                    <Image src={Images.lightBell} alt="leftarrow image" className="img-fluid" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className='stockSubBox'>
                                            <div className='flexDiv'>
                                                <h4 className='dayTimeText'>Sizes</h4>
                                                <h4 className='dayTimeText'>Stock</h4>
                                                <h4 className='dayTimeText'>Notify</h4>
                                            </div>
                                            <div className='flexDiv mt-1'>
                                                <div className='blueSize'>
                                                    <h6 className='sizeText'>S</h6>
                                                </div>
                                                <h6 className='sizeText'>15</h6>
                                                <figure className='noNotify'>
                                                    <Image src={Images.lightBell} alt="leftarrow image" className="img-fluid" />
                                                </figure>
                                            </div>
                                            <div className='flexDiv mt-1'>
                                                <div className='redSize'>
                                                    <h6 className='sizeText'>S</h6>
                                                </div>
                                                <div className='redStock'>
                                                    <h6 className='sizeText'>15</h6>
                                                </div>
                                                <figure className='Notify'>
                                                    <Image src={Images.darkBell} alt="leftarrow image" className="img-fluid" />
                                                </figure>
                                            </div>
                                            <div className='flexDiv mt-1'>
                                                <div className='yellowSize'>
                                                    <h6 className='sizeText'>S</h6>
                                                </div>
                                                <div className='yellowStock'>
                                                    <h6 className='sizeText'>15</h6>
                                                </div>
                                                <figure className='Notify'>
                                                    <Image src={Images.darkBell} alt="leftarrow image" className="img-fluid" />
                                                </figure>
                                            </div>
                                            <div className='flexDiv mt-1'>
                                                <div className='blueSize'>
                                                    <h6 className='sizeText'>S</h6>
                                                </div>
                                                <h6 className='sizeText'>15</h6>
                                                <figure className='noNotify'>
                                                    <Image src={Images.lightBell} alt="leftarrow image" className="img-fluid" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className='stockSubBox'>
                                            <div className='flexDiv'>
                                                <h4 className='dayTimeText'>Sizes</h4>
                                                <h4 className='dayTimeText'>Stock</h4>
                                                <h4 className='dayTimeText'>Notify</h4>
                                            </div>
                                            <div className='flexDiv mt-1'>
                                                <div className='blueSize'>
                                                    <h6 className='sizeText'>S</h6>
                                                </div>
                                                <h6 className='sizeText'>15</h6>
                                                <figure className='noNotify'>
                                                    <Image src={Images.lightBell} alt="leftarrow image" className="img-fluid" />
                                                </figure>
                                            </div>
                                            <div className='flexDiv mt-1'>
                                                <div className='redSize'>
                                                    <h6 className='sizeText'>S</h6>
                                                </div>
                                                <div className='redStock'>
                                                    <h6 className='sizeText'>15</h6>
                                                </div>
                                                <figure className='Notify'>
                                                    <Image src={Images.darkBell} alt="leftarrow image" className="img-fluid" />
                                                </figure>
                                            </div>
                                            <div className='flexDiv mt-1'>
                                                <div className='yellowSize'>
                                                    <h6 className='sizeText'>S</h6>
                                                </div>
                                                <div className='yellowStock'>
                                                    <h6 className='sizeText'>15</h6>
                                                </div>
                                                <figure className='Notify'>
                                                    <Image src={Images.darkBell} alt="leftarrow image" className="img-fluid" />
                                                </figure>
                                            </div>
                                            <div className='flexDiv mt-1'>
                                                <div className='blueSize'>
                                                    <h6 className='sizeText'>S</h6>
                                                </div>
                                                <h6 className='sizeText'>15</h6>
                                                <figure className='noNotify'>
                                                    <Image src={Images.lightBell} alt="leftarrow image" className="img-fluid" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='productAvailable'>
                                <h4 className='payHeading text-start m-0'>Availability</h4>
                                <div className='stockBox mt-3'>
                                    <div className='storeAvailable'>
                                        <Image src={Images.storeDark} alt="rightArrow" className="img-fluid" />
                                        <div className="roundCheck mb-0">
                                            <input type="checkbox" />
                                            <label className='amountText  ms-2'>Store</label>
                                        </div>
                                    </div>
                                    <div className='storeAvailable'>
                                        <Image src={Images.deliverDark} alt="rightArrow" className="img-fluid" />
                                        <div className="roundCheck mb-0">
                                            <input type="checkbox" />
                                            <label className='amountText  ms-2'>Store</label>
                                        </div>
                                    </div>
                                    <div className='storeAvailable'>
                                        <Image src={Images.PlaneDark} alt="rightArrow" className="img-fluid" />
                                        <div className="roundCheck mb-0">
                                            <input type="checkbox" />
                                            <label className='amountText  ms-2'>Store</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail