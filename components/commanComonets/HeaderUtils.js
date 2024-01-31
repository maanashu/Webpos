import Image from "next/image";
import React from "react";
import {
  customerCalendar,
  customerNotification,
  customerScan,
  customerSearch,
} from "../../utilities/images";

const HeaderUtils = () => {
  return (
    <div className="extras flex-row-space-between">
      <div
        className="extra-item flex-row-space-between"
        style={{
          backgroundColor: "#F5F6FC",
        }}
      >
        <Image
          width={24}
          height={24}
          src={customerCalendar}
          objectFit="cover"
        />
      </div>
      <div
        className="extra-item flex-row-space-between"
        style={{
          backgroundColor: "transparent",
        }}
      >
        <Image
          width={24}
          height={24}
          src={customerNotification}
          objectFit="cover"
        />
      </div>
      
      <div
        className="extra-item flex-row-space-between"
        style={{
          backgroundColor: "transparent",
        }}
      >
        <Image
          width={24}
          height={24}
          src={customerSearch}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default HeaderUtils;
