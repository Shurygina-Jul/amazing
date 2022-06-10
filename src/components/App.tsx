import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Select from "react-select";
import { IInputs } from "./interface";
import Button from "./UI/Button/Button";

import LabelInput from "./UI/LabelInput";
import { TextInput } from "./UI/TextInput";

function App() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  const INPUTS: IInputs[] = [
    { label: "Название", name: "title", require: true },
    { label: "Дата", name: "date", require: false },
    { label: "Автор", name: "author", require: false },
    { label: "Описание", name: "description", require: false },
  ];
  return (
    <div className="pl-16 pr-16">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>
            <h3>Форма создания / редактирования заметок / напоминаний</h3>
          </legend>
          <>
            {INPUTS.map(({ label, name }: any, i: number) => (
              <LabelInput label={label} errors={errors.title} key={`${name}_${i}`}>
                <TextInput {...register(`${name}`, { required: `${require}` })} />
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
                      { value: "note", label: "Note" },
                      { value: "prompt", label: "Prompt" },
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
