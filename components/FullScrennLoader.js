import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import * as Images from "../utilities/images";
import Image from "next/image";

const FullScrennLoader = () => {
  return (
    <div
      style={{
        // zIndex: 999,
        background: "rgba(0,0,0, 0.3)",
        position: "absolute",
        alignSelf: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <span
        className="spinner-border spinner-border-xl mx-1"
        style={{ color: "#fff" }}
      ></span>
    </div>
  );
};

export default FullScrennLoader;
