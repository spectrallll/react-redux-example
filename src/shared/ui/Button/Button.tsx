import { classNames } from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.scss";

export enum ThemeButton {
    PRIMARY = "primary",
    CLEAR = "clear",
    OUTLINE = "outline"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme,
    ...rest
  } = props;

  return (
    <button
      className={classNames(styles.Button, {}, [className, styles[theme]])}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
};
