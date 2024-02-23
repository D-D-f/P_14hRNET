import TableDate from "../../Component/TableDate/TableDate";
import Selected from "../../Component/Selected/Selected";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import "./ContainerTable.css";
import React, { useState } from "react";

const ContainerTable = () => {
  const [activeList, setActiveList] = useState(false);
  const [activeListYear, setActiveListYear] = useState(false);
  const [currentYear, setCurrentYear] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(0);

  const currentDate = new Date();
  const currentYears = currentDate.getFullYear();

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
  console.log(currentMonth);
  for (let i = 1950; i <= currentYears; i++) {
    years.push(i);
  }

  return (
    <div className="containerTable">
      <div style={{ display: "flex" }}>
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
      <TableDate />
    </div>
  );
};

export default ContainerTable;
