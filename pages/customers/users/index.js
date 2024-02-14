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
  getAllCustomers,
  getAllCustomersList,
  getSellerAreaList,
  selectCustomersData,
} from "../../../redux/slices/customers";
import { selectLoginAuth } from "../../../redux/slices/auth";
import { useRouter } from "next/router";
import moment from "moment-timezone";
import { amountFormat, formattedPrice } from "../../../utilities/globalMethods";

const Users = () => {
  const { query } = useRouter();
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(
    query["customer_type"] || "all_customers"
  );
  const [timeSpan, setTimeSpan] = useState(query["time-span"] || "week");
  const [limit, setLimit] = useState("10");
  const [page, setPage] = useState(1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setTimeSpan("");
    setDate("");
  };

  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const customersData = useSelector(selectCustomersData);
  const totalCustomers =
    customersData?.allCustomersData?.payload?.total_customers;
  const uniqueId = authData?.usersInfo?.payload?.uniqe_id;

  const paginatedCustomersList = customersData?.allCustomersList?.payload;
  const sellerAreaList = customersData?.sellerAreaList?.payload;
  
  const [date, setDate] = useState("");
  const [selected, setSelected] = useState("none");
  const [customersList, setCustomersList] = useState([]);
  const startIndex = (page - 1) * limit + 1;

  // const areaSelector = [
  //   { label: "None", value: "none" },
  //   sellerAreaList?.length >0 ? [...sellerAreaList]?.map((item, index) => ({
  //     label: item?.state,
  //     value: item?.state,
  //   })),
  // ];
  const areaSelector = [
    { label: "None", value: "none" },
<<<<<<< HEAD
    ...(sellerAreaList?.length > 0 ? sellerAreaList.map(item => ({ label: item.state, value: item.state })) : [])
  ];
  
=======
    ...(sellerAreaList
      ? sellerAreaList.map((item, index) => ({
          label: item?.state,
          value: item?.state,
        }))
      : []),
  ];
