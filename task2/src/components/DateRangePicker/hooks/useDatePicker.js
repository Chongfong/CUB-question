import { useState } from "react";
import { addMonths, subMonths } from "date-fns";

export const useDatePicker = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const handleDateClick = (day) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else if (day >= startDate) {
      setEndDate(day);
    } else {
      setStartDate(day);
      setEndDate(startDate);
    }
  };

  return { currentMonth, nextMonth, prevMonth, startDate, endDate, handleDateClick };
};
