import { useState } from "react";
import "./Selected.css";

const Selected = () => {
  const [activeList, setActiveList] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(0);

  const day: string[] = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ];

  const displayDays = day.map((day, index) => (
    <li onClick={() => setCurrentMonth(index)} key={index}>
      {day}
    </li>
  ));

  return (
    <div className="selected">
      <div onClick={() => setActiveList((curr) => !curr)}>
        {day[currentMonth]}
      </div>
      <ul
        style={activeList === true ? { display: "block" } : { display: "none" }}
      >
        {displayDays}
      </ul>
    </div>
  );
};

export default Selected;
