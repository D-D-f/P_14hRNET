import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (d) => {
    console.log(d);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" {...register("firstName")} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" {...register("lastName")} />
      </div>

      <button>save</button>
    </form>
  );
};

export default Form;
