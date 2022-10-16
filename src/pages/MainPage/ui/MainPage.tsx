import React from "react";
import { useTranslation } from "react-i18next";
import { BugButton } from "app/providers/ErrorBoundary";
import { classNames } from "shared/lib/classNames/classNames";

interface MainPageProps {
    className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(className)}>
      <BugButton />
      {t("Главная страница")}
    </div>
  );
};

export default MainPage;
