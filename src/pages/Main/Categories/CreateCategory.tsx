import { SubmitHandler, useForm } from "react-hook-form";
import { useStore } from "effector-react";

import Button from "components/Button";
import LabelInput from "components/LabelInput";
import { TextInput } from "components/TextInput";

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
      <div className="inline-block bg-lazur">
        <Button text="Создать" type="submit" disabled={!isDirty} />
      </div>
    </form>
  );
}

export default CreateCategory;
