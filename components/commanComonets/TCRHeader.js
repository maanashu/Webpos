import React, { useState } from "react";
import { customerWallet } from "../../utilities/images";
import Image from "next/image";
import HeaderUtils from "./HeaderUtils";

// Transactions, Customers, Rewards header
const TCRHeader = ({ mainIcon, title, descrip, withTimeTabs = true }) => {
  const [selectedTimeSpan, setSelectedTimeSpan] = useState(1);

  const boldInDescrip = () => (
    <>
      ALl the following data is gathered{" "}
      <span
        style={{
          fontWeight: "600",
        }}
      >
        weekly
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
            {["Today", "Weekly", "Month", "Yearly"].map((el, idx) => (
              <p
                key={idx + "day-tabs"}
                onClick={() => setSelectedTimeSpan(idx)}
                className={`tab-item${
                  selectedTimeSpan == idx ? " selected-tab" : ""
                }`}
              >
                {el}
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
