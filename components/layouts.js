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
  const sidebarToggle = (value) => {
    setActiveSidebar(value)
  }

  console.log(activeSidebar,"sidebar value")
  return (
    <>
    <Sidebar sidebarToggle={(e) => sidebarToggle(e)}/>
      <div className="rightWrapper">
        <Navbar activeSidebar={activeSidebar}/>
        <main className={activeSidebar? "show": "hide"}>{children}</main>
      </div>
    </>
  );
}
