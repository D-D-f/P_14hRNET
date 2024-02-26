import Form from "../../Component/Form/Form.tsx";
import ContainerTable from "../../Component/ContainerTable/ContainerTable";
import { Link } from "react-router-dom";

const CreateEmployee = () => {
  return (
    <div>
      <h1>HRnet</h1>
      <Link to="/">View Current Employees</Link>
      <h2>Create Employee</h2>
      <Form />

      <ContainerTable />
    </div>
  );
};

export default CreateEmployee;
