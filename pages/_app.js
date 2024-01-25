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
import { getSecuritySettingInfo, settingInfo } from "../redux/slices/setting";


function App({ Component, pageProps }) {
  const dispatch = useDispatch();
  const settingData = useSelector(settingInfo)
  const authData = useSelector(selectLoginAuth)
  const UniqueId = authData?.usersInfo?.payload?.uniqe_id
  const [loading, setLoading] = useState(true);
  const [activeSidebar, setActiveSidebar] = useState(true);
  const [getSelectedLanguages, setGetSelectedLanguages] = useState('')
  const [languageCode, setLanguageCode] = useState("")
  // const Token = authData?.posUserLoginDetails?.payload?.token
  //   ? authData?.posUserLoginDetails?.payload?.token
  //   : "";


  // const getSecuritySetting = async () => {
  //   let params = {
  //     app_name: "pos",
  //     seller_id: UniqueId
  //   };
  //   dispatch(getSecuritySettingInfo({
  //     ...params,
  //     cb(res) {
  //       if (res.status) {
  //         const languageCode = res?.data?.payload?.languages?.map((item) => item?.lang_code)?.filter(val => val != null)

  //         // Use Set to remove duplicates
  //         const formattedLanguageCode = `'${languageCode}'`;
  //         setLanguageCode(formattedLanguageCode)

  //         if (formattedLanguageCode) {

  //           const googleTranslateElementInit = () => {
  //             new window.google.translate.TranslateElement(
  //               {
  //                 pageLanguage: 'en',
  //                 autoDisplay: false,
  //                 includedLanguages: formattedLanguageCode ? formattedLanguageCode : "en",
  //                 layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
  //                 multilanguagePage: true,
  //               },
  //               'google_translate_element'
  //             );
  //           };

  //           const addScript = document.createElement('script');
  //           addScript.setAttribute(
  //             'src',
  //             '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  //           );
  //           document.body.appendChild(addScript);
  //           window.googleTranslateElementInit = googleTranslateElementInit;
  //         }
  //       }
  //     },
  //   })
  //   );
  // };

  const toggleSidebar = () => {
    setActiveSidebar((prev) => !prev);
  };

  useEffect(() => {
    // Simulate an asynchronous delay (replace with actual authentication data fetching)
    const delay = setTimeout(() => {
      setLoading(false);
    }, 100); // Adjust the delay time as needed

    return () => clearTimeout(delay); // Clear the timeout if the component unmounts
  }, []);

  // useEffect(() => {
  //   if (UniqueId) {
  //     getSecuritySetting();
  //   }
  // }, [UniqueId]);

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
      {/* <div id="google_translate_element"></div> */}
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