>>>>>>> a6ea7fd0dd15c9bc12ed0aaf2f30cab65edf401f
  const filterHandler = () => {
    if (startDate && endDate) {
      return {
        start_date: moment(startDate).format("YYYY-MM-DD"),
        end_date: moment(endDate).format("YYYY-MM-DD"),
      };
    } else if (timeSpan) {
      return {
        filter: timeSpan,
      };
    } else if (date) {
      return {
        start_date: moment(date).format("YYYY-MM-DD"),
        end_date: moment(date).format("YYYY-MM-DD"),
      };
    }
  };
  const data = filterHandler();

  const handleSpecificDateChange = (dates) => {
    setDate(moment(dates).format("YYYY-MM-DD"));
    setTimeSpan("");
    setStartDate("");
    setEndDate("");
  };

  useEffect(() => {
    if (uniqueId && data) {
      let params = {
        seller_id: uniqueId,
        ...data,
      };
      dispatch(getAllCustomers(params));
    }
  }, [uniqueId, timeSpan, startDate, endDate, date]);

  useEffect(() => {
    if (uniqueId) {
      const params = {
        page,
        limit: Number(limit),
        dayWisefilter: timeSpan,
        customerType: selectedTab,
        sellerID: uniqueId,
        start_date: moment(startDate).format("YYYY-MM-DD"),
        end_date: moment(endDate).format("YYYY-MM-DD"),
        calenderDate: date,
        area: selected?.value,
      };
      dispatch(
        getAllCustomersList({
          ...params,
          cb(res) {
            if (res.statusCode == 200) {
              setCustomersList(res?.data?.payload?.data);
            } else {
              setCustomersList([]);
            }
          },
        })
      );
      // dispatch(getAllCustomersList(params));
      dispatch(getSellerAreaList({ seller_id: params.sellerID }));
    }
  }, [
    uniqueId,
    selectedTab,
    timeSpan,
    limit,
    page,
    startDate,
    endDate,
    date,
    selected,
  ]);

  const TABS = [
    {
      text: "All",
      count: totalCustomers?.totalCustomer,
      type: "all_customers",
    },
    {
      text: "New Customers",
      count: totalCustomers?.newCustomer,
      type: "new_customers",
    },
    {
      text: "Returning Customers",
      count: totalCustomers?.returningCustomer,
      type: "returning_customers",
    },
    {
      text: "Online Customers",
      count: totalCustomers?.onlineCustomers,
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

  const handleNotification = () => {
    router.push("/transactions/notification", `/customers/users/notification`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingBottom: "15px",
      }}
      className="main-container-customers fullheightBox_"
    >
      <TCRHeader
        title="Users"
        descrip={" "}
        timeSpan={timeSpan}
        onTimeSpanSelect={(data) => {
          setTimeSpan(data);
          setDate("");
        }}
        mainIcon={customerUsers}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        onDateChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        notificationHandler={handleNotification}
      />

      <PaginationHeader
        page={page}
        limit={limit}
        setPage={setPage}
        setLimit={setLimit}
        totalItems={paginatedCustomersList?.total}
        onDateChange={handleSpecificDateChange}
        data={customersList}
        date={date}
        option
        options={areaSelector}
        setSelected={setSelected}
      />

      {/*  TABS*/}
      <div className="users-tabs flex-row-space-between paginateTop">
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
          {customersData?.loading ? (
            <td className="text-center" colSpan={12}>
              Loading...
            </td>
          ) : (
            <>
              {customersList?.length == 0 ? (
                <td className="text-center" colSpan={12}>
                  No data found
                </td>
              ) : (
                <>
                  {customersList?.map((item, idx) => (
                    <tr className="customers-table-row">
                      <td
                        onClick={() => handleNavigateToTrackStatus(item)}
                        className="customers-table-data"
                        style={{ textAlign: "left" }}
                      >
                        {startIndex + idx}
                      </td>
                      <td
                        onClick={() => handleNavigateToTrackStatus(item)}
                        className="customers-table-data"
                        style={{
                          display: "flex",
                          gap: "12px",
                          textAlign: "left",
                        }}
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
                            {item?.user_details?.current_address ? (
                              <Image
                                width={12}
                                height={12}
                                src={OrderLocation}
                              />
                            ) : (
                              <></>
                            )}
                            <span className="user-stats-row-name-address">
                              {
                                item?.user_details?.current_address
                                  ?.custom_address
                              }{" "}
                              {item?.user_details?.current_address?.city}{" "}
                              {item?.user_details?.current_address?.state}
                              {
                                item?.user_details?.current_address?.state_code
                              }{" "}
                              {item?.user_details?.current_address?.country}{" "}
                              {item?.user_details?.zipcode}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td
                        onClick={() => handleNavigateToTrackStatus(item)}
                        className="customers-table-data"
                        style={{ textAlign: "left" }}
                      >
                        {item?.total_orders}
                      </td>
                      <td
                        onClick={() => handleNavigateToTrackStatus(item)}
                        className="customers-table-data"
                        style={{ textAlign: "left" }}
                      >
                        {item?.total_products}
                      </td>
                      <td
                        onClick={() => handleNavigateToTrackStatus(item)}
                        className="customers-table-data"
                        style={{ textAlign: "left" }}
                      >
                        {item?.life_time_spent
                          ? item?.life_time_spent < 0
                            ? "-$" +
                              amountFormat(
                                Math.abs(item?.life_time_spent),
                                "notSign"
                              )
                            : amountFormat(item?.life_time_spent)
                          : "$0"}
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </>
          )}
        </tbody>
      </table>

      <div className="pagination-footer flex-row-space-between paginatePosition">
        <div className="flex-row-space-between">
          <Image src={ArrowLeft} width={16} height={16} />
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
          <Image src={ArrowRight} width={16} height={16} />
        </div>
      </div>
    </div>
  );
};

export default Users;
