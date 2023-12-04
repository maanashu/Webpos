import React, { forwardRef, useState } from "react";
import {
  arrowDown,
  arrowIcon,
  ArrowLeft,
  OrderLocation,
  customersCross,
  arrowRightDouble,
  customerScan,
  customerUsers,
  customerSearch,
  customerCalendar,
  customerNotification,
  ArrowRight,
} from "../../../utilities/images";
import Image from "next/image";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactSelect from "react-select";
import Link from "next/link";

const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
  <p
    onClick={onClick}
    className="users-selected-date"
  >
    {value || "Date"}
  </p>
));

const Users = () => {
  const [startDate, setStartDate] = useState();
  const [selectedTab, setSelectedTab] = useState(0);

  const options = [
    { value: "Area", label: "Area" },
    { value: "Place 2", label: "Place 2" },
    { value: "Place 3", label: "Place 3" },
  ];

  const paginationBts = (icon, imgClass) => (
    <div className="pagination-btn">
      <Image
        height={24}
        width={24}
        style={{ marginTop: "-1px" }}
        src={icon}
        className={imgClass}
      />
    </div>
  );

  const TABS = [
    { text: "All", count: 190 },
    { text: "New Customers", count: 190 },
    { text: "Returning Customers", count: 190 },
    { text: "Online Customers", count: 190 },
    { text: "Waliing Customers", count: 190 },
  ];

  const reactSelectCustomStyles = (defaultStyles) => ({
    ...defaultStyles,
    color: "#263682",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingBottom: "15px",
      }}
      className="main-container-customers"
    >
      <div className="cust-header flex-row-space-between">
        <div className="right-hand flex-row-space-between">
          <Image
            src={customerUsers}
            width={24}
            height={24}
          />
          <div style={{ marginLeft: "6px" }}>
            <h2 className="header-title">Users</h2>
          </div>
        </div>
        <div className="left-hand flex-row-space-between">
          <div className="extras flex-row-space-between">
            {[
              customerCalendar,
              customerNotification,
              customerSearch,
              customerScan,
            ]?.map((el, idx) => (
              <div
                key={idx + "extraicon"}
                className="extra-item flex-row-space-between"
                style={{
                  backgroundColor: idx == "0" ? "#F5F6FC" : "transparent",
                }}
              >
                <Image
                  width={24}
                  height={24}
                  src={el}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="users-pagination-header">
        <div className="flex-row-space-between">
          <div
            style={{ gap: "16px" }}
            className="flex-row-space-between"
          >
            <div className="customer-calendar-cnt">
              <Image
                width={24}
                height={24}
                src={customerCalendar}
              />
              <ReactDatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<ExampleCustomInput />}
              />
              <Image src={arrowDown} />
            </div>
            <ReactSelect
              options={options}
              placeholder="Area"
              classNamePrefix="react-select"
              className="react-select-container"
              styles={{
                option: reactSelectCustomStyles,
                placeholder: reactSelectCustomStyles,
              }}
              components={{
                DropdownIndicator: () => (
                  <Image
                    src={arrowDown}
                    width={24}
                    height={24}
                  />
                ),
              }}
            />
          </div>
          <div
            style={{
              gap: "16px",
            }}
            className="flex-row-space-between"
          >
            <div
              style={{
                alignItems: "center",
                gap: "12px",
              }}
              className="flex-row-space-between"
            >
              <p className="users-showing-results">Showing results</p>
              <ReactSelect
                options={[
                  { value: "50", label: "50" },
                  { value: "49", label: "49" },
                  { value: "48", label: "48" },
                ]}
                placeholder="50"
                classNamePrefix="react-select"
                className="react-select-container"
                styles={{
                  placeholder: (defaultStyles) => {
                    return {
                      ...defaultStyles,
                      color: "#263682",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                    };
                  },
                  option: (defaultStyles) => {
                    return {
                      ...defaultStyles,
                      color: "#263682",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                    };
                  },
                }}
                components={{
                  DropdownIndicator: () => (
                    <Image
                      src={arrowDown}
                      width={24}
                      height={24}
                    />
                  ),
                }}
              />
            </div>
            <div
              style={{ alignItems: "center", gap: "6px" }}
              className="flex-row-space-between"
            >
              {paginationBts(arrowIcon, "roate-180deg")}
              {paginationBts(arrowRightDouble, "roate-180deg")}
              <p className="pagination-numbers">1-20 of 1550</p>
              {paginationBts(arrowIcon)}
              {paginationBts(arrowRightDouble)}
            </div>
          </div>
        </div>
        <div></div>
      </div>

      {/*  TABS*/}
      <div className="users-tabs flex-row-space-between">
        {TABS.map(({ text, count }, idx) => (
          <div
            key={idx + "tabs"}
            onClick={() => setSelectedTab(idx)}
            className="users-tab flex-row-space-between"
            style={{ backgroundColor: selectedTab == idx ? "#263682" : "" }}
          >
            <p
              className="users-tab-text"
              style={{ color: selectedTab == idx ? "#F5F6FC" : "#263682" }}
            >
              {text}
            </p>
            <p className="users-tab-count">({count})</p>
            {selectedTab === idx && (
              <div
                onClick={() => {
                  console.log(idx);
                  setSelectedTab(-1);
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
      <table className="user-stats-table">
        <tr
          className="flex-row-space-between"
          style={{
            padding: "16px",
            alignItems: "center",
            display: "flex",
            alignItems: "flex-start",
            alignSelf: "stretch",
          }}
        >
          <th className="users-stats-row-num users-stats-table-head-text">#</th>
          <th className="users-stats-row-name users-stats-table-head-text">
            Name
          </th>
          <th
            style={{
              padding: "0px 18px",
            }}
            className="users-stats-row-total-orders users-stats-table-head-text"
          >
            Total Orders
          </th>
          <th
            style={{
              padding: "0px 18px",
            }}
            className="users-stats-row-total-orders users-stats-table-head-text"
          >
            Total Products
          </th>
          <th
            style={{
              padding: "0px 18px",
            }}
            className="users-stats-row-total-orders users-stats-table-head-text"
          >
            Lifetime Spent
          </th>
        </tr>
        {[1, 2, 34, 5, 6, 6, 7, 8, 34, 5, 2, 1, 12, 4, 2, 34, 34].map(
          (_, idx) => (
            <Link href={"users/user-profile"}>
              <tr
                key={"td-" + idx}
                className="flex-row-space-between users-stats-table-row"
              >
                <td className="users-stats-row-num">
                  {(idx > 8 ? "" : "0") + (idx + 1)}
                </td>
                <td className="users-stats-row-name">
                  <Image
                    width={36}
                    height={36}
                    style={{
                      borderRadius: 50,
                    }}
                    src={
                      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    }
                  />
                  <div
                    style={{
                      gap: "6px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p className="user-stats-row-name-text">
                      Mary Jane: The Spide Girl
                    </p>
                    <div>
                      <Image
                        width={12}
                        height={12}
                        src={OrderLocation}
                      />
                      <span className="user-stats-row-name-address">
                        4318 Daffodil Lane, Savage,Virginia(VA), 20763
                      </span>
                    </div>
                  </div>
                </td>
                <td className="users-stats-row-total-orders">60</td>
                <td className="users-stats-row-total-orders">81</td>
                <td className="users-stats-row-total-orders">$7600.00</td>
              </tr>
            </Link>
          )
        )}
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
