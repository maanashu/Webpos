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
    <div className="table-responsive">
      <table id={id} className="deliverDashboardTable">
        <tbody onClick={() => onPressHandler(item)}>
          <tr className="product_invoice">
            <td className="invoice_subhead">
              <div className="nameLocation">
                <h4 className="assignId">
                  {"#"}
                  {item?.return_detail
                    ? item?.return_detail?.invoices?.invoice_number
                    : item?.invoices?.invoice_number ?? "-"}
                </h4>
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

      {/* //Assign Driver */}

      {/* <table id="orderAssignDeliver" className="orderDeliverTable">
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
              <h4 className="assignId">
                {" "}
                {"#"}
                {item?.return_detail
                  ? item?.return_detail?.invoices?.invoice_number
                  : item?.invoices?.invoice_number ?? "-"}
              </h4>
            </td>
            <td className="invoice_subhead">
              <div className="nameLocation">
                <h4 className="assignId">
                  {" "}
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
                  <h4 className="assignId"> {item?.delivery_details?.title}</h4>
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
      </table> */}

      {/* //cancelOrderLeft */}

      {/* <table id="cancelDeliver" className="orderDeliverTable">
        <thead className="invoiceHeadingBox">
          <tr>
            <th className="invoiceHeading">Client/Items</th>
            <th className="invoiceHeading">Delivery/Cancel</th>
            <th className="invoiceHeading">Cancelling Time</th>
            <th className="invoiceHeading"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="product_invoice active">
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
                    {item?.payable_amount || "00"}
                  </span>
                </div>
              </div>
            </td>
            <td className="invoice_subhead">
              <div className="itemType">
                <h4 className="assignId">Delivery Type</h4>
                <div className="immediateBox mt-1">
                  <Image
                    src={Images.Fast}
                    alt="deliverFast image"
                    className="img-fluid m-0"
                  />
                  <h4 className="immediateText">
                    {item?.delivery_details?.title}
                  </h4>
                </div>
              </div>
              <div className="itemType mt-4">
                <h4 className="assignId">Cancelled by</h4>
                <div className="cancelUserBx mt-1">
                  <Image
                    src={Images.cancelUser}
                    alt="cancelUser image"
                    className="img-fluid"
                  />
                  <h4 className="cancelText">User</h4>
                </div>
              </div>
            </td>
            <td className="invoice_subhead verticalBase">
              <div className="cancellingTime">
                <h4 className="assignId">Cancelled at:</h4>
                <div className="canceltimeBx">
                  <Image
                    src={Images.cancelPackage}
                    alt="cancelUser image"
                    className="img-fluid"
                  />
                  <div className="timeAlert">
                    <h4 className="cancelBold">21 Oct 23 </h4>
                    <h4 className="cancelLight"> 00:10:35 hrs</h4>
                  </div>
                </div>
              </div>
            </td>
            <td className="invoice_subhead verticalBase">
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
      </table> */}
    </div>
  );
};

export default OrderListItem;
