import React from "react";
import Image from "next/image";
import { orderStatusExpand } from "../../utilities/images";

const ExpandOrderFlowBtn = ({ isExpanded, setIsExpanded }) => {
  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className="customers-order-status-expand-btn"
    >
      <Image src={orderStatusExpand} />
    </div>
  );
};

export default ExpandOrderFlowBtn;
