import React, { useEffect, useState } from 'react'
import TCRHeader from '../../components/commanComonets/TCRHeader'
import AnalyticsHeader from '../../components/commanComonets/AnalyticsHeader';
import ChartCommon from '../../components/commanComonets/ChartCommon';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoginAuth } from '../../redux/slices/auth';
import { getProfitsData } from '../../redux/slices/analytics';
// import {getProfitsData} from "../../redux/slices/analytics"

const Analytics = () => {
    const router = useRouter()
    const [timeSpan, setTimeSpan] = useState("week");
    const [channelSelected, setChannelSelected] = useState("all")
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const dispatch = useDispatch()
    const [analyticsProfitData, setAnalyticsProfitsData] = useState("");
    const [analyticsOrderData, setAnalyticsOrderData] = useState("");
    const [totalOrderAnalyticsData, setTotalOrderAnalyticsData] = useState("");
    const [totalProductSoldAnalyticsData, setTotalProductSoldAnalyticsData] = useState("");
    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    }
    const auth = useSelector(selectLoginAuth)
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

    const newUserDataHandle = () => {
        let params = {
            is_admin: true,
            filter: timeSpan,
            channel: channelSelected.value,
            // seller_id: auth?.usersInfo?.payload?.uniqe_id
            seller_id: "016b1b3a-d7d3-4fc3-a76b-995b23c43852",
        };
        if (startDate && endDate) {
            let newData = {
                ...params.postData,
                start_date: moment(startDate).format("YYYY-MM-DD"),
                end_date: moment(endDate).format("YYYY-MM-DD"),
            };
            params = {
                tokenData: auth?.payload?.token,
                postData: newData,
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

    useEffect(() => {
        newUserDataHandle();
        // orderAnalyticsHandle();
        // totalOrderAnalyticsHandle();
        // totalProductSoldAnalyticsHandle();
    }, [timeSpan, channelSelected, endDate]);
    return (
        <div className="main-container-customers">
            <AnalyticsHeader
                timeSpan={timeSpan}
                onTimeSpanSelect={setTimeSpan}
                onDateChange={handleDateChange}
                onChannelChange={handleChange}
                channelSelected={channelSelected}
                startDate={startDate}
                endDate={endDate}
            />

            <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mt-4">
                    <div
                        className="chartsOuter"
                        style={{ cursor: "pointer" }}
                        onClick={() => router.push("/Gross-Profits")}
                    >
                        <h4 className="expectedHeading ">Gross Profits</h4>
                        <h4 className="successMain">
                            {" "}
                            $
                            {addThousandSeparator(
                                100
                            )}
                        </h4>
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
                        style={{ cursor: "pointer" }}
                        onClick={() => history.push("/Total-Revenue")}
                    >
                        <h4 className="expectedHeading ">Total Revenue</h4>
                        <h4 className="successMain">
                            {" "}
                            $
                            {addThousandSeparator(
                                analyticsProfitData?.revenue?.total_count
                            )}
                        </h4>
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
                        style={{ cursor: "pointer" }}
                        onClick={() => history.push("/Total-Costs")}
                    >
                        <h4 className="expectedHeading ">Total Costs</h4>
                        <h4 className="">
                            {" "}
                            $
                            {addThousandSeparator(
                                analyticsProfitData?.cost?.total_count
                            )}
                        </h4>
                        <ChartCommon
                            className="col-md-12"
                            header=""
                            options={options}
                            data={CostProfitAnalytics}
                            chartType="Line"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Analytics