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
import { useSelector } from "react-redux";
import auth, { selectLoginAuth } from "../redux/slices/auth";
import ProtectedRoute from "../components/ProtectedRoute";
// import "animate.css/animate.min.css";

function App({ Component, pageProps }) {
  const router = useRouter()
  const [activeSidebar, setActiveSidebar] = useState(true)
  const authData = useSelector(selectLoginAuth)
  console.log(authData?.posUserLoginDetails?.payload?.token, "reduxtoken");

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
      {/* {LayoutPaths.some(path => router.pathname.includes(path)) ? */}
      {authData?.posUserLoginDetails?.payload?.token === undefined ?
          <>
            <AuthLayout>
              <Component {...pageProps} />
              <ToastContainer
                autoClose={800}
              />
            </AuthLayout>
          </>
          : 
          <>
          <Layout activeSidebar={activeSidebar} toggleSidebar={() => { toggleSidebar() }}>
            <Component {...pageProps} />
            <ToastContainer
              autoClose={800}
            />
          </Layout>
        </>
        
      }
    </>
  );
}

export default wrapper.withRedux(App);