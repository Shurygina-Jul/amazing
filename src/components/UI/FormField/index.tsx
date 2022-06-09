import { SubmitHandler, useForm } from "react-hook-form";

import { Input } from "./styles";

import { Inputs } from "components/interface";
import { IInput } from "./interface";



function FormField(props: IInput) {
    const { label, name, required } = props;
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<Inputs>();
  return (
    <label>
          <p>{label}</p>
      {/* <Input {...register("title", { required: required })} />
      {errors.title && <span className="text-red">Это поле обязательно для заполнения</span>} */}
    </label>
  );
}

export default FormField
