import React, { useEffect, useState } from 'react'
import * as Images from "../../utilities/images"
import Image from "next/image";
import ShipRightSidebar from '../../components/commanComonets/Shipping/shipRightSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoginAuth } from '../../redux/slices/auth';
import { getShippingsSidebarCount, selectsShippingData } from '../../redux/slices/shipping';
import { getOrdersList } from '../../redux/slices/delivery';

const Shipping = () => {
    const dispatch = useDispatch()
    const authData = useSelector(selectLoginAuth);
    const [orderData, setOrderData] = useState([]);
    console.log(orderData,'orderdataaaaaa');
    const shippingData = useSelector(selectsShippingData);
    const sellerUid = authData?.usersInfo?.payload?.uniqe_id;

    const customerSidebardata = shippingData?.sidebarCountData?.payload

    const getAllShippingOrdeshandle = () => {
        let orderListParam = {
            seller_id: authData?.usersInfo?.payload?.uniqe_id,
            delivery_option: "4"
        };
        dispatch(
            getOrdersList({
                ...orderListParam,
                cb(res) {
                    if (res) {
                        setOrderData(res?.data?.payload);
                    }
                },
            })
        );
    }

    console.log(customerSidebardata, sellerUid, "customersidebar data");
    useEffect(() => {
        if (sellerUid) {
            dispatch(
                getShippingsSidebarCount({
                    "seller_id": sellerUid
                })
            );
        }
    }, [sellerUid]);

    useEffect(() => {
        getAllShippingOrdeshandle()
    }, [])
    return (
        <div className='shippingSection'>
            <div className='row '>
                <div className='col-lg-4'>
                    <div className='deliverLeft deliveryOuter me-0'>
                        <div className='deliverOrderStatus'>
                            <h4 className='customerLink text-start'>Today Shipping Status</h4>
                            <div className='flexDiv mt-4'>
                                <h4 className='deliverMainText'>Shipping Order</h4>
                                <h4 className='deliverMainText'>23</h4>
                            </div>
                            <div className='flexDiv mt-3'>
                                <h4 className='deliverMainText'>Shipped Orders</h4>
                                <h4 className='deliverMainText'>10</h4>
                            </div>
                        </div>
                        <div className='currentStatus'>
                            <h4 className='customerLink text-start'>Current Status</h4>
                            <div className='currentSubStatus'>
                                <div className='pickupDeliver'>
                                    <Image src={Images.shipDhl} alt="pickupImg image" className="img-fluid shipPickImg" />
                                    <div className='expressMain'>
                                        <h4 className='amountText ms-0'>DHL</h4>
                                        <h4 className='providerSubText text-start mt-2'> 17 Shippings</h4>
                                    </div>
                                </div>
                                <div className='pickupDeliver'>
                                    <Image src={Images.shipUps} alt="pickupImg image" className="img-fluid shipPickImg" />
                                    <div className='expressMain'>
                                        <h4 className='amountText ms-0'>UPS</h4>
                                        <h4 className='providerSubText text-start mt-2'> 17 Shippings</h4>
                                    </div>
                                </div>
                                <div className='pickupDeliver'>
                                    <Image src={Images.shipFed} alt="pickupImg image" className="img-fluid shipPickImg" />
                                    <div className='expressMain'>
                                        <h4 className='amountText ms-0'>FedEx</h4>
                                        <h4 className='providerSubText text-start mt-2'> 17 Shippings</h4>
                                    </div>
                                </div>
                                <div className='pickupDeliver'>
                                    <Image src={Images.shipUsps} alt="pickupImg image" className="img-fluid shipPickImg" />
                                    <div className='expressMain'>
                                        <h4 className='amountText ms-0'>USPS</h4>
                                        <h4 className='providerSubText text-start mt-2'>17 Shippings</h4>
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
                                <h4 className='orderDeliverText'>Returned</h4>
                                <div className='deliverPercent'>88%</div>
                            </div>
                            <div className='flexDiv cancelOrder mt-3'>
                                <h4 className='orderDeliverText'>Cancelled</h4>
                                <div className='deliverPercent'>88%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-8'>
                    <div className=' deliveryOuter deliverRight ms-0'>
                        <div className='deliverGraphSection'>
                            <form className='deliverCheck'>
                                <div className="form-group checkBlue">
                                    <input type="checkbox" id="Incoming Orders" />
                                    <label for="Incoming Orders" className='appointSub  m-0'>Incoming Orders</label>
                                </div>
                                <div className="form-group checkBlue checkPurple">
                                    <input type="checkbox" id="Delivery Orders" />
                                    <label for="Delivery Orders" className='appointSub  m-0'>Delivery Orders</label>
                                </div>
                                <div className="form-group checkBlue checkYellow">
                                    <input type="checkbox" id="Returned Orders" />
                                    <label for="Returned Orders" className='appointSub  m-0'>Returned Orders</label>
                                </div>
                                <div className="form-group checkBlue checkRed">
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
                                <table id="DeliverDashboard" className="deliverDashboardTable">
                                    <tbody>
                                        <tr className='product_invoice'>
                                            <td className='invoice_subhead verticalBase'>
                                                <h4 className='orderId'>#7869YZ</h4>
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
                                            </td>
                                            <td className="invoice_subhead">
                                                <div className="itemMoney">
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
                                            <td className='invoice_subhead verticalBase'>
                                                <h4 className='orderId'>#7869YZ</h4>
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
                                            </td>
                                            <td className="invoice_subhead">
                                                <div className="itemMoney">
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
                                            <td className='invoice_subhead verticalBase'>
                                                <h4 className='orderId'>#7869YZ</h4>
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
                                            </td>
                                            <td className="invoice_subhead">
                                                <div className="itemMoney">
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
                                            <td className='invoice_subhead verticalBase'>
                                                <h4 className='orderId'>#7869YZ</h4>
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
                                            </td>
                                            <td className="invoice_subhead">
                                                <div className="itemMoney">
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
                                            <td className='invoice_subhead verticalBase'>
                                                <h4 className='orderId'>#7869YZ</h4>
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
                                            </td>
                                            <td className="invoice_subhead">
                                                <div className="itemMoney">
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
                </div>
            </div>
            <ShipRightSidebar data={customerSidebardata}/>
        </div>
    )
}

export default Shipping