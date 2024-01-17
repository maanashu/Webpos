import Image from "next/image";
import React from "react";
import { PaginationFooter } from "../../../components/commanComonets/customers/PaginationFooter";

import { Chart as ChartJS, registerables } from "chart.js";

const SessionHistory = () => {
  ChartJS.register(...registerables);

  return (
    <div className="cashDrawOuter">
      <h6>Session History</h6>
      <div className="paginatePosition">
        <PaginationFooter />
      </div>
    </div>
  );
};

export default SessionHistory;
