import { useState } from "react";
import "./Selected.css";

const Selected = () => {
  const [choiceMonth, setChoiceMonth] = useState(0);

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

  const displayDays = day.map((day, index) =>
    choiceMonth === index ? <li key={index}>{day}</li> : ""
  );

  return (
    <div className="selected">
      <ul>{displayDays}</ul>
    </div>
  );
};

export default Selected;
