import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import styled from "styled-components";

const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const Wrapper = styled.div`
  border: 2px solid ${randomColor};
`;

// [learn] using forwardRef for existing UI, can pass react-hook-form as onChange
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
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Select
            label="Custom label"
            name="firstName"
            {...register("firstName")}
          />

          {/* [learn] Using Controller for 3rd UI
           *  + passing name, onBlur, onChange, ref to <Textfield>
           */}
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => {
              console.log("field props", field);
              return <TextField {...field} />;
            }}
          />

          <input type="submit" value="Submit IntegratingExistForm" />
        </Container>
      </form>
    </Wrapper>
  );
};

export default IntegratingExistForm;
