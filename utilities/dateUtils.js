// dateUtils.js

const getCurrentMonthDetails = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentMonth, 1);
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentMonth + 1,
    0
  );

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = monthNames[currentMonth];
  const year = currentDate.getFullYear();

  const dayOfMonth = String(firstDayOfMonth.getDate()).padStart(2, "0");
  const lastDay = String(lastDayOfMonth.getDate()).padStart(2, "0");

  return {
    startOfMonth: dayOfMonth,
    endOfMonth: lastDay,
    monthName: monthName,
    year: year,
  };
};

export default getCurrentMonthDetails;

export const months = [
  { label: "January", value: "january" },
  { label: "February", value: "february" },
  { label: "March", value: "march" },
  { label: "April", value: "april" },
  { label: "May", value: "may" },
  { label: "June", value: "june" },
  { label: "July", value: "july" },
  { label: "August", value: "august" },
  { label: "September", value: "september" },
  { label: "October", value: "october" },
  { label: "November", value: "november" },
  { label: "December", value: "december" },
];
