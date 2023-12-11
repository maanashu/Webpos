import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  OrderLocation,
  customersCross,
  customerUsers,
} from "../../../utilities/images";
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import TCRHeader from "../../../components/commanComonets/TCRHeader";
import PaginationHeader from "../../../components/commanComonets/PaginationHeader";

const Users = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const TABS = [
    { text: "All", count: 190 },
    { text: "New Customers", count: 190 },
    { text: "Returning Customers", count: 190 },
    { text: "Online Customers", count: 190 },
    { text: "Waliing Customers", count: 190 },
  ];
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
        withTimeTabs={false}
        mainIcon={customerUsers}
      />

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
                <td style={{
                  padding: "6px 0px"
                }} className="users-stats-row-name">
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
                      />{" "}
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
