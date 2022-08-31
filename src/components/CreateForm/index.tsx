import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Select from "react-select";
import { useNavigate } from "react-router";
import { useStore } from "effector-react";

import LabelInput from "components/UI/LabelInput";
import { TextInput } from "components/UI/TextInput";
import Button from "components/UI/Button";

import { add, $notes } from "store";

import { INPUTS } from "./constants";

import { IOption } from "./interface";
import { $category } from "components/CreateCategory/store";

function CreateForm() {
  const note = useStore($notes);

  let navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) => {
    data.id = Math.floor(Math.random() * 1000);
    add(data);
    localStorage.setItem("tasks", JSON.stringify(note));
    console.log("Заметка успешно создана");
    navigate("/");
  };

  function getOptions(): IOption[] {
    return JSON.parse(localStorage.getItem("category") as string);
  }

  return (
    <>
      <form className="p-8" onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>
            <h3>Cоздать заметку или напоминание</h3>
          </legend>

          <>
            {INPUTS.map(({ label, name }, i: number) => (
              <LabelInput label={label} errors={errors[name]} key={`${name}_${i}`}>
                <TextInput
                  {...register(`${name}`, {
                    required: true,
                  })}
                />
              </LabelInput>
            ))}
            <LabelInput errors={errors.title}>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder="Выберите категорию"
                    className="mb-4 w-[240px]"
                    options={getOptions()}
                  />
                )}
              />
            </LabelInput>
          </>
          <div className="inline-block rounded-lg bg-lazur text-smoke">
            <Button text="Добавить" type="submit" className="rounded-lg" />
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default CreateForm;