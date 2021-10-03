import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TestWrapperStyled } from "./styles/index.style";

const FORM_TITLE = "Test Yup validation";
const FORM_DESCRIPTION = "Using yup to validate";

const schema = yup
  .object({
    username: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

export default function YupValidate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <TestWrapperStyled title={FORM_TITLE} description={FORM_DESCRIPTION}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username")} placeholder="username" />
        <p>{errors.username?.message}</p>

        <input {...register("age")} placeholder="age" />
        <p>{errors.age?.message}</p>

        <input type="submit" />
      </form>
    </TestWrapperStyled>
  );
}
