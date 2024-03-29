import React, { useEffect, useState, useRef } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import CustomModal from "../../components/customModal/CustomModal";
import SessionModal from "../../components/modals/homeModals/sessionModal";
import DetailModal from "../../components/modals/homeModals/service/detailModal";
import MyTimer from "../../components/commanComonets/MyTimer";
import { DELIVERY_MODE } from "../../constants/commonConstants";
import { selectLoginAuth } from "../../redux/slices/auth";
import { restAllData } from "../../redux/slices/commonActions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import withAuth from "../../components/withAuth";
import {
  dashboardDetails,
  getAllOrderDeliveries,
  getPosLoginDetails,
  getTodaySales,
  getOnlineOrdersCount,
  endTrackingSession,
  fetchInvoiceDetail,
} from "../../redux/slices/dashboard";
import { selectCashDrawerData } from "../../redux/slices/cashDrawer";
import PaginationFooter from "../../components/commanComonets/customers/PaginationFooter";
import moment from "moment-timezone";
import { toast } from "react-toastify";
import {
  amountFormat,
  getCurrentTimeZone,
} from "../../utilities/globalMethods";
import { getMainProduct } from "../../redux/slices/retails";
import { updateSettings } from "../../redux/slices/setting";
import ProductAddModal from "../../components/modals/homeModals/productAddModal";

