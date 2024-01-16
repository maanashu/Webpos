import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  OrderLocation,
  customersCross,
  customerUsers,
  userSale,
} from "../../../utilities/images";
import Image from "next/image";
import Link from "next/link";
import TCRHeader from "../../../components/commanComonets/TCRHeader";
import PaginationHeader from "../../../components/commanComonets/PaginationHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCustomersList,
  getSellerAreaList,
  selectCustomersData,
} from "../../../redux/slices/customers";
import { selectLoginAuth } from "../../../redux/slices/auth";
import { useRouter } from "next/router";

const Users = () => {
  const { query } = useRouter();
  const router = useRouter()
  const [selectedTab, setSelectedTab] = useState("all_customers");
  const [timeSpan, setTimeSpan] = useState(query["time-span"] || "week");
  const [limit, setLimit] = useState("10");
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const customersData = useSelector(selectCustomersData);
  const totalCustomers =
    customersData?.allCustomersData?.payload?.total_customers;
  const uniqueId = authData?.usersInfo?.payload?.uniqe_id;

  const paginatedCustomersList = customersData?.allCustomersList?.payload;
  const sellerAreaList = customersData?.sellerAreaList?.payload?.data;

  useEffect(() => {
    if (uniqueId) {
      const params = {
        page,
        limit: Number(limit),
        filter: timeSpan,
        type: selectedTab,
        seller_id: uniqueId,
      };
      dispatch(getAllCustomersList(params));
      dispatch(getSellerAreaList({ seller_id: params.seller_id }));
    }
  }, [uniqueId, selectedTab, timeSpan, limit, page]);

  const TABS = [
    { text: "All", count: totalCustomers?.totalCustomer, type: "all_customers" },
    {
      text: "New Customers",
      count: totalCustomers?.newCustomer,
      type: "new_customers",
    },
    {
      text: "Returning Customers",
      count: totalCustomers?.onlineCustomers,
      type: "returning_customers",
    },
    {
      text: "Online Customers",
      count: totalCustomers?.returningCustomer,
      type: "online_customers",
    },
    {
      text: "Walk-in Customers",
      count: totalCustomers?.walkingCustomers,
      type: "walkin_customers",
    },
  ];

  const handleNavigateToTrackStatus = (item) => {
    router.push(`users/[user-id]`, `users/${item.user_id}`);
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
        title="Users"
        descrip={" "}
        timeSpan={timeSpan}
        onTimeSpanSelect={setTimeSpan}
        mainIcon={customerUsers}
      />

      <PaginationHeader
        page={page}
        limit={limit}
        setPage={setPage}
        setLimit={setLimit}
        totalItems={paginatedCustomersList?.total}
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
              {text}
            </p>
            <p className="users-tab-count">({count})</p>
            {selectedTab == type && (
              <div
                onClick={() => {
                  setSelectedTab(null);
                }}
              >
                <Image
                  width={16}
                  height={16}
                  src={customersCross}
                />
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
              Name
            </th>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1", textAlign: "left" }}
            >
              Total Orders
            </th>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1", textAlign: "left" }}
            >
              Total Products
            </th>
            <th
              className="customers-table-data"
              style={{ border: "none", color: "#7E8AC1", textAlign: "left" }}
            >
              Lifetime Spent
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedCustomersList?.data?.map((item, idx) => (
            <tr className="customers-table-row">
              <td
                onClick={() => handleNavigateToTrackStatus(item)}
                className="customers-table-data"
              >
                {(idx + Number(page > 1 ? limit : 0) > 8 ? "" : "0") +
                  (idx + 1 + Number(page > 1 ? limit : 0))}
              </td>
              <td
                onClick={() => handleNavigateToTrackStatus(item)}
                className="customers-table-data"
                style={{ display: "flex", gap: "12px" }}
              >
                <Image
                  width={36}
                  height={36}
                  style={{
                    borderRadius: 50,
                  }}
                  alt="User's profile picture"
                  src={item?.user_details?.profile_photo || userSale}
                />
                <div
                  style={{
                    gap: "6px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p className="user-stats-row-name-text">
                    {item?.user_details?.firstname || "Unknown"}{" "}
                    {item?.user_details?.lastname}
                  </p>
                  <div>
                    <Image
                      width={12}
                      height={12}
                      src={OrderLocation}
                    />{" "}
                    <span className="user-stats-row-name-address">
                      {item?.user_details?.current_address?.custom_address}
                      {", "}
                      {item?.user_details?.current_address?.city}
                      {", "}
                      {item?.user_details?.current_address?.state}(
                      {item?.user_details?.current_address?.state_code}){", "}
                      {item?.user_details?.current_address?.country}{" "}
                      {item?.user_details?.zipcode}
                    </span>
                  </div>
                </div>
              </td>
              <td
                onClick={() => handleNavigateToTrackStatus(item)}
                className="customers-table-data"
              >
                {item?.total_orders}
              </td>
              <td
                onClick={() => handleNavigateToTrackStatus(item)}
                className="customers-table-data"
              >
                {item?.total_products}
              </td>
              <td
                onClick={() => handleNavigateToTrackStatus(item)}
                className="customers-table-data"
              >
                ${Number(item?.life_time_spent).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-footer flex-row-space-between">
        <div className="flex-row-space-between">
          <Image
            src={ArrowLeft}
            width={16}
            height={16}
          />
          <p
            style={{
              color: "#B4BEEB",
            }}
            className="pagination-footer-text"
          >
            Prev
          </p>
        </div>

        <p
          style={{
            color: "#B4BEEB",
          }}
          className="pagination-footer-text"
        >
          Page 1 to 8
        </p>
        <div className="flex-row-space-between">
          <p className="pagination-footer-text">Next</p>
          <Image
            src={ArrowRight}
            width={16}
            height={16}
          />
        </div>
      </div>
      
    </div>
  );
};

export default Users;
