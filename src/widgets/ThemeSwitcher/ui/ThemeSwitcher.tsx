import { classNames } from "shared/lib/classNames/classNames";
import React from "react";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import styles from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(
        styles.ThemeSwitcher,
        {},
        [className],
      )}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
