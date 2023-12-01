import React from 'react'
import * as Images from "../../utilities/images";
import Image from "next/image";
import ProductSearch from '../../components/commanComonets/Product/productSearch';


const FullCart = () => {
    return (
        <>
            <div className='fullCartSection'>
                <div className='row'>
                    <div className='col-lg-7 col-md-7'>
                        <div className='commanOuter me-0 commonSubOuter fullCartLeft'>
                            <div className='fullCartInfo'>
                                <div className='appointmentHeading'>
                                    <Image src={Images.boldLeftArrow} alt="leftarrow image" className="img-fluid" />
                                    <h4 className='appointMain ms-2'>Full Cart</h4>
                                </div>
                                <div className='ProductSearch w-50'>
                                    <ProductSearch />
                                </div>
                            </div>
                            <hr className='cartDivide' />
                            <div className='cartDetails'>
                                <div className='flexTable w-50'>
                                    <h4 className='providerSubText '>#</h4>
                                    <h4 className='providerSubText ms-2'>Item</h4>
                                </div>
                                <div className='fullCartInfo w-50'>
                                    <h4 className='providerSubText '>Unit Price</h4>
                                    <h4 className='providerSubText '>Quantity</h4>
                                    <h4 className='providerSubText '>Line Total</h4>

                                </div>
                            </div>
                            <div className='cartSubInfo active tomorrowCart'>
                                <div className='cartItemDetail w-50'>
                                    <h4 className='invoice_subhead p-0 '>1</h4>
                                    <div className='orderTime ms-2'>
                                        <Image src={Images.cartFood} alt="cartFoodImg" className="img-fluid cartFoodImg" />
                                        <div className='cartorderHeading ms-2 '>
                                            <h4 className='cartInfoText'>Mexican Food Catering</h4>
                                            <figure className='appointmentDate'>
                                                <Image src={Images.TomorrowCalender} alt="image" className="img-fluid appointmentCalender" />
                                                <span className='Ontime'>Tomorrow at 10:00hrs</span>
                                            </figure>
                                            <div className='flexTable'>
                                                <Image src={Images.cartProfile} alt="cartprofile image" className="img-fluid cartProfileImg" />
                                                <h6 className='userIdText'>Bella Peace</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='fullCartInfo w-50'>
                                    <input className="form-control unitPriceControl active" type="number" placeholder="$20.00" />
                                    <div className='incrementBtn active'>
                                        <i class="fa-solid fa-minus plusMinus"></i>
                                        <input className="form-control addBtnControl" type="number" placeholder="1" />
                                        <i class="fa-solid fa-plus plusMinus"></i>
                                    </div>
                                    <div className='fullCartInfo'>
                                        <h4 className='invoice_subhead p-0'>$90.00</h4>
                                        <Image src={Images.boldLeftArrow} alt="leftarrow image" className="img-fluid ms-2" />
                                    </div>
                                </div>
                            </div>
                            <div className='cartSubInfo  todayCart'>
                                <div className='cartItemDetail w-50'>
                                    <h4 className='invoice_subhead p-0 '>1</h4>
                                    <div className='orderTime ms-2'>
                                        <Image src={Images.cartFood} alt="cartFoodImg" className="img-fluid cartFoodImg" />
                                        <div className='cartorderHeading ms-2 '>
                                            <h4 className='cartInfoText'>Mexican Food Catering</h4>
                                            <figure className='appointmentDate'>
                                                <Image src={Images.TodayCalender} alt="image" className="img-fluid appointmentCalender" />
                                                <span className='Ontime'>Tomorrow at 10:00hrs</span>
                                            </figure>
                                            <div className='flexTable'>
                                                <Image src={Images.cartProfile} alt="cartprofile image" className="img-fluid cartProfileImg" />
                                                <h6 className='userIdText'>Bella Peace</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='fullCartInfo w-50'>
                                    <input className="form-control unitPriceControl " type="number" placeholder="$20.00" />
                                    <div className='incrementBtn'>
                                        <i class="fa-solid fa-minus plusMinus"></i>
                                        <input className="form-control addBtnControl" type="number" placeholder="1" />
                                        <i class="fa-solid fa-plus plusMinus"></i>
                                    </div>
                                    <div className='fullCartInfo'>
                                        <h4 className='invoice_subhead p-0'>$90.00</h4>
                                        <Image src={Images.boldLeftArrow} alt="leftarrow image" className="img-fluid ms-2" />
                                    </div>
                                </div>
                            </div>
                            <div className='cartSubInfo afterCart'>
                                <div className='cartItemDetail w-50'>
                                    <h4 className='invoice_subhead p-0 '>1</h4>
                                    <div className='orderTime ms-2'>
                                        <Image src={Images.cartFood} alt="cartFoodImg" className="img-fluid cartFoodImg" />
                                        <div className='cartorderHeading ms-2 '>
                                            <h4 className='cartInfoText'>Mexican Food Catering</h4>
                                            <figure className='appointmentDate'>
                                                <Image src={Images.afterSomeCalender} alt="image" className="img-fluid appointmentCalender" />
                                                <span className='Ontime'>Tomorrow at 10:00hrs</span>
                                            </figure>
                                            <div className='flexTable'>
                                                <Image src={Images.cartProfile} alt="cartprofile image" className="img-fluid cartProfileImg" />
                                                <h6 className='userIdText'>Bella Peace</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='fullCartInfo w-50'>
                                    <input className="form-control unitPriceControl" type="number" placeholder="$20.00" />
                                    <div className='incrementBtn'>
                                        <i class="fa-solid fa-minus plusMinus"></i>
                                        <input className="form-control addBtnControl" type="number" placeholder="1" />
                                        <i class="fa-solid fa-plus plusMinus"></i>
                                    </div>
                                    <div className='fullCartInfo'>
                                        <h4 className='invoice_subhead p-0'>$90.00</h4>
                                        <Image src={Images.boldLeftArrow} alt="leftarrow image" className="img-fluid ms-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-5'>
                        <div className='commanOuter me-0 ms-2 commonSubOuter fullCartRight'>
                            <div className='insertProductSection'>
                                <div className='addproductCart d-none'>
                                    <Image src={Images.serviceCart} alt="rightArrow" className="img-fluid" />
                                    <h4 className='monthText'>Add Product</h4>
                                </div>
                                <div className='addproductCart'>
                                    <Image src={Images.serviceCart} alt="rightArrow" className="img-fluid" />
                                    <h4 className='monthText'>Pause Product</h4>
                                </div>
                                <div className='deleteProductCart d-none'>
                                    <Image src={Images.serviceCart} alt="rightArrow" className="img-fluid" />
                                    <h4 className='monthText'>Add Product</h4>
                                </div>
                                <Image src={Images.serviceCart} alt="rightArrow" className="img-fluid " />
                                <Image src={Images.serviceCart} alt="rightArrow" className="img-fluid " />
                                <Image src={Images.serviceCart} alt="rightArrow" className="img-fluid " />
                            </div>
                            <div className='cartOfferSection'>
                                <div className='availablePercent'>
                                    <figure className='offerImg '><Image src={Images.serviceCart} alt="rightArrow" className="img-fluid " /></figure>
                                    <h4 className='offerHeading'>Add Product</h4>
                                </div>
                                djkgdf
                                flexDivfd
                                gf
                                djkgdfdg
                                gdfg
                                flexHeadingfb
                                <div></div>
                                dffd
                                dffd
                                <div></div>
                                <div></div>
                                dffd
                                dffd
                                <div></div><div></div>
                                dffd
                                dffd
                                <div></div><div></div>
                                dffd
                                dffd
                                <div></div><div></div>
                                dffd
                                dffd
                                <div></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FullCart