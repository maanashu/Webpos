import React, { useState } from "react";
import Image from "next/image";
import { customerNotification ,customerSearch } from "../../../utilities/images";
//Cash Drawer Header
const Header = ({ mainIcon, title }) => {
  return (
    <div className="cashDrawHead">
      <div className="row">
        <div className="col-lg-6">
          <div className="leftCashHead">
            <Image src={mainIcon} className="img-fluid" alt="mainIcon Image" />
            <h2 className="appointMain">{title}</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="rightCashHead">
            <Image src={customerNotification} className="img-fluid" alt="customerNotification Image" />
            <form className="cashHeadForm w-100">
              <div className="cashSearch">
                <input type="text" className="cashSearchBX form-control" placeholder="Search here" />
                <Image src={customerSearch} className="img-fluid cashSearchImg" alt="customerNotification Image" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
