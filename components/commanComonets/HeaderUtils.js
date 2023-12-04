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
      {[
        customerCalendar,
        customerNotification,
        customerSearch,
        customerScan,
      ]?.map((el, idx) => (
        <div
          key={idx + "extras"}
          className="extra-item flex-row-space-between"
          style={{
            backgroundColor: idx == "0" ? "#F5F6FC" : "transparent",
          }}
        >
          <Image width={24} height={24} src={el} objectFit="cover" />
        </div>
      ))}
    </div>
  );
};

export default HeaderUtils;
