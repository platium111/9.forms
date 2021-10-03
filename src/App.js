import "./App.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import UsingDifferentForm from "./UsingDifferentForm";
import IntegratingExistForm from "./IntegratingExistForm";
import { randomColor } from "./utils";
import { TestWrapperStyled } from "./styles/index.style";
import YupValidate from "./YupValidate";
import { SmartForm, Input, Select } from "./components";

/**
 * - each time typing in input, it doesn't render again, only RENDER on submit because using set state data from useState
 * - `errors` changes value in real time, it has error inside it if data changes
 * @returns
 */
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [formData, setFormData] = useState();

  const onSubmit = (data) => {
    console.log("submit ", data);
    setFormData(data);
  };

  console.log("test watch() - username =", watch("username"));
  console.log("error", errors);
  console.log("testing formData", formData);

  return (
    <div className="App">
      <TestWrapperStyled
        title="Basic testing"
        description="Basic testing reac-hook-form with validation"
        color={randomColor}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue="test"
            {...register("username", { required: true, maxLength: 10 })}
          ></input>
          {errors.usename && <p>Need to fill out username</p>}
          <input {...register("password", { required: true })}></input>
          {errors.password?.type === "required" && (
            <p>Need to fill out password</p>
          )}

          {<input type="submit" value="Submit in App" />}
        </form>
      </TestWrapperStyled>

      <UsingDifferentForm register={register} errors={errors} />
      <IntegratingExistForm />
      <YupValidate />

      {/* [learn] Using SmartForm to pass all methods such as register, handleSubmit to children -> only need to use one form */}
      <SmartForm onSubmit={onSubmit}>
        <Input name="animalName" placeholder="animal name" />
        <Select name="gender" options={["female", "male", "other"]} />
        <Input name="submitSmartForm" type="submit" value="Submit" />
      </SmartForm>
    </div>
  );
}

export default App;
