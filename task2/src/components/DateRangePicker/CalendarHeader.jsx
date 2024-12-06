import React from "react";
import { format } from "date-fns";

const CalendarHeader = ({ currentMonth, onPrevMonth, onNextMonth }) => {
  const dateFormat = "yyyy年 MM月";

  return (
    <div className="header row">
      <div className="col">
        <div className="icon" onClick={onPrevMonth}>
          &lsaquo;
        </div>
      </div>
      <div className="col col-center">
        <span>{format(currentMonth, dateFormat)}</span>
      </div>
      <div className="col">
        <div className="icon" onClick={onNextMonth}>
          &rsaquo;
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;
