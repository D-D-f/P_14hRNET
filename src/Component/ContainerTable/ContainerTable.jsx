import TableDate from "../../Component/TableDate/TableDate";
import Selected from "../../Component/Selected/Selected";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import calculerDatePourCalendrier from "../../CustomHooks/UseCalculDay";
import "./ContainerTable.css";
import React, { useState } from "react";

const ContainerTable = () => {
  const currentDate = new Date();
  const currentYears = currentDate.getFullYear();
  const currentMonths = currentDate.getMonth();
  const currentDateDay = currentDate.getDate();

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

  const years = [];
  for (let i = 1950; i <= currentYears; i++) {
    years.push(i);
  }

  const [activeList, setActiveList] = useState(false);
  const [activeListYear, setActiveListYear] = useState(false);
  const [currentYear, setCurrentYear] = useState(years.indexOf(currentYears));
  const [currentMonth, setCurrentMonth] = useState(
    months.indexOf(months[currentMonths])
  );

  const getFirstDayAndNumbersDays = calculerDatePourCalendrier(
    currentMonth - 1,
    years[currentYear],
    currentDateDay
  );

  console.log(getFirstDayAndNumbersDays);

  return (
    <div className="containerTable">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
        }}
      >
        <FontAwesomeIcon
          icon={faCaretLeft}
          onClick={() =>
            setCurrentMonth((curr) => {
              if (currentYear === 0 && curr === 0) {
                return curr;
              }

              if (curr === 0) {
                setCurrentYear((curr) => curr - 1);
                return (curr = 11);
              }

              return curr - 1;
            })
          }
          style={{ cursor: "pointer" }}
        />
        <Selected
          typeDate={months}
          activeList={activeList}
          currentMonth={currentMonth}
          setActiveList={setActiveList}
          setCurrentMonth={setCurrentMonth}
        />

        <Selected
          typeDate={years}
          activeList={activeListYear}
          currentMonth={currentYear}
          setActiveList={setActiveListYear}
          setCurrentMonth={setCurrentYear}
        />
        <FontAwesomeIcon
          icon={faCaretRight}
          onClick={() =>
            setCurrentMonth((curr) => {
              if (currentYear === years.length - 1 && curr === 11) {
                return curr;
              }
              if (curr === 11) {
                setCurrentYear((curr) => curr + 1);
                return (curr = 0);
              }
              return curr + 1;
            })
          }
          style={{ cursor: "pointer" }}
        />
      </div>
      <TableDate nbDaysAndFirstDayOnTheMonth={getFirstDayAndNumbersDays} />
    </div>
  );
};

export default ContainerTable;
