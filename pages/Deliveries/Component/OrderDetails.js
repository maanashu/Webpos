// OrderDetail.js

import React from "react";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import moment from "moment-timezone";
import { deliveryData } from "../../../redux/slices/delivery";
import { useSelector } from "react-redux";

const OrderDetail = (orderDetail) => {
  const { orderList } = useSelector(deliveryData);
  const orderData = orderList?.data[0] ?? orderDetail?.orderData ?? {};
  console.log("OrderDetails", JSON.stringify(orderList));

  const detailView = () => {
    if (
      orderData?.status === 0 ||
      orderData?.status === 1 ||
      orderData?.status === 2 ||
      orderData?.status === 8 ||
      (orderData?.status === 7 && orderData?.is_delivery_dispute === false)
    ) {
      return (
        <div className="col-lg-6">
          <div className=" deliveryOuter deliverOrderRight ms-0">
            <div className="orderLeftInfo">
              <div className="flexTable">
                <figure className="orderAroundImg">
                  <Image
                    src={
                      orderData?.user_details?.profile_photo ??
                      Images.LoginThird
                    }
                    alt="MoneyItemImage "
                    className="orderPerson"
                  />
                </figure>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    // alignItems: "start",
                  }}
                >
                  <h4 className="linkHeading ms-1">
                    {orderData?.user_details?.firstname}{" "}
                    {orderData?.user_details?.lastname}
                  </h4>

                  <p
                    style={{ whiteSpace: "pre-line" }}
                    className="aboutProduct ms-1"
                  >
                    {`${orderData?.user_details?.current_address?.street_address}, ${orderData?.user_details?.current_address?.city}`}
                  </p>

                  <p
                    style={{ whiteSpace: "pre-line" }}
                    className="aboutProduct ms-1"
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
                <h4 className="expressText ms-1">Express Delivery</h4>
              </div>
              <div className="immediateBox">
                <Image
                  src={Images.Fast}
                  alt="deliverFast image"
                  className="img-fluid"
                />
                <h4 className="immediateText">Immediately</h4>
              </div>
            </div>
            <hr className="divideBorder my-3" />
            <div className="detailScroll  mt-3">
              {orderData?.order_details?.map((item, index) => (
                <li key={index} style={{ listStyle: "none" }}>
                  <div className="selectedProductDetails">
                    <div className="d-flex">
                      <Image
                        src={item?.product_image}
                        alt="cartFoodImg"
                        width={200}
                        height={200}
                        className="img-fluid cartFoodImg"
                      />
                      <div className="ps-1">
                        <p
                          style={{ whiteSpace: "pre-line" }}
                          className="aboutProduct"
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
                <div className="OrderBox p-0">
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
                    <p className="orderHeading">Order ID#</p>
                    <p className="orderSubHeading">{`#${orderData?.id}`}</p>
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
                      <p className="orderSubHeading">$2,396.50</p>
                    </div>
                    <div className="flexBox">
                      <p className="orderHeading">Discount</p>
                      <p className="orderSubHeading">-$19.00</p>
                    </div>
                    <div className="flexBox">
                      <p className="orderHeading">Other Fees</p>
                      <p className="orderSubHeading">$14,000</p>
                    </div>
                    <div className="flexBox">
                      <p className="orderHeading">Fax</p>
                      <p className="orderSubHeading">$236</p>
                    </div>
                  </div>
                  <div className="OrderTotal">
                    <div className="flexBox">
                      <p className="priceHeading">Total</p>
                      <p className="priceHeading">$254.60</p>
                    </div>
                    <div className="flexBox ">
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
                    </div>
                    <button
                      type="button "
                      className="pickupBtn w-100 mt-2 d-none"
                    >
                      Ready to Pick Up
                      {/* <Image
                  src={Images.deliverHand}
                  alt="deliverHand image"
                  className="img-fluid"
                /> */}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="col-lg-6"></div>;
    }
  };

  return detailView();
};

export default OrderDetail;
