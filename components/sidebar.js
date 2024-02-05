import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import * as Images from "../utilities/images";
import Image from "next/image";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useRouter } from "next/router";
import { logout, selectLoginAuth } from "../redux/slices/auth";
import { dashboardLogout, dashboardDetails, endTrackingSession } from "../redux/slices/dashboard";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getOrdersList } from "../redux/slices/shipping";
import {
  deliveryData,
  getOrdersList as deliveryOrderList,
  getPendingOrderCount,
} from "../redux/slices/delivery";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const [activeSidebar, setActiveSidebar] = useState(true);
  const authData = useSelector(selectLoginAuth);
  const dashboardData = useSelector(dashboardDetails);
  const trackingSession = dashboardData?.drawerSession?.payload;
  const sellerUid = authData?.usersInfo?.payload?.uniqe_id;



  const ADMIN = () => {
    const admin = authData?.posUserLoginDetails?.payload?.user_roles?.filter((item) => item?.role?.slug == 'pos_admin');
    return admin;
  };


  console.log(ADMIN(), "auth data");

  const router = useRouter();
  const pathname = router?.pathname
  const status = localStorage.getItem("status")
  const [orderData, setOrderData] = useState([]);

  console.log(router?.pathname?.split("/")[1], "router");
  props?.sidebarToggle(activeSidebar);
  const { orderList, pendingOrderCountData } = useSelector(deliveryData);

  const userLogout = async (e) => {
    e.preventDefault();
    
    let params =  {
      // pos_user_id: posUserUniqueId,
      drawer_id: trackingSession?.id,
      amount: parseInt(trackingSession?.cash_balance),
      transaction_type: 'end_tracking_session',
      mode_of_cash: 'cash_out'
    };

    dispatch(
      endTrackingSession({
        ...params,
        async cb(res) {
          await dispatch(logout());
          await dispatch(dashboardLogout());

          setTimeout(() => {
            toast.success("Logout successfully");
          }, 200);

          router.push("/auth/verification");
          
          localStorage.removeItem("merchantAuthToken");
          localStorage.removeItem("authToken");
          localStorage.removeItem("persist:root");
        },
      })
    );


      // await dispatch(logout());
      // await dispatch(dashboardLogout());

      // setTimeout(() => {
      //   toast.success("Logout successfully");
      // }, 200);

      // localStorage.removeItem("merchantAuthToken");
      // localStorage.removeItem("authToken");
      // localStorage.removeItem("persist:root");

      // router.push("/auth/verification");
  };

  const isLinkActive = (href) => {
    Sidebar;
    console.log(href, "hrefhref");
    return router.pathname === href;
  };
  const getDeliveryPendingOrderCount = () => {
    let orderListParam = {
      seller_id: sellerUid,
    };
    dispatch(
      getPendingOrderCount({
        ...orderListParam,
        // cb(res) {
        //   if (res) {
        //     setdeliveryData(res?.data?.payload?.data);
        //   }
        // },
      })
    );
  };

  const getAllShippingOrdeshandle = () => {
    let orderListParam = {
      seller_id: sellerUid,
      status: 0,
      delivery_option: "4",
    };
    dispatch(
      getOrdersList({
        ...orderListParam,
        cb(res) {
          if (res) {
            setOrderData(res?.data?.payload?.data);
            localStorage.removeItem("status");
          }
        },
      })
    );
  };

  useEffect(() => {
    if (sellerUid) {
      getDeliveryPendingOrderCount();
      getAllShippingOrdeshandle();
    }
  }, [pathname, status]);
  console.log(router?.pathname?.split("/")[1]?.split("/")[1], "pathname called");
  return (
    <div
      className={`main-sidebar ${activeSidebar ? "hide" : "full"} ${ADMIN()?.length > 0 ?"admin": "userSide"}`}
      id="myNav"
    >
      <div className="sidebarAuth sidebarMain">
        <Image
          src={Images.SideLogo}
          alt="image"
          className="img-fluid SideLogo"
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/home/overview")}
        />
        <Image src={Images.Logo} alt="image" className="img-fluid Logo" />
        {/* <div
          onClick={() => setActiveSidebar((prev) => !prev)}
          className="ToggleIcon"
        >
          <Image
            src={Images.sideToggle}
            alt="image"
            className="img-fluid sideToggle"
          />
        </div> */}
      </div>
      <div className="sidebarInnerIcon">
        <div className="userDetails mb-2">
          <figure>
            <Image
              src={
                authData?.posUserLoginDetails?.payload?.user_profiles
                  ?.profile_photo
                  ? authData?.posUserLoginDetails?.payload?.user_profiles
                      ?.profile_photo
                  : Images.HomeProfileImg
              }
              alt="image"
              width={100}
              height={100}
              className="img-fluid sidebarProfile pointHand"
              onClick={() => router.push("/home/overview")}
            />
          </figure>
          <article>
            <p className="userName">{`${authData?.posUserLoginDetails?.payload?.user_profiles?.firstname} ${authData?.posUserLoginDetails?.payload?.user_profiles?.lastname}`}</p>
            <div className="userPosition">
              {authData?.posUserLoginDetails?.payload?.user_roles.length > 0 ? (
                authData?.posUserLoginDetails?.payload?.user_roles?.map(
                  (data, index) => {
                    return (
                      <div>
                        <h4 className="loginSub">{data?.role?.name}</h4>
                      </div>
                    );
                  }
                )
              ) : (
                <h4 className="loginSub">Admin / Manager</h4>
              )}
            </div>
          </article>
        </div>
        <ListGroup className="sidebarMenus navbar_overlay_content_">
          <div className="sidebarStaticMenus">
            <ListGroupItem className="sidebarItems">
              <Link
                //  href="/Retails"
                href="/Retails?parameter=product"
                className={`sidebarLinks ${
                  router?.pathname?.split("/")[1] == "Retails" ? "active" : ""
                }`}
              >
                <Image
                  src={Images.ProductsServices}
                  alt="image"
                  className="img-fluid  hideImg"
                />
                <Image
                  src={Images.ProductsServicesinactive}
                  alt="image"
                  className="img-fluid showImg"
                />
                <span className="sidebarTxt">Products & Services</span>
              </Link>
            </ListGroupItem>
            <ListGroupItem className="sidebarItems">
              <Link
                href="/Deliveries"
                className={`sidebarLinks ${
                  router?.pathname?.split("/")[1] == "Deliveries"
                    ? "active"
                    : ""
                }`}
              >
                <Image
                  src={Images.DeliveryOrders}
                  alt="image"
                  className="img-fluid showImg"
                />
                <Image
                  src={Images.DeliveryOrdersInactive}
                  alt="image"
                  className="img-fluid hideImg"
                />
                <span className="sidebarTxt">Delivery Orders</span>

                <span className=" shipNum">
                  {pendingOrderCountData?.delivery_count
                    ? pendingOrderCountData?.delivery_count
                    : 0}
                </span>
              </Link>
            </ListGroupItem>
            {/* <ListGroupItem className="sidebarItems">
            <Link href="/dashboard" className="sidebarLinks active">
              <Image
                src={Images.ProductsServices}
                alt="image"
                className="img-fluid showImg"
              />
              <span className="sidebarTxt">Products & Services</span>
            </Link>
          </ListGroupItem> */}
            {/* <ListGroupItem className="sidebarItems">
            <Link href="/dashboard" className="sidebarLinks">
              <Image
                src={Images.DeliveryOrders}
                alt="image"
                className="img-fluid showImg"
              />
              <span className="sidebarTxt">Delivery Orders</span>
            </Link>
          </ListGroupItem> */}
            <ListGroupItem className="sidebarItems">
              <Link
                href="/shipping"
                className={`sidebarLinks  position-relative ${
                  router?.pathname?.split("/")[1] == "shipping" ? "active" : ""
                }`}
              >
                <Image
                  src={Images.ShippingOrders}
                  alt="image"
                  className="img-fluid showImg"
                />
                <Image
                  src={Images.Shipping_Solid}
                  alt="image"
                  className="img-fluid hideImg"
                />
                <span className="sidebarTxt">Shipping Orders</span>
                <span className=" shipNum">
                  {orderData ? orderData?.length : 0}
                </span>
              </Link>
            </ListGroupItem>
            <ListGroupItem className="sidebarItems">
              <Link
                href="/appointment/booking"
                className={`sidebarLinks ${
                  router?.pathname?.split("/")[1] == "appointment/booking"
                    ? "active"
                    : ""
                }`}
              >
                <Image
                  src={Images.Appointments}
                  alt="image"
                  className="img-fluid showImg"
                />
                <Image
                  src={Images.Calendar_Solid}
                  alt="image"
                  className="img-fluid hideImg"
                />
                <span className="sidebarTxt">Appointments</span>
              </Link>
            </ListGroupItem>
            <ListGroupItem className="sidebarItems">
              <Link
                href="/analytics"
                className={`sidebarLinks ${
                  router?.pathname?.split("/")[1] == "analytics" ? "active" : ""
                }`}
              >
                <Image
                  src={Images.Analytics}
                  alt="image"
                  className="img-fluid showImg"
                />
                <Image
                  src={Images.Chart_Solid}
                  alt="image"
                  className="img-fluid hideImg"
                />
                <span className="sidebarTxt">Analytics</span>
              </Link>
            </ListGroupItem>
            <ListGroupItem className="sidebarItems">
              {/* <Link href="/transactions" className="sidebarLinks"> */}

              <Link
                href="/transactions"
                className={`sidebarLinks ${
                  router?.pathname?.split("/")[1] == "transactions"
                    ? "active"
                    : ""
                }`}
              >
                <Image
                  src={Images.Wallets}
                  alt="image"
                  className="img-fluid showImg"
                />
                <Image
                  src={Images.Wallet_Solid}
                  alt="image"
                  className="img-fluid hideImg"
                />
                <span className="sidebarTxt">Wallets</span>
              </Link>
            </ListGroupItem>
            <ListGroupItem className="sidebarItems">
              <Link
                href="/cashDrawer"
                className={`sidebarLinks ${"" ? "active" : ""}`}
              >
                <Image
                  src={Images.CashDrawer}
                  alt="image"
                  className="img-fluid showImg"
                />
                <Image
                  src={Images.Cash_Solid}
                  alt="image"
                  className="img-fluid hideImg"
                />
                <span className="sidebarTxt">Cash Drawer</span>
              </Link>
            </ListGroupItem>
            <ListGroupItem className="sidebarItems">
              <Link
                href="/customers"
                className={`sidebarLinks ${
                  router?.pathname?.split("/")[1] == "customers" ? "active" : ""
                }`}
              >
                <Image
                  src={Images.Customer}
                  alt="image"
                  className="img-fluid showImg"
                />
                <Image
                  src={Images.Users_Solid}
                  alt="image"
                  className="img-fluid hideImg"
                />
                <span className="sidebarTxt">Customer</span>
              </Link>
            </ListGroupItem>
            {/* <ListGroupItem className="sidebarItems">
              <Link
                href="#"
                className={`sidebarLinks ${isLinkActive("") ? "active" : ""}`}
              >
                <Image
                  src={Images.Rewards}
                  alt="image"
                  className="img-fluid showImg"
                />
                <Image
                  src={Images.Rewards_Solid}
                  alt="image"
                  className="img-fluid hideImg"
                />
                <span className="sidebarTxt">Rewards</span>
              </Link>
            </ListGroupItem> */}

            {
              ADMIN()?.length > 0 &&
              <ListGroupItem className="sidebarItems">
                <Link
                  href="/settings"
                  className={`sidebarLinks ${router?.pathname?.split("/")[1] == "settings" ? "active" : ""
                    }`}
                >
                  <Image
                    src={Images.Settings}
                    alt="image"
                    className="img-fluid showImg"
                  />
                  <Image
                    src={Images.Settings_Solid}
                    alt="image"
                    className="img-fluid hideImg"
                  />
                  <span className="sidebarTxt">Settings</span>
                </Link>
              </ListGroupItem>
            }

            {/* <ListGroupItem className="sidebarItems" >
                        <Link href="/dashboard" className={`sidebarLinks ${isLinkActive("/appointment/booking") ? "active" : ""}`} >
                            <Image src={Images.Addsquarelight} className="img-fluid showImg" alt="" />
                            <Image src={Images.AddsquarelightDark} className="img-fluid hoverImg active" alt="" />
                            <span className='sidebarTxt'>Settings</span>
                        </Link>
                    </ListGroupItem> */}
          </div>
          {/* <div className='sidbarfixedMenus '>
                    <ListGroupItem className="sidebarItems" onClick={() => { userLogout() }}>
                        <Link href="#" className={`sidebarLinks ${isLinkActive("/appointment/booking") ? "active" : ""}`} onClick={() => setActiveData("power")}>
                        <Image src={Images.LogOut} alt="image" className="img-fluid showImg" />
                        <span className='sidebarTxt'>LogOut</span>
                             <Image src={props?.auth?.userProfile?.user_profiles?.pos_role === null ? power : 'LogOut'} className="img-fluid" alt="" />
                        </Link>
                    </ListGroupItem>
                </div> */}
        </ListGroup>
      </div>
      {
        ADMIN()?.length > 0 &&
        <div className=" ">
          <Link
            href="#"
            className={`logoutLink ${isLinkActive("/appointment/booking") ? "active" : ""
              }`}
          >
            <button
              className="logOut"
              type="button"
              onClick={(e) => userLogout(e)}
            >
              <Image
                src={Images.LogOut}
                alt="image"
                className="img-fluid showImg"
              />
              <span className="sidebarTxt">LogOut</span>
            </button>
          </Link>
        </div>
      }

    </div>
  );
};

export default Sidebar;
