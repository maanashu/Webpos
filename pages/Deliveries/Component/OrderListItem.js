import React, { useEffect, useState, Suspense } from "react";

import * as Images from "../../../utilities/images";
import Image from "next/image";

const OrderListItem = ({ screen, orderList }) => {
  return (
    <>
      {orderList.map((item, index) => (
        <li key={index} style={{ listStyle: "none" }}>
          <OrderDetailsItem item={item} />
        </li>
      ))}
    </>
  );
};

const OrderDetailsItem = ({ item }) => {
  return (
    <table id="DeliverDashboard" className="deliverDashboardTable">
      <tbody>
        <tr className="product_invoice">
          <td className="invoice_subhead">
            <div className="nameLocation">
              <h4 className="assignId">Samara Schwansteiger</h4>
              <div className="deliverTableBx">
                <Image
                  src={Images.OrderLocation}
                  alt="location Image"
                  className="img-fluid ms-1"
                />
                <span className="locateDistance">2.5 miles</span>
              </div>
            </div>
          </td>
          <td className="invoice_subhead">
            <div className="itemMoney">
              <h4 className="assignId">3 items</h4>
              <div className="deliverTableBx">
                <Image
                  src={Images.MoneyItem}
                  alt="MoneyItemImage "
                  className="img-fluid ms-1"
                />
                <span className="locateDistance">$500.50</span>
              </div>
            </div>
          </td>
          <td className="invoice_subhead">
            <div className="itemTime">
              <h4 className="assignId">1 hour delivery window</h4>
              <div className="deliverTableBx">
                <Image
                  src={Images.Time}
                  alt="MoneyItemImage "
                  className="img-fluid ms-1"
                />
                <span className="locateDistance">Immediately</span>
              </div>
            </div>
          </td>
          <td className="invoice_subhead">
            <div className="deliveryTime">
              <span className="assignId"> 00:03:06</span>
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
  );
};

export default OrderListItem;
