import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BugButton } from "app/providers/ErrorBoundary";
import { classNames } from "shared/lib/classNames/classNames";
import { Input } from "shared/ui/Input/Input";

interface MainPageProps {
    className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div className={classNames(className)}>
      <BugButton />
      {t("Главная страница")}
      <Input
        onChange={onChange}
        value={value}
        placeholder="Login"
      />
    </div>
  );
};

export default MainPage;
