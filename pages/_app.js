import "../public/css/auth.css";
import "../public/css/custom.css";
import "../public/css/customNew.css";
import "../styles/website/custom_A.css";
import "../public/css/responsive.css";
import "../public/font/stylesheet.css";
import "../public/css/custom_R.css";
import "../public/css/deliveries.css";
import "../public/css/customers.css";
import "../public/css/cashDrawer.css";
import "../public/css/settings.css";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-input-2/lib/style.css";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer } from "react-toastify";
import Layout from "../components/layouts/layouts";
import AuthLayout from "../components/layouts/authLayouts";
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { wrapper } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import auth, { selectLoginAuth } from "../redux/slices/auth";

function App({ Component, pageProps }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [activeSidebar, setActiveSidebar] = useState(true);
  const authData = useSelector(selectLoginAuth);
  // const Token = authData?.posUserLoginDetails?.payload?.token
  //   ? authData?.posUserLoginDetails?.payload?.token
  //   : "";

  const toggleSidebar = () => {
    setActiveSidebar((prev) => !prev);
  };

  // useEffect(() => {
  //   // Simulate an asynchronous delay (replace with actual authentication data fetching)
  //   const delay = setTimeout(() => {
  //     setLoading(false);
  //   }, 100); // Adjust the delay time as needed

  //   return () => clearTimeout(delay); // Clear the timeout if the component unmounts
  // }, []);

  // const LayoutPaths = [
  //   "/home",
  //   "/invoices",
  //   "/mainDeliveries",
  //   "/Product",
  //   "/service",
  //   "/web",
  // ];
  // if (loading) {
  //   // Render a loading indicator or placeholder while waiting for the token
  //   return <div></div>;
  // }

  let Token;
  if (typeof window !== "undefined") {
    Token = localStorage.getItem("authToken")
      ? localStorage.getItem("authToken")
      : "";
  }

  return (
    <>
      {Token ? (
        <>
          <Layout activeSidebar={activeSidebar} toggleSidebar={toggleSidebar}>
            <Component {...pageProps} />
            <ToastContainer autoClose={800} />
          </Layout>
        </>
      ) : (
        <>
          <AuthLayout>
            <Component {...pageProps} />
            <ToastContainer autoClose={800} />
          </AuthLayout>
        </>
      )}
    </>
  );
}

export default wrapper.withRedux(App);
