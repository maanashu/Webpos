import React, { use, useState } from "react";
import Link from "next/link";
import * as Images from "../utilities/images";
import Image from "next/image";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useRouter } from "next/router";
import { logout, selectLoginAuth } from "../redux/slices/auth";
import { dashboardLogout } from "../redux/slices/dashboard";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const [activeSidebar, setActiveSidebar] = useState(true);
  const authData = useSelector(selectLoginAuth);

  const router = useRouter();
  console.log(router?.pathname, "router");
  props?.sidebarToggle(activeSidebar);

  const userLogout = async (e) => {
    e.preventDefault();
    await dispatch(logout());
    await dispatch(dashboardLogout());
    setTimeout(() => {
      toast.success("Logout successfully");
    }, 200);
    router.push("/auth/verification");
    localStorage.removeItem("merchantAuthToken");
    localStorage.removeItem("authToken");
    localStorage.removeItem("persist:root");
  };

  const isLinkActive = (href) => {
    console.log(href, "hrefhref");
    return router.pathname === href;
  };
  return (
    <div
      className={`main-sidebar ${activeSidebar ? "hide" : "full"}`}
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
        <div
          onClick={() => setActiveSidebar((prev) => !prev)}
          className="ToggleIcon"
        >
          <Image
            src={Images.sideToggle}
            alt="image"
            className="img-fluid sideToggle"
          />
        </div>
      </div>
      <div className="userDetails">
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
            className="img-fluid sidebarProfile"
            onClick={() => router.push("/home/overview")}
          />
        </figure>
        <article>
          <p className="userName">{`${authData?.posUserLoginDetails?.payload?.user_profiles?.firstname} ${authData?.posUserLoginDetails?.payload?.user_profiles?.lastname}`}</p>
          <p className="userPosition">
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
          </p>
        </article>
      </div>
      <ListGroup className="sidebarMenus navbar_overlay_content_">
        <div className="sidebarStaticMenus">
          <ListGroupItem className="sidebarItems">
            <Link
              href="/Product"
              className={`sidebarLinks ${
                router?.pathname == "/Product" ? "active" : ""
              }`}
            >
              <Image
                src={Images.ProductsServices}
                alt="image"
                className="img-fluid  hideImg"
              />
              <Image
                src={Images.ProductsServicesactive}
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
                router?.pathname == "/Deliveries" ? "active" : ""
              }`}
            >
              <Image
                src={Images.DeliveryOrders}
                alt="image"
                className="img-fluid showImg"
              />
              <Image
                src={Images.DeliveryOrdersactive}
                alt="image"
                className="img-fluid hideImg"
              />
              <span className="sidebarTxt">Delivery Orders</span>
            </Link>
          </ListGroupItem>
          <ListGroupItem className="sidebarItems">
            <Link href="/dashboard" className="sidebarLinks active">
              <Image
                src={Images.ProductsServices}
                alt="image"
                className="img-fluid showImg"
              />
              {/* <Image src={Images.ProductsServices} alt="image" className="img-fluid showImg" /> */}
              <span className="sidebarTxt">Products & Services</span>
            </Link>
          </ListGroupItem>
          <ListGroupItem className="sidebarItems">
            <Link href="/dashboard" className="sidebarLinks">
              <Image
                src={Images.DeliveryOrders}
                alt="image"
                className="img-fluid showImg"
              />
              <span className="sidebarTxt">Delivery Orders</span>
            </Link>
          </ListGroupItem>
          <ListGroupItem className="sidebarItems">
            <Link
              href="#"
              className={`sidebarLinks ${
                router?.pathname == "/Shipping" ? "active" : ""
              }`}
            >
              <Image
                src={Images.ShippingOrders}
                alt="image"
                className="img-fluid showImg"
              />
              <Image
                src={Images.ShippingSolid}
                alt="image"
                className="img-fluid hideImg"
              />
              <span className="sidebarTxt">Shipping Orders</span>
            </Link>
          </ListGroupItem>
          <ListGroupItem className="sidebarItems">
            <Link
              href="/appointment/booking"
              className={`sidebarLinks ${
                router?.pathname == "/appointment/booking" ? "active" : ""
              }`}
            >
              <Image
                src={Images.Appointments}
                alt="image"
                className="img-fluid showImg"
              />
              <Image
                src={Images.CalendarSolid}
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
                router?.pathname == "/analytics" ? "active" : ""
              }`}
            >
              <Image
                src={Images.Analytics}
                alt="image"
                className="img-fluid showImg"
              />
              <Image
                src={Images.ChartSolid}
                alt="image"
                className="img-fluid hideImg"
              />
              <span className="sidebarTxt">Analytics</span>
            </Link>
          </ListGroupItem>
          <ListGroupItem className="sidebarItems">
            <Link href="#" className={`sidebarLinks ${"" ? "active" : ""}`}>
              <Image
                src={Images.Wallets}
                alt="image"
                className="img-fluid showImg"
              />
              <Image
                src={Images.WalletSolid}
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
                src={Images.CashSolid}
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
                router?.pathname == "/customers" ? "active" : ""
              }`}
            >
              <Image
                src={Images.Customer}
                alt="image"
                className="img-fluid showImg"
              />
              <Image
                src={Images.UsersSolid}
                alt="image"
                className="img-fluid hideImg"
              />
              <span className="sidebarTxt">Customer</span>
            </Link>
          </ListGroupItem>
          <ListGroupItem className="sidebarItems">
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
                src={Images.RewardsSolid}
                alt="image"
                className="img-fluid hideImg"
              />
              <span className="sidebarTxt">Rewards</span>
            </Link>
          </ListGroupItem>
          <ListGroupItem className="sidebarItems">
            <Link
              href="/settings"
              className={`sidebarLinks ${
                router?.pathname == "/settings" ? "active" : ""
              }`}
            >
              <Image
                src={Images.Settings}
                alt="image"
                className="img-fluid showImg"
              />
              <Image
                src={Images.SettingsSolid}
                alt="image"
                className="img-fluid hideImg"
              />
              <span className="sidebarTxt">Settings</span>
            </Link>
          </ListGroupItem>
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
        <div className="sidbarfixedMenus ">
          <ListGroupItem>
            <Link
              href="#"
              className={`sidebarLinks ${
                isLinkActive("/appointment/booking") ? "active" : ""
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
          </ListGroupItem>
        </div>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
