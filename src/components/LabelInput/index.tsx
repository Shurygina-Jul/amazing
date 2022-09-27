import clsx from "clsx";

import { ILabelInput } from "./interface";

function LabelInput(props: ILabelInput) {
  const { label, className, children, errors } = props;

  return (
    <label className={clsx(className)}>
      {label && <p className="text-xl font-medium text-lazur">{label}</p>}
      {children}
      {errors && <p className="text-red">Ошибка: Необходмио заполнить поле</p>}
    </label>
  );
}

export default LabelInput;
