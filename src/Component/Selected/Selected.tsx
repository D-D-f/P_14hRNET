import "./Selected.css";

const Selected = ({ type }: { type: string }) => {
  const years: number[] = [];
  const months: string[] = [
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

  for (let year = 1950; year <= 2050; year++) {
    years.push(year);
  }

  const displayMonths = months.map((month, index) => (
    <option key={index} value={month}>
      {month}
    </option>
  ));

  const displayYears = years.map((year, index) => (
    <option key={index} value={year}>
      {year}
    </option>
  ));

  return type === "year" ? (
    <select name="year" id="year">
      {displayYears}
    </select>
  ) : (
    <select name="month" id="month">
      {displayMonths}
    </select>
  );
};

export default Selected;
