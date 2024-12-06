import React, { useState } from "react";
import {
  format,
  addDays,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  addMonths,
  subMonths,
  endOfWeek,
} from "date-fns";
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

  const renderHeader = () => {
    const dateFormat = "yyyy年 MM月";
    return (
      <div className="header row">
        <div className="col">
          <div className="icon" onClick={prevMonth}>
            &lsaquo;
          </div>
        </div>
        <div className="col col-center">
          <span>{format(currentMonth, dateFormat)}</span>
        </div>
        <div className="col" onClick={nextMonth}>
          <div className="icon">&rsaquo;</div>
        </div>
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startWeek = startOfWeek(monthStart);
    const endWeek = endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startWeek;
    let formattedDate = "";

    while (day <= endWeek) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;

        days.push(
          <div
            className={`col cell`}
            key={format(day, "yyyy-MM-dd")}
            onClick={() => {
              handleDateClick(cloneDay);
            }}
          >
            <span>{formattedDate}日</span>
            <span></span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <div className="calendar">
      {renderHeader()}
      {renderCells()}
    </div>
  );
};

export default DateRangePicker;
