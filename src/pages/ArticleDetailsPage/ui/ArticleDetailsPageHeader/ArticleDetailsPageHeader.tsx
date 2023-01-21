import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCantEditArticle } from "pages/ArticleDetailsPage/model/selectors/article";
import { getArticleDetailsData } from "entities/Article";
import styles from "./ArticleDetailsPageHeader.module.scss";

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const {
    className,
  } = props;

  const { t } = useTranslation("article");
  const navigate = useNavigate();

  const canEdit = useSelector(getCantEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}edit`);
  }, [article?.id, navigate]);

  return (
    <div
      className={classNames(styles.ArticleDetailsPageHeader, {}, [className])}
    >
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={onBackToList}
      >
        {t("Назад к списку")}
      </Button>
      {canEdit && (
        <Button
          className={styles.editBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onEditArticle}
        >
          {t("Редактировать")}
        </Button>
      )}
    </div>
  );
});
