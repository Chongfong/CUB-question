import React, { useState } from "react";
import {
  format,
  addDays,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
} from "date-fns";
import "./DateRangePicker.css";

const DateRangePicker = () => {
  const [currentMonth] = useState(new Date());

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

        days.push(
          <div className={`col cell`} key={format(day, "yyyy-MM-dd")}>
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

  return <div className="calendar">{renderCells()}</div>;
};

export default DateRangePicker;
