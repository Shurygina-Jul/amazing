import { SubmitHandler, useForm } from "react-hook-form";
import FormField from "./UI/FormField";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  const LABELS = ["title", "date", "author", "description"];

  return (
    <div className="pl-16 pr-16">
      <div className="bg-night text-smoke">Night</div>
      <div className="bg-lazur text-smoke">Lazur</div>
      <div className="bg-smoke text-night">Smoke</div>
      <div className=" bg-grey text-night">Grey</div>
      <div className="mb-12 bg-red text-smoke">Red</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>
            <h3>Форма создания / редактирования заметок / напоминаний</h3>
          </legend>
          <FormField label="title" register={register} required errors={errors} />
          <FormField label="date" register={register} required errors={errors} />
          <FormField label="author" register={register} required errors={errors} />
          <FormField label="description" register={register} required errors={errors} />
          <div className="inline-block bg-lazur text-smoke">
            <input type="submit" className="px-12 py-4" />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
