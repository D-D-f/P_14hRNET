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
    const [currentYear, setCurrentYear] = useState(
        years.indexOf(currentYears)
    );


  const [chosenDate, setChosenDate] = useState([]);
  const getFirstDayAndNumbersDays = calculerDatePourCalendrier(
    currentMonth, currentYear,
    1
  );

  useEffect(() => {
    setChosenDate(() => [currentMonth, years[currentYear]]);
  }, [currentMonth, currentYear]);

  const currentDay = `${currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : `${currentDate.getDate()}`}/${
    currentDate.getMonth() + 1 <10 ? `0${currentDate.getMonth() +1}` : `${currentDate.getMonth() + 1}`
  }/${currentDate.getFullYear()}`

  let [monthcurrent, yearcurrent, datecurrent] = [...chosenDate];
  let valueInput = `${datecurrent < 10 ? `0${datecurrent}` : `${datecurrent}`}/${monthcurrent < 10 ? `0${monthcurrent}` : `${monthcurrent}`}/${yearcurrent}`;


    const incrementMonth = () => {
        setCurrentMonth((curr) => {
            if (currentYear === years.length - 1 && curr === 12) {
                return curr;
            }
            if (curr === 12) {
                return (curr = 1);
            }
            return curr + 1;
        })
    }

    const decrementMonth = () => {
        return setCurrentMonth((curr) => {
            if (currentYear === 0 && curr === 1) {
                return curr;
            }
            if (curr === 1) {
                return (curr = 12);
            }

            return curr - 1;
        })
    }

    const decrementYear = () => {
        if(currentMonth === 1) {
            return setCurrentYear(curr => curr -1)
        }
    }

    const incrementYear = () => {
        if(currentMonth === 12) {
            return setCurrentYear(curr => curr +1)
        }
    }

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
          className="head"
        >
          <FontAwesomeIcon
            icon={faCaretLeft}
            onClick={() =>
              {
                  decrementMonth()
                  decrementYear()
              }
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
            {
                incrementMonth()
                incrementYear()

            }
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
