import { Path, UseFormRegister } from "react-hook-form";

export interface IFormValues {
  title?: string;
  date?: string;
  author?: string;
  description?: string;
}
type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  errors: any;
};

function FormField({ label, register, required, errors }: InputProps) {
  return (
    <label>
      <p>{label}</p>
      <input
        className="mb-2 block rounded border-2 border-lazur p-4"
        {...register(label, { required })}
      />
      {errors.title && <div className="text-red">This field is required</div>}
    </label>
  );
}

export default FormField;
