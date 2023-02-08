import { memo } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ArticleList } from "@/entities/Article";
import { Text, TextTheme } from "@/shared/ui/Text/Text";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { getArticles } from "../../model/slices/articlesPageSlice";

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const {
    className,
  } = props;

  const { t } = useTranslation("article");

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  if (error) {
    return <Text theme={TextTheme.ERROR} text={t("Ошибка при загрузке статей")} />;
  }

  return (
    <div className={className}>
      <ArticleList
        articles={articles}
        view={view}
        isLoading={isLoading}
      />
    </div>
  );
});
