import TableDate from "../../Component/TableDate/TableDate";
import Selected from "../../Component/Selected/Selected";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import calculDateDay from "../../CustomHooks/UseCalculDay";
import UseCalculDate from "../../CustomHooks/UseCalculDate";
import "./ContainerTable.css";
import React, { useState } from "react";
import { useEffect } from "react";

const ContainerTable = () => {
  const {
    years,
    months,
    incrementMonth,
    incrementYear,
    decrementMonth,
    decrementYear,
    currentDate,
    currentMonth,
    currentYear,
    setCurrentMonth,
    setCurrentYear,
  } = UseCalculDate();

  const [activeTable, setActiveTable] = useState(false);
  const [activeList, setActiveList] = useState(false);
  const [activeListYear, setActiveListYear] = useState(false);
  const [chosenDate, setChosenDate] = useState([]);
  const getFirstDayAndNumbersDays = calculDateDay(currentMonth, currentYear, 1);

  useEffect(() => {
    setChosenDate(() => [currentMonth, years[currentYear]]);
  }, [currentMonth, currentYear]);

  const currentDay = `${
    currentDate.getDate() < 10
      ? `0${currentDate.getDate()}`
      : `${currentDate.getDate()}`
  }/${
    currentDate.getMonth() + 1 < 10
      ? `0${currentDate.getMonth() + 1}`
      : `${currentDate.getMonth() + 1}`
  }/${currentDate.getFullYear()}`;

  let [monthcurrent, yearcurrent, datecurrent] = [...chosenDate];
  let valueInput = `${
    datecurrent < 10 ? `0${datecurrent}` : `${datecurrent}`
  }/${
    monthcurrent < 10 ? `0${monthcurrent}` : `${monthcurrent}`
  }/${yearcurrent}`;

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
        <div className="head">
          <FontAwesomeIcon
            icon={faCaretLeft}
            onClick={() => {
              decrementMonth();
              decrementYear();
            }}
            style={{ cursor: "pointer" }}
          />
          <Selected
            Months={months}
            Years={years}
            currentMonth={currentMonth}
            currentYear={currentYear}
            setActiveList={setActiveList}
            setCurrentMonth={setCurrentMonth}
            setCurrentYear={setCurrentYear}
          />
          <FontAwesomeIcon
            icon={faCaretRight}
            onClick={() => {
              incrementMonth();
              incrementYear();
            }}
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
