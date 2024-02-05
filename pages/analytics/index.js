import React, { useEffect, useState } from 'react'
import TCRHeader from '../../components/commanComonets/TCRHeader'
import AnalyticsHeader from '../../components/commanComonets/AnalyticsHeader';
import ChartCommon from '../../components/commanComonets/ChartCommon';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoginAuth } from '../../redux/slices/auth';
import { getProfitsData, orderAnalyticsData, totalAnalyticsProductSoldData, totalInventoryDataApi, totalOrderAnalyticsDataApi } from '../../redux/slices/analytics';
import moment from 'moment-timezone';
import AnalyticsRightsidebar from '../../components/commanComonets/analytics/analyticsRightsidebar';
// import {getProfitsData} from "../../redux/slices/analytics"

const Analytics = () => {
    const router = useRouter()
    const [timeSpan, setTimeSpan] = useState("week");
    const [channelSelected, setChannelSelected] = useState({ value: 'all', label: 'All Channels' })
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const dispatch = useDispatch()
    const [analyticsProfitData, setAnalyticsProfitsData] = useState("");
    const [totalInventory, setTotalInventoryData] = useState("")
    const [analyticsOrderData, setAnalyticsOrderData] = useState("");
    const [totalOrderAnalyticsData, setTotalOrderAnalyticsData] = useState("");
    const [totalProductSoldAnalyticsData, setTotalProductSoldAnalyticsData] = useState("");
    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    }
    const auth = useSelector(selectLoginAuth)
    const sellerId = auth?.usersInfo?.payload?.uniqe_id
    const handleChange = (selectedOption) => {
        setChannelSelected(selectedOption)
    };
    function addThousandSeparator(number) {
        return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                border: {
                    dash: [2, 2],
                    display: false,
                    color: "rgba(180, 190, 235, 1)",
                }, // for the grid lines
                beginAtZero: true,
            },
            x: {
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
                ticks: {
                    color: "#7E8AC1",
                },
            },
        }
    };

    const PosOrderAnalytics = {
        labels: analyticsOrderData?.pos_graph?.graph_data?.labels,
        datasets: [
            {
                fill: true,
                label: "Delivered",
                data: analyticsOrderData?.pos_graph?.graph_data?.datasets[0]?.data,
                borderColor: "#4659B5",
                backgroundColor: "#FFFFFF00",
                cubicInterpolationMode: "monotone",
            },
            {
                fill: true,
                label: "Returned",
                data: analyticsOrderData?.pos_graph?.graph_data?.datasets[1]?.data,
                borderColor: "#FCBA30",
                backgroundColor: "#FFFFFF00",
                cubicInterpolationMode: "monotone",
            },
            {
                fill: true,
                label: "Cancelled",
                data: analyticsOrderData?.pos_graph?.graph_data?.datasets[2]?.data,
                borderColor: "#FB466C",
                backgroundColor: "#FFFFFF00",
                cubicInterpolationMode: "monotone",
            },
        ],
    };

    const TotalInventoryAnalytics = {
        labels: [],
        datasets: [
            {
                fill: true,
                label: "Inventory",
                data: [],
                borderColor: "#275AFF",
                backgroundColor: "#FFFFFF00",
                cubicInterpolationMode: "monotone",
            },
        ],
    };

    const DeliveryOrderAnalytics = {
        labels: analyticsOrderData?.delivery_graph?.graph_data?.labels,
        datasets: [
            {
                fill: true,
                label: "Delivered",
                data: analyticsOrderData?.delivery_graph?.graph_data?.datasets[0]?.data,
                borderColor: "#4659B5",
                backgroundColor: "#FFFFFF00",
                cubicInterpolationMode: "monotone",
            },
            {
                fill: true,
                label: "Returned",
                data: analyticsOrderData?.delivery_graph?.graph_data?.datasets[1]?.data,
                borderColor: "#FCBA30",
                backgroundColor: "#FFFFFF00",
                cubicInterpolationMode: "monotone",
            },
            {
                fill: true,
                label: "Cancelled",
                data: analyticsOrderData?.delivery_graph?.graph_data?.datasets[2]?.data,
                borderColor: "#FB466C",
                backgroundColor: "#FFFFFF00",
                cubicInterpolationMode: "monotone",
            },
        ],
    };

    const ShippingOrderAnalytics = {
        labels: analyticsOrderData?.shipping_graph?.graph_data?.labels,
        datasets: [
            {
                fill: true,
                label: "Delivered",
                data: analyticsOrderData?.shipping_graph?.graph_data?.datasets[0]?.data,
                borderColor: "#4659B5",
                backgroundColor: "#FFFFFF00",
                cubicInterpolationMode: "monotone",
            },
            {
                fill: true,
                label: "Returned",
                data: analyticsOrderData?.shipping_graph?.graph_data?.datasets[1]?.data,
                borderColor: "#FCBA30",
                backgroundColor: "#FFFFFF00",
                cubicInterpolationMode: "monotone",
            },
            {
                fill: true,
                label: "Cancelled",
                data: analyticsOrderData?.shipping_graph?.graph_data?.datasets[2]?.data,
                borderColor: "#FB466C",
                backgroundColor: "#FFFFFF00",
                cubicInterpolationMode: "monotone",
            },
        ]
    };

    const GrossProfitAnalytics = {
        labels: analyticsProfitData?.profit?.graph_data?.labels,
        datasets: [
            {
                fill: true,
                label: "Profit",
                data: analyticsProfitData?.profit?.graph_data?.datasets[0]?.data,
                borderColor: "#4659B5",
                backgroundColor: "#FFFFFF00",
                cubicInterpolationMode: "monotone",
            },
        ],
    };
    const RevenueProfitAnalytics = {
        labels: analyticsProfitData?.revenue?.graph_data?.labels,
        datasets: [
            {
                fill: true,
                label: "Profit",
                data: analyticsProfitData?.revenue?.graph_data?.datasets[0]?.data,
                borderColor: "#4659B5",
                backgroundColor: "#FFFFFF00",
                cubicInterpolationMode: "monotone",
            },
        ],
    };
    const CostProfitAnalytics = {
        labels: analyticsProfitData?.cost?.graph_data?.labels,
        datasets: [
            {
                fill: true,
                label: "Profit",
                data: analyticsProfitData?.cost?.graph_data?.datasets[0]?.data,
                borderColor: "#4659B5",
                backgroundColor: "#FFFFFF00",
                cubicInterpolationMode: "monotone",
            },
        ],
    };

    const options1 = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    }

    const TotalOrderAnalytics = {
        labels: totalOrderAnalyticsData?.graphData?.labels,
        datasets: [
            {
                label: "POS",
                data: totalOrderAnalyticsData?.graphData?.datasets[0]?.data,
                backgroundColor: "#4659B5",
                borderRadius: 10,
            },
            {
                label: "Online",
                data: totalOrderAnalyticsData?.graphData?.datasets[1]?.data,
                backgroundColor: "#58C2E8",
                borderRadius: 10,
            },
            {
                label: "Shipping",
                data: totalOrderAnalyticsData?.graphData?.datasets[2]?.data,
                backgroundColor: "#914BEB",
                borderRadius: 10,
            },
        ],
    }

    const TotalProductSoldAnalytics = {
        labels: totalProductSoldAnalyticsData?.graphData?.labels,
        datasets: [
            {
                fill: true,
                label: "Product Sold",
                data: totalProductSoldAnalyticsData?.graphData?.datasets[0]?.data,
                borderColor: "#4659B5",
                backgroundColor: "#FFFFFF00",
                cubicInterpolationMode: "monotone",
            },
        ],
    };

    const newUserDataHandle = () => {
        let params = {
            is_admin: true,
            filter: timeSpan,
            channel: channelSelected.value,
            // seller_id: auth?.usersInfo?.payload?.uniqe_id
            seller_id: sellerId,
        };
        if (startDate && endDate) {
            params = {
                is_admin: true,
                start_date: moment(startDate).format("YYYY-MM-DD"),
                end_date: moment(endDate).format("YYYY-MM-DD"),
                channel: channelSelected.value,
                // seller_id: auth?.usersInfo?.payload?.uniqe_id
                seller_id: sellerId,
            };
        }

        dispatch(getProfitsData({
            ...params,
            cb(res) {
                if (res.status) {
                    setAnalyticsProfitsData(res?.data?.payload);
                }
            },
        })
        );
    };

    const orderAnalyticsHandle = () => {
        let params = {
            filter: timeSpan,
            channel: channelSelected.value,
            // seller_id: auth?.usersInfo?.payload?.uniqe_id
            seller_id: sellerId,
        };
        if (startDate && endDate) {
            params = {
                channel: channelSelected.value,
                // seller_id: auth?.usersInfo?.payload?.uniqe_id
                seller_id: sellerId,
                start_date: moment(startDate).format("YYYY-MM-DD"),
                end_date: moment(endDate).format("YYYY-MM-DD"),
            };
        }
        dispatch(orderAnalyticsData({
            ...params,
            cb(res) {
                if (res.status) {
                    setAnalyticsOrderData(res?.data?.payload);
                }
            },
        })
        );
    };

    const totalOrderAnalyticsHandle = () => {
        let params = {
            filter: timeSpan,
            channel: channelSelected.value,
            // seller_id: auth?.usersInfo?.payload?.uniqe_id
            seller_id: sellerId,
        }

        if (startDate && endDate) {
            params = {
                start_date: moment(startDate).format("YYYY-MM-DD"),
                end_date: moment(endDate).format("YYYY-MM-DD"),
                channel: channelSelected.value,
                // seller_id: auth?.usersInfo?.payload?.uniqe_id
                seller_id: sellerId,
            }
        }

        dispatch(totalOrderAnalyticsDataApi({
            ...params,
            cb(res) {
                if (res.status) {
                    setTotalOrderAnalyticsData(res?.data?.payload);
                }
            },
        })
        );
    };

    const totalProductSoldAnalyticsHandle = () => {
        let params = {
            filter: timeSpan,
            channel: channelSelected.value,
            // seller_id: auth?.usersInfo?.payload?.uniqe_id
            seller_id: sellerId,
        }

        if (startDate && endDate) {
            params = {
                start_date: moment(startDate).format("YYYY-MM-DD"),
                end_date: moment(endDate).format("YYYY-MM-DD"),
                channel: channelSelected.value,
                // seller_id: auth?.usersInfo?.payload?.uniqe_id
                seller_id: sellerId,
            }
        }

        dispatch(totalAnalyticsProductSoldData({
            ...params,
            cb(res) {
                if (res.status) {
                    setTotalProductSoldAnalyticsData(res?.data?.payload);
                }
            },
        })
        );
    };

    const totalInventoryHandle = () => {
        let params = {
            filter: timeSpan,
            channel: channelSelected.value,
            // seller_id: auth?.usersInfo?.payload?.uniqe_id
            seller_id: sellerId,
        };
        if (startDate && endDate) {
            params = {
                channel: channelSelected.value,
                // seller_id: auth?.usersInfo?.payload?.uniqe_id
                seller_id: sellerId,
                start_date: moment(startDate).format("YYYY-MM-DD"),
                end_date: moment(endDate).format("YYYY-MM-DD"),
            };
        }
        dispatch(totalInventoryDataApi({
            ...params,
            cb(res) {
                if (res.status) {
                    setTotalInventoryData(res?.data?.payload);
                }
            },
        })
        );
    };

    console.log(totalInventory, "total inventory data");


    useEffect(() => {
        if (sellerId) {
            newUserDataHandle();
            orderAnalyticsHandle();
            totalOrderAnalyticsHandle();
            totalProductSoldAnalyticsHandle();
            totalInventoryHandle()
        }
    }, [timeSpan, channelSelected, endDate, sellerId]);


    console.log(totalProductSoldAnalyticsData?.totalProductSoldList, "total product sold");
    return (
        <div className="main-container-customers analyticsSection analytics_box">
            <AnalyticsHeader
                timeSpan={timeSpan}
                onTimeSpanSelect={setTimeSpan}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                onDateChange={handleDateChange}
                onChannelChange={handleChange}
                channelSelected={channelSelected}
                startDate={startDate}
                endDate={endDate}
            />
            <div className='analyticOuter'>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mt-4">
                        <div
                            className="chartsOuter"
                            onClick={() => router.push("/analytics/grossProfit")}
                        >
                            <div className='topheadanalytics_'>
                                <h4 className="expectedHeading ">Gross Profits</h4>
                                <h4 className="expectedHeading">
                                    {" "}
                                    $
                                    {addThousandSeparator(
                                        analyticsProfitData?.profit?.total_count
                                    )}
                                </h4>
                            </div>
                            <ChartCommon
                                className="col-md-12"
                                header=""
                                options={options}
                                data={GrossProfitAnalytics}
                                chartType="Line"
                            />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4">
                        <div
                            className="chartsOuter"
                            onClick={() => router.push("/analytics/totalRevenue")}
                        >
                            <div className='topheadanalytics_'>
                                <h4 className="expectedHeading ">Total Revenue</h4>
                                <h4 className="expectedHeading">
                                    {" "}
                                    $
                                    {addThousandSeparator(
                                        analyticsProfitData?.revenue?.total_count
                                    )}
                                </h4>
                            </div>
                            <ChartCommon
                                className="col-md-12"
                                header=""
                                options={options}
                                data={RevenueProfitAnalytics}
                                chartType="Line"
                            />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4">
                        <div
                            className="chartsOuter"
                            onClick={() => router.push("/analytics/totalCosts")}
                        >
                            <div className='topheadanalytics_'>
                                <h4 className="expectedHeading ">Total Costs</h4>
                                <h4 className="expectedHeading">
                                    {" "}
                                    $
                                    {addThousandSeparator(
                                        analyticsProfitData?.cost?.total_count
                                    )}
                                </h4>
                            </div>
                            <ChartCommon
                                className="col-md-12"
                                header=""
                                options={options}
                                data={CostProfitAnalytics}
                                chartType="Line"
                            />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4">
                        <div className="chartsOuter"
                            onClick={() => router.push("/analytics/totalPosOrder")}
                        >
                            <div className='topheadanalytics_'>
                                <h4 className="expectedHeading ">Total POS Orders</h4>
                                <h4 className="expectedHeading">
                                    {" "}
                                    {addThousandSeparator(
                                        analyticsOrderData?.pos_graph?.total_count
                                    )}
                                </h4>
                            </div>
                            <div className='analyticStatus_'>
                                <h3 className='deliveredStatus me-2'><span className='statusDot_'></span>Delivered</h3>
                                <h3 className='deliveredStatus returnstatus me-2'><span className='statusDot_'></span>Returned</h3>
                                <h3 className='deliveredStatus cancelstatus '><span className='statusDot_'></span>Cancelled</h3>
                            </div>
                            <ChartCommon
                                style={{ cursor: "pointer" }}
                                className="col-md-12"
                                header=""
                                options={options}
                                data={PosOrderAnalytics}
                                chartType="Line"
                            />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4">
                        <div className="chartsOuter"
                            onClick={() => router.push("/analytics/totalDeliveryOrder")}>
                            <div className='topheadanalytics_'>
                                <h4 className="expectedHeading ">Total Delivery Orders</h4>
                                <h4 className="expectedHeading">
                                    {" "}
                                    {addThousandSeparator(
                                        analyticsOrderData?.delivery_graph?.total_count
                                    )}
                                </h4>
                            </div>
                            <div className='analyticStatus_'>
                                <h3 className='deliveredStatus me-2'><span className='statusDot_'></span>Delivered</h3>
                                <h3 className='deliveredStatus returnstatus me-2'><span className='statusDot_'></span>Returned</h3>
                                <h3 className='deliveredStatus cancelstatus '><span className='statusDot_'></span>Cancelled</h3>
                            </div>
                            <ChartCommon
                                style={{ cursor: "pointer" }}
                                className="col-md-12"
                                header=""
                                options={options}
                                data={DeliveryOrderAnalytics}
                                chartType="Line"
                            />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4">
                        <div className="chartsOuter"
                            onClick={() => router.push("/analytics/totalShippingOrder")}>
                            <div className='topheadanalytics_'>
                                <h4 className="expectedHeading ">Total Shipping Orders</h4>
                                <h4 className="expectedHeading">
                                    {" "}
                                    {addThousandSeparator(
                                        analyticsOrderData?.shipping_graph?.total_count
                                    )}
                                </h4>
                            </div>
                            <div className='analyticStatus_'>
                                <h3 className='deliveredStatus me-2'><span className='statusDot_'></span>Delivered</h3>
                                <h3 className='deliveredStatus returnstatus me-2'><span className='statusDot_'></span>Returned</h3>
                                <h3 className='deliveredStatus cancelstatus '><span className='statusDot_'></span>Cancelled</h3>
                            </div>
                            <ChartCommon
                                style={{ cursor: "pointer" }}
                                className="col-md-12"
                                header=""
                                options={options}
                                data={ShippingOrderAnalytics}
                                chartType="Line"
                            />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4">
                        <div className="chartsOuter"
                            onClick={() => router.push("/analytics/totalOrder")}>
                            <div className='topheadanalytics_'>
                                <h4 className="expectedHeading ">Total Orders</h4>
                                <h4 className="expectedHeading">
                                    {" "}
                                    {addThousandSeparator(
                                        totalOrderAnalyticsData?.total_orders
                                    )}
                                </h4>
                            </div>
                            <div className='analyticStatus_'>
                                <h3 className='deliveredStatus posorder_ me-2'><span className='statusDot_'></span>POS Order</h3>
                                <h3 className='deliveredStatus onlineorder me-2'><span className='statusDot_'></span>Online Order</h3>
                                <h3 className='deliveredStatus shiporder '><span className='statusDot_'></span>Shipping</h3>
                            </div>
                            <ChartCommon
                                style={{ cursor: "pointer" }}
                                className="col-md-12"
                                header=""
                                options={options}
                                data={TotalOrderAnalytics}
                                chartType="Bar"
                            />
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6 col-12 mt-4">
                        <div className="chartsOuter"
                            onClick={() => router.push("/analytics/totalInventory")}>
                            <div className='topheadanalytics_'>
                                <h4 className="expectedHeading ">Total Inventory</h4>
                                <h4 className="expectedHeading">
                                    {" "}
                                    {addThousandSeparator(
                                        totalInventory?.total_count
                                    )}
                                </h4>
                            </div>
                            <ChartCommon
                            style={{ cursor: "pointer" }}
                            className="col-md-12"
                            header=""
                            options={options}
                            data={TotalInventoryAnalytics}
                            chartType="Bar"
                        />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4">
                        <div
                            className="chartsOuter"
                            onClick={() => router.push("/analytics/totalProductSold")}
                        >
                            <div className='topheadanalytics_'>
                                <h4 className="expectedHeading ">Total Product Sold</h4>
                                <h4 className="expectedHeading">
                                    {" "}
                                    {addThousandSeparator(
                                        totalProductSoldAnalyticsData?.productOverview?.totalProducts
                                    )}
                                </h4>
                            </div>
                            <ChartCommon
                                className="col-md-12"
                                header=""
                                options={options}
                                data={TotalProductSoldAnalytics}
                                chartType="Line"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <AnalyticsRightsidebar />
        </div>
    )
}

export default Analytics