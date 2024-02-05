import React, { useEffect, useState } from 'react'
import DeliveryRightSidebar from '../../components/commanComonets/Delivery/deliveryRightSidebar'
import * as Images from "../../utilities/images"
import Image from "next/image";
import CustomModal from '../../components/customModal/CustomModal';
import ConfirmShip from '../../components/modals/shipping/confirmShip';
import { useRouter } from 'next/router';
import { selectLoginAuth } from '../../redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';
import NoOrderFound from '../../components/NoOrderFound';
import { getOrderDetailsById } from '../../redux/slices/dashboard';
import moment from 'moment-timezone';
import { changeStatusOfOrder, getShippingsSidebarCount, getOrdersList } from '../../redux/slices/shipping';
import ShipRightSidebar from '../../components/commanComonets/Shipping/shipRightSidebar';
import PrintLabelModal from '../../components/modals/shipping/printLabelModal';
import { flushSync } from 'react-dom';
import ReactDatePicker from "react-datepicker";

const OrderReview = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { id, status, title } = router?.query
    console.log(id, status, title, 'query data');
    const authData = useSelector(selectLoginAuth);
    const [acceptLoading, setAcceptLoading] = useState(false);
    const [declineLoading, setDeclineLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false);
    const sellerUid = authData?.usersInfo?.payload?.uniqe_id;
    const [selectedItemId, setSelectedItemId] = useState(id)
    const [orderCount, setOrderCount] = useState([]);
    console.log(selectedItemId, 'iddddddddddddddd');
    const [singleOrderData, setSingleOrderData] = useState('');
    console.log(singleOrderData, 'single order data');
    const [orderData, setOrderData] = useState([]);
    const [printingUrl, setPrintingUrl] = useState("")
    const [key, setKey] = useState(Math.random());
    const [modalDetail, setModalDetail] = useState({
        show: false,
        title: "",
        flag: "",
    });
    const [orderListType, setOrderListType] = useState({
        status: status,
        title: title
    });
    const [selectedDate, setSelectedDate] = useState(null);
    console.log(orderListType, 'orderListType');

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleOnCloseModal = () => {
        setModalDetail({
            show: false,
            title: "",
            flag: "",
        });
        setKey(Math.random());
    };

    const handleUserProfile = (flag) => {
        setModalDetail({
            show: true,
            flag: flag,
            type: flag,
        });
        setKey(Math.random());
    };

    const getAllShippingOrdesCountHandle = () => {
        let orderParam = {
            seller_id: sellerUid,
            delivery_option: "4"
        };
        dispatch(
            getShippingsSidebarCount({
                ...orderParam,
                cb(res) {
                    if (res) {
                        setOrderCount(res?.data?.payload);
                    }
                },
            })
        );
    }

    const getAllShippingOrdeshandle = (status) => {
        let orderListParam = {
            seller_id: sellerUid,
            status: orderListType?.status,
            delivery_option: "4"
        };
        if (selectedDate) {
            orderListParam = {
                ...orderListParam, date: moment(selectedDate).format("YYYY-MM-DD")
            }
        }
        selectedDate ? setLoading1(true) : setLoading(true)
        dispatch(
            getOrdersList({
                ...orderListParam,
                cb(res) {
                    if (res) {
                        setLoading(false)
                        setLoading1(false)
                        setOrderData(res?.data?.payload?.data);
                        if (res?.data?.payload?.data?.length > 0) {
                            setSingleOrderData(res?.data?.payload?.data?.find(item => item?.id == selectedItemId) ? res?.data?.payload?.data?.find(item => item?.id == selectedItemId) : res?.data?.payload?.data[0])
                        } else {
                            if (orderListType?.title === "Order to Review" && status == 3) {
                                setOrderListType({
                                    title: "Printing Label",
                                    status: "3"
                                })
                                return false
                            }
                            if (orderListType?.title === "Order to Review" && status == 8) {
                                setOrderListType({
                                    title: "Rejected/Cancelled",
                                    status: "7,8"
                                })
                                return false
                            }
                            if (orderListType?.title === "Printing Label") {
                                setOrderListType({
                                    title: "Shipped",
                                    status: "4"
                                })
                                return false
                            }
                        }
                    }
                },
            })
        );
    }

    const acceptHandler = (status) => {
        let params = {
            status: status,
            orderId: singleOrderData?.id
        };
        status === 8 ? setDeclineLoading(true) : setAcceptLoading(true)
        dispatch(
            changeStatusOfOrder({
                ...params,
                cb(res) {
                    if (res) {
                        localStorage.setItem("status",status)
                        setAcceptLoading(false)
                        setDeclineLoading(false)
                        getAllShippingOrdeshandle(status)
                        getAllShippingOrdesCountHandle()
                    }
                },
            })
        );
    }

    const singleOrderDetailsChangeHandle = (id) => {
        if (orderData?.length > 0) {
            setSingleOrderData(orderData?.find(item => item?.id == id))
        }
    }

    useEffect(() => {
        if (sellerUid) {
            getAllShippingOrdeshandle(null)
            getAllShippingOrdesCountHandle()
        }
    }, [sellerUid, selectedDate, orderListType]);

    return (
        <>
            <div className='shippingSection shipOrderSection afterViewOuter'>
                {
                    loading ? (
                        <>
                            <div className="loaderOuter">
                                <div className="spinner-grow loaderSpinner text-center my-5"></div>
                            </div>
                        </>
                    ) :
                        <div className='deliverMain w-100'>
                            <div className='row '>
                                <div className='col-xl-6 col-lg-12'>
                                    <div className='deliverOrderLeft deliveryOuter me-0'>
                                        <div className='flexTable'>
                                            <Image src={Images.boldLeftArrow} style={{ cursor: "pointer" }} onClick={() => router.push('/shipping')} alt="boldLeftArrow " className="img-fluid me-2" />
                                            <h4 className='loginMain text-start m-0'>Shipping {orderListType?.title === 'Returned' ? "Order Returns" : orderListType?.title === 'Shipped' ? "Tracking Orders" : orderListType?.title}</h4>
                                        </div>
                                        {
                                            (orderListType?.status != 0) && (orderListType?.status != 7) && (orderListType?.status != 8) &&
                                            <div className='appointmenMonth cancelCalendar'>
                                                <div className='flexTable'>
                                                    <Image src={Images.calendarLight} alt='calendarimage' className='img-fluid' />
                                                    {/* <span className='monthText ms-2'>Today</span> */}
                                                    <div className='shipDate ms-1' >
                                                        <ReactDatePicker
                                                            selected={selectedDate}
                                                            onChange={handleDateChange}
                                                            dateFormat="MM/dd/yyyy"
                                                            placeholderText="Select date"
                                                        />
                                                    </div>
                                                </div>
                                                <Image src={Images.arrowDown} alt='arrowDown image' className='img-fluid text-end' />
                                            </div>
                                        }
                                        {
                                            loading1 ? (
                                                <>
                                                    <div className="loaderOuter">
                                                        <div className="spinner-grow loaderSpinner text-center my-5"></div>
                                                    </div>
                                                </>
                                            ) :
                                                <div className='table-responsive mt-3'>
                                                    <table id={orderListType?.title === "Order to Review" ? "ordersToReview" :
                                                        orderListType?.title === "Order Accepted" ? "acceptedOrders" :
                                                            orderListType?.title === "Order Prepared" ? "acceptedPrepared" :
                                                                orderListType?.title === "Printing Label" ? "printingLabel" :
                                                                    orderListType?.title === "Shipped" ? "shippedOrders" :
                                                                        orderListType?.title === "Rejected/Cancelled" ? "rejectOrder" :
                                                                            orderListType?.title === "Returned" ? "returnedOrder"
                                                                                : ""} className="orderDeliverTable shipTrackTable">
                                                        {
                                                            (orderListType?.status != 0) && (orderListType?.status != 3) && (orderListType?.status != "7,8") &&
                                                            <thead className='invoiceHeadingBox'>
                                                                <tr>
                                                                    <th className='invoiceHeading'>#</th>
                                                                    <th className='invoiceHeading'>Client/Items</th>
                                                                    <th className='invoiceHeading'>Delivery Type/{orderListType?.status == 9 ? "Return" : 'Shipped'} Time</th>
                                                                    <th className='invoiceHeading'></th>
                                                                </tr>
                                                            </thead>
                                                        }
                                                        <tbody>
                                                            {
                                                                (orderListType?.status != 0) && (orderListType?.status != 7) && (orderListType?.status != 8) &&
                                                                <tr>
                                                                    <td colSpan={4} className='innerHead'>
                                                                        <h4 className='processText'>In Process</h4>
                                                                    </td>
                                                                </tr>}
                                                            {
                                                                orderData?.length > 0 ?
                                                                    orderData?.map((item, i) => {
                                                                        return (
                                                                            <tr key={i} className={`product_invoice ${singleOrderData?.id == item?.id ? 'active' : ""}`} onClick={() => singleOrderDetailsChangeHandle(item?.id)}>
                                                                                <td className='invoice_subhead verticalBase'>
                                                                                    <h4 className='assignId'>#{item?.invoices?.invoice_number}</h4>
                                                                                    {(item?.status == 8 || item?.status == 7) &&
                                                                                        <div className='cancellingTime mt-5'>
                                                                                            <h4 className='assignId'>Cancelled at:</h4>
                                                                                            <div className='canceltimeBx'>
                                                                                                <Image src={Images.cancelPackage} alt="cancelUser image" className="img-fluid" />
                                                                                                <div className='timeAlert'>
                                                                                                    <h4 className='cancelBold'>{item?.status_desc?.status_7_updated_at ? moment(item?.status_desc?.status_7_updated_at).format("DD MMM YY") : moment(item?.status_desc?.status_8_updated_at).format("DD MMM YY")}</h4>
                                                                                                    <h4 className='cancelLight'> {item?.status_desc?.status_7_updated_at ? moment(item?.status_desc?.status_7_updated_at).format("hh : mm a") : moment(item?.status_desc?.status_8_updated_at).format("hh : mm a")}</h4>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                </td>
                                                                                <td className="invoice_subhead verticalBase">
                                                                                    <div className="nameLocation">
                                                                                        <h4 className="assignId">{item?.user_details?.firstname + " " + item?.user_details?.lastname}</h4>
                                                                                        <div className="deliverTableBx">
                                                                                            <Image
                                                                                                src={Images.OrderLocation}
                                                                                                alt="location Image"
                                                                                                className="img-fluid m-0"
                                                                                            />
                                                                                            <span className="locateDistance">{item?.distance ? `${item.distance} miles` : "0"}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    {(item?.status > 3) &&
                                                                                        <div className="itemMoney mt-4">
                                                                                            <h4 className="assignId">{item?.total_items} items</h4>
                                                                                            <div className="deliverTableBx">
                                                                                                <Image
                                                                                                    src={Images.MoneyItem}
                                                                                                    alt="MoneyItemImage "
                                                                                                    className="img-fluid m-0"
                                                                                                />
                                                                                                <span className="locateDistance">${item?.payable_amount || "00"}
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                </td>
                                                                                {(item?.status == 0) || (item?.status == 3) ?
                                                                                    <td className="itemMoney mt-4">
                                                                                        <div className="itemMoney">
                                                                                            <h4 className="assignId">{item?.total_items} items</h4>
                                                                                            <div className="deliverTableBx">
                                                                                                <Image
                                                                                                    src={Images.MoneyItem}
                                                                                                    alt="MoneyItemImage "
                                                                                                    className="img-fluid m-0"
                                                                                                />
                                                                                                <span className="locateDistance">${item?.payable_amount || "00"}
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td> : <></>}
                                                                                <td className="invoice_subhead">
                                                                                    {
                                                                                        item?.shipping_details &&
                                                                                        <div className='expresSaver'>
                                                                                            <Image width={50} height={50} src={item?.shipping_details?.image} alt="pickupImg image" className="img-fluid shipPickImg m-0" />
                                                                                            <div className='subSaver'>
                                                                                                <h4 className='assignId'>{item?.shipping_details?.title}</h4>
                                                                                                {/* <div className='immediateBox mt-1'>
                                                                                            <Image src={Images.Fast} alt="deliverFast image" className="img-fluid m-0" />
                                                                                            <h4 className='immediateText'>3 Days Shipping</h4>
                                                                                        </div> */}
                                                                                            </div>
                                                                                        </div>}
                                                                                    {(item?.status == 4) || (item?.status == 5) ?
                                                                                        <div className="itemTime mt-3">
                                                                                            <h4 className="assignId">Shipped</h4>
                                                                                            <div className="orderDeliverTime">
                                                                                                <Image
                                                                                                    src={Images.deliverTime}
                                                                                                    alt="deliverTime image "
                                                                                                    className="img-fluid mb-1"
                                                                                                />
                                                                                                <span className="immediateText ">{moment(item?.status_desc?.status_4_updated_at).format("dddd DD MMM, YYYY | hh : mm a")}</span>
                                                                                            </div>
                                                                                        </div> :
                                                                                        (item?.status == 7) || (item?.status == 8) ?
                                                                                            <div className='itemType mt-4'>
                                                                                                <h4 className='assignId'>Cancelled by</h4>
                                                                                                <div className='cancelUserBx mt-1'>
                                                                                                    <Image src={Images.cancelUser} alt="cancelUser image" className="img-fluid" />
                                                                                                    <h4 className='cancelText'>{item?.status == 7 ? 'User' : "Seller"}</h4>
                                                                                                </div>
                                                                                            </div> :
                                                                                            (item?.status == 9) ?
                                                                                                <div className="itemTime mt-3">
                                                                                                    <h4 className="assignId">Return Within:</h4>
                                                                                                    <div className="orderDeliverTime">
                                                                                                        <Image
                                                                                                            src={Images.deliverTime}
                                                                                                            alt="deliverTime image "
                                                                                                            className="img-fluid mb-1"
                                                                                                        />
                                                                                                        <span className="immediateText ">In 05:59 min</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                                : <></>
                                                                                    }
                                                                                </td>
                                                                                {/* {(item?.status == 7 || item?.status == 8) ?
                                                                            <td className="invoice_subhead verticalBase">
                                                                                
                                                                            </td> : <></>
                                                                        } */}
                                                                                <td className='invoice_subhead verticalBase'>
                                                                                    <div className='deliverArrow text-end'>
                                                                                        <Image src={Images.RightArrow} alt="RightArrow image" className="img-fluid ms-1" />
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        )
                                                                    }) :
                                                                    <NoOrderFound />
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>}
                                    </div>
                                </div>
                                <div className='col-xl-6 col-lg-12'>
                                    <div className=' deliveryOuter deliverOrderRight ms-0'>
                                        <div className='orderLeftInfo'>
                                            <div className='flexTable'>
                                                <figure className='orderAroundImg'>
                                                    <Image width={50} height={50} src={singleOrderData?.user_details?.profile_photo ? singleOrderData?.user_details?.profile_photo : Images.LoginThird} alt="LoginThird image " className="orderPerson" />
                                                </figure>
                                                <div className='returnHeading ms-1'>
                                                    <h4 className='cancelOrderText '>{singleOrderData?.user_details?.firstname + " " + singleOrderData?.user_details?.lastname}</h4>
                                                    <p className='returnPara'>{singleOrderData?.user_details?.current_address?.street_address}</p>
                                                </div>
                                            </div>
                                            {
                                                singleOrderData?.shipping_details?.title &&
                                                <div className='expresSaver'>
                                                    <Image width={50} height={50} src={singleOrderData?.shipping_details?.image} alt="pickupImg image" className="img-fluid shipPickImg m-0" />
                                                    <div className='subSaver'>
                                                        <h4 className='assignId'>{singleOrderData?.shipping_details?.title}</h4>
                                                        {/* <div className='immediateBox mt-1'>
                                                            <Image src={Images.Fast} alt="deliverFast image" className="img-fluid m-0" />
                                                            <h4 className='immediateText'>3 Days Shipping</h4>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                        <hr className='divideBorder my-3' />
                                        <div className='detailScroll  mt-3'>
                                            {
                                                singleOrderData?.order_details?.length > 0 ?
                                                    singleOrderData?.order_details?.map((v, i) => {
                                                        return (
                                                            <div key={i} className='selectedProductDetails'>
                                                                <div className='d-flex productDataInfo'>
                                                                    <Image height={50} width={50} src={v?.product_image} alt="cartFoodImg" className="img-fluid cartFoodImg" />
                                                                    <div className='ps-1'>
                                                                        <p className='aboutProduct'>{v?.product_name}</p>
                                                                        {/* <div className='d-flex'>
                                                                            <article className='productColor'>
                                                                                <span className='Yellow'></span>
                                                                                <span className='Red'></span>
                                                                                <span className='Pink'></span>
                                                                                <span className='Blue'></span>
                                                                                <span className='Black'></span>
                                                                                <span className='White'></span>
                                                                            </article>
                                                                            <span className='productSize ms-2'>Colors / Size</span>
                                                                        </div> */}
                                                                    </div>
                                                                </div>
                                                                <p className='productPriceinvoice dataSpace'>${v?.price}</p>
                                                                <p className='productPriceinvoice dataSpace'>{v?.qty}</p>
                                                                <p className='productPriceinvoice dataSpace'>${(v?.qty) * (v?.price)}</p>
                                                                {/* <article>
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </article> */}
                                                            </div>
                                                        )
                                                    }) :
                                                    singleOrderData?.return_detail?.return_details?.map((v, i) => {
                                                        return (
                                                            <div key={i} className='selectedProductDetails'>
                                                                <div className='d-flex productDataInfo'>
                                                                    <Image height={50} width={50} src={v?.order_details?.product_image} alt="cartFoodImg" className="img-fluid cartFoodImg" />
                                                                    <div className='ps-1'>
                                                                        <p className='aboutProduct'>{v?.order_details?.product_name}</p>
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
                                                                <p className='productPriceinvoice dataSpace'>${v?.order_details?.price}</p>
                                                                <p className='productPriceinvoice dataSpace'>{v?.order_details?.qty}</p>
                                                                <p className='productPriceinvoice dataSpace'>${(v?.order_details?.qty) * (v?.order_details?.price)}</p>
                                                                {/* <article>
                                                        <label className="custom-checkbox">
                                                            <input type="checkbox" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </article> */}
                                                            </div>
                                                        )
                                                    })
                                            }
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-4'>
                                                <div className='OrderBox p-0'>
                                                    <div className="OrderCheckoutBox">
                                                        <p className='orderHeading'>Total Items</p>
                                                        <p className='orderSubHeading'>{singleOrderData?.total_items}</p>
                                                    </div>
                                                    <div className="OrderCheckoutBox">
                                                        <p className='orderHeading'>Order Date</p>
                                                        <p className='orderSubHeading'>{moment.utc(singleOrderData?.created_at).format("MM/DD/YYYY")}</p>
                                                    </div>
                                                    <div className="OrderCheckoutBox">
                                                        <p className='orderHeading'>Order ID</p>
                                                        <p className='orderSubHeading'>#{singleOrderData?.invoices?.invoice_number}</p>
                                                    </div>
                                                    <div className="OrderCheckoutBox">
                                                        <p className='orderHeading'>Payment Method</p>
                                                        <figure className='priceBtn'>
                                                            <Image src={Images.moneyImg} alt="money" className="moneyImg" />
                                                            <span className='ms-1'>{singleOrderData?.mode_of_payment === 'jbr' ? "JBR" : 'Cash'}</span>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-8'>
                                                <div className="productBilling">
                                                    <div className='OrderDiscountBox'>
                                                        <div className='flexBox '>
                                                            <p className='orderHeading'>Sub Total</p>
                                                            <p className='orderSubHeading'>${singleOrderData?.actual_amount}</p>
                                                        </div>
                                                        <div className='flexBox'>
                                                            <p className='orderHeading'>Discount</p>
                                                            <p className='orderSubHeading'>-${singleOrderData?.discount}</p>
                                                        </div>
                                                        {/* <div className='flexBox'>
                                                    <p className='orderHeading'>Other Fees</p>
                                                    <p className='orderSubHeading'>$14,000</p>
                                                </div> */}
                                                        <div className='flexBox'>
                                                            <p className='orderHeading'>Shipping Charge</p>
                                                            <p className='orderSubHeading'>${singleOrderData?.shipping_charge}</p>
                                                        </div>
                                                        <div className='flexBox'>
                                                            <p className='orderHeading'>Tax</p>
                                                            <p className='orderSubHeading'>${singleOrderData?.tax}</p>
                                                        </div>
                                                        <div className='flexBox'>
                                                            <p className='orderHeading'>Tips</p>
                                                            <p className='orderSubHeading'>${singleOrderData?.tips}</p>
                                                        </div>
                                                    </div>
                                                    <div className='OrderTotal'>
                                                        <div className='flexBox'>
                                                            <p className='priceHeading'>Total</p>
                                                            <p className='priceHeading'>${singleOrderData?.payable_amount}</p>
                                                        </div>
                                                        {
                                                            singleOrderData?.status === 0 ?
                                                                <div className='flexBox wrapFlex'>
                                                                    <button onClick={() => acceptHandler(8)} className='declineButton' type='button'>
                                                                        {declineLoading ? <span className="spinner-border spinner-border-sm mx-1"></span> : <></>}
                                                                        Decline</button>
                                                                    <button onClick={() => acceptHandler(3)} type='button' className='BlueBtn w-100'>
                                                                        {acceptLoading ? <span className="spinner-border spinner-border-sm mx-1"></span> : <></>}
                                                                        Accept Order
                                                                        <Image src={Images.ArrowRight} alt="ArrowRight" className="img-fluid ArrowRight" />
                                                                    </button>
                                                                </div> :
                                                                singleOrderData?.status === 3 ?
                                                                    <button onClick={() => { setPrintingUrl(singleOrderData?.label_url); setModalDetail({ show: true, flag: "printLabel" }); setKey(Math.random()); acceptHandler(4) }} type='button ' className='pickupBtn w-100 mt-2'>
                                                                        {acceptLoading ? <span className="spinner-border spinner-border-sm mx-1"></span> : <></>}
                                                                        Print Label
                                                                        <Image src={Images.btnSticker} alt="deliverHand image" className="img-fluid" />
                                                                    </button> :
                                                                    singleOrderData?.status === 4 || singleOrderData?.status === 5 ?
                                                                        <button onClick={() => window.open(singleOrderData?.tracking_info?.url, '_blank')} type='button ' className='pickupBtn w-100 mt-2'>
                                                                            Track Order
                                                                            <Image src={Images.trackOrder} alt="deliverHand image" className="img-fluid" />
                                                                        </button> :
                                                                        singleOrderData?.status === 7 ?
                                                                            <button type='button ' disabled className='cancelUserBtn w-100 mt-2'>
                                                                                {singleOrderData?.is_returned_order ? "Refunded" : "Cancelled"}
                                                                            </button> :
                                                                            singleOrderData?.status === 8 ?
                                                                                <button type='button ' disabled className='pickupBtn w-100 mt-2  justify-content-center'>
                                                                                    Rejected
                                                                                </button> :
                                                                                singleOrderData?.status === 9 ?
                                                                                    <button type='button ' disabled className='pickupBtn w-100 mt-2 justify-content-center'>
                                                                                        Returned
                                                                                    </button>
                                                                                    : <></>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                <ShipRightSidebar data={orderCount} from='orderReview' setSelectedDate={setSelectedDate} setOrderListType={setOrderListType} />
            </div>
            <CustomModal
                key={key}
                show={modalDetail.show}
                backdrop="static"
                showCloseBtn={false}
                isRightSideModal={true}
                mediumWidth={false}
                className={modalDetail.flag === "confirmship" ? "commonWidth customContent" : ""}
                ids={modalDetail.flag === "confirmship" ? "confirmShipModal" : modalDetail.flag === "printLabel" ? "PrintLabel" : ""}
                child={
                    modalDetail.flag === "printLabel" ? (
                        <PrintLabelModal printingUrl={printingUrl}
                            close={() => handleOnCloseModal()}
                        />
                    ) :
                        modalDetail.flag === "confirmship" ? (
                            <ConfirmShip
                                close={() => handleOnCloseModal()}
                            />
                        ) :
                            ""
                }
                header=

                {modalDetail.flag === "confirmship" ?
                    <>

                        <div className='trackingSub headerModal'>
                            <figure className='profileImage '>
                                <Image src={Images.deliverBack} alt="trackingImage" className="confirmImg shipImgReturn" />
                            </figure>
                            <h4 className='shipReturnText mt-2 text-center'>Returned</h4>
                            <p className='verifySub mt-1'>This return has been completed.</p>
                            <p onClick={handleOnCloseModal} className='crossModal'>
                                <Image src={Images.modalCross} alt="modalCross" className="img-fluid" />
                            </p>
                        </div>

                    </> :
                    modalDetail.flag === "printLabel" ?
                        <>
                            <div className='headerLeft'>
                                <h4 className='modalHeading_ me-3'>Print Label</h4>
                            </div>

                            <p style={{ cursor: "pointer" }} onClick={handleOnCloseModal} className='modal_cancel'>
                                {/* <img src={modalCancel} className='ModalCancel' alt='modalcancelImg' /> */}
                                X
                            </p>
                        </>
                        :
                        ''
                }
                onCloseModal={() => handleOnCloseModal()}
            />
        </>
    )
}

export default OrderReview