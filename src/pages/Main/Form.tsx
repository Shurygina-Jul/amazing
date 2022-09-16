import Button from "components/UI/Button";
import { useForm } from "react-hook-form";
import { addTodo, setNewTodo } from "store";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { isDirty },
    reset,
  } = useForm({ shouldUseNativeValidation: true });

  const onSubmit = async (data: any) => {
    // console.log(data);
    setNewTodo(data);
    addTodo();
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="border-2 border-red"
        {...register("title", { required: "Не может быть пустым" })}
      />
      <input
        className="border-2 border-red"
        {...register("description", { required: "Не может быть пустым" })}
      />
      <Button text="Добавить" type="submit" className="rounded-lg" disabled={!isDirty} />
    </form>
  );
}

export default Form;