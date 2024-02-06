import Image from "next/image";
import React, { forwardRef } from "react";
import {
  customerCalendar,
  customerNotification,
  customerScan,
  customerSearch,
  selectedCalendar,
} from "../../utilities/images";
import ReactDatePicker from "react-datepicker";
import moment from "moment-timezone";

const DatePickerCustomComponent = forwardRef(({ value, onClick }, ref) => (
  // <p onClick={onClick} className="users-selected-date">
  //   {value || "Date"}
  // </p>
  <Image
    className="users-selected-date"
    onClick={onClick}
    width={24}
    height={24}
    src={value ? selectedCalendar : customerCalendar}
    objectFit="cover"
  />
));

const HeaderUtils = ({
  calendarHandler,
  notificationHandler,
  searchHandler,
  startDate,
  endDate,
  onDateChange,
}) => {
  return (
    <div className="extras flex-row-space-between">
      <div
        className="extra-item flex-row-space-between"
        style={{
          backgroundColor: startDate && endDate ? "#263682" : "#F5F6FC",
        }}
        onClick={calendarHandler}
      >
        <ReactDatePicker
          selected={startDate}
          onChange={onDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          customInput={<DatePickerCustomComponent />}
        />
      </div>
      <div
        className="extra-item flex-row-space-between"
        style={{
          backgroundColor: "transparent",
        }}
        onClick={notificationHandler}
      >
        <Image
          width={24}
          height={24}
          src={customerNotification}
          objectFit="cover"
        />
      </div>

      <div
        className="extra-item flex-row-space-between"
        style={{
          backgroundColor: "transparent",
        }}
        onClick={searchHandler}
      >
        <Image width={24} height={24} src={customerSearch} objectFit="cover" />
      </div>
    </div>
  );
};

export default HeaderUtils;
