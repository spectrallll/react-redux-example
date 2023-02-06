import { classNames } from "shared/lib/classNames/classNames";
import React, { memo } from "react";
import styles from "./Icon.module.scss";

export enum IconTheme {
  PRIMARY = "Icon",
  INVERTED = "inverted",

}
interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    theme?: IconTheme;
}

export const Icon = memo((props: IconProps) => {
  const {
    className,
    Svg,
    theme = IconTheme.PRIMARY,
  } = props;

  return (
    <Svg
      className={classNames(
        styles.Icon,
        {},
        [className, styles[theme]],
      )}
    />
  );
});
