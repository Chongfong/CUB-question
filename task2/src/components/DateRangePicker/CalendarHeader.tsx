import React from "react";
import { format } from "date-fns";

interface CalendarHeaderProps {
  currentMonth: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}
const CalendarHeader = ({
  currentMonth,
  onPrevMonth,
  onNextMonth,
}: CalendarHeaderProps) => {
  const dateFormat = "yyyy年 M月";

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
