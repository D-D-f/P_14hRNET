import "./InputDate.css";
import { getDays } from "../UseCalendar/UseCalendar";
import Selected from "../Selected/Selected";

const InputDate = () => {
  return (
    <div className="dateTime">
      <Selected type={"month"} />
      <Selected type={"year"} />
    </div>
  );
};

export default InputDate;
