import { useState } from "react";
import { addMonths, subMonths } from "date-fns";

export const useDatePicker = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const handleDateClick = (day: Date) => {
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

  return {
    currentMonth,
    nextMonth,
    prevMonth,
    startDate,
    endDate,
    handleDateClick,
  };
};
