import React, { useEffect, useState, Suspense } from "react";

import * as Images from "../../../utilities/images";
import Image from "next/image";
import moment from "moment-timezone";
import Link from "next/link";

const OrderListSeeAll = ({ screen, orderList, itemPressHandler }) => {
  return (
    <>
      {orderList?.map((item, index) => (
        <li key={index} style={{ listStyle: "none" }}>
          <OrderDetailsItem
            item={item}
            onPressHandler={() => itemPressHandler(item, index)}
          />
        </li>
      ))}
    </>
  );
};

const OrderDetailsItem = ({ item, onPressHandler }) => {
  const orderDetails = item?.order_details || [];
  const deliveryDate =
    item?.delivery_option == "3"
      ? moment.utc(item?.created_at).format("DD MMM YYYY")
      : moment.utc(item?.date).format("DD MMM YYYY") || "";
  const startTime = item?.preffered_delivery_start_time || "00.00";
  const endTime = item?.preffered_delivery_end_time || "00.00";
  const formattedTime = `${startTime} - ${endTime}`;
  return (
    <div className="table-responsive mt-3">
      <table
        onClick={() => onPressHandler(item)}
        id=""
        className="orderDeliverTable"
      >
        <thead className="invoiceHeadingBox">
          <tr>
            <th className="invoiceHeading">#</th>
            <th className="invoiceHeading">Client/Items</th>
            <th className="invoiceHeading">Driver/Timing</th>
            <th className="invoiceHeading"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="product_invoice active">
            <td className="invoice_subhead verticalBase">
              <h4 className="assignId">{`#${item?.id}`}</h4>
            </td>
            <td className="invoice_subhead">
              <div className="nameLocation">
                <h4 className="assignId">
                  {item?.user_details?.firstname || "user"}
                </h4>
                <div className="deliverTableBx">
                  <Image
                    src={Images.OrderLocation}
                    alt="location Image"
                    className="img-fluid ms-1"
                  />
                  <span className="locateDistance">
                    {" "}
                    {item?.distance ? `${item.distance} miles` : "0"}
                  </span>
                </div>
              </div>
              <div className="itemMoney mt-4">
                <h4 className="assignId">
                  {" "}
                  {orderDetails.length > 1
                    ? `${orderDetails.length} Items`
                    : `${orderDetails.length} Item`}
                </h4>
                <div className="deliverTableBx">
                  <Image
                    src={Images.MoneyItem}
                    alt="MoneyItemImage "
                    className="img-fluid ms-1"
                  />
                  <span className="locateDistance">
                    {" "}
                    {item?.payable_amount || "00"}
                  </span>
                </div>
              </div>
            </td>
            <td className="invoice_subhead">
              <div className="itemTime">
                <div className="flexTable">
                  <Image
                    src={Images.driverProfile}
                    alt="driverProfile image "
                    className="driverImg"
                  />
                  <h4 className="assignId">1 hour delivery window</h4>
                </div>
                <div className="deliverTableBx">
                  <Image
                    src={Images.Time}
                    alt="MoneyItemImage "
                    className="img-fluid ms-1"
                  />
                  <span className="locateDistance">Immediately</span>
                </div>
              </div>
              <div className="itemTime mt-3">
                <h4 className="assignId">Delivered at:</h4>
                <div className="orderDeliverTime">
                  <Image
                    src={Images.deliverTime}
                    alt="deliverTime image "
                    className="img-fluid mb-1"
                  />
                  <span className="immediateText ">{formattedTime}</span>
                </div>
              </div>
            </td>
            <td className="invoice_subhead verticalBase">
              <div className="deliverArrow ">
                <Image
                  src={Images.RightArrow}
                  alt="RightArrow image"
                  className="img-fluid "
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderListSeeAll;
