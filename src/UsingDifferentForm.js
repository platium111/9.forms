import React from "react";
import { useForm } from "react-hook-form";
import { TestWrapperStyled } from "./styles/index.style";
import { randomColor } from "./utils";

const FORM_DESCRIPTION = "Using different form, testing how data is used";
const FORM_TITLE = "Testing UsingDifferentForm";

const UsingDifferentForm = () => {
  // [learn] cannot use useForm in different components (has the same <form>)
  // to make the same <form> using in different components, need to pass `register, handleSubmit` to other components

  // [learn] can use different <form> with the same level, if it's nested, consider passing `register` through props
  // data belong to specific <form>, different from each other
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log("UsingYupValidate data", data);

  return (
    <TestWrapperStyled
      title={FORM_TITLE}
      description={FORM_DESCRIPTION}
      color={randomColor()}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="game"
          placeholder="Yup validate"
          {...register("game", { required: true })}
        ></input>
        <p>{errors.firstName?.message}</p>

        <input type="submit" value="Submit UsingYupValidate" />
      </form>
    </TestWrapperStyled>
  );
};

export default UsingDifferentForm;
