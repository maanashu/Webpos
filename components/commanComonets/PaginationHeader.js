import React, { forwardRef, useState } from "react";
import {
  arrowDown,
  arrowIcon,
  arrowRightDouble,
  customerCalendar,
} from "../../utilities/images";
import Image from "next/image";
import ReactDatePicker from "react-datepicker";
import ReactSelect from "react-select";
import moment from "moment-timezone";
import { months, orderTypeArray } from "../../utilities/dateUtils";

const DatePickerCustomComponent = forwardRef(({ value, onClick }, ref) => (
  <p onClick={onClick} className="users-selected-date">
    {value || "Date"}
  </p>
));

const PaginationHeader = ({
  page,
  limit,
  setPage,
  setLimit,
  startDate,
  totalItems,
  onDateChange,
  date,
  data,
  option,
  options,
  setSelected,
  month,
  setMonthSelect,
  setStoreSelected,
  storeLocationsData,
  orderType,
  setOrderTypeData,
}) => {
  const startIndex = (page - 1) * parseInt(limit, 10) + 1;
  const endIdx = data
    ? Math.min(startIndex + parseInt(data?.length, 10) - 1, totalItems)
    : 0;

  const ordertypeSelection = (value) => setOrderTypeData(value);

  const monthSelection = (value) => setMonthSelect(value);

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
  };
  const handleLocationChange = (selectedOption) => {
    setStoreSelected(selectedOption);
  };

  const paginationBts = (icon, imgClass, increment, isDisabled) => (
    <div
      className={`pagination-btn ${
        isDisabled || data?.length == 0 ? "disable-element" : ""
      }`}
      onClick={() => {
        if (increment) {
          setPage(page + 1);
        } else {
          setPage(page - 1);
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

  const reactSelectCustomStyles = (defaultStyles) => ({
    ...defaultStyles,
    color: "#263682",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  });

  return (
    <div className="users-pagination-header">
      <div className="flex-row-space-between paginateTop">
        {option ? (
          <>
            <div style={{ gap: "16px" }} className="flex-row-space-between">
              <div className="customer-calendar-cnt">
                <Image width={24} height={24} src={customerCalendar} />
                <ReactDatePicker
                  selected={date ? moment(`${date}T00:00:00`)?.toDate() : ""}
                  onChange={(date) => onDateChange(date)}
                  customInput={<DatePickerCustomComponent />}
                />
                <Image src={arrowDown} />
              </div>
              <ReactSelect
                options={options}
                placeholder="Area"
                classNamePrefix="react-select"
                className="react-select-container"
                styles={{
                  option: reactSelectCustomStyles,
                  placeholder: reactSelectCustomStyles,
                }}
                components={{
                  DropdownIndicator: () => (
                    <Image src={arrowDown} width={24} height={24} />
                  ),
                }}
                onChange={handleChange}
              />
            </div>
          </>
        ) : (
          <></>
        )}

        {month ? (
          <>
            <div style={{ gap: "16px" }} className="flex-row-space-between">
              {/* <div className="customer-calendar-cnt"> */}
              <ReactSelect
                options={months}
                placeholder="Month"
                classNamePrefix="react-select"
                className="react-select-container"
                styles={{
                  option: reactSelectCustomStyles,
                  placeholder: reactSelectCustomStyles,
                }}
                components={{
                  DropdownIndicator: () => (
                    <Image src={arrowDown} width={24} height={24} />
                  ),
                }}
                onChange={monthSelection}
              />
              {/* </div> */}
              <ReactSelect
                options={storeLocationsData}
                placeholder="Store Location"
                classNamePrefix="react-select"
                className="react-select-container"
                styles={{
                  option: reactSelectCustomStyles,
                  placeholder: reactSelectCustomStyles,
                }}
                components={{
                  DropdownIndicator: () => (
                    <Image src={arrowDown} width={24} height={24} />
                  ),
                }}
                onChange={handleLocationChange}
              />
            </div>
          </>
        ) : (
          <></>
        )}
        <div
          style={{
            gap: "16px",
          }}
          className="flex-row-space-between paginateTop"
        >
          {orderType ? (
            <ReactSelect
              options={orderTypeArray}
              placeholder="Order Type"
              classNamePrefix="react-select"
              className="react-select-container"
              styles={{
                option: reactSelectCustomStyles,
                placeholder: reactSelectCustomStyles,
              }}
              components={{
                DropdownIndicator: () => (
                  <Image src={arrowDown} width={24} height={24} />
                ),
              }}
              onChange={ordertypeSelection}
            />
          ) : (
            <></>
          )}
          <div
            style={{
              alignItems: "center",
              gap: "12px",
            }}
            className="flex-row-space-between"
          >
            <p className="users-showing-results">Showing results</p>
            <ReactSelect
              options={[
                { value: "10", label: "10" },
                { value: "15", label: "15" },
                { value: "20", label: "20" },
                { value: "25", label: "25" },
              ]}
              onChange={(e) => setLimit(e.value)}
              placeholder={limit}
              defaultValue={limit}
              classNamePrefix="react-select"
              className="react-select-container"
              styles={{
                option: reactSelectCustomStyles,
                placeholder: reactSelectCustomStyles,
              }}
              components={{
                DropdownIndicator: () => (
                  <Image src={arrowDown} width={24} height={24} />
                ),
              }}
            />
          </div>
          <div
            style={{ alignItems: "center", gap: "6px" }}
            className="flex-row-space-between"
          >
            {paginationBts(arrowRightDouble, "roate-180deg", null, page <= 1)}
            {paginationBts(arrowIcon, "roate-180deg", null, page <= 1)}
            <p className="pagination-numbers">
              {endIdx > 0
                ? `${startIndex}-${endIdx} of ${totalItems}`
                : "0 of 0"}
            </p>
            {paginationBts(arrowIcon, null, true, totalItems <= endIdx)}
            {paginationBts(arrowRightDouble, null, true, totalItems <= endIdx)}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default PaginationHeader;
