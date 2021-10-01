import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TestWrapperStyled } from "./styles/index.style";
import { randomColor } from "./utils";

const FORM_DESCRIPTION =
  "Testing using custom component with forward ref, 3rd component";
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
    <TestWrapperStyled
      title="Test Integrating exist form"
      description={FORM_DESCRIPTION}
      color={randomColor()}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: 3,
              borderRadius: 1,
              p: 2, // padding
              m: 1, // margin
              minWidth: 300,
            }}
          >
            <Select
              label="Custom label"
              name="firstName"
              {...register("firstName")}
            />

            {/* [learn] Using Controller for 3rd UI
             *  + passing name, onBlur, onChange, ref to <Textfield>
             *  + it renders 4 time each submit (2 before, 2 after)
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
          </Box>
          <Button variant="contained" onClick={handleSubmit(onSubmit)}>
            Submit IntegratingExistForm{" "}
          </Button>
        </Container>
      </form>
    </TestWrapperStyled>
  );
};

export default IntegratingExistForm;
