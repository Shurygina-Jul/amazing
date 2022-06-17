import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Select from "react-select";

import LabelInput from "components/UI/LabelInput";
import { TextInput } from "components/UI/TextInput";
import Button from "components/UI/Button";

import { INPUTS } from "./constants";

function CreateForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);
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
                    placeholder="Выберите тип записи"
                    className="mb-4 w-[240px]"
                    options={[
                      { value: "note", label: "заметка" },
                      { value: "prompt", label: "напоминание" },
                    ]}
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
