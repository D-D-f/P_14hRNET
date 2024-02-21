import Form from "../../Component/Form/Form.tsx";
import TableDate from "../../Component/TableDate/TableDate.jsx";
import Selected from "../../Component/Selected/Selected.tsx";
import { Link } from "react-router-dom";

const CreateEmployee = () => {
  return (
    <div>
      <h1>HRnet</h1>
      <Link to="/">View Current Employees</Link>
      <h2>Create Employee</h2>
      <Form />
      <TableDate />
      <Selected />
    </div>
  );
};

export default CreateEmployee;
