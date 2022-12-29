import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import styles from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const {
    className,
  } = props;

  const { t } = useTranslation();

  return (
    <div
      className={classNames(styles.ArticlesPage, {}, [className])}
    >
      {t("")}
    </div>
  );
};

export default memo(ArticlesPage);
