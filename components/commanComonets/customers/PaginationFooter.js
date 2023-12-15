import Image from "next/image";
import React from "react";
import { ArrowLeft, ArrowRight } from "../../../utilities/images";

export const PaginationFooter = () => {
  return (
    <div className="pagination-footer flex-row-space-between">
      <div className="flex-row-space-between">
        <Image
          src={ArrowLeft}
          width={16}
          height={16}
        />
        <p
          style={{
            color: "#B4BEEB",
          }}
          className="pagination-footer-text"
        >
          Prev
        </p>
      </div>

      <p
        style={{
          color: "#B4BEEB",
        }}
        className="pagination-footer-text"
      >
        Page 1 to 8
      </p>
      <div className="flex-row-space-between">
        <p className="pagination-footer-text">Next</p>
        <Image
          src={ArrowRight}
          width={16}
          height={16}
        />
      </div>
    </div>
  );
};
