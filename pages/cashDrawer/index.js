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
  searchMoney
} from "../../utilities/images";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import Link from "next/link";
import Header from "../../components/commanComonets/cashdrawer/Header";
import { PaginationFooter } from "../../components/commanComonets/customers/PaginationFooter";

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
    <>
      <div className="cashDrawOuter cashDrawMain">
        <Header mainIcon={salesTracking} title="Sales Tracking" />
        <div className="cashDrawSub">
          <div className="outerCashFlex">
            <h4 className="settingSub">Batch</h4>
            <h4 className="settingSub">Drawer</h4>
          </div>
          <div className="batchData">
            <div className="batchDataSub">
              <h4 className="cartText">Batch</h4>
              <div className="flexBox">
                <Image src={DrawerID} className="img-fluid" alt="mainIcon Image" />
                <h4 className="locateDistance">Drawer ID 1</h4>
              </div>
            </div>
            <button className="viewSessionBtn" type="submit">
              View Session
            </button>
          </div>
          <div className="batchData">
            <div className="batchDataSub">
              <h4 className="cartText">Batch</h4>
              <div className="flexBox">
                <Image src={DrawerID} className="img-fluid" alt="mainIcon Image" />
                <h4 className="locateDistance">Drawer ID 1</h4>
              </div>
            </div>
            <button className="trackBtn" type="submit">
              Start Tracking Session
              <Image src={searchMoney} className="img-fluid" alt="searchMoney Image" />
            </button>
          </div>
          <div className="cashSession">
            <h4 className="activateText text-start">
              Session History
            </h4>
            <Link href="cashDrawer/sessionHistory">
              <Image src={arrowDown} className="img-fluid" alt="arrow image" />
            </Link>
          </div>
        </div>
        <PaginationFooter />
      </div>
    </>
  );
};

export default CashDrawer;
