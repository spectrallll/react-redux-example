import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Page } from "shared/ui/Page/Page";
import styles from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <Page className={classNames(styles.NotFoundPage, {}, [className])}>
      {t("Страница не найдена")}
    </Page>
  );
};
