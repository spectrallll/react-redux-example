import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { classNames } from "@/shared/lib/classNames/classNames";
import { getArticleDetailsData } from "@/entities/Article";
import { HStack } from "@/shared/ui/Stack";
import { getCantEditArticle } from "../../model/selectors/article";
import { RoutePath } from "@/shared/const/router";

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
    navigate(`${RoutePath.article_details}${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <HStack
      max
      justify="spaceBetween"
      className={classNames("", {}, [className])}
    >
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={onBackToList}
      >
        {t("Назад к списку")}
      </Button>
      {canEdit && (
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onEditArticle}
        >
          {t("Редактировать")}
        </Button>
      )}
    </HStack>
  );
});
