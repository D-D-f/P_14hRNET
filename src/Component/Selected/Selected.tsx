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
    <div onClick={() => setActiveList((curr) => !curr)} className="selected">
      <ul>{displayDays}</ul>
    </div>
  );
};

export default Selected;
