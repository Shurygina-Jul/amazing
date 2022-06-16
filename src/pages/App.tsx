import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Select from "react-select";

import { IInputs } from "components/interface";
import LabelInput from "components/UI/LabelInput";
import { TextInput } from "components/UI/TextInput";
import Button from "components/UI/Button";

function App() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  const INPUTS: IInputs[] = [
    { label: "Название", name: "title" },
    { label: "Дата", name: "date" },
    { label: "Автор", name: "author" },
    { label: "Описание", name: "description" },
  ];
  return (
    <div className="pl-16 pr-16">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>
            <h3>Форма создания / редактирования заметок / напоминаний</h3>
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
                name="Type"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder="Выберите тип записи"
                    className=""
                    options={[
                      { value: "note", label: "Заметка" },
                      { value: "prompt", label: "Напоминание" },
                    ]}
                  />
                )}
              />
            </LabelInput>
          </>
          <div className="inline-block bg-lazur text-smoke">
            <Button text="Добавить" type="submit" />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