const Overview = () => {
  const searchInputRef = useRef(null);
  const currentTimeZone = getCurrentTimeZone();
  const authData = useSelector(selectLoginAuth);
  const dashboardData = useSelector(dashboardDetails);
  // const trackingSession = dashboardData?.drawerSession?.payload;
  const sessionData = useSelector(selectCashDrawerData);
  const trackingSession = sessionData?.drawerSession?.payload;
  const expectedCashByDrawerId = sessionData?.expectedCashByDrawerId?.payload;
  const UniqueId = authData?.usersInfo?.payload?.uniqe_id
    ? authData?.usersInfo?.payload?.uniqe_id
    : "";
  const posUserUniqueId = authData?.posUserLoginDetails?.payload?.uuid
    ? authData?.posUserLoginDetails?.payload?.uuid
    : "";
  const router = useRouter();
  const dispatch = useDispatch();
  const [key, setKey] = useState(Math.random());
  const [orderDeliveriesInfo, setOrderDeliveriesInfo] = useState("");
  const [productResponse, setProductResponse] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const [getTodaySale, setGetTodaySale] = useState("");
  const [posLoginDetail, setPosLoginDetail] = useState("");
  const [onlineOrdersCount, setOnlineOrdersCount] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState();
  const [isSearching, setIsSearching] = useState(false);
  const [invoiceDetail, setInvoiceDetail] = useState({});
  const [selectedProduct, setSelectedProduct] = useState("");
  const [displaySearchBox, setDisplaySearchBox] = useState(false);
  const [modalDetail, setModalDetail] = useState({
    show: false,
    title: "",
    flag: "",
  });
  const handleUserProfile = (flag) => {
    setModalDetail({
      show: true,
      flag: flag,
      type: flag,
    });
    setKey(Math.random());
  };
  // API for get all oder deliveries...............................
  const allOrderDeliveriesInfo = () => {
    let params = {
      seller_id: UniqueId,
      delivery_option: "1,3,4",
      page: pageNumber,
      limit: recordsPerPage,
      app_name: "b2c",
      need_returned: "false",
    };
    setLoadingOrders(true);
    dispatch(
      getAllOrderDeliveries({
        ...params,
        cb(res) {
          if (res.status && res?.data?.payload?.data?.length) {
            setOrderDeliveriesInfo(res?.data?.payload?.data);
            setTotalItems(res?.data?.payload?.total);
            setLoadingOrders(false);
          } else {
            setOrderDeliveriesInfo([]);
            setTotalItems(0);
            setLoadingOrders(false);
          }
        },
      })
    );
  };

  // API for get today sales...............................
  const todaySaleInfo = () => {
    let params = {
      seller_id: UniqueId,
      filter: "today",
    };
    dispatch(
      getTodaySales({
        ...params,
        cb(res) {
          if (res.status && res?.data?.payload?.length) {
            const dataArr = res.data.payload;
            const sortedArr = [];
            sortedArr.push(
              dataArr.find((item) => item.mode_of_payment == "cash")
            );
            sortedArr.push(
              dataArr.find((item) => item.mode_of_payment == "card")
            );
            sortedArr.push(
              dataArr.find((item) => item.mode_of_payment == "jbr")
            );

            // const sortingArr = ["cash", "card", "jbr", "all"];
            // dataArr.sort((a, b) => {
            //     const indexA = sortingArr.indexOf(a.mode_of_payment);
            //     const indexB = sortingArr.indexOf(b.mode_of_payment);

            //     if (indexA === -1 && indexB === -1) {
            //         return 0;
            //     } else if (indexA === -1) {
            //         return 1;
            //     } else if (indexB === -1) {
            //         return -1;
            //     } else {
            //         return indexA - indexB;
            //     }
            // });
            setGetTodaySale(sortedArr);
          }
        },
      })
    );
  };

  // API for get online orders count...............................
  const fetchOnlineOrdersCount = () => {
    let params = {
      seller_id: UniqueId,
    };
    dispatch(
      getOnlineOrdersCount({
        ...params,
        cb(res) {
          if (res.status) {
            setOnlineOrdersCount(res?.data?.payload?.onlineOrders);
          }
        },
      })
    );
  };

  // API for lock screen...............................
  const lockScreen = () => {
    let params = {
      // pos_user_id: posUserUniqueId,
      drawer_id: trackingSession?.id,
      amount: expectedCashByDrawerId?.remainingCash
        ? Number(expectedCashByDrawerId.remainingCash)
        : Number(trackingSession?.cash_balance),
      transaction_type: "end_tracking_session",
      mode_of_cash: "cash_out",
    };
    dispatch(
      endTrackingSession({
        ...params,
        async cb(res) {
          if (res.status) {
            await dispatch(restAllData({ skipAuth: true }));
            // await dispatch(posUserLogout());
            // await dispatch(dashboardLogout());
            localStorage.removeItem("authToken");
            router.push("/auth/login");
          }
        },
      })
    );
  };

  // API for search invoice ...............................
  const searchInvoice = (enteredKeyword) => {
    let params = {
      invoice_number: enteredKeyword,
      seller_id: UniqueId,
    };
    dispatch(
      fetchInvoiceDetail({
        ...params,
        cb(res) {
          if (
            res.status &&
            res?.data?.payload &&
            Object.keys(res.data.payload).length > 0
          ) {
            setInvoiceDetail(res.data.payload);
            setIsSearching(false);
          } else {
            setInvoiceDetail({});
            searchProduct(enteredKeyword);
          }
        },
      })
    );
  };

  const searchProduct = (enteredKeyword) => {
    let params = {
      seller_id: UniqueId,
      search: enteredKeyword,
      // need_invoice_search:true,
      page: 1,
      limit: 10,
    };
    dispatch(
      getMainProduct({
        ...params,
        cb(res) {
          if (res.status && res?.data?.payload?.data?.length) {
            setProductResponse(res?.data?.payload?.data);
          } else {
            setProductResponse([]);
          }
          setIsSearching(false);
        },
      })
    );
  };

  // API for get user Pos Login Info...............................
  const userLoginDetails = () => {
    dispatch(
      getPosLoginDetails({
        cb(res) {
          if (res.status) {
            setPosLoginDetail(res?.data?.payload);
          }
        },
      })
    );
  };
  //closeModal

  const handleOnCloseModal = async () => {
    setModalDetail({
      show: false,
      title: "",
      flag: "",
    });
    setKey(Math.random());
  };

  const closeModal = async () => {
    await dispatch(restAllData({ skipAuth: true }));

    // await dispatch(logout());
    // await dispatch(dashboardLogout());

    setTimeout(() => {
      toast.success("Logout successfully");
    }, 200);
    router.push("/auth/verification");
    localStorage.removeItem("authToken");
    localStorage.removeItem("persist:root");
  };

  const handleInputChange = (event) => {
    var keyword = event.target.value.toLowerCase();

    // To handle return/order invoices
    const keywordArr = keyword.split("_");
    if (keywordArr?.length && keywordArr.length > 0) {
      keyword = keywordArr[keywordArr.length - 1];
    } else {
      keyword = keywordArr[0];
    }

    if (!/[a-zA-Z]/.test(keyword)) {
      setSearchKeyword(keyword);
    }
  };

  // Get the current time as a moment object
  const currentTime = new Date();

  // Parse the input strings into moment objects
  const currentMoment = currentTimeZone
    ? moment(currentTime).tz(currentTimeZone)
    : moment(currentTime);
  const loginMoment = currentTimeZone
    ? moment(posLoginDetail?.updated_at).tz(currentTimeZone)
    : moment(posLoginDetail?.updated_at);

  // Calculate the difference in milliseconds
  const timeDifference = currentMoment.diff(loginMoment);

  // Convert the difference to a moment duration
  const sessionDuration = moment.duration(timeDifference);

  // Get the individual components of the duration
  const hours = sessionDuration.hours();
  const minutes = sessionDuration.minutes();

  const handleProductSelect = (data) => {
    setSelectedProduct(data);
    setModalDetail({
      show: true,
      flag: "productadd",
      type: "productadd",
    });
    setKey(Math.random());
  };

  const getSettingData = () => {
    dispatch(
      updateSettings({
        cb(res) {},
      })
    );
  };

  useEffect(() => {
    if (UniqueId && !trackingSession?.start_session) {
      setModalDetail({
        show: true,
        flag: "trackingmodal",
        type: "trackingmodal",
      });
      setKey(Math.random());
      getSettingData();
    }
  }, []);

  useEffect(() => {
    if (UniqueId) {
      todaySaleInfo();
      fetchOnlineOrdersCount();
      userLoginDetails();
    }
  }, [UniqueId]);

  useEffect(() => {
    if (UniqueId) {
      allOrderDeliveriesInfo();
    }
  }, [UniqueId, pageNumber]);

  useEffect(() => {
    if (searchKeyword && typeof searchKeyword != "undefined") {
      setIsSearching(true);
      setDisplaySearchBox(true);

      const search = setTimeout(() => {
        //Your search query and it will run the function after 3secs from user stops typing
        var keyword = searchKeyword.toLowerCase();
        searchInvoice(keyword);
        // searchProduct(keyword)
      }, 3000);
      return () => clearTimeout(search);
    } else {
      setDisplaySearchBox(false);
    }
  }, [searchKeyword]);

  return (
    <>
      <div className="homeOverview">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="homeLeft">
                <div className="homeProfile">
                  <figure className="profileImage">
                    <Image
                      src={
                        authData?.posUserLoginDetails?.payload?.user_profiles
                          ?.profile_photo
                          ? authData?.posUserLoginDetails?.payload
                              ?.user_profiles?.profile_photo
                          : Images.userDummy
                      }
                      alt="HomeProfileImage"
                      width={100}
                      height={100}
                      className="img-fluid homeProfileImg"
                    />
                  </figure>
                  {console.log(
                    "lasttt",
                    authData?.posUserLoginDetails?.payload?.user_profiles
                      ?.lastname
                  )}
                  <h2 className="loginheading mt-2">{`${
                    authData?.posUserLoginDetails?.payload?.user_profiles
                      ?.firstname
                  } ${
                    authData?.posUserLoginDetails?.payload?.user_profiles
                      ?.lastname === null
                      ? ""
                      : authData?.posUserLoginDetails?.payload?.user_profiles
                          ?.lastname
                  }`}</h2>
                  <div className="cashBox">
                    <h4 className="cashierHeading">
                      {authData?.posUserLoginDetails?.payload?.user_roles
                        .length > 0 ? (
                        authData?.posUserLoginDetails?.payload?.user_roles?.map(
                          (data, index) => {
                            return (
                              <h4 key={index} className="loginSub">
                                {data?.role?.name}
                              </h4>
                            );
                          }
                        )
                      ) : (
                        <h4 className="loginSub mt-3">Admin / Manager</h4>
                      )}
                    </h4>
                    <div className="IdTextMain">
                      <h4 className="userIdText">
                        ID : {authData?.posUserLoginDetails?.payload?.id}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="profileSaleData">
                  <div className="todaySale ">
                    <h4 className="loginMain">Today’s Sales</h4>
                    {dashboardData?.loading ? (
                      <>
                        <div className="loaderOuter">
                          <div className="spinner-grow loaderSpinner text-center my-2"></div>
                        </div>
                      </>
                    ) : (
                      getTodaySale &&
                      getTodaySale?.map((data, index) => {
                        if (!data || data?.mode_of_payment == "all") {
                          return;
                        }

                        return (
                          <div key={index} className="flexHeading mt-4">
                            <h4 className="saleHeading">
                              {data?.mode_of_payment === "jbr"
                                ? "JBR Coin"
                                : data?.mode_of_payment
                                    ?.charAt(0)
                                    ?.toUpperCase() +
                                  data?.mode_of_payment?.slice(1)}{" "}
                              sales amount
                            </h4>
                            <h4 className="saleHeading text-end">
                              {data?.mode_of_payment === "jbr"
                                ? `JBR ${data?.total_sale_amount?.toFixed(2)}`
                                : "$" + data?.total_sale_amount?.toFixed(2)}
                              {/* ${data?.total_sale_amount?.toFixed(2)} */}
                            </h4>
                          </div>
                        );
                      })
                    )}
                  </div>
                  <div className="todaySale cashDraw">
                    <h4 className="loginMain">Cash Drawer</h4>
                    <div className="flexHeading mt-4">
                      <h4 className="saleHeading">Opening Balance</h4>
                      <h4 className="saleHeading">
                        {amountFormat(trackingSession?.opening_balance)}
                      </h4>
                    </div>
                    <div className="flexHeading mt-2">
                      <h4 className="saleHeading">Closing Balance</h4>
                      <h4 className="saleHeading">
                        {expectedCashByDrawerId?.remainingCash
                          ? amountFormat(expectedCashByDrawerId.remainingCash)
                          : amountFormat(trackingSession?.cash_balance)}
                      </h4>
                    </div>
                  </div>
                  <div className="timedetail">
                    <div className="flexHeading mt-2">
                      <h4 className="dayTimeText">
                        {moment().format("dddd, ll")}
                      </h4>
                      <h4 className="dayTimeText">
                        {moment().format("hh:mm:ss A")}
                      </h4>
                    </div>
                    <div className="flexHeading mt-2">
                      <h4 className="dayTimeText">Log in Time:</h4>
                      <h4 className="dayTimeText">
                        {currentTimeZone
                          ? moment(posLoginDetail?.updated_at)
                              .tz(currentTimeZone)
                              .format("hh:mm:ss A")
                          : moment(posLoginDetail?.updated_at).format(
                              "hh:mm:ss A"
                            )}
                      </h4>
                    </div>
                    <div className="flexHeading mt-2">
                      <h4 className="dayTimeText">Session:</h4>
                      <h4 className="dayTimeText">{`${hours}h:${
                        minutes < 0 ? 0 : minutes
                      }m`}</h4>
                    </div>
                  </div>
                </div>
                <div
                  className="productReturn"
                  onClick={() => {
                    router.push("/invoices/invoices");
                  }}
                >
                  <h4 className="linkHeading">Product Returns</h4>
                  <Image
                    src={Images.ProductBox}
                    alt="BoxImage"
                    className="img-fluid "
                    // onClick={() => { handleUserProfile("trackingmodal") }}
                  />
                </div>
                <div className="lockScreenBox" onClick={() => lockScreen()}>
                  <h4 className="linkHeading">Lock Screen</h4>
                  <Image
                    src={Images.ProductLock}
                    alt="LockImage"
                    className="img-fluid "
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="homeRight position-relative">
                <div className="searchControlBox">
                  <input
                    ref={searchInputRef}
                    type="text"
                    className="form-control searchControl"
                    placeholder="Search here"
                    value={searchKeyword}
                    onChange={(e) => {
                      e.preventDefault();
                      handleInputChange(e);
                    }}
                  />
                  <Image
                    src={Images.Scan}
                    alt="ScanImage"
                    className="img-fluid scanSearch"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      searchInputRef.current.focus();
                    }}
                  />
                  <Image
                    src={Images.SearchIcon}
                    alt="SearchImageIcon"
                    className="img-fluid searchImg"
                  />
                </div>

                {displaySearchBox && (
                  <div className="custom-search-box">
                    <div className="custom-search-dropdown">
                      <div
                        className="cross-icon"
                        onClick={() => {
                          setDisplaySearchBox(false);
                          setSearchKeyword("");
                          setIsSearching(false);
                        }}
                      >
                        <Image
                          src={Images.crossBlue}
                          alt="SearchImageIcon"
                          className="img-fluid "
                        />
                      </div>
                      <div className="table-responsive">
                        <table
                          id="tableProduct"
                          className="product_table mt-2 homeTable"
                        >
                          {
                            isSearching ? (
                              <tbody>
                                <div className="text-center">
                                  <div className="spinner-grow loaderSpinner text-center my-2"></div>
                                </div>
                              </tbody>
                            ) : invoiceDetail &&
                              Object.keys(invoiceDetail).length > 0 ? (
                              <tbody>
                                <tr
                                  onClick={() => {
                                    router.push(
                                      "/invoices/invoices?showInvoiceData=true"
                                    );
                                  }}
                                  style={{ cursor: "pointer" }}
                                >
                                  <td className="homeSubtable">
                                    <div className="orderFirstId">
                                      <h4 className="orderId">
                                        #{invoiceDetail?.invoice_number}
                                      </h4>
                                    </div>
                                  </td>
                                  <td className="homeSubtable">
                                    <div className="nameLocation">
                                      <h4 className="orderId">
                                        {invoiceDetail?.order?.user_details
                                          ?.user_profiles
                                          ? invoiceDetail.order.user_details
                                              .user_profiles.firstname +
                                            " " +
                                            invoiceDetail.order.user_details
                                              .user_profiles.lastname
                                          : ""}
                                      </h4>
                                      {invoiceDetail?.order?.order_delivery
                                        ?.distance && (
                                        <div className="flexTable">
                                          <Image
                                            src={Images.OrderLocation}
                                            alt="location Image"
                                            className="img-fluid ms-1"
                                          />
                                          <span className="locateDistance">
                                            {
                                              invoiceDetail?.order
                                                ?.order_delivery?.distance
                                            }{" "}
                                            miles
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                  </td>
                                  <td className="homeSubtable">
                                    <div className="itemMoney">
                                      <h4 className="orderId">
                                        {
                                          invoiceDetail?.order?.order_details
                                            ?.length
                                        }{" "}
                                        items
                                      </h4>
                                      <div className="flexTable">
                                        <Image
                                          src={Images.MoneyItem}
                                          alt="MoneyItemImage "
                                          className="img-fluid ms-1"
                                        />
                                        <span className="locateDistance">
                                          {invoiceDetail?.order?.payable_amount
                                            ? amountFormat(
                                                invoiceDetail.order
                                                  .payable_amount
                                              )
                                            : "$0.00"}
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="homeSubtable">
                                    <div className="itemTime">
                                      {/* <h4 className="orderId">Customer:</h4> */}
                                      {invoiceDetail?.order?.delivery_option ? (
                                        <div className="flexTable">
                                          <Image
                                            src={Images.Time}
                                            alt="MoneyItemImage "
                                            className="img-fluid ms-1"
                                          />
                                          <span className="locateDistance">
                                            {
                                              DELIVERY_MODE[
                                                Number(
                                                  invoiceDetail.order
                                                    .delivery_option
                                                )
                                              ]
                                            }
                                          </span>
                                        </div>
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            ) : productResponse?.length > 0 ? (
                              productResponse?.map((val, index) => {
                                return (
                                  <div
                                    key={index}
                                    style={{ cursor: "pointer" }}
                                    className="d-flex justify-content-between align-items-center"
                                    onClick={() => handleProductSelect(val)}
                                  >
                                    <div className="productOver">
                                      <Image
                                        src={val?.image}
                                        alt="SearchImageIcon"
                                        className="img-fluid productOverImg"
                                        width="100"
                                        height="100"
                                      />
                                      <h5 className="payHeading m-0">
                                        {val?.name}
                                      </h5>
                                    </div>
                                    <div>
                                      <h5 className="cancelOrderText">
                                        ${val?.supplies[0]?.cost_price}
                                      </h5>
                                    </div>
                                  </div>
                                );
                              })
                            ) : (
                              <tbody>
                                <tr>
                                  <td style={{ width: 0, padding: "5px" }}></td>
                                  <td
                                    className="colorBlue text text-center py-3"
                                    colSpan={8}
                                    style={{ color: "#263682" }}
                                  >
                                    <h5>No Data</h5>
                                  </td>
                                </tr>
                              </tbody>
                            )
                            // <>

                            //   {
                            //     productResponse?.length > 0 ?
                            //     <>
                            //     {
                            //       productResponse?.map((val, index) => {
                            //         return(
                            //           <div key={index} style={{cursor:"pointer"}} className="d-flex justify-content-between" onClick={() => handleProductSelect(val)}>
                            //           <div>
                            //             <Image
                            //               src={val?.image}
                            //               alt="SearchImageIcon"
                            //               className="img-fluid "
                            //               width="100"
                            //               height="100"
                            //             />
                            //           </div>
                            //           <div>
                            //             <h5>{val?.name}</h5>
                            //           </div>
                            //           <div>
                            //             <h5>${val?.supplies[0]?.cost_price}</h5>
                            //           </div>
                            //         </div>
                            //         )
                            //       })
                            //     }
                            //     </>:
                            //     <div>No Product Found</div>
                            //   }

                            // </>
                            // (
                            //   <tbody>
                            //     {invoiceDetail && Object.keys(invoiceDetail).length > 0 ? (
                            //       <tr
                            //         onClick={() => {
                            //           router.push(
                            //             "/invoices/invoices?showInvoiceData=true"
                            //           );
                            //         }}
                            //         style={{ cursor: "pointer" }}
                            //       >
                            //         <td className="homeSubtable">
                            //           <div className="orderFirstId">
                            //             <h4 className="orderId">
                            //               #{invoiceDetail?.invoice_number}
                            //             </h4>
                            //           </div>
                            //         </td>
                            //         <td className="homeSubtable">
                            //           <div className="nameLocation">
                            //             <h4 className="orderId">
                            //               {invoiceDetail?.order?.user_details
                            //                 ?.user_profiles
                            //                 ? invoiceDetail.order.user_details
                            //                     .user_profiles.firstname +
                            //                   " " +
                            //                   invoiceDetail.order.user_details
                            //                     .user_profiles.lastname
                            //                 : ""}
                            //             </h4>
                            //             {invoiceDetail?.order?.order_delivery
                            //               ?.distance && (
                            //               <div className="flexTable">
                            //                 <Image
                            //                   src={Images.OrderLocation}
                            //                   alt="location Image"
                            //                   className="img-fluid ms-1"
                            //                 />
                            //                 <span className="locateDistance">
                            //                   {
                            //                     invoiceDetail?.order
                            //                       ?.order_delivery?.distance
                            //                   }{" "}
                            //                   miles
                            //                 </span>
                            //               </div>
                            //             )}
                            //           </div>
                            //         </td>
                            //         <td className="homeSubtable">
                            //           <div className="itemMoney">
                            //             <h4 className="orderId">
                            //               {
                            //                 invoiceDetail?.order?.order_details
                            //                   ?.length
                            //               }{" "}
                            //               items
                            //             </h4>
                            //             <div className="flexTable">
                            //               <Image
                            //                 src={Images.MoneyItem}
                            //                 alt="MoneyItemImage "
                            //                 className="img-fluid ms-1"
                            //               />
                            //               <span className="locateDistance">
                            //                 {invoiceDetail?.order?.payable_amount
                            //                   ? amountFormat(invoiceDetail.order.payable_amount)
                            //                   : "$0.00"}
                            //               </span>
                            //             </div>
                            //           </div>
                            //         </td>
                            //         <td className="homeSubtable">
                            //           <div className="itemTime">
                            //             {/* <h4 className="orderId">Customer:</h4> */}
                            //             {invoiceDetail?.order
                            //               ?.delivery_option ? (
                            //               <div className="flexTable">
                            //                 <Image
                            //                   src={Images.Time}
                            //                   alt="MoneyItemImage "
                            //                   className="img-fluid ms-1"
                            //                 />
                            //                 <span className="locateDistance">
                            //                   {
                            //                     DELIVERY_MODE[
                            //                       Number(
                            //                         invoiceDetail.order
                            //                           .delivery_option
                            //                       )
                            //                     ]
                            //                   }
                            //                 </span>
                            //               </div>
                            //             ) : (
                            //               ""
                            //             )}
                            //           </div>
                            //         </td>
                            //       </tr>
                            //     ) : (
                            //       <tr>
                            //         <td
                            //           style={{ width: 0, padding: "5px" }}
                            //         ></td>
                            //         <td
                            //           className="colorBlue text text-center py-3"
                            //           colSpan={8}
                            //           style={{ color: "#263682" }}
                            //         >
                            //           <h5>No Data</h5>
                            //         </td>
                            //       </tr>
                            //     )}
                            //   </tbody>
                            // )
                          }
                        </table>
                      </div>
                    </div>
                  </div>
                )}
                <div className="sellingOrder">
                  <div
                    className="startSelling"
                    onClick={() => {
                      router.push("/Retails?parameter=product");
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <figure className="profileImage">
                      <Image
                        src={Images.HomeIcon}
                        alt="HomeImage"
                        className="img-fluid"
                      />
                    </figure>
                    <h4 className="loginMain">Start Selling</h4>
                    <figure className="scanText">
                      <Image
                        src={Images.SearchLight}
                        alt="SearchImage"
                        className="img-fluid"
                      />
                      <span className="smallText">Scan / Search</span>
                    </figure>
                  </div>
                  <div
                    className="onlineOrder"
                    onClick={() => {
                      if (onlineOrdersCount > 0) {
                        router.push("/Deliveries");
                      }
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <figure className="profileImage">
                      <Image
                        src={Images.ShoppingCart}
                        alt="HomeImage"
                        className="img-fluid"
                      />
                    </figure>
                    <h4 className="loginMain">Online Orders</h4>
                    <button className="OrderBtn">
                      {onlineOrdersCount} New Orders
                    </button>
                    <div className="bellImg">
                      <figure className="bellOuter">
                        <Image
                          src={Images.bellIcon}
                          alt="BellImage"
                          className="img-fluid bellImage_"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="profileMainTable">
                  <h4 className="loginMain">Orders</h4>
                  <div className="table-responsive deliverTable pb-4">
                    <table id="tableProduct" className="product_table">
                      {loadingOrders ? (
                        <tbody>
                          <div className="text-center">
                            <div className="spinner-grow loaderSpinner text-center my-5"></div>
                          </div>
                        </tbody>
                      ) : (
                        <tbody>
                          {orderDeliveriesInfo?.length > 0 ? (
                            <>
                              {orderDeliveriesInfo?.map((data, index) => {
                                const redirectURL =
                                  data?.delivery_option == "4"
                                    ? "/shipping"
                                    : "/Deliveries";
                                return (
                                  <tr
                                    onClick={() => {
                                      router.push(redirectURL);
                                    }}
                                    style={{ cursor: "pointer" }}
                                  >
                                    <td className="deliverSubdata" key={index}>
                                      <div className="orderFirstId">
                                        <h4 className="orderId">
                                          #{data?.invoices?.invoice_number}
                                        </h4>
                                      </div>
                                    </td>
                                    <td className="deliverSubdata">
                                      <div className="nameLocation">
                                        <h4 className="orderId">
                                          {data?.user_details
                                            ? data?.user_details?.firstname +
                                              " " +
                                              data?.user_details?.lastname
                                            : ""}
                                        </h4>
                                        <div className="flexTable">
                                          <Image
                                            src={Images.OrderLocation}
                                            alt="location Image"
                                            className="img-fluid ms-1"
                                          />
                                          <span className="locateDistance">
                                            {data?.distance} miles
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="deliverSubdata">
                                      <div className="itemMoney">
                                        <h4 className="orderId">
                                          {data?.order_details?.length} items
                                        </h4>
                                        <div className="flexTable">
                                          <Image
                                            src={Images.MoneyItem}
                                            alt="MoneyItemImage "
                                            className="img-fluid ms-1"
                                          />
                                          <span className="locateDistance">
                                            {data?.payable_amount
                                              ? amountFormat(
                                                  data.payable_amount
                                                )
                                              : "$0.00"}
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="deliverSubdata">
                                      <div className="itemTime">
                                        <h4 className="orderId">
                                          {data?.delivery_details?.title
                                            ? data.delivery_details.title
                                            : data.delivery_option == "1"
                                            ? "Delivery"
                                            : data.delivery_option == "3"
                                            ? "Customer Pickup"
                                            : data?.shipping_details?.title
                                            ? data.shipping_details.title
                                            : ""}
                                        </h4>
                                        {data?.preffered_delivery_start_time && (
                                          <div className="flexTable">
                                            <Image
                                              src={Images.Time}
                                              alt="MoneyItemImage "
                                              className="img-fluid ms-1"
                                            />
                                            <span className="locateDistance">
                                              {
                                                data?.preffered_delivery_start_time
                                              }{" "}
                                              -{" "}
                                              {
                                                data?.preffered_delivery_end_time
                                              }
                                            </span>
                                          </div>
                                        )}
                                      </div>
                                    </td>
                                    <td className="deliverSubdata">
                                      <div className="deliveryTime">
                                        {/* <span className="orderId">
                                          {data?.estimated_preparation_time ===
                                          null
                                            ? "00:00:00"
                                            : moment(
                                                data?.estimated_preparation_time
                                              ).format("LTS")}
                                        </span> */}
                                        <MyTimer
                                          expiryTimestamp={moment(
                                            data.estimated_preparation_time
                                          )
                                            .local()
                                            .valueOf()}
                                        />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <i className="fa-sharp fa-solid fa-chevron-right"></i>
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}
                            </>
                          ) : (
                            <tr>
                              <td
                                className="colorBlue text text-center py-3"
                                colSpan={8}
                              >
                                No Record Found
                              </td>
                            </tr>
                          )}
                        </tbody>
                      )}
                    </table>
                    {totalItems > recordsPerPage && (
                      <div className="p-3 d-flex justify-content-center">
                        <PaginationFooter
                          page={pageNumber}
                          limit={recordsPerPage}
                          setPage={(newPageNumber) =>
                            setPageNumber(newPageNumber)
                          }
                          totalItems={totalItems}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomModal
        key={key}
        show={modalDetail.show}
        backdrop="static"
        showCloseBtn={false}
        isRightSideModal={true}
        mediumWidth={false}
        className={
          modalDetail.flag === "trackingmodal"
            ? "commonWidth customContent"
            : ""
        }
        ids={
          modalDetail.flag === "trackingmodal"
            ? "trackingModal"
            : modalDetail.flag === "productadd"
            ? "productOverview"
            : modalDetail.flag === "detailModal"
            ? "detailModal"
            : ""
        }
        child={
          modalDetail.flag === "trackingmodal" ? (
            <SessionModal close={(e) => handleOnCloseModal(e)} />
          ) : modalDetail.flag === "productadd" ? (
            <ProductAddModal
              close={(e) => handleOnCloseModal(e)}
              selectedProduct={selectedProduct}
            />
          ) : modalDetail.flag === "detailModal" ? (
            <DetailModal close={(e) => handleOnCloseModal(e)} />
          ) : (
            ""
          )
        }
        header={
          modalDetail.flag === "trackingmodal" ? (
            <>
              <p onClick={() => closeModal()} className="modal_cancel">
                <Image
                  src={Images.modalCross}
                  alt="modalCross"
                  className="img-fluid"
                />
              </p>
            </>
          ) : modalDetail.flag === "productadd" ? (
            <>
              {/* <div className="addCustomerBtn  filterBtn productAddHeader">
                  <button
                    className="serviceCancel "
                    type="submit" >
                    Back To Cart
                  </button>
                  <button
                    className="nextverifyBtn "
                    type="submit" onClick={() => {
                      handleUserProfile("detailModal")
                    }}>
                    Details
                  </button>
                  <button
                    className="addBtnCart "
                    type="submit" >
                    Add To Cart
                  </button>
                </div>
                <p onClick={() => closeModal()} className="modal_cancel">
                  <Image
                    src={Images.modalCross}
                    alt="modalCross"
                    className="img-fluid"
                  />
                </p> */}
            </>
          ) : modalDetail.flag === "detailModal" ? (
            <>
              <h5 className="appointMain m-0 text-start">vitamin bottle </h5>
              <div className="addCustomerBtn  filterBtn productAddHeader">
                <button className="serviceCancel " type="submit">
                  Back
                </button>
                <button className="nextverifyBtn " type="submit">
                  Add To Cart
                </button>
              </div>
            </>
          ) : (
            ""
          )
        }
        onCloseModal={(e) => handleOnCloseModal(e)}
      />
    </>
  );
};

export default withAuth(Overview);
