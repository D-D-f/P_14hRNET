import React from "react";

const TableDate = ({ nbDaysAndFirstDayOnTheMonth }) => {
  const initialDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const numbersDays = [];
  const firstDay = Number(nbDaysAndFirstDayOnTheMonth.premierJourDuMois);

  for (let i = 1; i <= nbDaysAndFirstDayOnTheMonth.nbJourDuMois; i++) {
    numbersDays.push(i);
  }

  return <div></div>;
};

export default TableDate;
