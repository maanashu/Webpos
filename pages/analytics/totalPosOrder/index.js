import React, { useEffect, useState } from 'react'
import AnalyticsHeader from '../../../components/commanComonets/AnalyticsHeader'
import AnalyticsSubHeader from '../../../components/commanComonets/AnalyticsSubHeader';
import { ArrowLeft, ArrowRight, average_order, gross_profit, gross_profit_blue, overview_sales, total_order, total_volume } from '../../../utilities/images';
import Image from 'next/image';
import { analyticsDetails, getProfitsData, orderAnalyticsData } from '../../../redux/slices/analytics';
import moment from 'moment-timezone';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoginAuth } from '../../../redux/slices/auth';

const index = () => {
  const [timeSpan, setTimeSpan] = useState("week");
  const [channelSelected, setChannelSelected] = useState({ value: 'all', label: 'All Channels' })
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [analyticsOrderData, setAnalyticsOrderData] = useState("");
  const analyticsData = useSelector(analyticsDetails);
  const handleChange = (selectedOption) => {
    setChannelSelected(selectedOption)
  };

  const dispatch = useDispatch()
  console.log(analyticsOrderData, "analytics data")

  function addThousandSeparator(number) {
    return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  }

  const STATS = [
    {
      icon: total_order,
      title: "Total Orders",
      count: analyticsOrderData?.overView?.total_orders,
      bgColor: "#D1FADF",
      textColor: "#003921",
    },
    {
      icon: total_volume,
      title: "Total Volume",
      count: `${addThousandSeparator(analyticsOrderData?.overView?.transaction ? (analyticsOrderData?.overView?.transaction).toFixed(2) : 0)}`,
      bgColor: "#D1FADF",
      textColor: "#003921",
    },
    {
      icon: average_order,
      title: "Average Order Value",
      count: analyticsOrderData?.overView?.average_value ? `$${addThousandSeparator((analyticsOrderData?.overView?.average_value).toFixed(2))}` : "$0",
      bgColor: "#D1FADF",
      textColor: "#003921",
    },
    {
      icon: overview_sales,
      title: "Total Sales",
      count: `${addThousandSeparator(analyticsOrderData?.overView?.total_cost ? (analyticsOrderData?.overView?.total_cost).toFixed(2) : 0)}`,
      bgColor: "#D1FADF",
      textColor: "#003921",
    },
  ];

  const orderAnalyticsHandle = () => {
    let params = {
      filter: timeSpan,
      channel: channelSelected.value,
      // seller_id: auth?.usersInfo?.payload?.uniqe_id
      seller_id: "016b1b3a-d7d3-4fc3-a76b-995b23c43852",
    };
    if (startDate && endDate) {
      params = {
        channel: channelSelected.value,
        // seller_id: auth?.usersInfo?.payload?.uniqe_id
        seller_id: "016b1b3a-d7d3-4fc3-a76b-995b23c43852",
        start_date: moment(startDate).format("YYYY-MM-DD"),
        end_date: moment(endDate).format("YYYY-MM-DD"),
      };
    }
    dispatch(orderAnalyticsData({
      ...params,
      cb(res) {
        if (res.status) {
          setAnalyticsOrderData(res?.data?.payload);
          // setTotalRecords(analyticsOrderData?.pos_graph?.ordersListData)
        }
      },
    })
    );
  };

  useEffect(() => {
    orderAnalyticsHandle();
  }, [timeSpan, channelSelected, endDate, limit, page]);
  return (
    <div className="main-container-customers">
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

      <AnalyticsSubHeader
        mainIcon={gross_profit_blue}
        title="Total Costs"
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
              <h4
                className="stat-box-title"
                style={{ color: textColor }}
              >
                {title}
              </h4>
              <p
                className="stat-box-count"
                style={{ color: textColor }}
              >
                {count}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* table stats */}
      <table className="customers-stats-table">
        <thead>
          <tr>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1", textAlign: "left" }}
            >
              Date
            </th>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1", textAlign: "left" }}
            >
              Transaction Volume
            </th>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1", textAlign: "left" }}
            >
              Total Product
            </th>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1", textAlign: "left" }}
            >
              Total Price
            </th>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1", textAlign: "left" }}
            >
              Margin
            </th>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1", textAlign: "left" }}
            >
              Total Cost
            </th>
          </tr>
        </thead>

        {
          analyticsData?.loading ? <tbody>
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>

          </tbody>
            : <>
              {
                <>
                  {
                    analyticsOrderData?.pos_graph?.ordersListData?.length > 0 ? <tbody>
                      {analyticsOrderData?.pos_graph?.ordersListData?.map((row, idx) => (
                        <tr className="customers-table-row">
                          <td
                            className="customers-table-data"
                          >
                            {moment(row?.order_date).format('MM/DD/YYYY')}
                          </td>
                          <td
                            className="customers-table-data"
                          // style={{ display: "flex", gap: "12px" }}
                          >
                            {`$${(row.transaction).toFixed(2)}`}
                          </td>
                          <td
                            className="customers-table-data"
                          >
                            {row.total_items}
                          </td>
                          <td
                            className="customers-table-data"
                          >
                            {`$${addThousandSeparator((row.total_price).toFixed(2))}`}
                          </td>
                          <td
                            className="customers-table-data"
                          >
                            {`${Math.round(row?.margin)}%`}
                          </td>
                          <td
                            className="customers-table-data"
                          >
                            <b>${addThousandSeparator((row?.cost_sum).toFixed(2))}</b>
                          </td>
                        </tr>
                      ))}
                    </tbody> :
                      <tbody>
                        <tr>
                          <td colSpan="6" style={{ textAlign: "center" }}>
                            No Record Found
                          </td>
                        </tr>
                      </tbody>
                  }
                </>

              }
            </>
        }

      </table>

    </div>
  )
}

export default index