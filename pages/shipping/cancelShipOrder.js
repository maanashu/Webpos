import React from 'react'
import DeliveryRightSidebar from '../../components/commanComonets/Delivery/deliveryRightSidebar'
import * as Images from "../../utilities/images"
import Image from "next/image";

const CancelShipOrder = () => {
    return (
        <>
            <div className='shippingSection cancelShipSection'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='deliveryOuter me-0 shipDeliverLeft'>
                            <div className='flexContent'>
                                <div className='flexTable'>
                                    <Image src={Images.boldLeftArrow} alt="boldLeftArrow " className="img-fluid me-2" />
                                    <h4 className='loginMain text-start m-0'>Cancelled Orders</h4>
                                </div>
                                <button className='GreyBtn' >Filters
                                    <Image src={Images.FilterIcon} alt="FilterIcon image" className="img-fluid BtnIcon" />
                                </button>
                            </div>
                            <div className='appointmenMonth cancelCalendar'>
                                <div className='flexTable'>
                                    <Image src={Images.calendarLight} alt='calendarimage' className='img-fluid' />
                                    <span className='monthText ms-2'>Today</span>
                                </div>
                                <Image src={Images.arrowDown} alt='arrowDown image' className='img-fluid text-end' />
                            </div>
                            <div className='table-responsive mt-3'>
                                <table id="" className="orderDeliverTable cancelShipData">
                                    <thead className='invoiceHeadingBox'>
                                        <tr>
                                            <th className='invoiceHeading'>#</th>
                                            <th className='invoiceHeading'>Client/Items</th>
                                            <th className='invoiceHeading'>Delivery Type/Shipped Time</th>
                                            <th className='invoiceHeading'></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan={4} className='innerHead'>
                                                <h4 className='processText'>In Process</h4>
                                            </td>
                                        </tr>
                                        <tr className='product_invoice active'>
                                            <td className="invoice_subhead">
                                                <div className="nameLocation">
                                                    <h4 className="assignId">Samara Schwansteiger</h4>
                                                    <div className="deliverTableBx">
                                                        <Image
                                                            src={Images.OrderLocation}
                                                            alt="location Image"
                                                            className="img-fluid me-0"
                                                        />
                                                        <span className="locateDistance">2.5 miles</span>
                                                    </div>
                                                </div>
                                                <div className="itemMoney mt-4">
                                                    <h4 className="assignId">3 items</h4>
                                                    <div className="deliverTableBx">
                                                        <Image
                                                            src={Images.MoneyItem}
                                                            alt="MoneyItemImage "
                                                            className="img-fluid me-0"
                                                        />
                                                        <span className="locateDistance">$500.50
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="invoice_subhead">
                                                <div className='shipExpress'>
                                                    <Image src={Images.shipFed} alt="pickupImg image" className="img-fluid shipPickImg m-0" />
                                                    <div className='subSaver'>
                                                        <h4 className='assignId'>FedEx Express Saver</h4>
                                                        <div className='immediateBox mt-1'>
                                                            <Image src={Images.Fast} alt="deliverFast image" className="img-fluid m-0" />
                                                            <h4 className='immediateText'>3 Days Shipping</h4>
                                                        </div>
                                                        <div className='itemType mt-4'>
                                                            <h4 className='assignId'>Cancelled by</h4>
                                                            <div className='cancelUserBx mt-1'>
                                                                <Image src={Images.cancelUser} alt="cancelUser image" className="img-fluid" />
                                                                <h4 className='cancelText'>User</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </td>
                                            <td className="invoice_subhead verticalBase">
                                                <div className='cancellingTime'>
                                                    <h4 className='assignId'>Cancelled at:</h4>
                                                    <div className='canceltimeBx'>
                                                        <Image src={Images.cancelPackage} alt="cancelUser image" className="img-fluid" />
                                                        <div className='timeAlert'>
                                                            <h4 className='cancelBold'>21 Oct 23 </h4>
                                                            <h4 className='cancelLight'> 00:10:35 hrs</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='invoice_subhead verticalBase'>
                                                <div className='deliverArrow text-end'>
                                                    <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid ms-1" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className='product_invoice'>
                                            <td className="invoice_subhead">
                                                <div className="nameLocation">
                                                    <h4 className="assignId">Samara Schwansteiger</h4>
                                                    <div className="deliverTableBx">
                                                        <Image
                                                            src={Images.OrderLocation}
                                                            alt="location Image"
                                                            className="img-fluid me-0"
                                                        />
                                                        <span className="locateDistance">2.5 miles</span>
                                                    </div>
                                                </div>
                                                <div className="itemMoney mt-4">
                                                    <h4 className="assignId">3 items</h4>
                                                    <div className="deliverTableBx">
                                                        <Image
                                                            src={Images.MoneyItem}
                                                            alt="MoneyItemImage "
                                                            className="img-fluid me-0"
                                                        />
                                                        <span className="locateDistance">$500.50
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="invoice_subhead">
                                                <div className='shipExpress'>
                                                    <Image src={Images.shipFed} alt="pickupImg image" className="img-fluid shipPickImg m-0" />
                                                    <div className='subSaver'>
                                                        <h4 className='assignId'>FedEx Express Saver</h4>
                                                        <div className='immediateBox mt-1'>
                                                            <Image src={Images.Fast} alt="deliverFast image" className="img-fluid m-0" />
                                                            <h4 className='immediateText'>3 Days Shipping</h4>
                                                        </div>
                                                        <div className='itemType mt-4'>
                                                            <h4 className='assignId'>Cancelled by</h4>
                                                            <div className='cancelUserBx mt-1'>
                                                                <Image src={Images.cancelUser} alt="cancelUser image" className="img-fluid" />
                                                                <h4 className='cancelText'>User</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </td>
                                            <td className="invoice_subhead verticalBase">
                                                <div className='cancellingTime'>
                                                    <h4 className='assignId'>Cancelled at:</h4>
                                                    <div className='canceltimeBx'>
                                                        <Image src={Images.cancelPackage} alt="cancelUser image" className="img-fluid" />
                                                        <div className='timeAlert'>
                                                            <h4 className='cancelBold'>21 Oct 23 </h4>
                                                            <h4 className='cancelLight'> 00:10:35 hrs</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='invoice_subhead verticalBase'>
                                                <div className='deliverArrow text-end'>
                                                    <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid ms-1" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={4} className='innerHead'>
                                                <h4 className='processText'>Recent Shippings</h4>
                                            </td>
                                        </tr>
                                        <tr className='product_invoice'>
                                            <td className="invoice_subhead">
                                                <div className="nameLocation">
                                                    <h4 className="assignId">Samara Schwansteiger</h4>
                                                    <div className="deliverTableBx">
                                                        <Image
                                                            src={Images.OrderLocation}
                                                            alt="location Image"
                                                            className="img-fluid me-0"
                                                        />
                                                        <span className="locateDistance">2.5 miles</span>
                                                    </div>
                                                </div>
                                                <div className="itemMoney mt-4">
                                                    <h4 className="assignId">3 items</h4>
                                                    <div className="deliverTableBx">
                                                        <Image
                                                            src={Images.MoneyItem}
                                                            alt="MoneyItemImage "
                                                            className="img-fluid me-0"
                                                        />
                                                        <span className="locateDistance">$500.50
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="invoice_subhead">
                                                <div className='shipExpress'>
                                                    <Image src={Images.shipFed} alt="pickupImg image" className="img-fluid shipPickImg m-0" />
                                                    <div className='subSaver'>
                                                        <h4 className='assignId'>FedEx Express Saver</h4>
                                                        <div className='immediateBox mt-1'>
                                                            <Image src={Images.Fast} alt="deliverFast image" className="img-fluid m-0" />
                                                            <h4 className='immediateText'>3 Days Shipping</h4>
                                                        </div>
                                                        <div className='itemType mt-4'>
                                                            <h4 className='assignId'>Cancelled by</h4>
                                                            <div className='cancelUserBx mt-1'>
                                                                <Image src={Images.cancelUser} alt="cancelUser image" className="img-fluid" />
                                                                <h4 className='cancelText'>User</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </td>
                                            <td className="invoice_subhead verticalBase">
                                                <div className='cancellingTime'>
                                                    <h4 className='assignId'>Cancelled at:</h4>
                                                    <div className='canceltimeBx'>
                                                        <Image src={Images.cancelPackage} alt="cancelUser image" className="img-fluid" />
                                                        <div className='timeAlert'>
                                                            <h4 className='cancelBold'>21 Oct 23 </h4>
                                                            <h4 className='cancelLight'> 00:10:35 hrs</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='invoice_subhead verticalBase'>
                                                <div className='deliverArrow text-end'>
                                                    <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid ms-1" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className='product_invoice'>
                                            <td className="invoice_subhead">
                                                <div className="nameLocation">
                                                    <h4 className="assignId">Samara Schwansteiger</h4>
                                                    <div className="deliverTableBx">
                                                        <Image
                                                            src={Images.OrderLocation}
                                                            alt="location Image"
                                                            className="img-fluid me-0"
                                                        />
                                                        <span className="locateDistance">2.5 miles</span>
                                                    </div>
                                                </div>
                                                <div className="itemMoney mt-4">
                                                    <h4 className="assignId">3 items</h4>
                                                    <div className="deliverTableBx">
                                                        <Image
                                                            src={Images.MoneyItem}
                                                            alt="MoneyItemImage "
                                                            className="img-fluid me-0"
                                                        />
                                                        <span className="locateDistance">$500.50
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="invoice_subhead">
                                                <div className='shipExpress'>
                                                    <Image src={Images.shipFed} alt="pickupImg image" className="img-fluid shipPickImg m-0" />
                                                    <div className='subSaver'>
                                                        <h4 className='assignId'>FedEx Express Saver</h4>
                                                        <div className='immediateBox mt-1'>
                                                            <Image src={Images.Fast} alt="deliverFast image" className="img-fluid m-0" />
                                                            <h4 className='immediateText'>3 Days Shipping</h4>
                                                        </div>
                                                        <div className='itemType mt-4'>
                                                            <h4 className='assignId'>Cancelled by</h4>
                                                            <div className='cancelUserBx mt-1'>
                                                                <Image src={Images.cancelUser} alt="cancelUser image" className="img-fluid" />
                                                                <h4 className='cancelText'>User</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="invoice_subhead verticalBase">
                                                <div className='cancellingTime'>
                                                    <h4 className='assignId'>Cancelled at:</h4>
                                                    <div className='canceltimeBx'>
                                                        <Image src={Images.cancelPackage} alt="cancelUser image" className="img-fluid" />
                                                        <div className='timeAlert'>
                                                            <h4 className='cancelBold'>21 Oct 23 </h4>
                                                            <h4 className='cancelLight'> 00:10:35 hrs</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='invoice_subhead verticalBase'>
                                                <div className='deliverArrow text-end'>
                                                    <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid ms-1" />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className=' deliveryOuter cancelOrderRight ms-0'>
                            <div className='orderLeftInfo'>
                                <div className='flexTable'>
                                    <figure className='orderAroundImg'>
                                        <Image src={Images.LoginThird} alt="LoginThird image " className="orderPerson" />
                                    </figure>
                                    <div className='returnHeading ms-1'>
                                        <h4 className='cancelOrderText '>Samara Stellinberg</h4>
                                        <p className='returnPara'>1480 Bassel Street, New Orleans...</p>
                                    </div>
                                </div>
                                <div className='expresSaver'>
                                    <Image src={Images.shipFed} alt="pickupImg image" className="img-fluid shipPickImg m-0" />
                                    <div className='subSaver'>
                                        <h4 className='assignId'>FedEx Express Saver</h4>
                                        <div className='immediateBox mt-1'>
                                            <Image src={Images.Fast} alt="deliverFast image" className="img-fluid m-0" />
                                            <h4 className='immediateText'>3 Days Shipping</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='divideBorder my-3' />
                            <div className='detailScroll  mt-3'>
                                <div className='selectedProductDetails'>
                                    <div className='d-flex'>
                                        <Image src={Images.cartFood} alt="cartFoodImg" className="img-fluid cartFoodImg" />
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
                                                <span className='productSize ms-2'>Colors / Size</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='productPriceinvoice'>$90.00</p>
                                    <p className='productPriceinvoice'>1</p>
                                    <p className='productPriceinvoice'>$90.00</p>
                                </div>
                                <div className='selectedProductDetails'>
                                    <div className='d-flex'>
                                        <Image src={Images.cartFood} alt="cartFoodImg" className="img-fluid cartFoodImg" />
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
                                                <span className='productSize ms-2'>Colors / Size</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='productPriceinvoice'>$90.00</p>
                                    <p className='productPriceinvoice'>1</p>
                                    <p className='productPriceinvoice'>$90.00</p>
                                </div>
                                <div className='selectedProductDetails'>
                                    <div className='d-flex'>
                                        <Image src={Images.cartFood} alt="cartFoodImg" className="img-fluid cartFoodImg" />
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
                                                <span className='productSize ms-2'>Colors / Size</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='productPriceinvoice'>$90.00</p>
                                    <p className='productPriceinvoice'>1</p>
                                    <p className='productPriceinvoice'>$90.00</p>
                                </div>
                                <div className='selectedProductDetails'>
                                    <div className='d-flex'>
                                        <Image src={Images.cartFood} alt="cartFoodImg" className="img-fluid cartFoodImg" />
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
                                                <span className='productSize ms-2'>Colors / Size</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='productPriceinvoice'>$90.00</p>
                                    <p className='productPriceinvoice'>1</p>
                                    <p className='productPriceinvoice'>$90.00</p>
                                </div>
                                <div className='selectedProductDetails'>
                                    <div className='d-flex'>
                                        <Image src={Images.cartFood} alt="cartFoodImg" className="img-fluid cartFoodImg" />
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
                                                <span className='productSize ms-2'>Colors / Size</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='productPriceinvoice'>$90.00</p>
                                    <p className='productPriceinvoice'>1</p>
                                    <p className='productPriceinvoice'>$90.00</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-4'>
                                    <div className='OrderBox p-0'>
                                        <div className="OrderCheckoutBox">
                                            <p className='orderHeading'>Total Items</p>
                                            <p className='orderSubHeading'>7</p>
                                        </div>
                                        <div className="OrderCheckoutBox">
                                            <p className='orderHeading'>Order Date</p>
                                            <p className='orderSubHeading'>10/10/2023</p>
                                        </div>
                                        <div className="OrderCheckoutBox">
                                            <p className='orderHeading'>Order ID#</p>
                                            <p className='orderSubHeading'>JOBR00001</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-8'>
                                    <div className="productBilling">
                                        <div className='OrderDiscountBox'>
                                            <div className='flexBox '>
                                                <p className='orderHeading'>Sub Total</p>
                                                <p className='orderSubHeading'>$2,396.50</p>
                                            </div>
                                            <div className='flexBox'>
                                                <p className='orderHeading'>Discount</p>
                                                <p className='orderSubHeading'>-$19.00</p>
                                            </div>
                                            <div className='flexBox'>
                                                <p className='orderHeading'>Other Fees</p>
                                                <p className='orderSubHeading'>$14,000</p>
                                            </div>
                                            <div className='flexBox'>
                                                <p className='orderHeading'>Fax</p>
                                                <p className='orderSubHeading'>$236</p>
                                            </div>
                                        </div>
                                        <div className='OrderTotal'>
                                            <div className='flexBox'>
                                                <p className='priceHeading'>Total</p>
                                                <p className='priceHeading'>$254.60</p>
                                            </div>
                                            <button type='button' className='cancelUserBtn w-100 mt-2'>
                                                Cancelled by user
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DeliveryRightSidebar />
            </div>
        </>
    )
}

export default CancelShipOrder