import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { ArticleListItemSkeleton } from "entities/Article/ui/ArticleListItem/ArticleListItemSkeleton";
import styles from "./ArticleList.module.scss";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

interface ArticleListProps {
    className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.LIST ? 9 : 3).fill(0).map((item, index) => (
  <ArticleListItemSkeleton className={styles.card} view={view} key={`${index + 5}`} />
));
export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.LIST,
  } = props;

  const renderArticle = useCallback((article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      className={styles.card}
      key={article.id}
    />
  ), [articles]);

  if (isLoading) {
    return (
      <div
        className={classNames(styles.ArticleList, {}, [className, styles[view]])}
      >
        {getSkeletons(view)}
      </div>
    );
  }

  return (
    <div
      className={classNames(styles.ArticleList, {}, [className, styles[view]])}
    >
      {articles.length ? articles.map(renderArticle) : null}
    </div>
  );
});
