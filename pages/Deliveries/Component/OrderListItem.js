import React, { useEffect, useState, Suspense } from "react";

import * as Images from "../../../utilities/images";
import Image from "next/image";
import moment from "moment-timezone";
import Link from "next/link";

const OrderListItem = ({ id, screen, orderList, itemPressHandler }) => {
  return (
    <>
      {orderList?.map((item, index) => (
        <li key={index} style={{ listStyle: "none" }}>
          <OrderDetailsItem
            id={id}
            item={item}
            onPressHandler={() => itemPressHandler(item, index)}
          />
        </li>
      ))}
    </>
  );
};

const OrderDetailsItem = ({ id, item, onPressHandler }) => {
  // const isSelected = viewAllOrder && item?.id === userDetail?.id;
  const orderDetails = item?.order_details || [];
  const deliveryDate =
    item?.delivery_option == "3"
      ? moment.utc(item?.created_at).format("DD MMM YYYY")
      : moment.utc(item?.date).format("DD MMM YYYY") || "";
  const startTime = item?.preffered_delivery_start_time || "00.00";
  const endTime = item?.preffered_delivery_end_time || "00.00";
  const formattedTime = `${startTime} - ${endTime}`;
  return (
    <table id={id} className="deliverDashboardTable">
      <tbody onClick={() => onPressHandler(item)}>
        <tr className="product_invoice">
          <td className="invoice_subhead">
            <div className="nameLocation">
              <h4 className="assignId">{"#" + item?.id}</h4>
            </div>
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
          </td>
          <td className="invoice_subhead">
            <div className="itemMoney">
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
                  {item?.payable_amount || "00"}
                </span>
              </div>
            </div>
          </td>
          <td className="invoice_subhead">
            <div className="itemTime">
              <h4 className="assignId"> {deliveryDate}</h4>
              <div className="deliverTableBx">
                <Image
                  src={Images.Time}
                  alt="MoneyItemImage "
                  className="img-fluid ms-1"
                />
                <span className="locateDistance">{formattedTime}</span>
              </div>
            </div>
          </td>
          {/* <td className="invoice_subhead">
            <div className="deliveryTime">
              <span className="assignId"> {formattedTime}</span>
            </div>
          </td> */}
          <td className="invoice_subhead">
            <div className="deliverArrow text-end">
              <Image
                src={Images.RightArrow}
                alt="RightArrow image"
                className="img-fluid ms-1"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderListItem;
