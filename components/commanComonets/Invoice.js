import React from "react";
import Image from "next/image";
import moment from "moment-timezone";
import { jobrFullIcon } from "../../utilities/images";
import {
  formattedPrice,
  formattedReturnPrice,
} from "../../utilities/globalMethods";

const Invoice = ({
  tax,
  date,
  total,
  userId,
  subtotal,
  discount,
  shipping,
  posUserId = "",
  isLoading,
  sellerName,
  barcodeImg,
  ordersList,
  phoneNumber,
  paymentMode,
  invoiceNumber,
  sellerAddress,
  orderDetails
}) => {
  const strUserId = userId?.toString();

  const hr = <div className="invoice-dotted-hr" />;

  return (
    <div className="flex-row-space-between invoice-container">
      {isLoading ? (
        <p>Loading Invoice...</p>
      ) : (
        <>
          <div className="invoice-header">
            <p
              style={{ fontWeight: "600" }}
              className="main-text-color-styles-customers"
            >
              {sellerName}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <p
                style={{
                  fontSize: "10px",
                }}
                className="main-text-color-styles-customers"
              >
                {sellerAddress}
              </p>
              <p
                style={{
                  fontSize: "10px",
                }}
                className="main-text-color-styles-customers"
              >
                {phoneNumber || "N/A"}
              </p>
            </div>
          </div>

          {hr}

          <ul
            style={{
              padding: "0px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              alignSelf: "stretch",
            }}
          >
            {ordersList?.map((item, idx) => {
              const quantity = orderDetails?.is_returned_order
                ? item?.order_details?.qty
                : item?.qty;

              const productName = orderDetails?.is_returned_order
                ? item?.order_details?.product_name
                : item?.product_name;

              const amonut = orderDetails?.is_returned_order
                ? item?.order_details?.actual_price
                : item?.actual_price;
              return (
                <li
                  key={item?.id + idx}
                  className="invoice-list-item-customer flex-row-space-between"
                >
                  <p
                    className="main-text-color-styles-customers"
                    style={{
                      fontSize: "10px",
                      fontWeight: "400",
                      width: "40px",
                    }}
                  >
                    {quantity} X
                  </p>
                  <div>
                    <p
                      className="main-text-color-styles-customers"
                      style={{
                        fontSize: "10px",
                        fontWeight: "600",
                      }}
                    >
                      {productName}
                    </p>
                    {/* <p
                    className="main-text-color-styles-customers"
                    style={{
                      fontSize: "10px",
                      fontWeight: "400",
                    }}
                  >
                    Yellow / M
                  </p> */}
                  </div>
                  <p
                    className="main-text-color-styles-customers"
                    style={{
                      fontSize: "10px",
                      fontWeight: "400",
                    }}
                  >
                    {formattedPrice(amonut)}
                  </p>
                </li>
              );
            })}
          </ul>

          {hr}

          <table
            style={{
              padding: "0 24px",
            }}
          >
            <tr>
              <td
                style={{
                  fontSize: "10px",
                  paddingRight: "22px",
                  paddingBottom: "12px",
                }}
                className="main-text-color-styles-customers"
              >
                Payment option
              </td>
              <td
                style={{
                  fontSize: "10px",
                  paddingRight: "22px",
                  paddingBottom: "12px",
                }}
                className="main-text-color-styles-customers"
              >
                Date
              </td>
              <td
                style={{
                  fontSize: "10px",
                  paddingBottom: "12px",
                }}
                className="main-text-color-styles-customers"
              >
                Mode
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: "10px",
                  paddingRight: "22px",
                  paddingBottom: "18px",
                  fontWeight: "600",
                }}
                className="main-text-color-styles-customers"
              >
                {paymentMode}
              </td>
              <td
                style={{
                  fontSize: "10px",
                  paddingRight: "22px",
                  paddingBottom: "18px",
                  fontWeight: "600",
                }}
                className="main-text-color-styles-customers"
              >
                {moment.utc(date).format("ddd, DD/MM/YYYY")}
              </td>
              <td
                style={{
                  fontSize: "10px",
                  paddingBottom: "18px",
                  fontWeight: "600",
                }}
                className="main-text-color-styles-customers"
              >
                Walk-in
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: "10px",
                  paddingRight: "22px",
                  paddingBottom: "12px",
                }}
                className="main-text-color-styles-customers"
              >
                Invoice
              </td>
              <td
                style={{
                  fontSize: "10px",
                  paddingRight: "22px",
                  paddingBottom: "12px",
                }}
                className="main-text-color-styles-customers"
              >
                POS no.
              </td>
              <td
                style={{
                  fontSize: "10px",
                  paddingBottom: "12px",
                }}
                className="main-text-color-styles-customers"
              >
                User ID
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: "10px",
                  paddingRight: "22px",
                  fontWeight: "600",
                }}
                className="main-text-color-styles-customers"
              >
                # {invoiceNumber || "N/A"}
              </td>
              <td
                style={{
                  fontSize: "10px",
                  paddingRight: "22px",
                  fontWeight: "600",
                }}
                className="main-text-color-styles-customers"
              >
                {posUserId ? `${posUserId}` : ""}
                {/* {posUserId && posUserId?.insert(0, "#") || "N/A"} */}
              </td>
              <td
                style={{ fontSize: "10px", fontWeight: "600" }}
                className="main-text-color-styles-customers"
              >
                {strUserId ? strUserId : "N/A"}
              </td>
            </tr>
          </table>

          {hr}

          <div
            style={{
              padding: "0 24px",
            }}
          >
            {[
              { text: "Subtotal", amount: `${subtotal}` },
              {
                text: "Discount",
                amount: `${discount}`,
              },
              { text: "Shipping", amount: `${shipping}` },
              { text: "Tax", amount: `${tax}` },
              { text: "Total", amount: `${total}` },
            ].map(({ text, amount }) => (
              <div
                style={{
                  alignItems: "center",
                  padding: "8px 0px",
                }}
                className="flex-row-space-between"
              >
                <p
                  style={{
                    fontSize: text == "Total" ? "18px" : "12px",
                    width: "150px",
                  }}
                  className="main-text-color-styles-customers"
                >
                  {text}
                </p>
                <p
                  style={{
                    fontSize: text == "Total" ? "18px" : "12px",
                    ...(text == "Total" && {
                      width: "100px",
                      padding: "12px",
                      background: "#F5F6FC",
                      borderRadius: "30px",
                      textAlign: "center",
                    }),
                  }}
                  className="main-text-color-styles-customers"
                >
                  {formattedPrice(amount)}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              padding: "0 24px",
            }}
          >
            <Image src={jobrFullIcon} width={58.55} height={16.38} />
            <Image src={barcodeImg} width={240} height={22} />
          </div>
        </>
      )}
    </div>
  );
};

export default Invoice;
