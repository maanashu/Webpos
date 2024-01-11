import React, { useEffect, useState } from "react";
import * as Images from "../../utilities/images";
import Image from "next/image";
import CustomModal from "../../components/customModal/CustomModal";
import SessionModal from "../../components/modals/homeModals/sessionModal";
import { selectLoginAuth } from "../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import withAuth from "../../components/withAuth";
import {
  dashboardDetails,
  getAllOrderDeliveries,
  getTodaySales,
} from "../../redux/slices/dashboard";
import Login from "../auth/login";
import moment from "moment-timezone";
import { getSecuritySettingInfo } from "../../redux/slices/setting";

const Overview = () => {
  const authData = useSelector(selectLoginAuth);
  const dashboardData = useSelector(dashboardDetails);
  const UniqueId = authData?.usersInfo?.payload?.uniqe_id
    ? authData?.usersInfo?.payload?.uniqe_id
    : "";
  const router = useRouter();
  const dispatch = useDispatch();
  const [key, setKey] = useState(Math.random());
  const [orderDeliveriesInfo, setOrderDeliveriesInfo] = useState("");
  const [getTodaySale, setGetTodaySale] = useState("");
  const [modalDetail, setModalDetail] = useState({
    show: false,
    title: "",
    flag: "",
  });

  // API for get all oder deliveries...............................
  const allOrderDeliveriesInfo = () => {
    let params = {
      seller_id: UniqueId,
    };
    dispatch(
      getAllOrderDeliveries({
        ...params,
        cb(res) {
          if (res.status) {
            setOrderDeliveriesInfo(res?.data?.payload?.data);
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
          if (res.status) {
            setGetTodaySale(res?.data?.payload);
          }
        },
      })
    );
  };

  //closeModal
  const handleOnCloseModal = () => {
    setModalDetail({
      show: false,
      title: "",
      flag: "",
    });
    setKey(Math.random());
  };

  const handleUserProfile = (flag) => {
    setModalDetail({
      show: true,
      flag: flag,
      type: flag,
    });
    setKey(Math.random());
  };

  useEffect(() => {
    if (UniqueId) {
      todaySaleInfo();
      allOrderDeliveriesInfo();
    }
  }, [UniqueId]);


  // useEffect(() => {
  //   dispatch(
  //     getSecuritySettingInfo({
  //       app_name: "pos",
  //       seller_id: authData?.posUserLoginDetails?.payload?.uuid,
  //     })
  //   );
  // }, []);

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
                          : Images.HomeProfileImg
                      }
                      width={150}
                      height={150}
                      alt="HomeProfileImage"
                      className="img-fluid homeProfileImg"
                    />
                  </figure>
                  <h2 className="loginheading mt-2">{`${authData?.posUserLoginDetails?.payload?.user_profiles?.firstname} ${authData?.posUserLoginDetails?.payload?.user_profiles?.lastname}`}</h2>
                  <div className="cashBox">
                    <h4 className="cashierHeading">POS Cashier</h4>
                    <div className="IdTextMain">
                      <h4 className="userIdText">ID: 3890EN</h4>
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
                        return (
                          <div className="flexHeading mt-4">
                            <h4 className="saleHeading">
                              {data?.mode_of_payment} Sales amount
                            </h4>
                            <h4 className="saleHeading">
                              ${data?.total_sale_amount?.toFixed(2)}
                            </h4>
                          </div>
                        );
                      })
                    )}
                    {/* // <div className='flexHeading mt-2'>
                                        //     <h4 className='saleHeading'>Card Sales amount</h4>
                                        //     <h4 className='saleHeading'>$400.50</h4>
                                        // </div> */}
                    {/* <div className='flexHeading mt-2'>
                                            <h4 className='saleHeading'>Cash Sales amount</h4>
                                            <h4 className='saleHeading'>$400.50</h4>
                                        </div> */}
                    {/* // <div className='flexHeading mt-2'>
                                        //     <h4 className='saleHeading'>JOBR Coin Sales amount</h4>
                                        //     <h4 className='saleHeading'>JOBR 400.50</h4>
                                        // </div> */}
                  </div>
                  <div className="todaySale cashDraw">
                    <h4 className="loginMain">Cash Drawer</h4>
                    <div className="flexHeading mt-4">
                      <h4 className="saleHeading">Opening Balance</h4>
                      <h4 className="saleHeading">$900.50</h4>
                    </div>
                    <div className="flexHeading mt-2">
                      <h4 className="saleHeading">Closing Balance</h4>
                      <h4 className="saleHeading">$450.00</h4>
                    </div>
                  </div>
                  <div className="timedetail">
                    <div className="flexHeading mt-2">
                      <h4 className="dayTimeText">Today 25 April, 2023</h4>
                      <h4 className="dayTimeText">11:15:23 am</h4>
                    </div>
                    <div className="flexHeading mt-2">
                      <h4 className="dayTimeText">Log in Time:</h4>
                      <h4 className="dayTimeText">10:15:03 am</h4>
                    </div>
                    <div className="flexHeading mt-2">
                      <h4 className="dayTimeText">Session:</h4>
                      <h4 className="dayTimeText">01h:03 min</h4>
                    </div>
                  </div>
                </div>
                <div className="productReturn">
                  <h4 className="linkHeading">Product Returns</h4>
                  <Image
                    src={Images.ProductBox}
                    alt="BoxImage"
                    className="img-fluid "
                    onClick={() => {
                      handleUserProfile("trackingmodal");
                    }}
                  />
                </div>
                <div className="lockScreenBox">
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
              <div className="homeRight">
                <form className="homeRightForm">
                  <div className="searchControlBox">
                    <input
                      type="text"
                      className="form-control searchControl"
                      placeholder="Search here"
                    />
                    <Image
                      src={Images.Scan}
                      alt="ScanImage"
                      className="img-fluid scanSearch"
                    />
                    <Image
                      src={Images.SearchIcon}
                      alt="SearchImageIcon"
                      className="img-fluid searchImg"
                    />
                  </div>
                </form>
                <div className="sellingOrder">
                  <div className="startSelling">
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
                  <div className="onlineOrder">
                    <figure className="profileImage">
                      <Image
                        src={Images.ShoppingCart}
                        alt="HomeImage"
                        className="img-fluid"
                      />
                    </figure>
                    <h4 className="loginMain">Online Orders</h4>
                    <button className="OrderBtn">12 New Orders</button>
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
                  <h4 className="loginMain">Order Deliveries</h4>
                  <div className="table-responsive deliverTable">
                    <table id="tableProduct" className="product_table">
                      {dashboardData?.loading ? (
                        <>
                          <tbody>
                            <div className="loaderOuter">
                              <div className="spinner-grow loaderSpinner text-center my-5"></div>
                            </div>
                          </tbody>
                        </>
                      ) : (
                        <tbody>
                          {orderDeliveriesInfo?.length > 0 ? (
                            <>
                              {orderDeliveriesInfo?.map((data, index) => {
                                return (
                                  <tr>
                                    <td className="deliverSubdata" key={index}>
                                      <div className="orderFirstId">
                                        <h4 className="orderId">#{data?.id}</h4>
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
                                              ? data?.payable_amount
                                              : 0}
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="deliverSubdata">
                                      <div className="itemTime">
                                        <h4 className="orderId">
                                          {data?.delivery_details?.title}
                                        </h4>
                                        {data?.preffered_delivery_start_time ? (
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
                                        ) : (
                                          ""
                                        )}
                                      </div>
                                    </td>
                                    <td className="deliverSubdata">
                                      <div className="deliveryTime">
                                        <i className="fa-sharp fa-solid fa-chevron-right"></i>
                                        <span className="orderId">
                                          {data?.estimated_preparation_time ===
                                          null
                                            ? "00:00:00"
                                            : moment(
                                                data?.estimated_preparation_time
                                              ).format("LTS")}
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                  // <tr >
                                  //     <td className='deliverSubdata'>
                                  //         <div className='orderFirstId'>
                                  //             <h4 className='orderId'>#7869YZ</h4>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='nameLocation'>
                                  //             <h4 className='orderId'>Jeremy McFlan</h4>
                                  //             <div className='flexTable'>
                                  //                 <Image src={Images.OrderLocation} alt="location Image" className="img-fluid ms-1" />
                                  //                 <span className='locateDistance'>2.5 miles</span>
                                  //             </div>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='itemMoney'>
                                  //             <h4 className='orderId'>3 items</h4>
                                  //             <div className='flexTable'>
                                  //                 <Image src={Images.MoneyItem} alt="MoneyItemImage " className="img-fluid ms-1" />
                                  //                 <span className='locateDistance'>$500.50</span>
                                  //             </div>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='itemTime'>
                                  //             <h4 className='orderId'>1 hour delivery window</h4>
                                  //             <div className='flexTable'>
                                  //                 <Image src={Images.Time} alt="MoneyItemImage " className="img-fluid ms-1" />
                                  //                 <span className='locateDistance'>Immediately</span>
                                  //             </div>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='deliveryTime'>
                                  //             <i className="fa-sharp fa-solid fa-chevron-right"></i>
                                  //             <span className='orderId'>00:03:06</span>
                                  //         </div>
                                  //     </td>
                                  // </tr>
                                  // <tr >
                                  //     <td className='deliverSubdata'>
                                  //         <div className='orderFirstId'>
                                  //             <h4 className='orderId'>#7869YZ</h4>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='nameLocation'>
                                  //             <h4 className='orderId'>Jeremy McFlan</h4>
                                  //             <div className='flexTable'>
                                  //                 <Image src={Images.OrderLocation} alt="location Image" className="img-fluid ms-1" />
                                  //                 <span className='locateDistance'>2.5 miles</span>
                                  //             </div>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='itemMoney'>
                                  //             <h4 className='orderId'>3 items</h4>
                                  //             <div className='flexTable'>
                                  //                 <Image src={Images.MoneyItem} alt="MoneyItemImage " className="img-fluid ms-1" />
                                  //                 <span className='locateDistance'>$500.50</span>
                                  //             </div>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='itemTime'>
                                  //             <h4 className='orderId'>1 hour delivery window</h4>
                                  //             <div className='flexTable'>
                                  //                 <Image src={Images.Time} alt="MoneyItemImage " className="img-fluid ms-1" />
                                  //                 <span className='locateDistance'>Immediately</span>
                                  //             </div>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='deliveryTime'>
                                  //             <i className="fa-sharp fa-solid fa-chevron-right"></i>
                                  //             <span className='orderId'>00:03:06</span>
                                  //         </div>
                                  //     </td>
                                  // </tr>
                                  // <tr >
                                  //     <td className='deliverSubdata'>
                                  //         <div className='orderFirstId'>
                                  //             <h4 className='orderId'>#7869YZ</h4>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='nameLocation'>
                                  //             <h4 className='orderId'>Jeremy McFlan</h4>
                                  //             <div className='flexTable'>
                                  //                 <Image src={Images.OrderLocation} alt="location Image" className="img-fluid ms-1" />
                                  //                 <span className='locateDistance'>2.5 miles</span>
                                  //             </div>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='itemMoney'>
                                  //             <h4 className='orderId'>3 items</h4>
                                  //             <div className='flexTable'>
                                  //                 <Image src={Images.MoneyItem} alt="MoneyItemImage " className="img-fluid ms-1" />
                                  //                 <span className='locateDistance'>$500.50</span>
                                  //             </div>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='itemTime'>
                                  //             <h4 className='orderId'>1 hour delivery window</h4>
                                  //             <div className='flexTable'>
                                  //                 <Image src={Images.Time} alt="MoneyItemImage " className="img-fluid ms-1" />
                                  //                 <span className='locateDistance'>Immediately</span>
                                  //             </div>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='deliveryTime'>
                                  //             <i className="fa-sharp fa-solid fa-chevron-right"></i>
                                  //             <span className='orderId'>00:03:06</span>
                                  //         </div>
                                  //     </td>
                                  // </tr>
                                  // <tr >
                                  //     <td className='deliverSubdata'>
                                  //         <div className='orderFirstId'>
                                  //             <h4 className='orderId'>#7869YZ</h4>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='nameLocation'>
                                  //             <h4 className='orderId'>Jeremy McFlan</h4>
                                  //             <div className='flexTable'>
                                  //                 <Image src={Images.OrderLocation} alt="location Image" className="img-fluid ms-1" />
                                  //                 <span className='locateDistance'>2.5 miles</span>
                                  //             </div>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='itemMoney'>
                                  //             <h4 className='orderId'>3 items</h4>
                                  //             <div className='flexTable'>
                                  //                 <Image src={Images.MoneyItem} alt="MoneyItemImage " className="img-fluid ms-1" />
                                  //                 <span className='locateDistance'>$500.50</span>
                                  //             </div>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='itemTime'>
                                  //             <h4 className='orderId'>1 hour delivery window</h4>
                                  //             <div className='flexTable'>
                                  //                 <Image src={Images.Time} alt="MoneyItemImage " className="img-fluid ms-1" />
                                  //                 <span className='locateDistance'>Immediately</span>
                                  //             </div>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='deliveryTime'>
                                  //             <i className="fa-sharp fa-solid fa-chevron-right"></i>
                                  //             <span className='orderId'>00:03:06</span>
                                  //         </div>
                                  //     </td>
                                  // </tr>
                                  // <tr >
                                  //     <td className='deliverSubdata'>
                                  //         <div className='orderFirstId'>
                                  //             <h4 className='orderId'>#7869YZ</h4>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='nameLocation'>
                                  //             <h4 className='orderId'>Jeremy McFlan</h4>
                                  //             <div className='flexTable'>
                                  //                 <Image src={Images.OrderLocation} alt="location Image" className="img-fluid ms-1" />
                                  //                 <span className='locateDistance'>2.5 miles</span>
                                  //             </div>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='itemMoney'>
                                  //             <h4 className='orderId'>3 items</h4>
                                  //             <div className='flexTable'>
                                  //                 <Image src={Images.MoneyItem} alt="MoneyItemImage " className="img-fluid ms-1" />
                                  //                 <span className='locateDistance'>$500.50</span>
                                  //             </div>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='itemTime'>
                                  //             <h4 className='orderId'>1 hour delivery window</h4>
                                  //             <div className='flexTable'>
                                  //                 <Image src={Images.Time} alt="MoneyItemImage " className="img-fluid ms-1" />
                                  //                 <span className='locateDistance'>Immediately</span>
                                  //             </div>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='deliveryTime'>
                                  //             <i className="fa-sharp fa-solid fa-chevron-right"></i>
                                  //             <span className='orderId'>00:03:06</span>
                                  //         </div>
                                  //     </td>
                                  // </tr>
                                  // <tr >
                                  //     <td className='deliverSubdata'>
                                  //         <div className='orderFirstId'>
                                  //             <h4 className='orderId'>#7869YZ</h4>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='nameLocation'>
                                  //             <h4 className='orderId'>Jeremy McFlan</h4>
                                  //             <div className='flexTable'>
                                  //                 <Image src={Images.OrderLocation} alt="location Image" className="img-fluid ms-1" />
                                  //                 <span className='locateDistance'>2.5 miles</span>
                                  //             </div>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='itemMoney'>
                                  //             <h4 className='orderId'>3 items</h4>
                                  //             <div className='flexTable'>
                                  //                 <Image src={Images.MoneyItem} alt="MoneyItemImage " className="img-fluid ms-1" />
                                  //                 <span className='locateDistance'>$500.50</span>
                                  //             </div>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='itemTime'>
                                  //             <h4 className='orderId'>1 hour delivery window</h4>
                                  //             <div className='flexTable'>
                                  //                 <Image src={Images.Time} alt="MoneyItemImage " className="img-fluid ms-1" />
                                  //                 <span className='locateDistance'>Immediately</span>
                                  //             </div>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='deliveryTime'>
                                  //             <i className="fa-sharp fa-solid fa-chevron-right"></i>
                                  //             <span className='orderId'>00:03:06</span>
                                  //         </div>
                                  //     </td>
                                  // </tr>
                                  // <tr >
                                  //     <td className='deliverSubdata'>
                                  //         <div className='orderFirstId'>
                                  //             <h4 className='orderId'>#7869YZ</h4>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='nameLocation'>
                                  //             <h4 className='orderId'>Jeremy McFlan</h4>
                                  //             <div className='flexTable'>
                                  //                 <Image src={Images.OrderLocation} alt="location Image" className="img-fluid ms-1" />
                                  //                 <span className='locateDistance'>2.5 miles</span>
                                  //             </div>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='itemMoney'>
                                  //             <h4 className='orderId'>3 items</h4>
                                  //             <div className='flexTable'>
                                  //                 <Image src={Images.MoneyItem} alt="MoneyItemImage " className="img-fluid ms-1" />
                                  //                 <span className='locateDistance'>$500.50</span>
                                  //             </div>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='itemTime'>
                                  //             <h4 className='orderId'>1 hour delivery window</h4>
                                  //             <div className='flexTable'>
                                  //                 <Image src={Images.Time} alt="MoneyItemImage " className="img-fluid ms-1" />
                                  //                 <span className='locateDistance'>Immediately</span>
                                  //             </div>
                                  //         </div>
                                  //     </td>
                                  //     <td className='deliverSubdata'>
                                  //         <div className='deliveryTime'>
                                  //             <i className="fa-sharp fa-solid fa-chevron-right"></i>
                                  //             <span className='orderId'>00:03:06</span>
                                  //         </div>
                                  //     </td>
                                  // </tr>
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
                      {/* // </tbody> */}
                    </table>
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
        ids={modalDetail.flag === "trackingmodal" ? "trackingModal" : ""}
        child={
          modalDetail.flag === "trackingmodal" ? (
            <SessionModal close={() => handleOnCloseModal()} />
          ) : (
            ""
          )
        }
        header={
          modalDetail.flag === "trackingmodal" ? (
            <>
              <div onClick={handleOnCloseModal} className="modal_cancel">
                <Image
                  src={Images.modalCross}
                  alt="modalCross"
                  className="img-fluid"
                />
              </div>
            </>
          ) : (
            ""
          )
        }
        onCloseModal={() => handleOnCloseModal()}
      />
    </>
  );
};
 export default Overview