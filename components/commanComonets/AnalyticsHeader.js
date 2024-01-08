import React, { forwardRef, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import ReactSelect from "react-select";
import {
    arrowDown
  } from "../../utilities/images";
  import Image from "next/image";
// Transactions, Customers, Rewards header

const DatePickerCustomComponent = forwardRef(({ value, onClick }, ref) => (
    <p
        onClick={onClick}
        className="users-selected-date"
    >
        {value || "Date"}
    </p>
));
const AnalyticsHeader = ({ startDate, endDate, onDateChange, channelSelected, setStartDate, setEndDate, onChannelChange, withTimeTabs = true, onTimeSpanSelect, timeSpan }) => {

    const TIME_SPANS = [
        { value: "today", label: "Today" },
        { value: "week", label: "Weekly" },
        { value: "month", label: "Monthly" },
        { value: "year", label: "Yearly" },
    ]

    const options = [
        { value: "all", label: "All Channels" },
        { value: "pos", label: "Pos" },
        { value: "b2c", label: "B2C" },
        { value: "b2b", label: "B2B" }
    ];
    const reactSelectCustomStyles = (defaultStyles) => ({
        ...defaultStyles,
        color: "#263682",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
      });

    return (
        <div className="cust-header flex-row-space-between">
            <div className="">
                {withTimeTabs && (
                    <div className="day-tabs flex-row-space-between">
                        {TIME_SPANS.map((el, idx) => (
                            <p
                                key={idx + "day-tabs"}
                                onClick={() => {onTimeSpanSelect(el.value); setStartDate(null); setEndDate(null);}}
                                className={`tab-item${timeSpan == el.value ? " selected-tab" : ""
                                    }`}
                            >
                                {el.label}
                            </p>
                        ))}
                    </div>
                )}
            </div>
            <div
                style={{ gap: "16px" }}
                className="flex-row-space-between"
            >
                <div className="customer-calendar-cnt">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                    <ReactDatePicker
                        selected={startDate}
                        onChange={onDateChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        customInput={<DatePickerCustomComponent />}
                    />
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </div>
            </div>

            <ReactSelect
                options={options}
                defaultValue={channelSelected}
                value={channelSelected}
                placeholder="Channels"
                classNamePrefix="react-select"
                className="react-select-container"
                styles={{
                    option: reactSelectCustomStyles,
                    placeholder: reactSelectCustomStyles,
                }}
                onChange={onChannelChange}
                components={{
                    DropdownIndicator: () => (
                        <Image
                            src={arrowDown}
                            width={24}
                            height={24}
                            alt="drop_icon"
                        />
                    ),
                }}
            />

        </div>
    );
};

export default AnalyticsHeader;