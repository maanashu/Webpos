import React, { useEffect, useState } from 'react'
import AnalyticsHeader from '../../../components/commanComonets/AnalyticsHeader'
import AnalyticsSubHeader from '../../../components/commanComonets/AnalyticsSubHeader';
import { ArrowLeft, ArrowRight, average_order, gross_profit, gross_profit_blue, overview_sales, profitMargin, total_order, total_volume, unitSold } from '../../../utilities/images';
import Image from 'next/image';
import { analyticsDetails, getProfitsData, orderAnalyticsData, totalAnalyticsProductSoldData, totalProductSoldAnalyticsDataApi } from '../../../redux/slices/analytics';
import moment from 'moment-timezone';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoginAuth } from '../../../redux/slices/auth';
import AnalyticsRightsidebar from '../../../components/commanComonets/analytics/analyticsRightsidebar';
import { PaginationFooter } from '../../../components/commanComonets/customers/PaginationFooter';
import { useRouter } from 'next/router';

const index = () => {
  const router = useRouter()
  const [timeSpan, setTimeSpan] = useState("week");
  const [channelSelected, setChannelSelected] = useState({ value: 'all', label: 'All Channels' })
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalProductSoldAnalyticsData, setTotalProductSoldAnalyticsData] = useState("")
  const analyticsData = useSelector(analyticsDetails);
  const handleChange = (selectedOption) => {
    setChannelSelected(selectedOption)
  };
  const auth = useSelector(selectLoginAuth)
  const sellerId = auth?.usersInfo?.payload?.uniqe_id

  const dispatch = useDispatch()
  console.log(totalProductSoldAnalyticsData, "analytics data")

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
      icon: unitSold,
      title: "Units Sold",
      count: totalProductSoldAnalyticsData?.productOverview?.totalProducts,
      bgColor: "#D1FADF",
      textColor: "#003921",
    },
    {
      icon: total_volume,
      title: "Total Volume",
      count: totalProductSoldAnalyticsData?.productOverview?.totalVolume ? `$${addThousandSeparator((totalProductSoldAnalyticsData?.productOverview?.totalVolume)?.toFixed(2))}` : "$0",
      bgColor: "#D1FADF",
      textColor: "#003921",
    },
    {
      icon: profitMargin,
      title: "Profit Margin",
      count: totalProductSoldAnalyticsData?.productOverview?.totalMargin ? `$${addThousandSeparator((totalProductSoldAnalyticsData?.productOverview?.totalMargin)?.toFixed(2))}` : "$0",
      bgColor: "#D1FADF",
      textColor: "#003921",
    },
    {
      icon: gross_profit,
      title: "Gross Profit",
      count: totalProductSoldAnalyticsData?.productOverview?.totalProfit ? `$${addThousandSeparator((totalProductSoldAnalyticsData?.productOverview?.totalProfit)?.toFixed(2))}` : "$0",
      bgColor: "#D1FADF",
      textColor: "#003921",
    },
  ];

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

  const handleGoReviewPage = (orderDate) => {

    // return
    router.push({
      pathname: "/transactions/transactionList",
      query: {
        transaction_type: "all",
        date: orderDate?.split("T")[0],
      },
    });
  };

  useEffect(() => {
    totalProductSoldAnalyticsHandle();
  }, [timeSpan, channelSelected, endDate]);

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
      <div className='commonbdcontain_  analyticOuter'>
        <AnalyticsSubHeader
          mainIcon={gross_profit_blue}
          title="Top Selling Product"
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
        <div className='table-responsive analyticTable'>
          <table className="customers-stats-table">
            <thead>
              <tr>
                <th
                  className="customers-table-data"
                  style={{ border: "none", color: "#7E8AC1", textAlign: "center" }}
                >
                  Sr.No.
                </th>
                <th
                  className="customers-table-data"
                  style={{ border: "none", color: "#7E8AC1", textAlign: "center" }}
                >
                  Product Name
                </th>
                <th
                  className="customers-table-data"
                  style={{ border: "none", color: "#7E8AC1", textAlign: "center" }}
                >
                  UPC
                </th>
                <th
                  className="customers-table-data"
                  style={{ border: "none", color: "#7E8AC1", textAlign: "center" }}
                >
                  Price
                </th>
                <th
                  className="customers-table-data"
                  style={{ border: "none", color: "#7E8AC1", textAlign: "center" }}
                >
                  In Stock
                </th>
                <th
                  className="customers-table-data"
                  style={{ border: "none", color: "#7E8AC1", textAlign: "center" }}
                >
                  Last Sold Date
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
                        totalProductSoldAnalyticsData?.totalProductSoldList?.data?.length > 0 ? <tbody>
                          {totalProductSoldAnalyticsData?.totalProductSoldList?.data?.map((row, idx) => (
                            <tr className="customers-table-row" key={idx}>
                              <td
                                className="customers-table-data"
                              >
                                {idx + 1}
                              </td>
                              <td
                                className="customers-table-data"
                              >
                                {row?.product_name ? `${row?.product_name?.length > 25 ? `${row?.product_name?.slice(0, 25)}...` : row?.product_name}` : ""}
                              </td>
                              <td
                                className="customers-table-data"
                              >
                                {row?.product_upc}
                              </td>
                              <td
                                className="customers-table-data"
                              // style={{ display: "flex", gap: "12px" }}
                              >
                                {`$${row?.total_price ? addThousandSeparator((row?.total_price)?.toFixed(2)) : "0"}`}
                              </td>
                              <td
                                className="customers-table-data"
                              >
                                {row?.in_stock_qty}
                              </td>
                              <td
                                className="customers-table-data"
                              >
                                {moment(row?.last_sold_date).format('MM/DD/YYYY')}
                              </td>
                              {/* <td
                                className="customers-table-data"
                              >
                                <button className="secondaryOuterbtn_" type="button" onClick={() =>
                                  handleGoReviewPage(row?.last_sold_date)
                                }>Review</button>
                              </td> */}
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
      </div>
      {/* <div className="paginatePosition">
        <PaginationFooter />
      </div> */}
      <AnalyticsRightsidebar />
    </div>
  )
}

export default index