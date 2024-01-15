import React, { useEffect, useState } from "react";
import TCRHeader from "../../../components/commanComonets/TCRHeader";
import PaginationHeader from "../../../components/commanComonets/PaginationHeader";
import { useRouter } from "next/router";
import {
  OrderLocation,
  customerUsers,
  customerWallet,
  customersCross,
  userSale,
} from "../../../utilities/images";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginAuth } from "../../../redux/slices/auth";
import {
  getTotalTra,
  getTotalTraDetail,
  getTotalTraType,
  selectTransactionData,
} from "../../../redux/slices/transactions";
import Image from "next/image";
import moment from "moment-timezone";

export const DELIVERY_MODE = {
  1: "Delivery",
  2: "Reservation",
  3: "Walkin",
  4: "Shipping",
};

const TransactionsList = () => {
  const { query } = useRouter();
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("all_customers");
  const [timeSpan, setTimeSpan] = useState(query["time-span"] || "week");
  const [limit, setLimit] = useState("10");
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const getWalletData = useSelector(selectTransactionData);

  const getTotalTraData = getWalletData?.totalTra?.payload;
  const getTotalTraDetails = getWalletData?.totalTraDetail?.payload?.data ?? [];
  const transactionTypeArray = getWalletData?.totalTraType?.payload;
  const sellerID = authData?.usersInfo?.payload?.uniqe_id;

  useEffect(() => {
    if (sellerID) {
      const params = {
        filter: timeSpan,
        seller_id: sellerID,
      };
      dispatch(getTotalTra(params));
    }
  }, [timeSpan]);

  useEffect(() => {
    const data = {
      dayWiseFilter: timeSpan,
      sellerID: sellerID,
      orderType: "none",
    };
    dispatch(getTotalTraType(data));
  }, [timeSpan]);

  useEffect(() => {
    const data = {
      dayWiseFilter: timeSpan,
      page: page,
      limit: limit,
      sellerId: sellerID,
      transactionType: "all",
      orderType: "none",
      status: "none",
    };
    dispatch(getTotalTraDetail(data));
  }, [limit, page, timeSpan]);

  // console.log("transactionTypeArray",transactionTypeArray )
  const TABS = [
    {
      modeOfPayment: "all",
      count: transactionTypeArray?.[0]?.count ?? "0",
      type: "All",
    },
    {
      modeOfPayment: "jbr",
      count: transactionTypeArray?.[1]?.count ?? "0",
      type: "JBR",
    },
    {
      modeOfPayment: "cash",
      count: transactionTypeArray?.[3]?.count ?? "0",
      type: "Cash",
    },
    {
      modeOfPayment: "card",
      count: transactionTypeArray?.[2]?.count ?? "0",
      type: "Card",
    },
  ];

  const handleNavigateToTrackStatus = (item) => {
    router.push(`transactionList/invoice`);
  };

  const statusFun = (status) => {
    switch (status) {
      case 0:
        return "Review";
      case 1:
        return "Accepted";
      case 2:
        return "Prepare";
      case 3:
        return "Ready Pickup";
      case 4:
        return "Walkin";
      case 5:
        return "Delivered";
      case 6:
        return "Pickup By Customer";
      case 7:
        return "Cancelled";
      case 8:
        return "Rejected";
      case 9:
        return "Refunded";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingBottom: "15px",
      }}
      className="main-container-customers"
    >
      <TCRHeader
        title="Transactions"
        descrip={" "}
        timeSpan={timeSpan}
        onTimeSpanSelect={setTimeSpan}
        mainIcon={customerWallet}
      />

      <PaginationHeader
        page={page}
        limit={limit}
        setPage={setPage}
        setLimit={setLimit}
        totalItems={getWalletData?.totalTraDetail?.payload?.total}
      />

      {/*  TABS*/}
      <div className="users-tabs flex-row-space-between">
        {TABS.map(({ text, count, type }, idx) => (
          <div
            key={idx + "tabs"}
            onClick={() => setSelectedTab(type)}
            className="users-tab flex-row-space-between"
            style={{
              backgroundColor: selectedTab == type ? "#263682" : "",
              cursor: "pointer",
            }}
          >
            <p
              className="users-tab-text"
              style={{ color: selectedTab == type ? "#F5F6FC" : "#263682" }}
            >
              {type}
            </p>
            <p className="users-tab-count">({count})</p>
            {selectedTab == type && (
              <div
                onClick={() => {
                  setSelectedTab(null);
                }}
              >
                <Image width={16} height={16} src={customersCross} />
              </div>
            )}
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
              Invoice ID
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
              Transaction Id
            </th>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1" }}
            >
              Transaction Type
            </th>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1" }}
            >
              Payment Method
            </th>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1" }}
            >
              Amount
            </th>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1" }}
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {getTotalTraDetails?.map((item, idx) => (
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
                  ? moment(item.created_at).format("ll")
                  : "date not found"}
              </td>
              <td
                // onClick={() => handleNavigateToTrackStatus(item)}
                className="customers-table-data"
              >
                {item?.is_returned_order
                  ? item?.return_detail?.invoices?.invoice_number
                  : item?.invoices?.invoice_number}
              </td>
              <td
                // onClick={() => handleNavigateToTrackStatus(item)}
                className="customers-table-data"
              >
                {item.created_at
                  ? moment(item.created_at).format("h:mm A")
                  : "date not found"}
              </td>
              <td
                // onClick={() => handleNavigateToTrackStatus(item)}
                className="customers-table-data"
              >
                {item?.transaction_id}
              </td>
              <td
                // onClick={() => handleNavigateToTrackStatus(item)}
                className="customers-table-data"
              >
                {DELIVERY_MODE[item?.delivery_option]}
              </td>
              <td
                // onClick={() => handleNavigateToTrackStatus(item)}
                className="customers-table-data"
              >
                {item?.mode_of_payment}
              </td>
              <td
                // onClick={() => handleNavigateToTrackStatus(item)}
                className="customers-table-data"
              >
                ${Number(item?.payable_amount).toFixed(2)}
              </td>
              <td
                // onClick={() => handleNavigateToTrackStatus(item)}
                className="customers-table-data"
              >
                {item?.is_returned_order &&
                statusFun(item.status) === "Delivered"
                  ? "Returned"
                  : statusFun(item.status)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsList;
