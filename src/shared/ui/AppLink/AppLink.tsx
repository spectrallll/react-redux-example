import { Link, LinkProps } from "react-router-dom";
import { FC, memo, ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children: ReactNode;
}

export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
  const {
    to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={
        classNames(
          styles.AppLink,
          {},
          [className, styles[theme]],
        )
      }
      {...otherProps}
    >
      {children}
    </Link>
  );
});
