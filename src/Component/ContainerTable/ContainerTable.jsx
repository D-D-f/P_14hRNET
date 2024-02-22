import TableDate from "../../Component/TableDate/TableDate";
import Selected from "../../Component/Selected/Selected";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import "./ContainerTable.css";
import React from "react";

const ContainerTable = () => {
  const currentDate = new Date();
  const currentYears = currentDate.getFullYear();
  console.log(currentYears);
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

  return (
    <div className="containerTable">
      <div style={{ display: "flex" }}>
        <FontAwesomeIcon icon={faCaretLeft} />
        <Selected typeDate={months} />
        <Selected typeDate={years} />
        <FontAwesomeIcon icon={faCaretRight} />
      </div>
      <TableDate />
    </div>
  );
};

export default ContainerTable;
