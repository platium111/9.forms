import "./App.css";
import { useForm } from "react-hook-form";

/**
 * - each time typing in input, it renders again
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

  const onSubmit = (data) => {
    console.log("submit ", data);
  };

  console.log("username =", watch("username"));
  console.log("error", errors);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue="test"
          {...register("username", { required: true, maxLength: 10 })}
        ></input>
        {errors.usename && <p>Need to fill out username</p>}

        <input {...register("password", { required: true })}></input>
        {errors.password && <p>Need to fill out password</p>}

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
