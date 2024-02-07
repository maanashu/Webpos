import React, { useEffect, useState } from "react";
import * as Images from "../../../../utilities/images";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { ORDER_API_URL } from "../../../../utilities/config";
import { ApiClient } from "../../../../utilities/api";
import { selectLoginAuth } from "../../../../redux/slices/auth";
import { createFullAddress } from "../../../../utilities/globalMethods";
import moment from "moment-timezone";

const Invoice = () => {
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

  return (
    <div className="invoiceMain">
      <div
        style={{ gap: "12px" }}
        className="flex-row-space-between"
        onClick={() => {
          router.back();
        }}
      >
        <Image
          style={{
            position: "absolute",
            top: "5vh",
            left: 10,
            transform: "rotate(270deg)",
          }}
          src={Images.RightArrow}
        />
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
              {orderDetails?.order_details?.map((item, idx) => (
                <li
                  key={item?.id + idx}
                  className="invoice-list-item-customer flex-row-space-between"
                >
                  <div className="flexBox mapleProductDetailsBox">
                    <div className="flexbase">
                      <p className="mapleProductcount"> {item?.qty} X</p>
                      <article className="ms-3">
                        <p className="mapleProductHeading">
                          {item?.product_name}
                        </p>
                        {/* <span className="mapleProductcount">Yellow / M</span> */}
                      </article>
                      <article>
                        <p className="mapleProductPrice">
                          {" "}
                          ${item?.actual_price}
                        </p>
                      </article>
                    </div>
                  </div>
                </li>
              ))}
            </div>

            <div className="flexBox mapleInvoiceBox confirmRightSub">
              <article>
                <p className="mapleProductPrice">Payment Option</p>
                <p className="mapleProductHeading">
                  {orderDetails?.mode_of_payment}
                </p>
                <p className="mapleProductPrice">Invoice</p>
                <p className="mapleProductHeading">
                  {orderDetails?.invoices?.invoice_number}
                </p>
              </article>
              <article>
                <p className="mapleProductPrice">Date</p>
                <p className="mapleProductHeading">
                  {moment(orderDetails?.date).format("dd DD/MM/YYYY")}
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
                <p className="productName">Taxes</p>
                <p className="productName fw-bold">Total</p>
              </article>
              <article>
                <p className="productName">${orderDetails?.total_sale_price}</p>
                <p className="productName">${orderDetails?.discount}</p>
                <p className="productName">${orderDetails?.tax}</p>
                <p className="totalBtn">${orderDetails?.payable_amount}</p>
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

export default Invoice;
