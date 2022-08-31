import Button from "components/UI/Button";
import LabelInput from "components/UI/LabelInput";
import { TextInput } from "components/UI/TextInput";
import { useStore } from "effector-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { $category, add } from "./store";

function CreateCategory() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) => {
    data.id = Math.floor(Math.random() * 1000);
    add(data);
    localStorage.setItem("category", JSON.stringify(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LabelInput label="Создать категорию">
        <TextInput
          {...register("category", {
            required: true,
          })}
        />
      </LabelInput>
      <div className="inline-block rounded-lg bg-lazur text-smoke">
        <Button text="Создать" type="submit" className="rounded-lg" />
      </div>
    </form>
  );
}

export default CreateCategory;
