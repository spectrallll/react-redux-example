import { useTranslation } from "react-i18next";
import React, { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import styles from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(styles.LangSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
      {t(short ? "Короткий язык" : "Язык")}
    </Button>
  );
});
