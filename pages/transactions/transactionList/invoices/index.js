import React, { useEffect, useState } from "react";
import * as Images from "../../../../utilities/images";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { ORDER_API_URL } from "../../../../utilities/config";
import { ApiClient } from "../../../../utilities/api";
import { selectLoginAuth } from "../../../../redux/slices/auth";
import {
  createFullAddress,
  formattedPrice,
} from "../../../../utilities/globalMethods";
import moment from "moment-timezone";

const Invoices = () => {
  const router = useRouter();
  const userId = router?.query?.["order_id"];

  const authData = useSelector(selectLoginAuth);

  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    if (userId)
      ApiClient.get(ORDER_API_URL + "/api/v1/orders/pos/" + userId)
        .then((res) => {
          setOrderDetails(res?.data?.payload);
        })
        .catch((err) => {});
  }, [userId]);

  const orderProductData = orderDetails?.is_returned_order
    ? orderDetails?.return_detail?.return_details
    : orderDetails?.order_details;

  return (
    <div className="invoiceMain">
      <div
        style={{
          gap: "12px",
          position: "absolute",
          top: 10,
          left: 10,
          alignItems: "center",
        }}
        className="flex-row-space-between"
        onClick={() => {
          router.back();
        }}
      >
        <Image
          style={{
            transform: "rotate(270deg)",
          }}
          src={Images.RightArrow}
        />

        <h4 style={{ color: "#263682" }}>{"Back"}</h4>
      </div>
      <div className="invoice_view">
        {!orderDetails ? (
          <td className="text-center" colSpan={12}>
            Loading...
          </td>
        ) : (
          <>
            <div className="confirmRightSub confirmAddress">
              <h2 className="mapleHeading text-center">
                {orderDetails?.seller_details?.organization_name}
              </h2>
              <h4 className="mapleAddress text-center">
                {createFullAddress(orderDetails?.seller_details)}
              </h4>
              <h4 className="mapleAddress text-center p-0">
                {orderDetails?.seller_details?.phone_number}
              </h4>
            </div>
            <div style={{ height: "25vh" }} className="confirmRightSub ">
              {orderProductData?.map((item, idx) => {
                const quantity = orderDetails?.is_returned_order
                  ? item?.order_details?.qty
                  : item?.qty;

                const productName = orderDetails?.is_returned_order
                  ? item?.order_details?.product_name
                  : item?.product_name;

                const amonut = orderDetails?.is_returned_order
                  ? item?.order_details?.price * item?.order_details?.qty
                  : item?.price * item?.qty ?? "0.00";

                return (
                  <li
                    key={item?.id + idx}
                    className="invoice-list-item-customer flex-row-space-between"
                  >
                    <div className="flexBox mapleProductDetailsBox mapleGap">
                      <div className="flexbase">
                        <p className="mapleProductcount"> {quantity} X</p>
                        <article className="ms-2">
                          <p className="mapleProductHeading">{productName}</p>
                          {/* <span className="mapleProductcount">Yellow / M</span> */}
                        </article>
                      </div>
                      <article>
                        <p className="mapleProductPrice">
                          {formattedPrice(amonut)}
                        </p>
                      </article>
                    </div>
                  </li>
                );
              })}
            </div>

            <div className="flexBox mapleInvoiceBox confirmRightSub">
              <article>
                <p className="mapleProductPrice">Payment Option</p>
                <p className="mapleProductHeading">
                  {orderDetails?.mode_of_payment}
                </p>
                <p className="mapleProductPrice">Invoice</p>
                <p className="mapleProductHeading">
                  {orderDetails?.is_returned_order
                    ? orderDetails?.return_detail?.invoices?.invoice_number
                    : orderDetails?.invoices?.invoice_number}
                </p>
              </article>
              <article>
                <p className="mapleProductPrice">Date</p>
                <p className="mapleProductHeading">
                  {moment.utc(orderDetails?.date).format("ddd DD/MM/YYYY")}
                </p>
                <p className="mapleProductPrice">POS No.</p>
                <p className="mapleProductHeading">
                  {authData?.posUserLoginDetails?.payload?.pos_number}
                </p>
              </article>
              <article>
                <p className="mapleProductPrice">Mode</p>
                <p className="mapleProductHeading">Walk-In</p>
                <p className="mapleProductPrice">User ID</p>
                <p className="mapleProductHeading">
                  {orderDetails?.pos_user_details?.id}
                </p>
              </article>
            </div>
            <div className="flexBox maplePriceBox">
              <article>
                <p className="productName">Subtotal</p>
                <p className="productName">Discount</p>
                {orderDetails?.delivery_charge > 0 ? (
                  <p className="productName">Delivery Charges</p>
                ) : (
                  <></>
                )}
                {orderDetails?.shipping_charge > 0 ? (
                  <p className="productName">Shipping Charges</p>
                ) : (
                  <></>
                )}
                <p className="productName">Taxes</p>
                <p className="productName">Tips</p>
                <p className="productName fw-bold">Total</p>
              </article>
              <article>
                <p className="productName">
                  {formattedPrice(orderDetails?.total_sale_price)}
                </p>
                <p className="productName">
                  {formattedPrice(orderDetails?.discount)}
                </p>
                {orderDetails?.delivery_charge > 0 ? (
                  <p className="productName">
                    {formattedPrice(orderDetails?.delivery_charge)}
                  </p>
                ) : (
                  <></>
                )}
                {orderDetails?.shipping_charge > 0 ? (
                  <p className="productName">
                    {formattedPrice(orderDetails?.shipping_charge)}
                  </p>
                ) : (
                  <></>
                )}
                <p className="productName">
                  {formattedPrice(orderDetails?.tax)}
                </p>
                <p className="productName">
                  {formattedPrice(orderDetails?.tips)}
                </p>
                <p className="totalBtn">
                  {formattedPrice(orderDetails?.payable_amount)}
                </p>
              </article>
            </div>
            <div className="confirmFooter">
              <Image src={Images.Logo} alt="logo" className="img-fluid logo" />
              <Image
                src={Images.barCodeScanImg}
                alt="barCodeScanImg"
                className="img-fluid barCodeScanImg"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Invoices;
