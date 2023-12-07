import Image from "next/image";
import React from "react";
import { barCodeScanImg, jobrFullIcon } from "../../utilities/images";

const Invoice = () => {
  const hr = <div className="invoice-dotted-hr" />;

  return (
    <div className="flex-row-space-between invoice-container">
      <div className="invoice-header">
        <p className="main-text-color-styles-customers">Maple Inc.</p>
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
              fontWeight: "500",
            }}
            className="main-text-color-styles-customers"
          >
            500 Rideau St. Ottawa, ON 5Z2 K1L
          </p>
          <p
            style={{
              fontSize: "10px",
              fontWeight: "500",
            }}
            className="main-text-color-styles-customers"
          >
            +1 (438) 459-0226
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
        {[1, 2, 3, 4].map((el) => (
          <li className="invoice-list-item-customer flex-row-space-between">
            <p
              className="main-text-color-styles-customers"
              style={{
                fontSize: "10px",
                fontWeight: "400",
              }}
            >
              1 X
            </p>
            <div>
              <p
                className="main-text-color-styles-customers"
                style={{
                  fontSize: "10px",
                  fontWeight: "600",
                }}
              >
                Lightweight Stylish Casual Daypack
              </p>
              <p
                className="main-text-color-styles-customers"
                style={{
                  fontSize: "10px",
                  fontWeight: "400",
                }}
              >
                Yellow / M
              </p>
            </div>
            <p
              className="main-text-color-styles-customers"
              style={{
                fontSize: "10px",
                fontWeight: "400",
              }}
            >
              $90.00
            </p>
          </li>
        ))}
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
              fontWeight: "500",
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
              fontWeight: "500",
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
              fontWeight: "500",
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
            }}
            className="main-text-color-styles-customers"
          >
            Cash
          </td>
          <td
            style={{
              fontSize: "10px",
              paddingRight: "22px",
              paddingBottom: "18px",
            }}
            className="main-text-color-styles-customers"
          >
            Wed 10/05/2023
          </td>
          <td
            style={{ fontSize: "10px", paddingBottom: "18px" }}
            className="main-text-color-styles-customers"
          >
            Walk-in
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontSize: "10px",
              fontWeight: "500",
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
              fontWeight: "500",
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
              fontWeight: "500",
              paddingBottom: "12px",
            }}
            className="main-text-color-styles-customers"
          >
            User UD
          </td>
        </tr>
        <tr>
          <td
            style={{ fontSize: "10px", paddingRight: "22px" }}
            className="main-text-color-styles-customers"
          >
            # 9845-1234
          </td>
          <td
            style={{ fontSize: "10px", paddingRight: "22px" }}
            className="main-text-color-styles-customers"
          >
            # Front-CCO43
          </td>
          <td
            style={{ fontSize: "10px" }}
            className="main-text-color-styles-customers"
          >
            ***31
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
          { text: "Subtotal", amount: "$940" },
          { text: "Discount", amount: "15 % ($ 13.40)" },
          { text: "Shipping", amount: "$29.00" },
          { text: "Total", amount: "$340.34" },
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
                fontWeight: "500",
                fontSize: text == "Total" ? "18px" : "12px",
                width: "150px",
              }}
              className="main-text-color-styles-customers"
            >
              {text}
            </p>
            <p
              style={{
                fontWeight: "500",
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
              {amount}
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
        <Image
          src={jobrFullIcon}
          width={58.55}
          height={16.38}
        />
        <Image
          src={barCodeScanImg}
          width={240}
          height={22}
        />
      </div>
    </div>
  );
};

export default Invoice;
