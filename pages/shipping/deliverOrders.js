import React from 'react'
import DeliveryRightSidebar from '../../components/commanComonets/Delivery/deliveryRightSidebar'
import * as Images from "../../utilities/images"
import Image from "next/image";

const DeliverOrders = () => {
    return (
        <>
            <div className='shipDeliverOrder'>
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
                                <table id="" className="orderDeliverTable">
                                    <thead className='invoiceHeadingBox'>
                                        <tr>
                                            <th className='invoiceHeading'>#</th>
                                            <th className='invoiceHeading'>Client/Items</th>
                                            <th className='invoiceHeading'>Delivery Type/Returning Time</th>
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
                                            <td className='invoice_subhead verticalBase'>
                                                <h4 className='assignId'>#7869YZ</h4>
                                            </td>
                                            <td className="invoice_subhead">
                                                <div className="nameLocation">
                                                    <h4 className="assignId">Samara Schwansteiger</h4>
                                                    <div className="deliverTableBx">
                                                        <Image
                                                            src={Images.OrderLocation}
                                                            alt="location Image"
                                                            className="img-fluid ms-1"
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
                                                            className="img-fluid ms-1"
                                                        />
                                                        <span className="locateDistance">$500.50
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="invoice_subhead">
                                                <div className='expresSaver'>
                                                    <Image src={Images.shipFed} alt="pickupImg image" className="img-fluid shipPickImg m-0" />
                                                    <div className='subSaver'>
                                                        <h4 className='assignId'>FedEx Express Saver</h4>
                                                        <div className='immediateBox mt-1'>
                                                            <Image src={Images.Fast} alt="deliverFast image" className="img-fluid m-0" />
                                                            <h4 className='immediateText'>3 Days Shipping</h4>
                                                        </div>
                                                        <div className="itemTime mt-3">
                                                            <h4 className="assignId">Shipped</h4>
                                                            <div className="orderDeliverTime">
                                                                <Image
                                                                    src={Images.deliverTime}
                                                                    alt="deliverTime image "
                                                                    className="img-fluid mb-1"
                                                                />
                                                                <span className="immediateText ">In 05:59 min</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </td>
                                            <td className='invoice_subhead verticalBase'>
                                                <div className='deliverArrow '>
                                                    <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid " />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'></div>
                </div>
                <DeliveryRightSidebar />
            </div>
        </>
    )
}

export default DeliverOrders