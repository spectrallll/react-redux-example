import { classNames } from "shared/lib/classNames/classNames";
import React, { memo } from "react";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import PurpleIcon from "shared/assets/icons/theme-purple.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import styles from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
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
      {
        // eslint-disable-next-line consistent-return
        (() => {
          // eslint-disable-next-line default-case
          switch (theme) {
          case Theme.DARK: {
            return <DarkIcon />;
          }
          case Theme.LIGHT: {
            return <LightIcon />;
          }
          case Theme.PURPLE: {
            return <PurpleIcon />;
          }
          }
        })()
      }
    </Button>
  );
});
