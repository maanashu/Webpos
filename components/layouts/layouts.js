// import Navbar from "./navbar.js";
import Footer from "../footer.js";
import { useRouter } from "next/router";
import AfterHeader from "../afterHeader.js";
import Sidebar from "../sidebar.js";
// import { Navbar } from "react-bootstrap";
import Navbar from "../navbar.js";
import { useState } from "react";
export default function Layout({ children, isLoggedIn, userType }) {
  const router = useRouter();
  const [activeSidebar, setActiveSidebar] = useState(true);
  const sidebarToggle = (value) => {
    setActiveSidebar(value);
  };

  const navbarPaths = [
    "/home/overview",
    "/customers",
    "/customers/users",
    `/customers/users/[user-id]`,
    "/analytics",
    "/analytics/grossProfit",
    "/analytics/totalRevenue",
    "/analytics/totalCosts",
    "/analytics/totalPosOrder",
    "/analytics/totalDeliveryOrder",
    "/analytics/totalShippingOrder",
    "/analytics/totalOrder",
    "/analytics/totalProductSold",
    "/settings",
    "/settings/devices",
    "/settings/staffList",
    "/settings/staff/staffDetail",
    "/settings/staff/staffLocation",
    "/settings/agreement",
    "/settings/refundPolicy",
    "/settings/termsCondition",
    "/settings/polices",
    "/settings/bussinessLocation"
  ];

  return (
    <>
      <Sidebar sidebarToggle={(e) => sidebarToggle(e)} />
      {/* <div className= {`rightWrapper ${activeSidebar ? 'show' : 'hide'}`}> */}
      <div className="rightWrapper">
        <main>
          {navbarPaths.includes(router.pathname) ? (
            ""
          ) : (
            <Navbar activeSidebar={activeSidebar} />
          )}
          {children}
        </main>
      </div>
    </>
  );
}
