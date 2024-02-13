import "./InputDate.css";
import Selected from "../SelectedYear/SelectedYear";
import { getDays } from "../UseCalendar/UseCalendar";
import { useState } from "react";

const InputDate = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const days: number[] = [];
  const years = [];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [month, setMonth] = useState(months[currentMonth]);
  const [year, setYear] = useState(currentYear);

  for (let i = 1950; i <= 2050; i++) {
    years.push(i);
  }

  for (let i = 1; i < 29; i++) {
    let day = getDays(2024, 1, i);
    days.push(day);
  }

  const getMonth = (e: Event) => {
    setMonth(e.currentTarget.value);
  };

  const getYear = (e: Event) => {
    setYear(Number(e.currentTarget.value));
  };

  const displayMonths = months.map((month, index) => (
    <Selected key={index} current={months[currentMonth]} date={month} />
  ));

  const displayYears = years.map((year, index) => (
    <Selected key={index} current={currentYear} date={year} />
  ));

  return (
    <div className="dateTime">
      <select name="month" id="month" onChange={getMonth}>
        {displayMonths}
      </select>
      <select name="year" id="year" onChange={getYear}>
        {displayYears}
      </select>
    </div>
  );
};

export default InputDate;
