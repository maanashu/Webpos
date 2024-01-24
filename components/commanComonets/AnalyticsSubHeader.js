import React from "react";
import Image from "next/image";

// Transactions, Customers, Rewards header
const AnalyticsSubHeader = ({ mainIcon, title }) => {

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
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSubHeader;
