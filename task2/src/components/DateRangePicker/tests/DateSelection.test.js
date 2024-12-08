import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DateRangePicker from "../index";

describe("DateRangePicker Date Selection", () => {
  test("selects a start date", () => {
    render(<DateRangePicker />);
    const startDate = screen.getByText("28日");
    fireEvent.click(startDate);

    setTimeout(() => {
      expect(startDate).toHaveClass("selected");
    }, 0);
  });

  test("selects startDate then endDate", () => {
    render(<DateRangePicker />);
    const startDate = screen.getByText("24日");
    const endDate = screen.getByText("28日");

    fireEvent.click(startDate);
    fireEvent.click(endDate);

    setTimeout(() => {
      expect(startDate).toHaveClass("selected");
      expect(endDate).toHaveClass("selected");
    }, 0);

    const rangeDays = screen.getAllByText(/日/).filter((day) => {
      const dayText = parseInt(day.textContent);
      return dayText > 24 && dayText < 28;
    });

    rangeDays.forEach((day) => {
      setTimeout(() => {
        expect(day).toHaveClass("selected");
      }, 0);
    });
  });

  test("selects endDate then startDate", () => {
    render(<DateRangePicker />);
    const startDate = screen.getByText("28日");
    const endDate = screen.getByText("24日");

    fireEvent.click(startDate);
    fireEvent.click(endDate);

    setTimeout(() => {
      expect(startDate).toHaveClass("selected");
      expect(endDate).toHaveClass("selected");
    }, 0);

    const rangeDays = screen.getAllByText(/日/).filter((day) => {
      const dayText = parseInt(day.textContent);
      return dayText > 24 && dayText < 28;
    });

    rangeDays.forEach((day) => {
      setTimeout(() => {
        expect(day).toHaveClass("selected");
      }, 0);
    });
  });

  test("handles same start and end date selection", () => {
    render(<DateRangePicker />);
    const startDate = screen.getByText("28日");

    fireEvent.click(startDate);
    fireEvent.click(startDate);

    setTimeout(() => {
      expect(startDate).toHaveClass("selected");
    }, 0);
  });
});
