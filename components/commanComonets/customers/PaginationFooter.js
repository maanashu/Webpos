import Image from "next/image";
import React from "react";
import {
  arrowIcon,
  arrowRightDouble
} from "../../../utilities/images";

const PaginationFooter = (props) => {

  const startEntry = 1 + (props.limit * (props.page - 1));
  const endEntry = Math.min(props.limit * props.page, props.totalItems);

  const paginationBts = (icon, imgClass, increment, isDisabled) => (
    <div
      className={`pagination-btn ${isDisabled ? "disable-element" : ""}`}
      onClick={() => {
        if (increment) {
          props.setPage(props.page + 1);
        } else {
          props.setPage(props.page - 1);
        }
      }}
    >
      <Image
        src={icon}
        width={24}
        height={24}
        className={imgClass}
        style={{ marginTop: "-1px" }}
      />
    </div>
  );
  
  return (
    <div className="users-pagination-header">
      <div className="flex-row-space-between">
        <div
          style={{
            gap: "16px",
          }}
          className="flex-row-space-between"
        >
          <div
            style={{ alignItems: "center", gap: "6px" }}
            className="flex-row-space-between"
          >
            {paginationBts(arrowRightDouble, "roate-180deg", null, props.page <= 1)}
            {paginationBts(arrowIcon, "roate-180deg", null, props.page <= 1)}
            <p className="pagination-numbers">
              {/* 1-{props.totalItems < Number(props.limit) ? props.totalItems : props.limit * props.page} of{" "}
              {props.totalItems} */}
              Showing { startEntry } to { endEntry } of {props.totalItems} entries
            </p>
            {paginationBts(arrowIcon, null, true, props.totalItems <= (props.limit * props.page))}
            {paginationBts(arrowRightDouble, null, true, props.totalItems <= (props.limit * props.page))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginationFooter;


// Component Backup

// import Image from "next/image";
// import React from "react";
// import { ArrowLeft, ArrowRight , paginationRight} from "../../../utilities/images";

// export const PaginationFooter = () => {
//   return (
//     <div className="paginationMain">
//       <div className="paginateFlex active">
//         <Image src={ArrowLeft} className="paginationArrowImg" alt="ArrowLeft image" />
//         <h4 className="prevText"> Prev</h4>
//       </div> 
//       <h4 className="settingSub"> Page 1 to 8 </h4>
//       <div className="paginateFlex">
//         <h4 className="prevText">Next</h4>
//         <Image src={paginationRight} className="paginationArrowImg" />
//       </div>
//     </div>
//   );
// };

