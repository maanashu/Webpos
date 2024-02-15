import Image from "next/image";
import React, { useEffect, useState } from "react";
import PaginationFooter from "../../../components/commanComonets/customers/PaginationFooter";
import Link from "next/link";
import { Chart as ChartJS, registerables } from "chart.js";
import {
  getSessionHistory,
  selectCashDrawerData,
} from "../../../redux/slices/cashDrawer";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment-timezone";
import * as Images from "../../../utilities/images";

const SessionHistory = () => {
  ChartJS.register(...registerables);
  const dispatch = useDispatch();

  const [page, setPageNumber] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const drawerData = useSelector(selectCashDrawerData);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const sessionHistoryData = drawerData?.sessionHistory?.payload?.data ?? [];

  useEffect(() => {
    setLoadingHistory(true);
    const data = {
      page: page,
      limit: recordsPerPage,
      // calenderDate: formatedDate,
      staffId: "none",
    };
    dispatch(getSessionHistory(data));
  }, [page]);


  useEffect(() => {
    setLoadingHistory(false);
    if(drawerData?.sessionHistory?.payload?.total){
      setTotalItems(drawerData.sessionHistory.payload.total)
    }
    else {
      setTotalItems(0);
    }
  }, [drawerData?.sessionHistory?.payload]);

  return (
    <div className="cashDrawOuter cashDrawSessionMain">
      <div className="sessionHeader" style={{margin: "16px"}}>
        <Link href="/cashDrawer">
          {/* <Image
            src={backArrow}
            width={50}
            height={50}
            style={{ marginTop: "3px", cursor: "pointer" }}
          /> */}
          <Image src={Images.arrowLeftUp} alt="leftArrow" className="img-fluid leftImg" />
        </Link>
        <div style={{ marginLeft: "6px" }} className="textNeavyBlue">
          <h5><b>Session History</b></h5>
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

        {loadingHistory ? (
          <tbody>
            <tr className="customers-table-row">
              <td colSpan={9}>
                <div className="text-center">
                  <div className="spinner-grow loaderSpinner text-center my-5"></div>
                </div>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {sessionHistoryData?.map((item, idx) => (
              <tr className="customers-table-row">
                <td
                  onClick={() => handleNavigateToTrackStatus(item)}
                  className="customers-table-data"
                >
                  {/* {(idx + Number(page > 1 ? recordsPerPage : 0) > 8 ? "" : "0") +
                    (idx + 1 + Number(page > 1 ? recordsPerPage : 0))} */}
                    {page > 1 ?
                        <>{((page - 1) * recordsPerPage) + idx + 1}</>
                      :
                        <>{(idx + 1)}</>
                    }
                </td>
                <td
                  // onClick={() => handleNavigateToTrackStatus(item)}
                  className="customers-table-data"
                  // style={{ display: "flex", gap: "12px" }}
                >
                  {item?.created_at
                    ? moment(item?.created_at).local().format("YYYY/MM/DD")
                    : "date not found"}
                </td>
                <td
                  // onClick={() => handleNavigateToTrackStatus(item)}
                  className="customers-table-data"
                >
                  {item?.start_session == null
                    ? ""
                    : moment(item?.start_session).local().format("hh:mm A") ?? ""}
                </td>
                <td
                  // onClick={() => handleNavigateToTrackStatus(item)}
                  className="customers-table-data"
                >
                  {item?.end_session == null
                    ? ""
                    : moment(item?.end_session).local().format("hh:mm A") ?? ""}
                </td>
                <td
                  // onClick={() => handleNavigateToTrackStatus(item)}
                  className="customers-table-data"
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="sessionBox">
                      <Image
                        className="sessionImg"
                        src={
                          item?.pos_user_detail?.user_profiles
                            ? {
                                uri: item?.pos_user_detail?.user_profiles
                                  ?.profile_photo,
                              }
                            : Images.defaultUser
                        }
                      />
                      <h6>
                        {item?.pos_user_details?.user_profiles?.firstname ==
                        undefined
                          ? "System Ended"
                          : item?.pos_user_details?.user_profiles?.firstname}
                      </h6>
                    </div>
                  </div>
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
        )}
      </table>
      
      {console.log(totalItems,  recordsPerPage, "=====recordsPerPage")}
      {totalItems > recordsPerPage && (
        <PaginationFooter
          page={page}
          limit={recordsPerPage}
          setPage={(newPageNumber) =>
            setPageNumber(newPageNumber)
          }
          totalItems={totalItems}
        />
      )}

      {/* <div className="paginatePosition">
        <PaginationFooter />
      </div> */}
    </div>
  );
};

export default SessionHistory;
