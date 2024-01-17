import Image from "next/image";
import React from "react";

import { Chart as ChartJS, registerables } from "chart.js";

const SessionHistory = () => {
  ChartJS.register(...registerables);

  return (
    <div className="main-container-customers ">
      <h6>Session History</h6>
    </div>
  );
};

export default SessionHistory;
