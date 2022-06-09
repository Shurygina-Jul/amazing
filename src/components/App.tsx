import { SubmitHandler, useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";

import { Inputs } from "./interface";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

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
          <label>
            <p>Название</p>
            <input
              className="mb-2 block rounded border-2 border-lazur p-4"
              {...register("title", { required: true })}
            />
            {errors.title && <span className="text-red">Это поле обязательно для заполнения</span>}
          </label>
          <label>
            <p>Дата создания</p>
            <input className="mb-2 block border-2 p-4" {...register("date", { required: true })} />
            {errors.title && <span className="text-red">Это поле обязательно для заполнения</span>}
          </label>
          <label>
            <p>Автор</p>
            <input
              className="mb-2 block border-2 p-4"
              {...register("author", { required: true })}
            />
            {errors.title && <span className="text-red">Это поле обязательно для заполнения</span>}
          </label>
          <label>
            <p>Описание</p>
            <input className=" block border-2" {...register("description")} />
          </label>
          <div className=" mt-12 inline-block bg-lazur text-smoke">
            <input type="submit" className="px-12 py-4" />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
