import React from "react";
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
  // console.log(errors.title);
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

// you can use React.forwardRef to pass the ref too
export const Input = React.forwardRef<
  HTMLInputElement,
  { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ register, required, label, errors }: any, ref) => (
  <>
    <label>{label}</label>
    <input
      className="mb-2 block rounded border-2 border-lazur p-4"
      ref={ref}
      {...register(label, { required })}
    />
    {errors.title && <div className="text-red">This field is required</div>}
  </>
));
