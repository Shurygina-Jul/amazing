import clsx from "clsx";

import { ILabelInput } from "./interface";

function LabelInput(props: ILabelInput) {
  const { label, className, children, errors } = props;

  return (
    <label className={clsx("text-xl", className)}>
      {label && <p>{label}</p>}
      {children}
      {errors && <p className="text-red">Ошибка: Необходмио заполнить поле</p>}
    </label>
  );
}

export default LabelInput;
