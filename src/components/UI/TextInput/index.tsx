import React from "react";
import IProps from "./interface";

export const TextInput = React.forwardRef<HTMLInputElement, IProps>((props, ref) => (
  <input className="mb-2 block rounded border-2 border-lazur p-4" {...props} ref={ref} />
));
