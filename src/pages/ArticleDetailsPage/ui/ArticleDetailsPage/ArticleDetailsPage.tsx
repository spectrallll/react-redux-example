import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import styles from "./ArticleDetailsPage.module.scss";
import {memo} from "react";

interface ArticleDetailsPageProps {
    className?: string;
}
const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const {
    className,
  } = props;

  const { t } = useTranslation("article");

  return (
    <div
      className={classNames(styles.ArticleDetailsPage, {}, [className])}
    >
      {t("")}
    </div>
  );
};

export default memo(ArticleDetailsPage);
