import Image from "next/image";
import React from "react";
import {
  dotAssignDriver,
  dotOrderAccepted,
  dotOrderDelivered,
  dotOrderPickup,
  orderBike,
  packageBoxPurplish,
} from "../../utilities/images";

const FlowDiagramOrderStatus = () => {
  return (
    <div
      style={{
        padding: "16px 24px",
        backgroundColor: "#fff",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Image src={orderBike} />
        <p
          style={{ fontSize: "18px" }}
          className="main-text-color-styles-customers"
        >
          Order Status
        </p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "13px",
        }}
      >
        <div
          style={{
            gap: "10px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {[
            dotAssignDriver,
            dotOrderDelivered,
            dotOrderPickup,
            dotAssignDriver,
            dotOrderDelivered,
            dotOrderAccepted,
          ].map((el, idx) => (
            <>
              <Image
                src={el}
                style={{ borderRadius: "50%" }}
              />
              {idx !== 5 && (
                <div
                  style={{
                    width: "1px",
                    height: "20px",
                    background: "#636E9F",
                  }}
                />
              )}
            </>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "22px",
          }}
        >
          {[
            { status: "Verify Code", time: "7893 5623" },
            { status: "Delivered", time: "Within 10 mintues" },
            {
              status: "Product Pickup",
              time: "Within 10 mintues",
              id: "JOBR-3432",
            },
            { status: "Assign Driver", time: "21 Jun, 2022 | 10:02 am" },
            { status: "Ready to Pickup", time: "21 Jun, 2022 | 12:09 am" },
            {
              status: "Order Accepted",
              time: "21 Jun, 2022 | 02:10 am",
              backgroundColor: "rgba(240, 12, 6, 1)",
            },
          ].map((el, idx) => (
            <div
              style={{
                display: "flex",
                gap: "13px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "3px",
                }}
              >
                <p
                  className="main-text-color-styles-customers"
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                  }}
                >
                  {el.status}
                </p>
                <p
                  style={{
                    color: idx == 0 ? "#58C2E8" : "#7e8ac1",
                    fontSize: "12px",
                    fontWeight: idx == 0 ? "600" : "400",
                  }}
                >
                  {el.time}
                </p>
              </div>
              {el?.id && (
                <div className="flex-row-space-between order-status-pickup-customer">
                  <Image src={packageBoxPurplish} />
                  <p
                    className="main-text-color-styles-customers"
                    style={{
                      color: "#7233C2",
                      fontSize: "12px",
                    }}
                  >
                    {el?.id}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlowDiagramOrderStatus;
