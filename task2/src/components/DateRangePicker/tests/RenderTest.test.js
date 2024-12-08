import React from "react";
import { render, screen } from "@testing-library/react";
import DateRangePicker from "../index";
import { format } from "date-fns";

describe("DateRangePicker Rendering", () => {
  test("renders without crashing", () => {
    render(<DateRangePicker />);
    const header = screen.getByText(new RegExp(format(new Date(), "yyyy年 M月")));
    expect(header).toBeInTheDocument();
  });

  test("displays all days of the current month", () => {
    render(<DateRangePicker />);
    const days = screen.getAllByText(/日$/);
    expect(days.length).toBeGreaterThan(0);
  });
});
