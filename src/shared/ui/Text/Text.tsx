import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import styles from "./Text.module.scss";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error"
}

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center"
}

export enum TextSize {
  M = "size_m",
  L = "size_l"
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo(({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY,
  align = TextAlign.LEFT,
  size = TextSize.M,
}: TextProps) => (
  <div className={classNames(
    styles.Text,
    {},
    [
      className,
      styles[theme],
      styles[align],
      styles[size]],
  )}
  >
    {title && <p className={styles.title}>{title}</p>}
    {text && <p className={styles.text}>{text}</p>}
  </div>
));
