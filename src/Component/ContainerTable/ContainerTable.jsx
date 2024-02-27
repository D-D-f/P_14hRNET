import TableDate from "../../Component/TableDate/TableDate";
import Selected from "../../Component/Selected/Selected";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import calculerDatePourCalendrier from "../../CustomHooks/UseCalculDay";
import "./ContainerTable.css";
import React, { useState } from "react";
import { useEffect } from "react";

const ContainerTable = () => {
  const currentDate = new Date();
  const currentYears = currentDate.getFullYear();
  const currentMonths = currentDate.getMonth() + 1;

  const months = [
    "",
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

  const [activeTable, setActiveTable] = useState(false);
  const [activeList, setActiveList] = useState(false);
  const [activeListYear, setActiveListYear] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(
    months.indexOf(months[currentMonths])
  );
  const [currentYear, setCurrentYear] = useState(years.indexOf(currentYears));

  const [chosenDate, setChosenDate] = useState([]);
  const getFirstDayAndNumbersDays = calculerDatePourCalendrier(
    currentMonth,
    years[currentYear],
    1
  );

  useEffect(() => {
    setChosenDate(() => [currentMonth, years[currentYear]]);
  }, [currentMonth, currentYear]);

  const currentDay = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  let [monthcurrent, yearcurrent, datecurrent] = [...chosenDate];
  let valueInput = `${datecurrent}/${monthcurrent}/${yearcurrent}`;
  return (
    <div className="containerTable">
      <input
        style={{ width: "100%" }}
        type="text"
        readOnly
        onClick={() => setActiveTable(!activeTable)}
        value={datecurrent !== undefined ? valueInput : currentDay}
      />
      <div
        style={activeTable ? { display: "block" } : { display: "none" }}
        className="table"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "0 10px",
            border: "1Px solid black",
          }}
        >
          <FontAwesomeIcon
            icon={faCaretLeft}
            onClick={() =>
              setCurrentMonth((curr) => {
                if (currentYear === 0 && curr === 1) {
                  return curr;
                }

                if (curr === 1) {
                  setCurrentYear((curr) => curr - 1);
                  return (curr = 12);
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
                if (currentYear === years.length - 1 && curr === 12) {
                  return curr;
                }
                if (curr === 12) {
                  setCurrentYear((curr) => curr + 1);
                  return (curr = 1);
                }
                return curr + 1;
              })
            }
            style={{ cursor: "pointer" }}
          />
        </div>

        <TableDate
          nbDaysAndFirstDayOnTheMonth={getFirstDayAndNumbersDays}
          changeDate={setChosenDate}
        />
      </div>
    </div>
  );
};

export default ContainerTable;
