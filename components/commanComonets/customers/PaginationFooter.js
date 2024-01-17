import Image from "next/image";
import React from "react";
import { ArrowLeft, ArrowRight , paginationRight} from "../../../utilities/images";

export const PaginationFooter = () => {
  return (
    <div className="paginationMain">
      <div className="paginateFlex active">
        <Image src={ArrowLeft} className="paginationArrowImg" alt="ArrowLeft image" />
        <h4 className="prevText"> Prev</h4>
      </div> 
      <h4 className="settingSub"> Page 1 to 8 </h4>
      <div className="paginateFlex">
        <h4 className="prevText">Next</h4>
        <Image src={paginationRight} className="paginationArrowImg" />
      </div>
    </div>
  );
};
