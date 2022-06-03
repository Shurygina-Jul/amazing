import { ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: () => void;
  disabled: boolean;
  theme?: string;
  className?: string;
}
export interface IStyled extends Pick<IButton, "theme"> {}
