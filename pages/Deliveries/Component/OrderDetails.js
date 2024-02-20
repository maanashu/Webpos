// OrderDetail.js

import React, { useState } from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import moment from "moment-timezone";
import { deliveryData } from "../../../redux/slices/delivery";
import { useSelector } from "react-redux";
import ButtonComponent from "./ButtonComponent";
import MapleOrder from "../mapleOrder";
import OrderDeliver from "../orderDeliver";
import GoogleMap1 from "../../../components/commanComonets/GoogleMap/GoogleMap";
import { selectLoginAuth } from "../../../redux/slices/auth";

const OrderDetail = ({
  orderDetails,
  selectedOrderIndex,
  acceptHandler,
  declineHandler,
  trackHandler,
  orderListType,
  isLoading,
  declineLoading,
  showInvoice,
  setShowInvoice,
}) => {
  const { orderList } = useSelector(deliveryData);

  const orderData =
    selectedOrderIndex !== null && selectedOrderIndex !== undefined
      ? (orderList?.data && orderList?.data[selectedOrderIndex]) || null
      : (orderList?.data && orderList?.data[0]) || null;
  const [isMaximize, setIsMaximize] = useState(true);

  const authData = useSelector(selectLoginAuth);
  const location =
    authData?.usersInfo?.payload?.user?.user_profiles?.current_address;
  // const latitude = parseFloat(location?.latitude ?? 0.0);
  // const longitude = parseFloat(location?.longitude ?? 0.0);

  const pickupLatitude = parseFloat(
    orderData?.order_delivery?.order_pickup_latitude ?? 0.0
  );
  const pickupLongitude = parseFloat(
    orderData?.order_delivery?.order_pickup_longitude ?? 0.0
  );

  const deliverLatitude = parseFloat(
    orderData?.order_delivery?.order_pickup_latitude ?? 0.0
  );
  const deliverLongitude = parseFloat(
    orderData?.order_delivery?.order_delivery_longitude ?? 0.0
  );

  const detailView = () => {
    if (
      orderData?.status === 0 ||
      orderData?.status === 1 ||
      orderData?.status === 2 ||
      orderData?.status === 8 ||
      (orderData?.status === 7 && orderData?.is_delivery_dispute === false)
    ) {
      return (
        <div className=" deliveryOuter deliverOrderRight ms-0">
          <div className="orderLeftInfo">
            <div className="flexTable deliverProfileData">
              {/* <figure className="orderAroundImg"> */}
              <Image
                src={
                  orderData?.user_details?.profile_photo ?? Images.LoginThird
                }
                alt="MoneyItemImage "
                className=" orderPersonImg"
                width={45}
                height={45}
              />
              {/* </figure> */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // alignItems: "start",
                }}
              >
                <h4 className="linkHeading ms-1 text-start">
                  {orderData?.user_details?.firstname}{" "}
                  {orderData?.user_details?.lastname}
                </h4>

                <p
                  style={{ whiteSpace: "pre-line" }}
                  className="deliverProduct ms-1"
                >
                  {`${orderData?.user_details?.current_address?.street_address}, ${orderData?.user_details?.current_address?.city}`}
                </p>

                <p
                  style={{ whiteSpace: "pre-line" }}
                  className="deliverProduct ms-1"
                >
                  {`${orderData?.user_details?.current_address?.state}, ${orderData?.user_details?.current_address?.country}`}
                </p>
              </div>
            </div>
            <div className="flexTable">
              <Image
                src={Images.deliverFast}
                alt="deliverFast image"
                className="img-fluid"
              />
              <h4 className="expressText ms-1">
                {orderData?.delivery_details?.title ?? "Customer Pickup"}
              </h4>
            </div>
            {/* <div className="immediateBox">
              <Image
                src={Images.Fast}
                alt="deliverFast image"
                className="img-fluid"
              />
              <h4 className="immediateText">Immediately</h4>
            </div> */}
          </div>
          <hr className="divideBorder my-3" />
          <div className="detailDeliver  mt-3">
            {orderData?.order_details?.map((item, index) => (
              <li key={index} style={{ listStyle: "none" }}>
                <div className="selectedProductDetails">
                  <div className="d-flex productDataInfo">
                    <Image
                      src={item?.product_image}
                      alt="cartFoodImg"
                      width={200}
                      height={200}
                      className="img-fluid cartFoodImg"
                    />
                    <div className="ps-1">
                      <p
                        // style={{ whiteSpace: "pre-line" }}
                        className="aboutProduct invoiceDataText"
                      >
                        {item.product_name}
                      </p>
                      {/* <div className="d-flex">
                          <article className="productColor">
                            <span className="Yellow"></span>
                            <span className="Red"></span>
                            <span className="Pink"></span>
                            <span className="Blue"></span>
                            <span className="Black"></span>
                            <span className="White"></span>
                          </article>
                          <span className="productSize ms-2">
                            Colors / Size
                          </span>
                        </div> */}
                    </div>
                  </div>
                  <p className="productPriceinvoice">
                    {" "}
                    ${Number(item?.price).toFixed(2)}
                  </p>
                  <p className="productPriceinvoice">{`X ${item?.qty}`}</p>
                  <p className="productPriceinvoice">
                    ${Number(item?.price).toFixed(2) * item?.qty}
                  </p>
                  {/* <article>
                      <label className="custom-checkbox">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </article> */}
                </div>
              </li>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="OrderBox px-0">
                <div className="OrderCheckoutBox">
                  <p className="orderHeading">Total Items</p>
                  <p className="orderSubHeading">
                    {" "}
                    {orderData?.order_details?.length > 0
                      ? orderData?.order_details?.length
                      : "0"}
                  </p>
                </div>
                <div className="OrderCheckoutBox">
                  <p className="orderHeading">Order Date</p>
                  <p className="orderSubHeading">
                    {" "}
                    {orderData?.date
                      ? moment.utc(orderData?.date).format("DD/MM/YYYY")
                      : "00:00"}
                  </p>
                </div>
                <div className="OrderCheckoutBox">
                  {/* <p className="orderHeading">Order ID</p>
                  <p className="orderSubHeading">{`#${orderData?.id}`}</p> */}
                  <p className="orderHeading">Invoice ID</p>
                  <p className="orderSubHeading">{`#${
                    orderData?.return_detail
                      ? orderData?.return_detail?.invoices?.invoice_number
                      : orderData?.invoices?.invoice_number ?? "-"
                  }`}</p>
                </div>
                <div className="OrderCheckoutBox">
                  <p className="orderHeading">Payment Method</p>
                  <figure className="priceBtn">
                    <Image
                      src={Images.moneyImg}
                      alt="money"
                      className="moneyImg"
                    />
                    <span className="ms-1">
                      {" "}
                      {orderData?.mode_of_payment == "jbr"
                        ? "JBR coin"
                        : "cash"}
                    </span>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="productBilling">
                <div className="OrderDiscountBox">
                  <div className="flexBox ">
                    <p className="orderHeading">Sub Total</p>
                    <p className="orderSubHeading">
                      $
                      {orderData?.actual_amount
                        ? Number(orderData?.actual_amount).toFixed(2)
                        : "0"}
                      {/* {amountFormat(
                    userDetail?.actual_amount ? Number(userDetail?.actual_amount).toFixed(2) : '0',
                    true
                  )} */}
                    </p>
                  </div>
                  <div className="flexBox">
                    <p className="orderHeading">Discount</p>
                    <p className="orderSubHeading">
                      {"$"}
                      {orderData?.discount
                        ? Number(orderData?.discount).toFixed(2)
                        : "0"}
                    </p>
                  </div>
                  <div className="flexBox">
                    <p className="orderHeading">Tip</p>
                    <p className="orderSubHeading">
                      {"$"}
                      {orderData?.discount
                        ? Number(orderData?.tips).toFixed(2)
                        : "0"}
                    </p>
                  </div>
                  {/* <div className="flexBox">
                      <p className="orderHeading">Other Fees</p>
                      <p className="orderSubHeading">$14,000</p>
                    </div> */}
                  <div className="flexBox">
                    <p className="orderHeading">Tax</p>
                    <p className="orderSubHeading">
                      {"$"}
                      {orderData?.discount
                        ? Number(orderData?.tax).toFixed(2)
                        : "0"}
                    </p>
                  </div>
                  <div className="flexBox">
                    <p className="orderHeading">Delivery Charges</p>
                    <p className="orderSubHeading">
                      {"$"}
                      {orderData?.discount
                        ? Number(orderData?.delivery_charge).toFixed(2)
                        : "0"}
                    </p>
                  </div>
                </div>
                <div className="OrderTotal">
                  <div className="flexBox">
                    <p className="priceHeading">Total</p>
                    <p className="priceHeading">
                      {"$"}
                      {orderData?.discount
                        ? Number(orderData?.payable_amount).toFixed(2)
                        : "0"}
                    </p>
                  </div>
                  {/* <div className="flexBox ">
                      <button className="declineButton w-100" type="button">
                        {" "}
                        Decline
                      </button>
                      <button type="button" className="BlueBtn w-100">
                        Accept
                        <Image
                          src={Images.ArrowRight}
                          alt="ArrowRight"
                          className="img-fluid ArrowRight"
                        />
                      </button>
                    </div> */}
                  {/* <button
                      type="button "
                      className="pickupBtn w-100 mt-2 d-none"
                    >
                      Ready to Pick Up
                      <Image
                  src={Images.deliverHand}
                  alt="deliverHand image"
                  className="img-fluid"
                />
                    </button> */}
                  <ButtonComponent
                    selected={orderListType?.status}
                    orderData={orderData}
                    acceptHandler={() => acceptHandler(orderData)}
                    declineHandler={() => declineHandler(orderData)}
                    trackHandler={trackHandler}
                    isLoading={isLoading}
                    declineLoading={declineLoading}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className=" deliveryOuter assignMapRight ms-0">
          <div className="flexBox isExpandImg">
            <button
              onClick={() => setShowInvoice(!showInvoice)}
              type="button"
              className="expandBtn"
            >
              {showInvoice ? "Close" : "Expand"}
            </button>
          </div>
          <GoogleMap1
            latitude={pickupLatitude}
            longitude={pickupLongitude}
            destination={{
              lat: deliverLatitude,
              lng: deliverLongitude,
            }}
          />
          {/* <Image src={Images.map} alt="map Image" className="mapImg" /> */}
          <div className="orderStatusBox">
            <div className="orderFlex">
              <Image
                src={Images.orderDriver}
                alt="orderDriver Image"
                className="img-fluid"
              />
              <h4 className="customerLink ">Order Status</h4>
            </div>
            {isMaximize ? (
              <div className="orderTrackStatus">
                <div className="subOrderTime">
                  <div className="positionImg">
                    <Image
                      src={Images.pickupStep}
                      alt="pickupStep Image"
                      className="img-fluid dotStepImg"
                    />
                    <Image
                      src={Images.lineStep}
                      alt="lineStep Image"
                      className="img-fluid lineStepImg"
                    />
                  </div>
                  <div className="positionText">
                    <h4 className="appointSub mt-0">Verify Code</h4>
                    <h4 className="orderPara">
                      {orderData?.status_desc?.status_5_updated_at
                        ? moment
                            .utc(orderData?.status_desc?.status_5_updated_at)
                            .format("DD MMM YYYY | HH:mm A")
                        : ""}
                    </h4>
                  </div>
                </div>
                <div className="subOrderTime">
                  <div className="positionImg">
                    <Image
                      src={Images.deliverDot}
                      alt="deliverDot Image"
                      className="img-fluid dotStepImg"
                    />
                    <Image
                      src={Images.lineStep}
                      alt="lineStep Image"
                      className="img-fluid lineStepImg"
                    />
                  </div>
                  <div className="positionText">
                    <h4 className="appointSub mt-0">Delivered</h4>
                    <h4 className="orderPara">
                      {orderData?.status_desc?.status_5_updated_at
                        ? moment
                            .utc(orderData?.status_desc?.status_5_updated_at)
                            .format("DD MMM YYYY | HH:mm A")
                        : ""}
                    </h4>
                  </div>
                </div>
                <div className="subOrderTime">
                  <div className="positionImg">
                    <Image
                      src={Images.deliverDot}
                      alt="deliverDot Image"
                      className="img-fluid dotStepImg"
                    />
                    <Image
                      src={Images.lineStep}
                      alt="lineStep Image"
                      className="img-fluid lineStepImg"
                    />
                  </div>
                  <div className="positionText">
                    <h4 className="appointSub mt-0">Product Pickup</h4>
                    <h4 className="orderPara">
                      {orderData?.status_desc?.status_4_updated_at
                        ? moment
                            .utc(orderData?.status_desc?.status_4_updated_at)
                            .format("DD MMM YYYY | HH:mm A")
                        : ""}
                    </h4>
                  </div>
                  <div className="jobrPickUp">
                    <Image
                      src={Images.deliverBox}
                      alt="deliverBox Image"
                      className="img-fluid"
                    />
                    <h4 className="locateDistance ">
                      {" "}
                      {orderData?.delivery_option === "3"
                        ? orderData?.customer_pickup_otp || "1234"
                        : orderData?.order_delivery?.seller_otp || "1234"}
                    </h4>
                  </div>
                </div>
                {orderData?.delivery_option !== "3" && (
                  <div className="subOrderTime">
                    <div className="positionImg">
                      <Image
                        src={Images.readyStep}
                        alt="readyStep Image"
                        className="img-fluid dotStepImg"
                      />
                      <Image
                        src={Images.lineStep}
                        alt="lineStep Image"
                        className="img-fluid lineStepImg"
                      />
                    </div>
                    <div className="positionText">
                      <h4 className="appointSub mt-0">Assign Driver</h4>
                      <h4 className="orderPara">
                        {orderData?.status_desc?.status_3_updated_at
                          ? moment
                              .utc(orderData?.status_desc?.status_3_updated_at)
                              .format("DD MMM YYYY | HH:mm A")
                          : ""}
                      </h4>
                    </div>
                  </div>
                )}
                <div className="subOrderTime">
                  <div className="positionImg">
                    <Image
                      src={Images.readyStep}
                      alt="readyStep Image"
                      className="img-fluid dotStepImg"
                    />
                    <Image
                      src={Images.lineStep}
                      alt="lineStep Image"
                      className="img-fluid lineStepImg"
                    />
                  </div>
                  <div className="positionText">
                    <h4 className="appointSub mt-0">Ready to Pickup</h4>
                    <h4 className="orderPara">
                      {orderData?.status_desc?.status_2_updated_at
                        ? moment
                            .utc(orderData?.status_desc?.status_2_updated_at)
                            .format("DD MMM YYYY | HH:mm A")
                        : ""}
                    </h4>
                  </div>
                </div>
                <div className="subOrderTime">
                  <div className="positionImg">
                    <Image
                      src={Images.acceptStep}
                      alt="acceptStep Image"
                      className="img-fluid dotStepImg"
                    />
                  </div>
                  <div className="positionText">
                    <h4 className="appointSub mt-0">Order Accepted</h4>
                    <h4 className="orderPara">
                      {orderData?.status_desc?.status_1_updated_at
                        ? moment
                            .utc(orderData?.status_desc?.status_1_updated_at)
                            .format("DD MMM YYYY | HH:mm A")
                        : ""}
                    </h4>
                  </div>
                </div>
              </div>
            ) : (
              <div className="orderTrackStatus">
                <div className="subOrderTime">
                  <div className="positionImg">
                    <Image
                      src={Images.acceptStep}
                      alt="acceptStep Image"
                      className="img-fluid dotStepImg"
                    />
                  </div>
                  <div className="positionText">
                    <h4 className="appointSub mt-0">Order Accepted</h4>
                    <h4 className="orderPara">
                      {" "}
                      {orderData?.status_desc?.status_1_updated_at
                        ? moment
                            .utc(orderData?.status_desc?.status_1_updated_at)
                            .format("DD MMM YYYY | HH:mm A")
                        : ""}
                    </h4>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            onClick={() => setIsMaximize(!isMaximize)}
            className="maximizeImg"
          >
            <Image
              src={Images.maximize}
              alt="maximize Image"
              className="img-fluid"
            />
          </div>
        </div>
      );
    }
  };

  return detailView();
};

export default OrderDetail;
