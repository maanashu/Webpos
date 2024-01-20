import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PaginationFooter } from "../../../components/commanComonets/customers/PaginationFooter";

import { Chart as ChartJS, registerables } from "chart.js";
import { backArrow } from "../../../utilities/images";
import {
  getSessionHistory,
  selectCashDrawerData,
} from "../../../redux/slices/cashDrawer";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment-timezone";

const SessionHistory = () => {
  ChartJS.register(...registerables);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [paginationModalValue, setPaginationModalValue] = useState(10);
  const [formatedDate, setFormatedDate] = useState();
  const drawerData = useSelector(selectCashDrawerData);
  const sessionHistoryData = drawerData?.sessionHistory?.payload?.data ?? [];

  useEffect(() => {
    const data = {
      page: page,
      limit: paginationModalValue,
      calenderDate: formatedDate,
      staffId: "none",
    };
    dispatch(getSessionHistory(data));
  }, [page, paginationModalValue, formatedDate]);

  return (
    <div className="cashDrawOuter cashDrawSessionMain">
      <div className="sessionHeader">
        <Image
          src={backArrow}
          width={50}
          height={50}
          style={{ marginTop: "3px" }}
        />
        <div style={{ marginLeft: "6px" }}>
          <h6>Session History</h6>
        </div>
      </div>

      <table className="customers-stats-table">
        <thead>
          <tr>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1", textAlign: "left" }}
            >
              #
            </th>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1", textAlign: "left" }}
            >
              Date
            </th>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1" }}
            >
              Starts
            </th>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1" }}
            >
              Ends
            </th>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1" }}
            >
              Ended by
            </th>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1" }}
            >
              Session Started
            </th>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1" }}
            >
              Total Cash in
            </th>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1" }}
            >
              Total Cash Out
            </th>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1" }}
            >
              Counted Cash
            </th>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1" }}
            >
              Session Ended
            </th>
          </tr>
        </thead>

        <tbody>
          {sessionHistoryData?.map((item, idx) => (
            <tr className="customers-table-row">
              <td
                onClick={() => handleNavigateToTrackStatus(item)}
                className="customers-table-data"
              >
                {(idx + Number(page > 1 ? limit : 0) > 8 ? "" : "0") +
                  (idx + 1 + Number(page > 1 ? limit : 0))}
              </td>
              <td
                // onClick={() => handleNavigateToTrackStatus(item)}
                className="customers-table-data"
                style={{ display: "flex", gap: "12px" }}
              >
                {item?.created_at
                  ? moment(item?.created_at).format("YYYY/MM/DD")
                  : "date not found"}
              </td>
              <td
                // onClick={() => handleNavigateToTrackStatus(item)}
                className="customers-table-data"
              >
                {item?.start_session == null
                  ? ""
                  : moment(item?.start_session).format("hh:mm A") ?? ""}
              </td>
              <td
                // onClick={() => handleNavigateToTrackStatus(item)}
                className="customers-table-data"
              >
                {item?.end_session == null
                  ? ""
                  : moment(item?.end_session).format("hh:mm A") ?? ""}
              </td>
              <td
                // onClick={() => handleNavigateToTrackStatus(item)}
                className="customers-table-data"
              >
                {item?.pos_user_details?.user_profiles?.firstname == undefined
                  ? "System Ended"
                  : item?.pos_user_details?.user_profiles?.firstname}
              </td>
              <td
                // onClick={() => handleNavigateToTrackStatus(item)}
                className="customers-table-data"
              >
                ${item?.start_tracking_session}
              </td>
              <td
                // onClick={() => handleNavigateToTrackStatus(item)}
                className="customers-table-data"
              >
                {item?.add_cash}
              </td>
              <td
                // onClick={() => handleNavigateToTrackStatus(item)}
                className="customers-table-data"
              >
                ${Number(item?.removed_cash).toFixed(2)}
              </td>
              <td
                // onClick={() => handleNavigateToTrackStatus(item)}
                className="customers-table-data"
              >
                {item.counted_cash}
              </td>
              <td
                // onClick={() => handleNavigateToTrackStatus(item)}
                className="customers-table-data"
              >
                {item.end_tracking_session < 0 ? "-" : null} $
                {item.end_tracking_session < 0
                  ? Math.abs(item.end_tracking_session)
                  : item.end_tracking_session}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="paginatePosition">
        <PaginationFooter />
      </div>
    </div>
  );
};

export default SessionHistory;
