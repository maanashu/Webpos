import React, { useState } from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getDrawerSessionInfo } from "../../../redux/slices/dashboard";
import { toast } from "react-toastify";
import { selectLoginAuth } from "../../../redux/slices/auth";
import {
  getAllCustomersList,
  selectCustomersData,
} from "../../../redux/slices/customers";

const CustomerSearchModal = ({ time }) => {
  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const customersData = useSelector(selectCustomersData);
  const uniqueId = authData?.usersInfo?.payload?.uniqe_id;

  const [searchedText, setSearchedText] = useState("");

  const [searchedCustomer, setSearchedCustomer] = useState([]);

  const onSearchAppoinment = (searchText) => {
    if (searchText != "") {
      setSearchedCustomer([]);
    }
    const callback = (searchData) => {
      setSearchedCustomer(searchData?.data);
    };

    const data = {
      sellerID: uniqueId,
      customerType: "all_customers",
      calenderDate: undefined,
      dayWisefilter: time,
      area: "none",
      search: searchText,
    };

    dispatch(getAllCustomersList(data , callback));
    if (searchedText) {
      setSearchedCustomer(customersData?.searchCustomerList?.payload);
    }
  };
  console.log("sfhgdfshgsd", searchedCustomer);
  return (
    <>
      <div className="customerSearchModal">
        <form className="homeRightForm">
          <div className="searchControlBox">
            <input
              type="text"
              className="form-control searchControl"
              placeholder="Search"
              onChange={(e) => {
                onSearchAppoinment(e?.target?.value),
                  setSearchedText(e?.target?.value);
              }}
            />
            <Image
              src={Images.SearchIcon}
              alt="SearchImageIcon"
              className="img-fluid searchImg"
            />
          </div>
        </form>

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
            {searchedCustomer?.data?.length < 0 && searchedText == "" ? (
              <div>
                <h4>{"No Data Found"}</h4>
              </div>
            ) : (
              searchedCustomer?.data?.map((item, idx) => (
                <tr className="customers-table-row">
                  <td
                    onClick={() => handleNavigateToTrackStatus(item)}
                    className="customers-table-data"
                    style={{ textAlign: "left" }}
                  >
                    {idx + 1}
                  </td>
                  <td
                    onClick={() => handleNavigateToTrackStatus(item)}
                    className="customers-table-data"
                    style={{ display: "flex", gap: "12px", textAlign: "left" }}
                  >
                    <Image
                      width={36}
                      height={36}
                      style={{
                        borderRadius: 50,
                      }}
                      alt="User's profile picture"
                      src={item?.user_details?.profile_photo || Images.userSale}
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
                          src={Images.OrderLocation}
                        />
                        <span className="user-stats-row-name-address">
                          {item?.user_details?.current_address?.custom_address}
                          {", "}
                          {item?.user_details?.current_address?.city}
                          {", "}
                          {item?.user_details?.current_address?.state}(
                          {item?.user_details?.current_address?.state_code})
                          {", "}
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
                    ${Number(item?.life_time_spent).toFixed(2)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomerSearchModal;
