// dateUtils.js

const getCurrentMonthDetails = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentMonth, 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentMonth + 1, 0);
  
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
      'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const monthName = monthNames[currentMonth];
    const year = currentDate.getFullYear();

    const dayOfMonth = String(firstDayOfMonth.getDate()).padStart(2, '0');
    const lastDay = String(lastDayOfMonth.getDate()).padStart(2, '0');
  
    return {
      startOfMonth: dayOfMonth,
      endOfMonth: lastDay,
      monthName: monthName,
      year: year
    };
  };
  
  export default getCurrentMonthDetails;