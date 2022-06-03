import clsx from "clsx";

import { StyledButton } from "./styles";

import { IButton } from "./interface";

function Button(props: IButton) {
  const { text, onClick, disabled, theme = "dark", className } = props;
  return (
    <StyledButton className={clsx(className)} onClick={onClick} disabled={disabled} theme={theme}>
      {text}
    </StyledButton>
  );
}

export default Button;
