import React, { useState } from "react";
import { addMonths, subMonths } from "date-fns";
import CalendarHeader from "./CalendarHeader";
import CalendarCells from "./CalendarCells";
import "./DateRangePicker.css";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

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

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  return (
    <div className="calendar">
      <CalendarHeader
        currentMonth={currentMonth}
        onPrevMonth={prevMonth}
        onNextMonth={nextMonth}
      />
      <CalendarCells
        currentMonth={currentMonth}
        startDate={startDate}
        endDate={endDate}
        onDateClick={handleDateClick}
      />
    </div>
  );
};

export default DateRangePicker;
