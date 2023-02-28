import { HTMLAttributes, ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Card.module.scss";

export enum CardTheme {
  NORMAL = "normal",
  OUTLINED = "outlined",
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
  fullWidth?: boolean;
}

export const Card = (props: CardProps) => {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    fullWidth,
    ...othersProps
  } = props;

  return (
    <div
      className={classNames(styles.Card, { [styles.fullWidth]: fullWidth }, [
        className,
        styles[theme],
      ])}
      {...othersProps}
    >
      {children}
    </div>
  );
};
