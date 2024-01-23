import React, { useEffect, useState } from 'react'
import * as Images from "../../utilities/images"
import Image from "next/image";
import ShipRightSidebar from '../../components/commanComonets/Shipping/shipRightSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoginAuth } from '../../redux/slices/auth';
import { getShippingGraphData, getShippingsSidebarCount, getShippingsStatus, getShippingstodayStatus, selectsShippingData } from '../../redux/slices/shipping';
import { getCurrentOrderStatus, getOrderStat, getOrdersList, getTodayOrderCount } from '../../redux/slices/delivery';
import NoOrderFound from '../../components/NoOrderFound';
import OrderListItem from '../Deliveries/Component/OrderListItem';
import { useRouter } from 'next/router';
import ChartCommon from '../../components/commanComonets/ChartCommon';

const Shipping = () => {
    const dispatch = useDispatch()
    const router = useRouter();
    const authData = useSelector(selectLoginAuth);
    const [orderLoading, setOrderLoading] = useState(false);
    const [orderData, setOrderData] = useState([]);
    const [orderCount, setOrderCount] = useState([]);
    const [todayOrdersCount, setTodayOrdersCount] = useState([]);
    const [currentOrderCount, setcurrentOrderCount] = useState([]);
    console.log(todayOrdersCount, 'todayOrdersCount');
    const shippingData = useSelector(selectsShippingData);
    const [orderStatData, setOrderStatData] = useState([]);
    const [graphData, setGraphData] = useState([]);
    const sellerUid = authData?.usersInfo?.payload?.uniqe_id;
    const customerSidebardata = shippingData?.sidebarCountData?.payload
    const [orderListType, setOrderListType] = useState({
        status: "0",
        title: "Order to Review"
    });
    console.log(orderListType, 'list type');
    const itemPressHandler = (id) => {
        router.push({
            pathname: "/shipping/orderReview",
            query: {
                id: id,
                status: orderListType?.status,
                title: orderListType?.title
            },
        });
    };

    const chartData = {
        labels: graphData?.labels, // Assuming x values are the same for all datasets
        datasets: [
            {
                fill: true,
                label: 'Incoming Orders',
                data: graphData?.datasets ? graphData?.datasets[0]?.data : "",
                borderColor: '#275AFF',
                backgroundColor: '#275AFF',
                cubicInterpolationMode: 'monotone',
            },
            {
                fill: true,
                label: 'Delivery Orders',
                data: graphData?.datasets ? graphData?.datasets[1]?.data : "",
                borderColor: '#D33300',
                backgroundColor: '#D33300',
                cubicInterpolationMode: 'monotone',
            },
            {
                fill: true,
                label: 'Returned Orders',
                data: graphData?.datasets ? graphData?.datasets[0]?.data : "",
                borderColor: '#275AFF',
                backgroundColor: '#275AFF',
                cubicInterpolationMode: 'monotone',
            },
            {
                fill: true,
                label: 'Cancelled Orders',
                data: graphData?.datasets ? graphData?.datasets[1]?.data : "",
                borderColor: '#D33300',
                backgroundColor: '#D33300',
                cubicInterpolationMode: 'monotone',
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
            },
            y: {
                type: 'linear',
                position: 'left',
            },
        },
    };

    const getAllShippingOrdeshandle = () => {
        let orderListParam = {
            seller_id: sellerUid,
            status: orderListType?.status,
            delivery_option: "4"
        };
        dispatch(
            getOrdersList({
                ...orderListParam,
                cb(res) {
                    if (res) {
                        setOrderData(res?.data?.payload?.data);
                    }
                },
            })
        );
    }

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
    const todayOrdersHandle = () => {
        let countparams = {
            seller_id: sellerUid,
            type: 'shipping'
        };
        dispatch(
            getShippingstodayStatus({
                ...countparams,
                cb(res) {
                    if (res) {
                        console.log(res, 'ressssssssss');
                        setTodayOrdersCount(res?.data?.payload);
                    }
                },
            })
        );
    }
    const orderStatHandle = () => {
        let orderStatParam = {
            seller_id: sellerUid,
            filter: "week",
            delivery_option: "4",
        };
        dispatch(
            getOrderStat({
                ...orderStatParam,
                cb(res) {
                    if (res) {
                        setOrderStatData(res?.data?.payload?.data);
                    }
                },
            })
        );
    }
    const currentStatusHandle = () => {
        let params = {
            seller_id: sellerUid,
            type: 'current'
        };
        dispatch(
            getShippingsStatus({
                ...params,
                cb(res) {
                    if (res) {
                        setcurrentOrderCount(res?.data?.payload);
                    }
                },
            })
        );
    }
    const ordersGraphHandle = () => {
        let params = {
            seller_id: sellerUid,
            filter: "year",
            delivery_option: "4",
        };
        dispatch(
            getShippingGraphData({
                ...params,
                cb(res) {
                    if (res) {
                        setGraphData(res?.data?.payload);
                    }
                },
            })
        );
    }
    useEffect(() => {
        if (sellerUid) {
            getAllShippingOrdeshandle()
            getAllShippingOrdesCountHandle()
            todayOrdersHandle()
            currentStatusHandle()
            orderStatHandle()
            ordersGraphHandle()
        }
    }, [sellerUid, orderListType]);


    return (
        <div className='shippingSection'>
            <div className='row '>
                <div className='col-lg-4'>
                    <div className='deliverLeft deliveryOuter me-0'>
                        <div className='deliverOrderStatus'>
                            <h4 className='customerLink text-start'>Today Shipping Status</h4>
                            {
                                todayOrdersCount?.length > 0 ?
                                    todayOrdersCount?.map((v, i) => {
                                        return (
                                            <div className="flexDiv mt-4">
                                                <h4 className="deliverMainText">{v?.type === "shipping_orders_count" ? "Shipping Orders" : "Shipped Orders"}</h4>
                                                <h4 className="deliverMainText">{v?.count}</h4>
                                            </div>
                                        )
                                    }) : <></>
                            }
                        </div>
                        <div className='currentStatus'>
                            <h4 className='customerLink text-start'>Current Status</h4>
                            <div className='currentSubStatus'>
                                {
                                    currentOrderCount?.length > 0 ?
                                        currentOrderCount?.map((v, i) => {
                                            return (
                                                <div key={i} className='pickupDeliver'>
                                                    <Image width={50} height={50} src={v?.shipping_image} alt="pickupImg image" className="img-fluid shipPickImg" />
                                                    <div className='expressMain'>
                                                        <h4 className='amountText ms-0'>{v?.shiping_name}</h4>
                                                        <h4 className='providerSubText text-start mt-2'> {v?.count}</h4>
                                                    </div>
                                                </div>
                                            )
                                        }) : <></>
                                }
                            </div>
                        </div>
                        <div className='deliverOrder'>
                            <h4 className='customerLink text-start'>Orders</h4>
                            <div className="deliverGraph" >
                                <Image src={Images.garphCircle} alt="pickupImg image" className="img-fluid graphCircleImg" />
                            </div>
                            {
                                orderStatData?.length > 0 ?
                                    orderStatData?.filter(item => (item?.title === 'Deliverd Order' || item?.title === 'Returned Order' || item?.title === 'Cancelled Order'))?.map((v, i) => {
                                        return (
                                            <div key={i} className={`flexDiv ${v?.title === 'Returned Order' ? "returnOrder" : v?.title === 'Cancelled Order' ? "cancelOrder" : ""} mt-3`}>
                                                <h4 className='orderDeliverText'>{v?.title}</h4>
                                                <div className='deliverPercent'>{v?.percentage}%</div>
                                            </div>
                                        )
                                    }) : <></>
                            }
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
                                {/* <Image src={Images.barChart} alt="barChart image" className="barChartImg" /> */}
                                {/* <Line data={chartData} options={options} /> */}
                                <ChartCommon
                                    className="col-md-12"
                                    header=""
                                    options={options}
                                    data={chartData}
                                    chartType="Line"
                                />
                            </div>
                        </div>
                        <div className='deliverOrderData'>
                            <div className='flexDiv'>
                                <h4 className="loginMain">{orderListType?.title}</h4>
                                <div className='flexTable pointHand'>
                                    <h4 className='confirmBack '>See All</h4>
                                    <Image src={Images.lightArrowRight} alt="lightArrowRight image" className="img-fluid ms-1" />
                                </div>
                            </div>
                            <div className="table-responsive deliverTable">
                                <table id="DeliverDashboard" className="deliverDashboardTable">
                                    <tbody>
                                        {
                                            orderData?.length > 0 ?
                                                orderData?.map((item, i) => {
                                                    return (
                                                        <tr key={i} className='product_invoice'>
                                                            <td className='invoice_subhead verticalBase'>
                                                                <h4 className='orderId'>#{item?.id}</h4>
                                                            </td>
                                                            <td className="invoice_subhead">
                                                                <div className="nameLocation">
                                                                    <h4 className="assignId">{item?.user_details?.firstname + " " + item?.user_details?.lastname}</h4>
                                                                    <div className="deliverTableBx">
                                                                        <Image
                                                                            src={Images.OrderLocation}
                                                                            alt="location Image"
                                                                            className="img-fluid ms-1"
                                                                        />
                                                                        <span className="locateDistance">{item?.distance ? `${item.distance} miles` : "0"}</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="invoice_subhead">
                                                                <div className="itemMoney">
                                                                    <h4 className="assignId">{item?.total_items} items</h4>
                                                                    <div className="deliverTableBx">
                                                                        <Image
                                                                            src={Images.MoneyItem}
                                                                            alt="MoneyItemImage "
                                                                            className="img-fluid ms-1"
                                                                        />
                                                                        <span className="locateDistance">${item?.payable_amount || "00"}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="invoice_subhead">
                                                                {
                                                                    item?.shipping_details &&
                                                                    <div className='expresSaver'>
                                                                        <Image width={50} height={50} src={item?.shipping_details?.image} alt="pickupImg image" className="img-fluid shipPickImg m-0" />
                                                                        <div className='subSaver'>
                                                                            <h4 className='assignId'>{item?.shipping_details?.title}</h4>
                                                                            <div className='immediateBox mt-1'>
                                                                                <Image src={Images.Fast} alt="deliverFast image" className="img-fluid m-0" />
                                                                                <h4 className='immediateText'>3 Days Shipping</h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>}
                                                            </td>
                                                            <td className='invoice_subhead verticalBase'>
                                                                <div className='deliverArrow text-end'>
                                                                    <Image onClick={() => itemPressHandler(item?.id)} src={Images.RightArrow} alt="RightArrow image" className="img-fluid ms-1" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                                :
                                                <NoOrderFound />
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ShipRightSidebar data={orderCount} setOrderListType={setOrderListType} />
        </div>
    )
}

export default Shipping