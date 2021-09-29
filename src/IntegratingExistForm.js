import React from "react";
import { useForm } from "react-hook-form";

const Select = React.forwardRef(({ label, onChange, name }, ref) => (
  <div>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange}>
      <option value="yes">1</option>
      <option value="no">0</option>
    </select>
  </div>
));

const IntegratingExistForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("IntegratingExistForm", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select
        label="Custom label"
        name="firstName"
        {...register("firstName")}
      />
      <input type="submit" value="Submit IntegratingExistForm" />
    </form>
  );
};

export default IntegratingExistForm;
