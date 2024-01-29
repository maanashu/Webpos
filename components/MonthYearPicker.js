import { useState } from "react";
import moment from "moment-timezone";
import ReactSelect from "react-select";
import { arrowDown } from "../utilities/images";

import Image from "next/image";

export const DATE_TYPE = {
  MONTH: "MONTH",
  YEAR: "YEAR",
};

const MonthYearPicker = ({
  placeholder,
  //   containerStyle,
  dropdownStyle,
  dateType,
  onSelect,
  defaultValue = null,
  defaultYear = null,
  showAllMonths = false,
}) => {
  console.log(dateType);
  const currentYear = moment().year();
  const years = Array.from({ length: 10 }, (_, index) => currentYear + index);
  const yearsData = years.map((year) => ({
    label: year.toString(),
    value: year,
  }));

  const monthsData = [
    { label: "January", value: 1 },
    { label: "February", value: 2 },
    { label: "March", value: 3 },
    { label: "April", value: 4 },
    { label: "May", value: 5 },
    { label: "June", value: 6 },
    { label: "July", value: 7 },
    { label: "August", value: 8 },
    { label: "September", value: 9 },
    { label: "October", value: 10 },
    { label: "November", value: 11 },
    { label: "December", value: 12 },
  ];

  if (dateType === DATE_TYPE.MONTH && defaultYear === currentYear) {
    const currentMonth = moment().month() + 1;
    if (showAllMonths) {
      monthsData.splice(currentMonth, monthsData.length - currentMonth);
    } else {
      monthsData.splice(0, currentMonth - 1);
    }
  }

  const [value, setValue] = useState(defaultValue);
  const [isFocus, setIsFocus] = useState(false);
  const reactSelectCustomStyles = (defaultStyles) => ({
    ...defaultStyles,
    color: "#263682",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  });
  return (
    <ReactSelect
      options={dateType === DATE_TYPE.YEAR ? yearsData : monthsData}
      placeholder={placeholder}
      classNamePrefix="react-select"
      className="react-select-container"
      styles={{
        option: reactSelectCustomStyles,
        placeholder: reactSelectCustomStyles,
      }}
      onChange={(item) => {
        onSelect(item);
        setValue(item.value);
        setIsFocus(false);
      }}
      defaultInputValue={value}
      defaultValue={value}
      //   value={value}
      //   defaultValue={defaultValue}
      components={{
        DropdownIndicator: () => (
          <Image src={arrowDown} width={24} height={24} alt="dropdown" />
        ),
      }}
    />
    // <View style={containerStyle}>
    //   <Dropdown
    //     style={[
    //       styles.dropdown,
    //       dropdownStyle,
    //       isFocus && { borderColor: "blue" },
    //     ]}
    //     placeholderStyle={styles.placeholderStyle}
    //     selectedTextStyle={styles.selectedTextStyle}
    //     inputSearchStyle={styles.inputSearchStyle}
    //     itemTextStyle={styles.itemTextStyle}
    //     iconStyle={styles.iconStyle}
    //     data={dateType === DATE_TYPE.YEAR ? yearsData : monthsData}
    //     maxHeight={300}
    //     labelField="label"
    //     valueField="value"
    //     placeholder={placeholder ?? "Select Item"}
    //     searchPlaceholder="Search..."
    //     value={value}
    //     onFocus={() => setIsFocus(true)}
    //     onBlur={() => setIsFocus(false)}
    //     onChange={(item) => {
    //       onSelect(item);
    //       setValue(item.value);
    //       setIsFocus(false);
    //     }}
    //     renderLeftIcon={() => {
    //       return <Image source={calendar} style={styles.calendarStyle} />;
    //     }}
    //   />
    // </View>
  );
};

export default MonthYearPicker;
