// import Navbar from "./navbar.js";
import Footer from "./footer.js";
import { useRouter } from "next/router";
import AfterHeader from './afterHeader.js';

export default function Layout({ children, isLoggedIn, userType }) {
  const location = useRouter();
  const urlpath = location.pathname;
  return (
    <>
      <div className="main">
        <main>{children}</main>
      </div>
    </>
  );
}
