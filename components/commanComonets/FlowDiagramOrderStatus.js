import Image from "next/image";
import React from "react";
import { orderBike } from "../../utilities/images";

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
      <div>
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
        ].map((el) => (
          <div>
            <div className="status-dots-container-customers">
            </div>
            <div>
              <p>{el.status}</p>
              <p>{el.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowDiagramOrderStatus;
