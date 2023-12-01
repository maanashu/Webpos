import Image from "next/image";
import React, { useState } from "react";
import {
  scanImg,
  Wallets,
  userSale,
  bellIcon,
  SearchLight,
  Appointments,
} from "../../utilities/images";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  registerables,
} from "chart.js";

const Customers = () => {
  const [selectedTimeSpan, setSelectedTimeSpan] = useState(1);

  const STATS = [
    {
      icon: userSale,
      title: "New Customers",
      count: 2984,
      bgColor: "#FFEEB3",
      textColor: "#93370D",
    },
    {
      icon: userSale,
      title: "Returning Customers",
      count: 3541,
      bgColor: "#D7DEFF",
      textColor: "#172461",
    },
    {
      icon: userSale,
      title: "Online Customers",
      count: "$5560",
      bgColor: "#D1FADF",
      textColor: "#003921",
    },
    {
      icon: userSale,
      title: "Walk-in Customers",
      count: 4045,
      bgColor: "#BFEEFF",
      textColor: "#1F6A84",
    },
  ];

  ChartJS.register(...registerables);

  return (
    <div className="main-container">
      {/* headers */}
      <div className="header flex-row-space-between">
        <div className="right-hand flex-row-space-between">
          <Image src={Wallets} />
          <div style={{ marginLeft: "6px" }}>
            <h2 className="header-title">Total Customers</h2>
            <p className="header-descrip">
              ALl the following data is gathered{" "}
              <span
                style={{
                  fontWeight: "600",
                }}
              >
                weekly
              </span>
            </p>
          </div>
        </div>
        <div className="left-hand flex-row-space-between">
          <div className="day-tabs flex-row-space-between">
            {["Today", "Weekly", "Month", "Yearly"].map((el, idx) => (
              <p
                onClick={() => setSelectedTimeSpan(idx)}
                className={`tab-item${
                  selectedTimeSpan == idx ? " selected-tab" : ""
                }`}
              >
                {el}
              </p>
            ))}
          </div>
          <div className="extras flex-row-space-between">
            {[Appointments, bellIcon, SearchLight, scanImg]?.map((el, idx) => (
              <div
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

      {/* stats */}
      <div className="stats flex-row-space-between">
        {STATS.map(({ bgColor, icon, title, count, textColor }, idx) => (
          <div
            className="stat-box"
            style={{ backgroundColor: bgColor }}
          >
            <Image
              objectFit="center"
              width={30}
              height={30}
              src={icon}
              color={textColor}
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

      {/* stats on chart */}
      <div>
        <div
          style={{ margin: "12px 16px" }}
          className="flex-row-space-between"
        >
          <div
            style={{ gap: "10px", alignItems: "center" }}
            className="flex-row-space-between"
          >
            <p className="chart-header-title">Total Customers</p>
            <p className="chart-header-count">4590</p>
            <div className="chart-header-btn">
              <p className="chart-header-btn-text">View All</p>
            </div>
          </div>
          <div
            style={{ gap: "24px" }}
            className="flex-row-space-between"
          >
            {[
              { textColor: "#263682", text: "JBR Coin", id: "jbrCoin" },
              { textColor: "#039855", text: "Cash", id: "cash" },
              { textColor: "#47B0D6", text: "Credit Card", id: "cc" },
            ]?.map(({ text, textColor, id }) => (
              <div
                style={{
                  gap: "6px",
                  alignItems: "center",
                  position: "relative",
                }}
                className="checkbox-cnt flex-row-space-between"
              >
                <input
                  id={id}
                  type="checkbox"
                  className={"checkbox-" + id}
                />
                <label
                  htmlFor={id}
                  className="checkbox-label"
                  style={{ color: textColor }}
                >
                  {text}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Line
          datasetIdKey="id"
          data={{
            labels: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            datasets: [
              {
                id: 1,
                label: "",
                data: [1, 3, 6, 8, 9],
              },
              {
                id: 2,
                label: "",
                data: [1, 2, 3, 4, 5],
              },
              {
                id: 3,
                label: "",
                data: [8, 9, 2, 4, 5],
              },
              {
                id: 4,
                label: "",
                data: [5, 7, 4, 3, 1],
              },
              {
                id: 5,
                label: "",
                data: [3, 2, 1, 5, 0],
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Customers;
