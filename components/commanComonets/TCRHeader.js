import React, { useEffect, useState } from "react";
import { customerWallet } from "../../utilities/images";
import Image from "next/image";
import HeaderUtils from "./HeaderUtils";

// Transactions, Customers, Rewards header
const TCRHeader = ({
  mainIcon,
  title,
  descrip,
  withTimeTabs = true,
  onTimeSpanSelect,
  timeSpan,
}) => {

  const TIME_SPANS = [
    { value: "today", label: "Today" },
    { value: "week", label: "Weekly" },
    { value: "month", label: "Monthly" },
    { value: "year", label: "Yearly" },
  ];

  const boldInDescrip = () => (
    <>
      All the following data is gathered{" "}
      <span
        style={{
          fontWeight: "600",
        }}
      >
        {TIME_SPANS.filter((el) => el.value == timeSpan)[0].label}
      </span>
    </>
  );

  return (
    <div className="cust-header flex-row-space-between">
      <div className="right-hand flex-row-space-between">
        <Image
          src={mainIcon}
          width={24}
          height={24}
          style={{ marginTop: "3px" }}
        />
        <div style={{ marginLeft: "6px" }}>
          <h2 className="header-title">{title}</h2>
          <p className="header-descrip">
            {!descrip ? boldInDescrip() : descrip}
          </p>
        </div>
      </div>
      <div className="left-hand flex-row-space-between">
        {withTimeTabs && (
          <div className="day-tabs flex-row-space-between">
            {TIME_SPANS.map((el, idx) => (
              <p
                key={idx + "day-tabs"}
                onClick={() => onTimeSpanSelect(el.value)}
                className={`tab-item${
                  timeSpan == el.value ? " selected-tab" : ""
                }`}
              >
                {el.label}
              </p>
            ))}
          </div>
        )}
        <HeaderUtils />
      </div>
    </div>
  );
};

export default TCRHeader;
