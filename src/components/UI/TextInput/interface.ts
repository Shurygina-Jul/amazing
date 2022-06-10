import { InputHTMLAttributes } from "react";

export default interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  errorText?: string;
}
