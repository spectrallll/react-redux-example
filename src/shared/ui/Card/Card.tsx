import { classNames } from "shared/lib/classNames/classNames";
import { HTMLAttributes, ReactNode } from "react";
import styles from "./Card.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

export const Card = (props: CardProps) => {
  const {
    className,
    children,
    ...othersProps
  } = props;

  return (
    <div
      className={classNames(styles.Card, {}, [className])}
      {...othersProps}
    >
      {children}
    </div>
  );
};
