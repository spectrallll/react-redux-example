import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import styles from "./ArticleList.module.scss";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view: ArticleView
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.LIST ? 9 : 3).fill(0).map((item, index) => (
  <ArticleListItemSkeleton className={styles.card} view={view} key={`${index + 5}`} />
));
export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view,
  } = props;

  const renderArticle = useCallback((article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      className={styles.card}
      key={article.id}
    />
  ), [articles, view]);

  return (
    <div
      className={classNames(styles.ArticleList, {}, [className, styles[view]])}
    >
      {articles.length ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
