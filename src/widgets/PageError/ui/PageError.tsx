import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import styles from "./PageError.module.scss";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      <p>{t("Произошла непредвиденная ошибка 😔")}</p>
      <Button theme={ButtonTheme.PRIMARY} onClick={reloadPage}>
        {t("Перезагрузить страницу")}
      </Button>
    </div>
  );
};
