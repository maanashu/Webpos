import Image from "next/image";
import React from "react";
import {
  customerWallet,
  newCustomers,
  returningCustomers,
  onlineCustomers,
  walkInCustomers,
} from "../../utilities/images";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import Link from "next/link";
import TCRHeader from "../../components/commanComonets/TCRHeader";

const Customers = () => {
  const STATS = [
    {
      icon: newCustomers,
      title: "New Customers",
      count: 2984,
      bgColor: "#FFEEB3",
      textColor: "#93370D",
    },
    {
      icon: returningCustomers,
      title: "Returning Customers",
      count: 3541,
      bgColor: "#D7DEFF",
      textColor: "#172461",
    },
    {
      icon: onlineCustomers,
      title: "Online Customers",
      count: "$5560",
      bgColor: "#D1FADF",
      textColor: "#003921",
    },
    {
      icon: walkInCustomers,
      title: "Walk-in Customers",
      count: 4045,
      bgColor: "#BFEEFF",
      textColor: "#1F6A84",
    },
  ];

  ChartJS.register(...registerables);

  return (
    <div className="main-container-customers">
      {/* headers */}
      <TCRHeader
        mainIcon={customerWallet}
        title="Total Customers"
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
              <Link href="customers/users">
                <p className="chart-header-btn-text">View All</p>
              </Link>
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
                key={text + id}
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

        <div style={{ margin: "0px 16px", padding: "12px 0" }}>
          <Line
            datasetIdKey="id"
            options={{
              scales: {
                y: {
                  title: {
                    display: true,
                    text: "Customer Number",
                    color: "#7E8AC1",
                  },
                  border: {
                    dash: [2, 2],
                    display: false,
                    color: "rgba(180, 190, 235, 1)",
                  }, // for the grid lines
                  beginAtZero: true,
                  ticks: {
                    color: "#7E8AC1",
                    callback: (value) => `${value}%`,
                  },
                },
                x: {
                  grid: {
                    display: false,
                  },
                  border: {
                    display: false,
                  },
                  ticks: {
                    color: "#7E8AC1",
                  },
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
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
                  data: [34, 30, 67, 40, 96, 4, 44, 45],
                  borderColor: "rgba(70, 89, 181, 1)",
                  borderWidth: 2,
                  pointRadius: 0,
                },
                {
                  id: 2,
                  data: [10, 30, 60, 80, 90, 75, 34, 76],
                  borderColor: "rgba(240, 192, 26, 1)",
                  borderWidth: 2,
                  pointRadius: 0,
                },
                {
                  id: 3,
                  data: [15, 33, 64, 83, 20, 45, 34, 89],
                  borderColor: "rgba(18, 183, 106, 1)",
                  borderWidth: 2,
                  pointRadius: 0,
                },
                {
                  id: 3,
                  data: [16, 56, 34, 78, 34, 90, 34, 23],
                  borderColor: "rgba(71, 176, 214, 1)",
                  borderWidth: 2,
                  pointRadius: 0,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Customers;
