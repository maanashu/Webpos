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
  arrowDown,
} from "../../utilities/images";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import Link from "next/link";
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

  const statBoxTitleStyle = { color: "#636E9F" };
  const drawerIDTitleStyle = { color: "#914BEB", marginTop: "3px" };

  return (
    <div className="main-container-customers">
      <Header mainIcon={salesTracking} title="Sales Tracking" />

      <div className="batchView">
        <div className="batchBox">
          <h4 className="stat-box-title" style={statBoxTitleStyle}>
            Batch
          </h4>
        </div>

        <div className="left-hand flex-row-space-between">
          <Image
            src={DrawerID}
            width={15}
            height={15}
            style={drawerIDTitleStyle}
          />
          <h4 className="stat-box-title" style={drawerIDTitleStyle}>
            Drawer ID 1
          </h4>
        </div>

        <div className="viewSession">
          <Link href="cashDrawer/viewSession">
            <button className="viewSessionButton">
              <p className="viewSessionText">View Session</p>
            </button>
          </Link>
        </div>
      </div>

      <div className="divider"></div>

      <div className="sessionHistory">
        <h4 className="stat-box-title" style={statBoxTitleStyle}>
          Session History
        </h4>
        <div className="dividerHorizontal"></div>
        <Link href="cashDrawer/sessionHistory">
          <Image src={arrowDown} width="24px" height="24px" />
        </Link>
      </div>
    </div>
  );
};

export default CashDrawer;
