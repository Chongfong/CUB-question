import React from "react";
import CalendarHeader from "./CalendarHeader.tsx";
import CalendarCells from "./CalendarCells.tsx";
import "./DateRangePicker.css";
import { useDatePicker } from "./hooks/useDatePicker.ts";

const DateRangePicker = () => {
  const {
    currentMonth,
    nextMonth,
    prevMonth,
    startDate,
    endDate,
    handleDateClick,
  } = useDatePicker();

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
