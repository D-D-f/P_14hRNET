interface SelectProps {
  current: number | string;
  date: number | string;
}

const Selected: React.FC<SelectProps> = ({ current, date }) => {
  return current === date ? (
    <option selected value={date}>
      {date}
    </option>
  ) : (
    <option value={date}>{date}</option>
  );
};

export default Selected;
