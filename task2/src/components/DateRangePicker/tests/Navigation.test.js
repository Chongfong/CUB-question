import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DateRangePicker from "../index";
import { format } from "date-fns";

describe("DateRangePicker Navigation", () => {
  test("navigates to the next month", () => {
    render(<DateRangePicker />);
    const nextButton = screen.getByText("›");
    fireEvent.click(nextButton);

    const nextMonth = format(new Date(new Date().setMonth(new Date().getMonth() + 1)), "yyyy年 M月");
    expect(screen.getByText(nextMonth)).toBeInTheDocument();
  });

  test("navigates to the previous month", () => {
    render(<DateRangePicker />);
    const prevButton = screen.getByText("‹");
    fireEvent.click(prevButton);

    const prevMonth = format(new Date(new Date().setMonth(new Date().getMonth() - 1)), "yyyy年 M月");
    expect(screen.getByText(prevMonth)).toBeInTheDocument();
  });
});
