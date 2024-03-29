import Select from "react-select";
import { Controller, useForm } from "react-hook-form";

import Button from "components/Button";
import LabelInput from "components/LabelInput";
import { TextInput } from "components/TextInput";

import { addTask } from "shared/store";

function Form() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty },
    reset,
  } = useForm();

  function getData(): any[] | void {
    const source = localStorage.getItem("category");
    if (source) {
      return JSON.parse(source);
    }
    return undefined;
  }

  const onSubmit = async (data: any) => {
    addTask(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <LabelInput errors={errors.title}>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Выберите категорию"
                className="mb-4 w-[240px]"
                options={getData() || []}
              />
            )}
          />
        </LabelInput>
        <LabelInput label="Название">
          <TextInput
            {...register("title", { required: "Не может быть пустым" })}
            placeholder="Введите название заметки"
          />
        </LabelInput>

        <LabelInput label="Описание">
          <TextInput
            {...register("description", { required: "Не может быть пустым" })}
            placeholder="Введите описание заметки"
          />
        </LabelInput>

        <Button text="Добавить" type="submit" className="bg-lazur" disabled={!isDirty} />
      </fieldset>
    </form>
  );
}

export default Form;
