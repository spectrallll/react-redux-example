import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();
  const onThrow = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={onThrow}
      className={classNames("")}
    >
      {t("Создать ошибку")}
    </Button>
  );
};
