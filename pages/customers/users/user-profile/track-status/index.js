import React from "react";
import GoogleMap from "../../../../../components/commanComonets/GoogleMap/GoogleMap";
import Invoice from "../../../../../components/commanComonets/Invoice";
import FlowDiagramOrderStatus from "../../../../../components/commanComonets/FlowDiagramOrderStatus";

const TrackStatus = () => {
  return (
    <>
      <GoogleMap></GoogleMap>
      <div style={{ position: "absolute", bottom: "15px" }}>
        <Invoice />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "15px",
          left: '50%'
        }}
      >
        <FlowDiagramOrderStatus />
      </div>
    </>
  );
};

export default TrackStatus;
