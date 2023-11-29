import "../public/css/auth.css";
import "../public/css/custom.css";
import "../public/css/customNew.css";
import "../styles/website/custom_A.css";
import "../public/css/responsive.css";
import "../public/font/stylesheet.css";
import "../public/css/custom_R.css";
import "../public/css/deliveries.css";
import "react-toastify/dist/ReactToastify.css";
import 'react-phone-input-2/lib/style.css';
import { ToastContainer } from "react-toastify";
import Layout from "../components/layouts/layouts";
import AuthLayout from "../components/layouts/authLayouts";
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { wrapper } from "../redux";
import { useDispatch, useSelector } from 'react-redux';
import auth, { selectLoginAuth } from "../redux/slices/auth";

function App({ Component, pageProps }) {
  const dispatch = useDispatch();


  const [activeSidebar, setActiveSidebar] = useState(true)
  const authData = useSelector(selectLoginAuth)
  const tokens = authData?.posUserLoginDetails?.payload?.token ? authData?.posUserLoginDetails?.payload?.token :""
console.log(tokens,"authtokens");
  const [loading, setLoading] = useState(true);

  

  const toggleSidebar = () => {
    setActiveSidebar(prev => !prev)
  };


  const LayoutPaths = [
    '/home',
    '/invoices',
    '/mainDeliveries',
    '/Product',
    '/service',
    '/web'
  ]


  return (
    <>
      {tokens ?
        <>
          <Layout activeSidebar={activeSidebar} toggleSidebar={toggleSidebar}>
            <Component {...pageProps} />
            <ToastContainer autoClose={800} />
          </Layout>
        </>
        :
        <>
          <AuthLayout>
            <Component {...pageProps} />
            <ToastContainer autoClose={800} />
          </AuthLayout>

        </>
      }
    </>
  );
}

export default wrapper.withRedux(App);