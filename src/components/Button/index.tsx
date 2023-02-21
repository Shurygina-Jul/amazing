import clsx from "clsx";

import { StyledButton } from "./styles";

import { IButton } from "./interface";

function Button(props: IButton) {
  const { text, onClick, disabled, className, type } = props;
  return (
    <StyledButton className={clsx(className)} onClick={onClick} disabled={disabled} type={type}>
      {text}
    </StyledButton>
  );
}

export default Button;
