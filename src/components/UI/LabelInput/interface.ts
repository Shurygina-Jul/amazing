import { ReactNode } from "react";

export interface ILabelInput {
  label?: string;
  className?: string;
  children: ReactNode;
  errors: any;
  requiredd?: boolean;
}
