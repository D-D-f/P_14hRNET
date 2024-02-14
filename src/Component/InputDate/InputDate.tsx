import "./InputDate.css";
import Selected from "../SelectedYear/SelectedYear";
import { getDays, allDate } from "../UseCalendar/UseCalendar";
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

  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const bissextile = year % 2 === 0 ? true : false;

  const getMonth = (e: Event) => {
    setMonth(months.indexOf(e.currentTarget.value));
  };

  const getYear = (e: Event) => {
    setYear(Number(e?.currentTarget?.value));
  };

  const dateTime = {
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: {
      0: {
        month: "January",
        nbDays: 31,
      },
      1: {
        month: "February",
        nbDays: bissextile ? 29 : 28,
      },
      2: {
        month: "March",
        nbDays: 31,
      },
      3: {
        month: "April",
        nbDays: 30,
      },
      4: {
        month: "May",
        nbDays: 31,
      },
      5: {
        month: "June",
        nbDays: 30,
      },
      6: {
        month: "July",
        nbDays: 31,
      },
      7: {
        month: "August",
        nbDays: 31,
      },
      8: {
        month: "September",
        nbDays: 30,
      },
      9: {
        month: "October",
        nbDays: 31,
      },
      10: {
        month: "November",
        nbDays: 30,
      },
      11: {
        month: "December",
        nbDays: 31,
      },
    },
  };

  for (let i = 1950; i <= 2050; i++) {
    years.push(i);
  }

  for (let i = 1; i <= dateTime.months[month].nbDays; i++) {
    let day = getDays(year, month, i);
    days.push(day);
  }

  const displayMonths = months.map((month, index) => (
    <Selected key={index} current={months[currentMonth]} date={month} />
  ));

  const displayYears = years.map((year, index) => (
    <Selected key={index} current={currentYear} date={year} />
  ));

  const rows = Object.keys(allDate.days).map((jour, index) => {
    <thead key={index}>
      <tr>
        <th scope="col">{jour}</th>
      </tr>
      <tr>
        <th scope="rows">{}</th>
      </tr>
    </thead>;
  });

  return (
    <div className="dateTime">
      <select name="month" id="month" onChange={getMonth}>
        {displayMonths}
      </select>
      <select name="year" id="year" onChange={getYear}>
        {displayYears}
      </select>
      <table>
        <thead></thead>
      </table>
    </div>
  );
};

export default InputDate;
