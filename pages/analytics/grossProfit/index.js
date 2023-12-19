import React, { useEffect, useState } from 'react'
import AnalyticsHeader from '../../../components/commanComonets/AnalyticsHeader'
import AnalyticsSubHeader from '../../../components/commanComonets/AnalyticsSubHeader';
import { average_order, gross_profit, gross_profit_blue, total_order, total_volume } from '../../../utilities/images';
import Image from 'next/image';
import { getProfitsData } from '../../../redux/slices/analytics';
import moment from 'moment-timezone';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoginAuth } from '../../../redux/slices/auth';

const index = () => {
    const [timeSpan, setTimeSpan] = useState("week");
    const [channelSelected, setChannelSelected] = useState({ value: 'all', label: 'All Channels' })
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [analyticsProfitData, setAnalyticsProfitsData] = useState("");
    const auth = useSelector(selectLoginAuth)
    const handleChange = (selectedOption) => {
        setChannelSelected(selectedOption)
    };
    const dispatch = useDispatch()
console.log(analyticsProfitData, "analytics data")

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
          count: `${addThousandSeparator(analyticsProfitData?.overView?.transaction ? (analyticsProfitData?.overView?.transaction).toFixed(2) : 0)}`,
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
          count: `${addThousandSeparator(analyticsProfitData?.overView?.profit_sum ? analyticsProfitData?.overView?.profit_sum : 0)}`,
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
            seller_id: "016b1b3a-d7d3-4fc3-a76b-995b23c43852",
        };
        if (startDate && endDate) {
            params = {
                is_admin: true,
                start_date: moment(startDate).format("YYYY-MM-DD"),
                end_date: moment(endDate).format("YYYY-MM-DD"),
                channel: channelSelected.value,
                // seller_id: auth?.usersInfo?.payload?.uniqe_id
                seller_id: "016b1b3a-d7d3-4fc3-a76b-995b23c43852",
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
    }, [timeSpan, channelSelected, endDate]);
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


        </div>
    )
}

export default index