import Image from "next/image";
import React from "react";
import {
  customerWallet,
  newCustomers,
  returningCustomers,
  onlineCustomers,
  walkInCustomers,
  salesTracking,
  DrawerID,
} from "../../utilities/images";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import Link from "next/link";
import TCRHeader from "../../components/commanComonets/TCRHeader";
import Header from "../../components/commanComonets/cashdrawer/Header";

const CashDrawer = () => {
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
      <Header mainIcon={salesTracking} title="Sales Tracking" />
      <div className="sessionHistory">
        <div className="batchBox">
          <h4 className="stat-box-title" style={{ color: "#636E9F" }}>
            {"Batch"}
          </h4>
        </div>
        <div className="left-hand flex-row-space-between">
          <Image
            src={DrawerID}
            width={15}
            height={15}
            style={{ marginTop: "3px" }}
          />
          <h4 className="stat-box-title" style={{ color: "#914BEB" }}>
            {"Drawer ID 1"}
          </h4>
        </div>
        <div className="viewSession">
          <div className="viewSessionButton">
            <h4 className="stat-box-title" style={{ color: "#636E9F" }}>
              {"View Session"}
            </h4>
          </div>
        </div>
      </div>
      <div className="sessionHistory">
        <h4 className="stat-box-title" style={{ color: "#636E9F" }}>
          {"Session History"}
        </h4>
      </div>
    </div>
  );
};

export default CashDrawer;
