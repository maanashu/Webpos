import React, { useEffect, useState } from 'react'
import AnalyticsHeader from '../../../components/commanComonets/AnalyticsHeader'
import AnalyticsSubHeader from '../../../components/commanComonets/AnalyticsSubHeader';
import { ArrowLeft, ArrowRight, average_order, gross_profit, gross_profit_blue, total_order, total_volume } from '../../../utilities/images';
import Image from 'next/image';
import { analyticsDetails, getProfitsData } from '../../../redux/slices/analytics';
import moment from 'moment-timezone';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoginAuth } from '../../../redux/slices/auth';
import AnalyticsRightsidebar from '../../../components/commanComonets/analytics/analyticsRightsidebar';

const index = () => {
  const [timeSpan, setTimeSpan] = useState("week");
  const [channelSelected, setChannelSelected] = useState({ value: 'all', label: 'All Channels' })
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [analyticsProfitData, setAnalyticsProfitsData] = useState("");
  const [limit, setLimit] = useState("10");
  const [page, setPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0)
  const analyticsData = useSelector(analyticsDetails);
  const auth = useSelector(selectLoginAuth)
  const handleChange = (selectedOption) => {
    setChannelSelected(selectedOption)
  };
  const sellerId = auth?.usersInfo?.payload?.uniqe_id

  const dispatch = useDispatch()
  console.log(analyticsProfitData?.orderData?.data, "analytics data")

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
      count: analyticsProfitData?.overView?.total_orders,
      bgColor: "#D1FADF",
      textColor: "#003921",
    },
    {
      icon: total_volume,
      title: "Total Volume",
      count: `$${addThousandSeparator(analyticsProfitData?.overView?.transaction ? (analyticsProfitData?.overView?.transaction).toFixed(2) : 0)}`,
      bgColor: "#D1FADF",
      textColor: "#003921",
    },
    {
      icon: average_order,
      title: "Average Order Value",
      count: analyticsProfitData?.overView?.average_value ? `$${addThousandSeparator((analyticsProfitData?.overView?.average_value).toFixed(2))}` : "$0",
      bgColor: "#D1FADF",
      textColor: "#003921",
    },
    {
      icon: gross_profit,
      title: "Gross Profit",
      count: `$${addThousandSeparator(analyticsProfitData?.overView?.profit_sum ? analyticsProfitData?.overView?.profit_sum : 0)}`,
      bgColor: "#D1FADF",
      textColor: "#003921",
    },
  ];

  const newUserDataHandle = () => {
    let params = {
      is_admin: true,
      filter: timeSpan,
      channel: channelSelected.value,
      // seller_id: auth?.usersInfo?.payload?.uniqe_id
      seller_id: sellerId,
      page: page,
      limit: Number(limit),
    };
    if (startDate && endDate) {
      params = {
        is_admin: true,
        start_date: moment(startDate).format("YYYY-MM-DD"),
        end_date: moment(endDate).format("YYYY-MM-DD"),
        channel: channelSelected.value,
        // seller_id: auth?.usersInfo?.payload?.uniqe_id
        seller_id: sellerId,
        page: page,
        limit: Number(limit),
      };
    }

    dispatch(getProfitsData({
      ...params,
      cb(res) {
        if (res.status) {
          setAnalyticsProfitsData(res?.data?.payload);
          setTotalRecords(res?.data?.payload?.orderData?.total)
        }
      },
    })
    );
  };

  useEffect(() => {
    if (sellerId) {
      newUserDataHandle();
    }
  }, [timeSpan, channelSelected, endDate, limit, page, sellerId]);
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
          title="Gross Profit"
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
          <table className="customers-stats-table ">
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
                  Date
                </th>
                <th
                  className="customers-table-data"
                  style={{ border: "none", color: "#7E8AC1", textAlign: "center" }}
                >
                  Total Orders
                </th>
                <th
                  className="customers-table-data"
                  style={{ border: "none", color: "#7E8AC1", textAlign: "center" }}
                >
                  Transaction Volume
                </th>
                <th
                  className="customers-table-data"
                  style={{ border: "none", color: "#7E8AC1", textAlign: "center" }}
                >
                  Average Order Value
                </th>
                <th
                  className="customers-table-data"
                  style={{ border: "none", color: "#7E8AC1", textAlign: "center" }}
                >
                  Tax
                </th>
                <th
                  className="customers-table-data"
                  style={{ border: "none", color: "#7E8AC1", textAlign: "center" }}
                >
                  Total cost
                </th>
                <th
                  className="customers-table-data"
                  style={{ border: "none", color: "#7E8AC1", textAlign: "center" }}
                >
                  Margin
                </th>
                <th
                  className="customers-table-data"
                  style={{ border: "none", color: "#7E8AC1", textAlign: "center" }}
                >
                  Gross Profit
                </th>
              </tr>
            </thead>

            {
              analyticsData?.loading ? <tbody>
                <tr>
                  <td colSpan="7" style={{ textAlign: "center" }}>
                    Loading...
                  </td>
                </tr>

              </tbody>
                : <>
                  {
                    <>
                      {
                        analyticsProfitData?.orderData?.data?.length > 0 ? <tbody>
                          {analyticsProfitData?.orderData?.data?.map((row, idx) => (
                            <tr className="customers-table-row">
                              <td
                                className="customers-table-data"
                              >
                                {(page - 1) * 10 + idx + 1}
                              </td>
                              <td
                                className="customers-table-data"
                              >
                                {moment(row?.order_date).format('MM/DD/YYYY')}
                              </td>
                              <td
                                className="customers-table-data"
                              // style={{ display: "flex", gap: "12px" }}
                              >
                                {row?.total_orders}
                              </td>
                              <td
                                className="customers-table-data"
                              >
                                {`$${addThousandSeparator((row?.transaction).toFixed(2))}`}
                              </td>
                              <td
                                className="customers-table-data"
                              >
                                {`$${addThousandSeparator((row?.average_value).toFixed(2))}`}
                              </td>
                              <td
                                className="customers-table-data"
                              >
                                {`$${addThousandSeparator((row?.total_tax).toFixed(2))}`}
                              </td>
                              <td
                                className="customers-table-data"
                              >
                                {`$${addThousandSeparator((row?.cost_sum).toFixed(2))}`}
                              </td>
                              <td
                                className="customers-table-data"
                              >
                                {`${Math.round(row?.margin)}%`}
                              </td>
                              <td
                                className="customers-table-data"
                              >
                                <b>${addThousandSeparator((row?.profit_sum).toFixed(2))}</b>
                              </td>
                            </tr>
                          ))}
                        </tbody> :
                          <tbody>
                            <tr>
                              <td colSpan="7" style={{ textAlign: "center" }}>
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
        {
          (analyticsProfitData?.orderData?.data?.length > 0 && !analyticsData?.loading) &&
          <div className='paginatePosition'>
            <div className="paginationMain">
              <div className="paginateFlex active" onClick={() => {
                (page > 1) ? setPage(page - 1) : void (0);
              }}>
                <Image src={ArrowLeft} width={16} height={16} className="paginationArrowImg" alt="ArrowLeft image"
                />
                <h4 className="prevText">
                  Prev
                </h4>
              </div>
              <h4 className="settingSub">
                Page {page} to {Math.ceil(totalRecords / 10)}
              </h4>
              <div className="paginateFlex" onClick={() => {
                (page < (Math.ceil(totalRecords / 10))) ? setPage(page + 1) : void (0);
              }}>
                <h4 className="prevText">Next</h4>
                <Image
                  src={ArrowRight}
                  width={16}
                  height={16}
                  className="paginationArrowImg" alt="ArrowRight image"
                />
              </div>
            </div>
          </div>
        }

      </div>
      <AnalyticsRightsidebar />
    </div>
  )
}

export default index