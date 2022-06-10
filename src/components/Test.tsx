import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

// import FormField from "./UI/FormField";

interface IFormInput {
  firstName?: string;
  lastName: string;
  title?: string;
}

function Test() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <Controller
        name="title"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormField {...field} label="title" register={register} required errors={errors} />
        )}
      /> */}
      <Controller
        name="Type"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "note", label: "Note" },
              { value: "prompt", label: "Prompt" },
            ]}
          />
        )}
      />
      {/* <input type="submit" /> */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Test;
