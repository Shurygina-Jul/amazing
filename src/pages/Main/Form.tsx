import { useForm } from "react-hook-form";

import Button from "components/UI/Button";

import { addTask } from "store";
import LabelInput from "components/UI/LabelInput";
import { TextInput } from "components/UI/TextInput";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { isDirty },
    reset,
  } = useForm({ shouldUseNativeValidation: true });

  const onSubmit = async (data: any) => {
    // console.log(data);
    // setNewTodo(data);
    addTask(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
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
