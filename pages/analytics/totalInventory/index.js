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
  profitMargin,
  totalInventory,
  totalInventoryValue,
  total_order,
  total_volume,
  unitSold,
} from "../../../utilities/images";
import Image from "next/image";
import {
  analyticsDetails,
  totalInventoryDataApi,
} from "../../../redux/slices/analytics";
import moment from "moment-timezone";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginAuth } from "../../../redux/slices/auth";
import { amountFormat } from "../../../utilities/globalMethods";
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
  const [totalInventoryData, setTotalInventoryData] = useState("");
  const analyticsData = useSelector(analyticsDetails);
  const handleChange = (selectedOption) => {
    setChannelSelected(selectedOption);
  };
  const auth = useSelector(selectLoginAuth);
  const sellerId = auth?.usersInfo?.payload?.uniqe_id;
  const dispatch = useDispatch();
  console.log(totalInventoryData, "analytics data");

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
      icon: totalInventory,
      title: "Total Inventory",
      count: totalInventoryData?.inventory_overview?.total_inventory
        ? `${addThousandSeparator(
            totalInventoryData?.inventory_overview?.total_inventory
          )}`
        : "0",
      bgColor: "#D1FADF",
      textColor: "#003921",
    },
    {
      icon: totalInventoryValue,
      title: "Total Inventory Value",
      count: totalInventoryData?.inventory_overview?.total_inventory_cost
        ? `$${addThousandSeparator(
            totalInventoryData?.inventory_overview?.total_inventory_cost?.toFixed(
              2
            )
          )}`
        : "$0",
      bgColor: "#D1FADF",
      textColor: "#003921",
    },
    {
      icon: profitMargin,
      title: "Average Order Value",
      count: totalInventoryData?.inventory_overview?.average_value
        ? `$${addThousandSeparator(
            totalInventoryData?.inventory_overview?.average_value?.toFixed(2)
          )}`
        : "$0",
      bgColor: "#D1FADF",
      textColor: "#003921",
    },
    {
      icon: gross_profit,
      title: "Gross Profit",
      count: totalInventoryData?.inventory_overview?.total_profit
        ? `$${addThousandSeparator(
            totalInventoryData?.inventory_overview?.total_profit?.toFixed(2)
          )}`
        : "$0",
      bgColor: "#D1FADF",
      textColor: "#003921",
    },
  ];

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
    dispatch(
      totalInventoryDataApi({
        ...params,
        cb(res) {
          console.log(res, "total inventory data");
          if (res.status) {
            setTotalInventoryData(res?.data?.payload);
          }
        },
      })
    );
  };

  const handleGoReviewPage = (orderDate) => {
    router.push({
      pathname: "/transactions/transactionList",
      query: {
        transaction_type: "all",
        date: orderDate?.split("T")[0],
      },
    });
  };

  useEffect(() => {
    totalInventoryHandle();
  }, [timeSpan, channelSelected, endDate]);

  return (
    <div className="main-container-customers  analyticsSection bgtransparent_">
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
      <div className="commonbdcontain_  analyticOuter">
        <AnalyticsSubHeader
          mainIcon={gross_profit_blue}
          title="Total Inventory"
        />
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
                  Product Name
                </th>
                <th
                  className="customers-table-data"
                  style={{
                    border: "none",
                    color: "#7E8AC1",
                    textAlign: "center",
                  }}
                >
                  Category
                </th>
                <th
                  className="customers-table-data"
                  style={{
                    border: "none",
                    color: "#7E8AC1",
                    textAlign: "center",
                  }}
                >
                  UPC
                </th>
                <th
                  className="customers-table-data"
                  style={{
                    border: "none",
                    color: "#7E8AC1",
                    textAlign: "center",
                  }}
                >
                  Total Price
                </th>
                <th
                  className="customers-table-data"
                  style={{
                    border: "none",
                    color: "#7E8AC1",
                    textAlign: "center",
                  }}
                >
                  In Stock
                </th>
                <th
                  className="customers-table-data"
                  style={{
                    border: "none",
                    color: "#7E8AC1",
                    textAlign: "center",
                  }}
                >
                  Last Sold Date
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
                    {totalInventoryData?.inventory_list?.data?.length > 0 ? (
                      <tbody>
                        {totalInventoryData?.inventory_list?.data?.map(
                          (row, idx) => (
                            <tr className="customers-table-row" key={idx}>
                              <td className="customers-table-data">
                                {idx + 1}
                              </td>
                              <td className="customers-table-data">
                                {row?.name
                                  ? `${
                                      row?.name?.length > 25
                                        ? `${row?.name?.slice(0, 25)}...`
                                        : row?.name
                                    }`
                                  : ""}
                              </td>
                              <td className="customers-table-data">
                                {row?.category?.name
                                  ? `${
                                      row?.category?.name?.length > 25
                                        ? `${row?.category?.name?.slice(
                                            0,
                                            25
                                          )}...`
                                        : row?.category?.name
                                    }`
                                  : ""}
                              </td>
                              <td className="customers-table-data">
                                {row?.upc}
                              </td>
                              <td
                                className="customers-table-data"
                                // style={{ display: "flex", gap: "12px" }}
                              >
                                {row?.supplies[0]?.cost_price
                                  ? row?.supplies[0]?.cost_price < 0
                                    ? "-$" +
                                      amountFormat(
                                        Math.abs(
                                          row?.supplies[0]?.cost_price *
                                            row?.supplies[0]?.rest_quantity
                                        ),
                                        "notSign"
                                      )
                                    : amountFormat(
                                        row?.supplies[0]?.cost_price *
                                          row?.supplies[0]?.rest_quantity
                                      )
                                  : "$0"}
                              </td>
                              <td className="customers-table-data">
                                {row?.supplies[0]?.rest_quantity}
                              </td>
                              <td className="customers-table-data">
                                {moment(row?.last_sold_date).format(
                                  "MM/DD/YYYY"
                                )}
                              </td>
                              {/* <td
                                className="customers-table-data"
                              >
                                <button className="secondaryOuterbtn_" type="button" onClick={() =>
                                  handleGoReviewPage(row?.last_sold_date)
                                }>Review</button>
                              </td> */}
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
