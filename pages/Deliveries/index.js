import React from 'react'
import DeliveryRightSidebar from '../../components/commanComonets/Delivery/deliveryRightSidebar'
import * as Images from "../../utilities/images"
import Image from "next/image";


const DeliverDashboard = () => {
    return (
        <>
            <div className='deliverySection '>
                <div className='deliverMain w-100'>
                    <div className='row '>
                        <div className='col-lg-4'>
                            <div className='deliverLeft deliveryOuter me-0'>
                                <div className='deliverOrderStatus'>
                                    <h4 className='customerLink text-start'>Today Order Status</h4>
                                    <div className='flexDiv mt-4'>
                                        <h4 className='deliverMainText'>Delivery Order</h4>
                                        <h4 className='deliverMainText'>23</h4>
                                    </div>
                                    <div className='flexDiv mt-3'>
                                        <h4 className='deliverMainText'>Pickup Orders</h4>
                                        <h4 className='deliverMainText'>10</h4>
                                    </div>
                                </div>
                                <div className='currentStatus'>
                                    <h4 className='customerLink text-start'>Current Status</h4>
                                    <div className='currentSubStatus'>
                                        <div className='expressDeliver'>
                                            <figure className='expressImg'>
                                                <Image src={Images.deliverSuperFast} alt="deliverSuperFast image" className="img-fluid" />
                                            </figure>
                                            <div className='expressMain'>
                                                <h4 className='expessText'>Express Delivery</h4>
                                                <h4 className='providerSubText text-start mt-2'> 17 orders</h4>
                                            </div>
                                        </div>
                                        <div className='oneHrDeliver'>
                                            <figure className='expressImg'>
                                                <Image src={Images.deliverFast} alt="deliverFast image" className="img-fluid" />
                                            </figure>
                                            <div className='expressMain'>
                                                <h4 className='expessText'>1 Hour Delivery</h4>
                                                <h4 className='providerSubText text-start mt-2'> 17 orders</h4>
                                            </div>
                                        </div>
                                        <div className='twoHrDelivery'>
                                            <figure className='expressImg'>
                                                <Image src={Images.deliveryLate} alt="deliveryLate image" className="img-fluid" />
                                            </figure>
                                            <div className='expressMain'>
                                                <h4 className='expessText'>2 Hrs Delivery</h4>
                                                <h4 className='providerSubText text-start mt-2'> 17 orders</h4>
                                            </div>
                                        </div>
                                        <div className='pickupDeliver'>
                                            <figure className='expressImg'>
                                                <Image src={Images.pickupImg} alt="pickupImg image" className="img-fluid" />
                                            </figure>
                                            <div className='expressMain'>
                                                <h4 className='amountText ms-0'>Customer Pickups</h4>
                                                <h4 className='providerSubText text-start mt-2'> 17 orders</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='deliverOrder'>
                                    <h4 className='customerLink text-start'>Orders</h4>
                                    <div className="deliverGraph" >
                                        <Image src={Images.garphCircle} alt="pickupImg image" className="img-fluid graphCircleImg" />
                                    </div>
                                    <div className='flexDiv mt-3'>
                                        <h4 className='orderDeliverText'>Delivery Order</h4>
                                        <div className='deliverPercent'>88%</div>
                                    </div>
                                    <div className='flexDiv returnOrder mt-3'>
                                        <h4 className='orderDeliverText'>Delivery Order</h4>
                                        <div className='deliverPercent'>88%</div>
                                    </div>
                                    <div className='flexDiv cancelOrder mt-3'>
                                        <h4 className='orderDeliverText'>Delivery Order</h4>
                                        <div className='deliverPercent'>88%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-8'>
                            <div className=' deliveryOuter deliverRight ms-0'>
                                <div className='deliverGraphSection'>
                                    <form className='deliverCheck'>
                                        <div class="form-group checkBlue">
                                            <input type="checkbox" id="Incoming Orders" />
                                            <label for="Incoming Orders" className='appointSub  m-0'>Incoming Orders</label>
                                        </div>
                                        <div class="form-group checkBlue checkPurple">
                                            <input type="checkbox" id="Delivery Orders" />
                                            <label for="Delivery Orders" className='appointSub  m-0'>Delivery Orders</label>
                                        </div>
                                        <div class="form-group checkBlue checkYellow">
                                            <input type="checkbox" id="Returned Orders" />
                                            <label for="Returned Orders" className='appointSub  m-0'>Returned Orders</label>
                                        </div>
                                        <div class="form-group checkBlue checkRed">
                                            <input type="checkbox" id="Cancelled Orders" />
                                            <label for="Cancelled Orders" className='appointSub  m-0'>Cancelled Orders</label>
                                        </div>
                                    </form>
                                    <div className='barChartGraph'>
                                        <Image src={Images.barChart} alt="barChart image" className="barChartImg" />
                                    </div>
                                </div>
                                <div className='deliverOrderData'>
                                    <div className='flexDiv'>
                                        <h4 className="loginMain">Order Deliveries</h4>
                                        <div className='flexTable pointHand'>
                                            <h4 className='confirmBack '>See All</h4>
                                            <Image src={Images.lightArrowRight} alt="lightArrowRight image" className="img-fluid ms-1" />
                                        </div>
                                    </div>
                                    <div className="table-responsive deliverTable">
                                        <table id="DeliverDashboard" className="product_table">
                                            <tbody>
                                                <tr className='product_invoice'>
                                                    <td className="invoice_subhead">
                                                        <div className="nameLocation">
                                                            <h4 className="orderId">Samara Schwansteiger</h4>
                                                            <div className="deliverTableBx">
                                                                <Image
                                                                    src={Images.OrderLocation}
                                                                    alt="location Image"
                                                                    className="img-fluid ms-1"
                                                                />
                                                                <span className="locateDistance">2.5 miles</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="invoice_subhead">
                                                        <div className="itemMoney">
                                                            <h4 className="orderId">3 items</h4>
                                                            <div className="deliverTableBx">
                                                                <Image
                                                                    src={Images.MoneyItem}
                                                                    alt="MoneyItemImage "
                                                                    className="img-fluid ms-1"
                                                                />
                                                                <span className="locateDistance">$500.50
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="invoice_subhead">
                                                        <div className="itemTime">
                                                            <h4 className="orderId">1 hour delivery window</h4>
                                                            <div className="deliverTableBx">
                                                                <Image
                                                                    src={Images.Time}
                                                                    alt="MoneyItemImage "
                                                                    className="img-fluid ms-1"
                                                                />
                                                                <span className="locateDistance">Immediately</span>
                                                            </div>

                                                        </div>
                                                    </td>
                                                    <td className="invoice_subhead">
                                                        <div className="deliveryTime">
                                                            <span className="orderId"> 00:03:06</span>
                                                        </div>
                                                    </td>
                                                    <td className='invoice_subhead'>
                                                        <div className='deliverArrow text-end'>
                                                            <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid ms-1" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='product_invoice'>
                                                    <td className="invoice_subhead">
                                                        <div className="nameLocation">
                                                            <h4 className="orderId">Samara Schwansteiger</h4>
                                                            <div className="deliverTableBx">
                                                                <Image
                                                                    src={Images.OrderLocation}
                                                                    alt="location Image"
                                                                    className="img-fluid ms-1"
                                                                />
                                                                <span className="locateDistance">2.5 miles</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="invoice_subhead">
                                                        <div className="itemMoney">
                                                            <h4 className="orderId">3 items</h4>
                                                            <div className="deliverTableBx">
                                                                <Image
                                                                    src={Images.MoneyItem}
                                                                    alt="MoneyItemImage "
                                                                    className="img-fluid ms-1"
                                                                />
                                                                <span className="locateDistance">$500.50
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="invoice_subhead">
                                                        <div className="itemTime">
                                                            <h4 className="orderId">1 hour delivery window</h4>
                                                            <div className="deliverTableBx">
                                                                <Image
                                                                    src={Images.Time}
                                                                    alt="MoneyItemImage "
                                                                    className="img-fluid ms-1"
                                                                />
                                                                <span className="locateDistance">Immediately</span>
                                                            </div>

                                                        </div>
                                                    </td>
                                                    <td className="invoice_subhead">
                                                        <div className="deliveryTime">
                                                            <span className="orderId"> 00:03:06</span>
                                                        </div>
                                                    </td>
                                                    <td className='invoice_subhead'>
                                                        <div className='deliverArrow text-end'>
                                                            <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid ms-1" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='product_invoice'>
                                                    <td className="invoice_subhead">
                                                        <div className="nameLocation">
                                                            <h4 className="orderId">Samara Schwansteiger</h4>
                                                            <div className="deliverTableBx">
                                                                <Image
                                                                    src={Images.OrderLocation}
                                                                    alt="location Image"
                                                                    className="img-fluid ms-1"
                                                                />
                                                                <span className="locateDistance">2.5 miles</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="invoice_subhead">
                                                        <div className="itemMoney">
                                                            <h4 className="orderId">3 items</h4>
                                                            <div className="deliverTableBx">
                                                                <Image
                                                                    src={Images.MoneyItem}
                                                                    alt="MoneyItemImage "
                                                                    className="img-fluid ms-1"
                                                                />
                                                                <span className="locateDistance">$500.50
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="invoice_subhead">
                                                        <div className="itemTime">
                                                            <h4 className="orderId">1 hour delivery window</h4>
                                                            <div className="deliverTableBx">
                                                                <Image
                                                                    src={Images.Time}
                                                                    alt="MoneyItemImage "
                                                                    className="img-fluid ms-1"
                                                                />
                                                                <span className="locateDistance">Immediately</span>
                                                            </div>

                                                        </div>
                                                    </td>
                                                    <td className="invoice_subhead">
                                                        <div className="deliveryTime">
                                                            <span className="orderId"> 00:03:06</span>
                                                        </div>
                                                    </td>
                                                    <td className='invoice_subhead'>
                                                        <div className='deliverArrow text-end'>
                                                            <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid ms-1" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='product_invoice'>
                                                    <td className="invoice_subhead">
                                                        <div className="nameLocation">
                                                            <h4 className="orderId">Samara Schwansteiger</h4>
                                                            <div className="deliverTableBx">
                                                                <Image
                                                                    src={Images.OrderLocation}
                                                                    alt="location Image"
                                                                    className="img-fluid ms-1"
                                                                />
                                                                <span className="locateDistance">2.5 miles</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="invoice_subhead">
                                                        <div className="itemMoney">
                                                            <h4 className="orderId">3 items</h4>
                                                            <div className="deliverTableBx">
                                                                <Image
                                                                    src={Images.MoneyItem}
                                                                    alt="MoneyItemImage "
                                                                    className="img-fluid ms-1"
                                                                />
                                                                <span className="locateDistance">$500.50
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="invoice_subhead">
                                                        <div className="itemTime">
                                                            <h4 className="orderId">1 hour delivery window</h4>
                                                            <div className="deliverTableBx">
                                                                <Image
                                                                    src={Images.Time}
                                                                    alt="MoneyItemImage "
                                                                    className="img-fluid ms-1"
                                                                />
                                                                <span className="locateDistance">Immediately</span>
                                                            </div>

                                                        </div>
                                                    </td>
                                                    <td className="invoice_subhead">
                                                        <div className="deliveryTime">
                                                            <span className="orderId"> 00:03:06</span>
                                                        </div>
                                                    </td>
                                                    <td className='invoice_subhead'>
                                                        <div className='deliverArrow text-end'>
                                                            <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid ms-1" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='product_invoice'>
                                                    <td className="invoice_subhead">
                                                        <div className="nameLocation">
                                                            <h4 className="orderId">Samara Schwansteiger</h4>
                                                            <div className="deliverTableBx">
                                                                <Image
                                                                    src={Images.OrderLocation}
                                                                    alt="location Image"
                                                                    className="img-fluid ms-1"
                                                                />
                                                                <span className="locateDistance">2.5 miles</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="invoice_subhead">
                                                        <div className="itemMoney">
                                                            <h4 className="orderId">3 items</h4>
                                                            <div className="deliverTableBx">
                                                                <Image
                                                                    src={Images.MoneyItem}
                                                                    alt="MoneyItemImage "
                                                                    className="img-fluid ms-1"
                                                                />
                                                                <span className="locateDistance">$500.50
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="invoice_subhead">
                                                        <div className="itemTime">
                                                            <h4 className="orderId">1 hour delivery window</h4>
                                                            <div className="deliverTableBx">
                                                                <Image
                                                                    src={Images.Time}
                                                                    alt="MoneyItemImage "
                                                                    className="img-fluid ms-1"
                                                                />
                                                                <span className="locateDistance">Immediately</span>
                                                            </div>

                                                        </div>
                                                    </td>
                                                    <td className="invoice_subhead">
                                                        <div className="deliveryTime">
                                                            <span className="orderId"> 00:03:06</span>
                                                        </div>
                                                    </td>
                                                    <td className='invoice_subhead'>
                                                        <div className='deliverArrow text-end'>
                                                            <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid ms-1" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='product_invoice'>
                                                    <td className="invoice_subhead">
                                                        <div className="nameLocation">
                                                            <h4 className="orderId">Samara Schwansteiger</h4>
                                                            <div className="deliverTableBx">
                                                                <Image
                                                                    src={Images.OrderLocation}
                                                                    alt="location Image"
                                                                    className="img-fluid ms-1"
                                                                />
                                                                <span className="locateDistance">2.5 miles</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="invoice_subhead">
                                                        <div className="itemMoney">
                                                            <h4 className="orderId">3 items</h4>
                                                            <div className="deliverTableBx">
                                                                <Image
                                                                    src={Images.MoneyItem}
                                                                    alt="MoneyItemImage "
                                                                    className="img-fluid ms-1"
                                                                />
                                                                <span className="locateDistance">$500.50
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="invoice_subhead">
                                                        <div className="itemTime">
                                                            <h4 className="orderId">1 hour delivery window</h4>
                                                            <div className="deliverTableBx">
                                                                <Image
                                                                    src={Images.Time}
                                                                    alt="MoneyItemImage "
                                                                    className="img-fluid ms-1"
                                                                />
                                                                <span className="locateDistance">Immediately</span>
                                                            </div>

                                                        </div>
                                                    </td>
                                                    <td className="invoice_subhead">
                                                        <div className="deliveryTime">
                                                            <span className="orderId"> 00:03:06</span>
                                                        </div>
                                                    </td>
                                                    <td className='invoice_subhead'>
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
                        </div>
                    </div>
                </div>
                <DeliveryRightSidebar />
            </div>
        </>
    )
}

export default DeliverDashboard