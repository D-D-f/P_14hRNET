import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import "./Selected.css";

interface SelectedProps {
  typeDate: string[] | number[];
  activeList: Boolean;
  currentMonth: number;
  setActiveList: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentMonth: React.Dispatch<React.SetStateAction<number>>;
}

const Selected = ({
  typeDate,
  activeList,
  currentMonth,
  setCurrentMonth,
  setActiveList,
}: SelectedProps) => {
  const displaytypeDates = typeDate.map((typeDate, index) => (
    <li
      style={
        currentMonth === index
          ? { backgroundColor: "#212AFBFF", color: "white" }
          : { backgroundColor: "" }
      }
      className={currentMonth !== index ? "notSelected" : ""}
      onClick={() => setCurrentMonth(index)}
      key={index}
    >
      {typeDate}
    </li>
  ));

  return (
    <div className="selected">
        <div
            onClick={() => setActiveList((curr) => !curr)}
            className="titleMonthYear"
        >
            {typeDate[currentMonth]}
            <FontAwesomeIcon icon={faSortDown} style={{marginLeft: "10px"}} size="xs"/>
            <ul
                style={activeList === true ? {display: "block"} : {display: "none"}}
                className="ulMonthYear"
            >
                {displaytypeDates}
            </ul>
        </div>
</div>
)
    ;
};

export default Selected;
