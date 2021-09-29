import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";

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
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log("IntegratingExistForm", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Select
          label="Custom label"
          name="firstName"
          {...register("firstName")}
        />

        {/* [learn] Using Controller for 3rd UI */}
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} />}
        />

        <input type="submit" value="Submit IntegratingExistForm" />
      </Container>
    </form>
  );
};

export default IntegratingExistForm;
