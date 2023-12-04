import React, { useState } from "react";
import Image from "next/image";
import { customerNotification } from "../../../utilities/images";
//Cash Drawer Header
const Header = ({ mainIcon, title }) => {
  return (
    <div className="cust-header flex-row-space-between">
      <div className="left-hand flex-row-space-between">
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
      <div className="right-hand flex-row-space-between">
        <Image
          src={customerNotification}
          width={30}
          height={30}
          style={{ marginTop: "3px" }}
        />
        <div className="searchBox">
          <p className="header-descrip">Search</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
