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

const DatePickerCustomComponent = forwardRef(({ value, onClick }, ref) => (
  <p
    onClick={onClick}
    className="users-selected-date"
  >
    {value || "Date"}
  </p>
));

const PaginationHeader = () => {
  const [startDate, setStartDate] = useState();

  const options = [
    { value: "Area", label: "Area" },
    { value: "Place 2", label: "Place 2" },
    { value: "Place 3", label: "Place 3" },
  ];

  const paginationBts = (icon, imgClass) => (
    <div className="pagination-btn">
      <Image
        height={24}
        width={24}
        style={{ marginTop: "-1px" }}
        src={icon}
        className={imgClass}
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
      <div className="flex-row-space-between">
        <div
          style={{ gap: "16px" }}
          className="flex-row-space-between"
        >
          <div className="customer-calendar-cnt">
            <Image
              width={24}
              height={24}
              src={customerCalendar}
            />
            <ReactDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
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
                <Image
                  src={arrowDown}
                  width={24}
                  height={24}
                />
              ),
            }}
          />
        </div>
        <div
          style={{
            gap: "16px",
          }}
          className="flex-row-space-between"
        >
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
                { value: "50", label: "50" },
                { value: "49", label: "49" },
                { value: "48", label: "48" },
              ]}
              placeholder="50"
              classNamePrefix="react-select"
              className="react-select-container"
              styles={{
                option: reactSelectCustomStyles,
                placeholder: reactSelectCustomStyles,
              }}
              components={{
                DropdownIndicator: () => (
                  <Image
                    src={arrowDown}
                    width={24}
                    height={24}
                  />
                ),
              }}
            />
          </div>
          <div
            style={{ alignItems: "center", gap: "6px" }}
            className="flex-row-space-between"
          >
            {paginationBts(arrowIcon, "roate-180deg")}
            {paginationBts(arrowRightDouble, "roate-180deg")}
            <p className="pagination-numbers">1-20 of 1550</p>
            {paginationBts(arrowIcon)}
            {paginationBts(arrowRightDouble)}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default PaginationHeader;
