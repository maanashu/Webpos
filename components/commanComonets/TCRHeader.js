import React, { useEffect, useState } from "react";
import { customerWallet } from "../../utilities/images";
import Image from "next/image";
import HeaderUtils from "./HeaderUtils";
import moment from "moment-timezone";

// Transactions, Customers, Rewards header
const TCRHeader = ({
  mainIcon,
  title,
  descrip,
  withTimeTabs = true,
  onTimeSpanSelect,
  timeSpan,
  calendarHandler,
  notificationHandler,
  searchHandler,
  onDateChange,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  const TIME_SPANS = [
    { value: "today", label: "Today", id: 1 },
    { value: "week", label: "Weekly", id: 2 },
    { value: "month", label: "Monthly", id: 3 },
    { value: "year", label: "Yearly", id: 4 },
  ];

  const startDated = moment(startDate).format("YYYY-MM-DD");
  const endDated = moment(endDate).format("YYYY-MM-DD");

  const boldInDescrip = () => (
    <>
      All the following data is gathered{" "}
      <span
        style={{
          fontWeight: "600",
        }}
      >
        {timeSpan
          ? TIME_SPANS?.filter((el) => el?.value == timeSpan)[0]?.label
          : `${startDated} - ${endDated}`}
      </span>
    </>
  );

  return (
    <div className="customerHeader">
      <div className="row">
        <div className="col-xl-4 col-lg-5">
          <div className="customerHeadLeft">
            <div className="custmrInnrLeft">
              <Image
                src={mainIcon}
                width={24}
                height={24}
                style={{ marginTop: "3px" }}
              />
              <div style={{ marginLeft: "6px" }}>
                <h2 className="appointMain">{title}</h2>
                <p className="header-descrip">
                  {!descrip ? boldInDescrip() : descrip}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-7">
          <div className="customerHeadRight">
            <div className="left-hand flexDiv">
              {withTimeTabs && (
                <div className="day-tabs flex-row-space-between">
                  {TIME_SPANS.map((el, idx) => (
                    <p
                      key={idx + "day-tabs"}
                      onClick={() => {
                        onTimeSpanSelect(el.value);
                        setStartDate(null);
                        setEndDate(null);
                      }}
                      className={`tab-item${
                        timeSpan == el.value ? " selected-tab" : ""
                      }`}
                    >
                      {el.label}
                    </p>
                  ))}
                </div>
              )}
              <HeaderUtils
                calendarHandler={calendarHandler}
                searchHandler={searchHandler}
                notificationHandler={notificationHandler}
                onDateChange={onDateChange}
                startDate={startDate}
                endDate={endDate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TCRHeader;
