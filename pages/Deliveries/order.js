import React from 'react'
import DeliveryRightSidebar from '../../components/commanComonets/Delivery/deliveryRightSidebar'
import * as Images from "../../utilities/images"
import Image from "next/image";

const Order = () => {
    return (
        <>
            <div className='deliverySection deliverOrderSection'>
                <div className='deliverMain w-100'>
                    <div className='row '>
                        <div className='col-lg-6'>
                            <div className='deliverOrderLeft deliveryOuter me-0'>
                                <div className='flexTable'>
                                    <Image src={Images.boldLeftArrow} alt="MoneyItemImage " className="img-fluid me-2" />
                                    <h4 className='loginMain text-start m-0'>Orders to Review</h4>
                                </div>
                                <div className='table-responsive'>
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
                                    </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className=' deliveryOuter deliverOrderRight ms-0'>

                            </div>
                        </div>
                    </div>
                </div>
                <DeliveryRightSidebar />
            </div>
        </>
    )
}

export default Order