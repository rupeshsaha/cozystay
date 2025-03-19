"use client";

import { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";

export default function DatePicker({ onDateChange, allowedDateRanges }) {
  const allowedRanges = allowedDateRanges?.map((range) => ({
    start: new Date(range.startDate),
    end: addDays(new Date(range.endDate), 1),
  }));

  const getDisabledDates = () => {
    let disabled = [];
    let currentDate = new Date();
    let endDate = addDays(new Date(), 30);

    while (currentDate <= endDate) {
      if (
        !allowedRanges?.some(
          (range) => currentDate >= range.start && currentDate <= range.end
        )
      ) {
        disabled.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    if (allowedDateRanges?.length > 0) {
      return disabled;
    }
  };

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 2),
      key: "selection",
    },
  ]);

  useEffect(() => {
    if (onDateChange) {
      onDateChange(state);
    }
  }, [state, onDateChange]);

  return (
    <div className="flex flex-col items-center justify-center">
      <DateRange
        dragSelectionEnabled={true}
        minDate={new Date()}
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        disabledDates={getDisabledDates()}
      />
    </div>
  );
}
