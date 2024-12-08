import React, { useMemo, JSX } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameDay,
  isSameMonth,
} from "date-fns";

interface CalendarCellsProps {
  currentMonth: Date;
  startDate: Date | null;
  endDate: Date | null;
  onDateClick: (day: Date) => void;
}
const CalendarCells = ({
  currentMonth,
  startDate,
  endDate,
  onDateClick,
}: CalendarCellsProps) => {
  const rows = useMemo(() => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startWeek = startOfWeek(monthStart);
    const endWeek = endOfWeek(monthEnd);
    const dateFormat = "d";

    let days: JSX.Element[] = [];
    let rows: JSX.Element[] = [];
    let day = startWeek;

    while (day <= endWeek) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, dateFormat);
        const cloneDay = day;

        const isSelectedStart = startDate && isSameDay(day, startDate);
        const isSelectedEnd = endDate && isSameDay(day, endDate);
        const isInRange =
          startDate && endDate && day > startDate && day < endDate;

        days.push(
          <div
            className={`col cell ${isSameDay(day, new Date()) ? "today" : ""} ${
              isSelectedStart ? "selected" : ""
            } ${isSelectedEnd ? "selected" : ""} ${
              isInRange ? "selected" : ""
            } ${isSameMonth(day, monthStart) ? "" : "light"}`}
            key={format(day, "yyyy-MM-dd")}
            onClick={() => onDateClick(cloneDay)}
          >
            <span>{formattedDate}日</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={format(day, "yyyy-MM-dd")}>
          {days}
        </div>
      );
      days = [];
    }

    return rows;
  }, [currentMonth, startDate, endDate, onDateClick]);

  return <div>{rows}</div>;
};

export default CalendarCells;
