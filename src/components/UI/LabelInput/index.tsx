import clsx from "clsx";

import { ILabelInput } from "./interface";

function LabelInput(props: ILabelInput) {
  const { label, className, children, errors, require } = props;

  return (
    <label className={clsx("text-xl", className)}>
      {label && <p>{label}</p>}

      {children}
      {require && errors && <div className="text-red">This field is required</div>}
    </label>
  );
}

export default LabelInput;
