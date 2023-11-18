// import Navbar from "./navbar.js";
import Footer from "./footer.js";
import { useRouter } from "next/router";
import AfterHeader from './afterHeader.js';
import Sidebar from "./layouts/sidebar.js";
// import { Navbar } from "react-bootstrap";
import Navbar from "./navbar.js";
import { useState } from "react";
export default function Layout({ children, isLoggedIn, userType }) {
  const location = useRouter();
  const urlpath = location.pathname;
  const [activeSidebar, setActiveSidebar] = useState(true)
  const getSideBarValue = (flag) => {
    setActiveSidebar(flag)
  }
  return (
    <>
      <div className={activeSidebar == true ? "sidebarActive" : "sidebar"}>
        <Sidebar
          getSideBar={(flag) => getSideBarValue(flag)}
          activeSidebar={activeSidebar}
        />
      </div>
      <div className="rightWrapper">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}
