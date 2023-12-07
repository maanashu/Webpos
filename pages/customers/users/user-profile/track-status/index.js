import React from "react";
import GoogleMap from "../../../../../components/commanComonets/GoogleMap/GoogleMap";
import Invoice from "../../../../../components/commanComonets/Invoice";
import FlowDiagramOrderStatus from "../../../../../components/commanComonets/FlowDiagramOrderStatus";

const TrackStatus = () => {
  return (
    <>
      <GoogleMap></GoogleMap>
      <div
        style={{
        }}
      >
        <Invoice />
      </div>
      <FlowDiagramOrderStatus />
    </>
  );
};

export default TrackStatus;
