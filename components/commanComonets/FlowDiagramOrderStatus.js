import React from "react";
import Image from "next/image";
import {
  orderBike,
  greyedRadio,
  packageBoxPurplish,
} from "../../utilities/images";
import {
  orderStatusCode,
  ORDER_STATUS_FLOW_ICONS,
} from "../../constants/commonConstants";

const FlowDiagramOrderStatus = ({
  sellerOTP,
  isExpanded,
  orderStatus,
  deliveryOTP,
  deliveryOTPVerified,
}) => {
  const orderStatusFlowData = [
    { status: "Verify Code", time: deliveryOTP },
    {
      status: "Delivered",
      time: "Within 10 mintues",
      code: orderStatusCode.DELIVERED,
    },
    {
      status: "Product Pickup",
      time: "Within 10 mintues",
      id: `JOBR-${sellerOTP}`,
      code: orderStatusCode.PICKED_UP,
    },
    {
      status: "Assign Driver",
      time: "21 Jun, 2022 | 10:02 am",
      code: orderStatusCode.DRIVER_ASSIGNED,
    },
    {
      status: "Ready to Pickup",
      time: "21 Jun, 2022 | 12:09 am",
      code: orderStatusCode.READY_TO_PICKUP,
    },
    {
      status: "Order Accepted",
      time: "21 Jun, 2022 | 02:10 am",
      code: orderStatusCode.ACCEPTED,
    },
  ];

  const filterOrderStatusData = (data) =>
    data?.filter((el) => {
      if (!isExpanded) {
        if (el?.code && el.code == orderStatus) {
          return el;
        }
      } else {
        return el;
      }
    });

  const filteredStatusFlowLine = filterOrderStatusData(
    ORDER_STATUS_FLOW_ICONS.map((el, idx) =>
      el.code <= orderStatus ||
      (idx == 0 && deliveryOTPVerified) ||
      (idx == ORDER_STATUS_FLOW_ICONS?.length - 1 && orderStatus == "0")
        ? el
        : { icon: greyedRadio, w: 20, h: 20 }
    )
  );

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
            gap: "7px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {filteredStatusFlowLine?.map((el, idx) => (
            <>
              <div style={{ flexBasis: "30px" }}>
                <Image
                  src={el.icon}
                  width={el.w}
                  height={el.h}
                  style={{ borderRadius: "50%" }}
                />
              </div>
              {idx !== filteredStatusFlowLine.length - 1 && (
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
          {filterOrderStatusData(orderStatusFlowData)
            ?.filter((el) => {
              if (!isExpanded) {
                if (el?.code && el.code == orderStatus) {
                  return el;
                }
              } else {
                return el;
              }
            })
            ?.map((el, idx) => (
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
                      color: !el.code ? "#58C2E8" : "#7e8ac1",
                      fontSize: "12px",
                      fontWeight: idx == 0 ? "600" : "400",
                    }}
                  >
                    {el.time}
                  </p>
                </div>
                <div
                  style={{ visibility: el?.id ? "visible" : "hidden" }}
                  className="flex-row-space-between order-status-pickup-customer"
                >
                  <Image src={packageBoxPurplish} />
                  <p
                    className="main-text-color-styles-customers"
                    style={{
                      color: "#7233C2",
                      fontSize: "12px",
                    }}
                  >
                    {el?.id || "JOBR-1234"}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FlowDiagramOrderStatus;
