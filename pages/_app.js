import "../public/css/auth.css";
import "../public/css/custom.css";
import "../public/css/customNew.css";
import "../styles/website/custom_A.css";
import "../public/css/responsive.css";
import "../public/font/stylesheet.css";
import "react-toastify/dist/ReactToastify.css";
import 'react-phone-input-2/lib/style.css';
import { ToastContainer } from "react-toastify";
import Layout from "../components/layouts";
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { wrapper } from "../redux";
// import "animate.css/animate.min.css";

function App({ Component, pageProps }) {
  const router = useRouter()
  const [activeSidebar, setActiveSidebar] = useState(true)

  const toggleSidebar = () => {
    setActiveSidebar(prev => !prev)
    console.log("clicked")
  };


  return (
    <>
        <Layout activeSidebar={activeSidebar} toggleSidebar={() =>{toggleSidebar()}}>
          <Component {...pageProps} />
          <ToastContainer
            autoClose={800}
          />
        </Layout>
    </>
  );
}

export default wrapper.withRedux(App);