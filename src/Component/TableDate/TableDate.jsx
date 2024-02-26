import React from "react";
import "./TableDate.css";

const TableDate = ({ nbDaysAndFirstDayOnTheMonth }) => {
  const initialDay = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let firstDay = Number(nbDaysAndFirstDayOnTheMonth.premierJourDuMois);
  let allj = [];
  let jour = 1;

  for (let i = 1; i <= 35; i++) {
    if (
      i >= firstDay &&
      i - firstDay < nbDaysAndFirstDayOnTheMonth.nbJourDuMois
    ) {
      allj.push(jour);
      jour++;
    } else {
      allj.push(null);
    }
  }

  const displayDataDay = allj.map((day, index) =>
    index % 7 === 0 ? (
      <ul
        style={{ display: "flex", flexDirection: "row" }}
        className={`premier${index}`}
      >
        <li key={index}>{day}</li>
      </ul>
    ) : (
      <li key={index}>{day} </li>
    )
  );

  return (
    <div className="containerDatePicker">
      <div>{displayDataDay}</div>
      <li>qsd</li>
    </div>
  );
};

export default TableDate;
