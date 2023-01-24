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
  S = "size_s",
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

type HeaderTag = "h1" | "h2" | "h3";

const mapSizeToHeaderTag: Record<TextSize, HeaderTag> = {
  [TextSize.S]: "h3",
  [TextSize.M]: "h2",
  [TextSize.L]: "h1",
};

export const Text = memo(({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY,
  align = TextAlign.LEFT,
  size = TextSize.M,
}: TextProps) => {
  const HeaderTag = mapSizeToHeaderTag[size];

  return (
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
      {title && <HeaderTag className={styles.title}>{title}</HeaderTag>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
