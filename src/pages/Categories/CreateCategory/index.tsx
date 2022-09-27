import { SubmitHandler, useForm } from "react-hook-form";
import { useStore } from "effector-react";

import Button from "components/UI/Button";
import LabelInput from "components/UI/LabelInput";
import { TextInput } from "components/UI/TextInput";

import { $category, add } from "./store";

function CreateCategory() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<any>();

  const category = useStore($category);

  const onSubmit: SubmitHandler<any> = (data) => {
    add(data);
    localStorage.setItem("category", JSON.stringify(category));
    reset();
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
        <Button text="Создать" type="submit" className="rounded-lg" disabled={!isDirty} />
      </div>
    </form>
  );
}

export default CreateCategory;
