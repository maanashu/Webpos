import React, { useEffect, useState } from "react";
import AnalyticsHeader from "../../../components/commanComonets/AnalyticsHeader";
import AnalyticsSubHeader from "../../../components/commanComonets/AnalyticsSubHeader";
import {
  ArrowLeft,
  ArrowRight,
  average_order,
  gross_profit,
  gross_profit_blue,
  order_frequency,
  overview_sales,
  total_order,
  total_volume,
} from "../../../utilities/images";
import Image from "next/image";
import {
  analyticsDetails,
  getProfitsData,
  orderAnalyticsData,
  totalOrderAnalyticsDataApi,
} from "../../../redux/slices/analytics";
import moment from "moment-timezone";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginAuth } from "../../../redux/slices/auth";
import AnalyticsRightsidebar from "../../../components/commanComonets/analytics/analyticsRightsidebar";
import { PaginationFooter } from "../../../components/commanComonets/customers/PaginationFooter";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const [timeSpan, setTimeSpan] = useState("week");
  const [channelSelected, setChannelSelected] = useState({
    value: "all",
    label: "All Channels",
  });
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalOrderAnalyticsData, setTotalOrderAnalyticsData] = useState("");
  const analyticsData = useSelector(analyticsDetails);
  const handleChange = (selectedOption) => {
    setChannelSelected(selectedOption);
  };
  const auth = useSelector(selectLoginAuth);
  const sellerId = auth?.usersInfo?.payload?.uniqe_id;

  const dispatch = useDispatch();
  console.log(totalOrderAnalyticsData, "analytics data");

  function addThousandSeparator(number) {
    return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const STATS = [
    {
      icon: total_order,
      title: "Total Orders",
      count: totalOrderAnalyticsData?.ordersOverView?.total_orders,
      bgColor: "#D1FADF",
      textColor: "#003921",
    },
    {
      icon: total_volume,
      title: "Total Volume",
      count: `$${addThousandSeparator(
        totalOrderAnalyticsData?.ordersOverView?.total_volume
          ? (totalOrderAnalyticsData?.ordersOverView?.total_volume).toFixed(2)
          : 0
      )}`,
      bgColor: "#D1FADF",
      textColor: "#003921",
    },
    {
      icon: average_order,
      title: "Average Order Value",
      count:
        totalOrderAnalyticsData?.ordersOverView?.averageValue ||
        totalOrderAnalyticsData?.ordersOverView?.averageValue == 0
          ? `$${(totalOrderAnalyticsData?.ordersOverView?.averageValue).toFixed(
              2
            )}`
          : "",
      bgColor: "#D1FADF",
      textColor: "#003921",
    },
    {
      icon: gross_profit,
      title: "Gross Profit",
      count: `$${addThousandSeparator(
        totalOrderAnalyticsData?.ordersOverView?.total_profit?.toFixed(2)
      )}`,
      bgColor: "#D1FADF",
      textColor: "#003921",
    },
  ];

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
    dispatch(
      totalOrderAnalyticsDataApi({
        ...params,
        cb(res) {
          if (res.status) {
            setTotalOrderAnalyticsData(res?.data?.payload);
            // setTotalRecords(totalOrderAnalyticsData?.order_listing)
          }
        },
      })
    );
  };

  const handleGoReviewPage = (orderDate) => {
    if (orderDate) {
      router.push({
        pathname: "/transactions/transactionList",
        query: {
          // transaction_type: "all",
          "from": "analytics",
          'deliveryOption': 3,
          'date': `${orderDate}T00:00:00`,
        },
      });
    }
  };

  useEffect(() => {
    if (sellerId) {
      orderAnalyticsHandle();
    }
  }, [timeSpan, channelSelected, endDate, sellerId]);
  return (
    <div className="main-container-customers analyticsSection bgtransparent_">
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
      <div className="commonbdcontain_ analyticOuter">
        <AnalyticsSubHeader mainIcon={gross_profit_blue} title="Total Orders" />

        {/* stats */}
        <div className="stats flex-row-space-between">
          {STATS.map(({ bgColor, icon, title, count, textColor }, idx) => (
            <div
              key={idx + "stats"}
              className="stat-box"
              style={{ backgroundColor: bgColor }}
            >
              <Image
                objectFit="center"
                width={30}
                height={30}
                src={icon}
                style={{ marginBottom: "35px" }}
              />
              <div>
                <h4 className="stat-box-title" style={{ color: textColor }}>
                  {title}
                </h4>
                <p className="stat-box-count" style={{ color: textColor }}>
                  {analyticsData?.loading ? (
                    <span className="spinner-border spinner-border-sm"></span>
                  ) : (
                    count
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* table stats */}
        <div className="table-responsive analyticTable">
          <table className="customers-stats-table">
            <thead>
              <tr>
                <th
                  className="customers-table-data"
                  style={{
                    border: "none",
                    color: "#7E8AC1",
                    textAlign: "center",
                  }}
                >
                  Sr.No.
                </th>
                <th
                  className="customers-table-data"
                  style={{
                    border: "none",
                    color: "#7E8AC1",
                    textAlign: "center",
                  }}
                >
                  Date
                </th>
                <th
                  className="customers-table-data"
                  style={{
                    border: "none",
                    color: "#7E8AC1",
                    textAlign: "center",
                  }}
                >
                  Total Pos Order
                </th>
                <th
                  className="customers-table-data"
                  style={{
                    border: "none",
                    color: "#7E8AC1",
                    textAlign: "center",
                  }}
                >
                  Customer-New
                </th>
                <th
                  className="customers-table-data"
                  style={{
                    border: "none",
                    color: "#7E8AC1",
                    textAlign: "center",
                  }}
                >
                  Customer-Returning
                </th>
                <th
                  className="customers-table-data"
                  style={{
                    border: "none",
                    color: "#7E8AC1",
                    textAlign: "center",
                  }}
                >
                  Total Sales
                </th>
              </tr>
            </thead>

            {analyticsData?.loading ? (
              <tbody>
                <tr>
                  <td colSpan="6" style={{ textAlign: "center" }}>
                    Loading...
                  </td>
                </tr>
              </tbody>
            ) : (
              <>
                {
                  <>
                    {totalOrderAnalyticsData?.order_listing?.length > 0 ? (
                      <tbody>
                        {totalOrderAnalyticsData?.order_listing?.map(
                          (row, idx) => (
                            <tr className="customers-table-row" key={idx}>
                              <td className="customers-table-data">
                                {idx + 1}
                              </td>
                              <td className="customers-table-data">
                                {moment(row?.order_date).format("MM/DD/YYYY")}
                              </td>
                              <td className="customers-table-data">
                                {row.total_orders}
                              </td>
                              <td
                                className="customers-table-data"
                                // style={{ display: "flex", gap: "12px" }}
                              >
                                {row.new_consumer}
                              </td>
                              <td className="customers-table-data">
                                {`${row.consumer_returning} / hour`}
                              </td>
                              <td className="customers-table-data">
                                {`$${
                                  row.amount
                                    ? addThousandSeparator(
                                        row.amount?.toFixed(2)
                                      )
                                    : "0"
                                }`}
                              </td>
                              <td className="customers-table-data">
                                <button
                                  className="secondaryOuterbtn_"
                                  type="button"
                                  onClick={() =>
                                    handleGoReviewPage(row?.order_date)
                                  }
                                >
                                  Review
                                </button>
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    ) : (
                      <tbody>
                        <tr>
                          <td colSpan="6" style={{ textAlign: "center" }}>
                            No Record Found
                          </td>
                        </tr>
                      </tbody>
                    )}
                  </>
                }
              </>
            )}
          </table>
        </div>
      </div>
      {/* <div className="paginatePosition">
        <PaginationFooter />
      </div> */}
      <AnalyticsRightsidebar />
    </div>
  );
};

export default index;
