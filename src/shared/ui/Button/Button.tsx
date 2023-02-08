import {
  ButtonHTMLAttributes, memo, ReactNode,
} from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ButtonTheme {
  PRIMARY = "primary",
  CLEAR = "clear",
  OUTLINE = "outline",
  OUTLINED_RED = "outline_red"
  ,
  BACKGROUND = "background"
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    children,
    className,
    theme = ButtonTheme.PRIMARY,
    square,
    size = "",
    disabled,
    ...rest
  } = props;

  const mods: Mods = {
    [styles.square]: square,
    [styles.disabled]: disabled,
  };

  return (
    <button
      className={classNames(styles.Button, mods, [className, styles[theme], styles[size]])}
      type="button"
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
});
