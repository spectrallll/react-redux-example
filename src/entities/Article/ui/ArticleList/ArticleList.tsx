import { classNames } from "shared/lib/classNames/classNames";
import { HTMLAttributeAnchorTarget, memo, useCallback } from "react";
import { Text, TextSize } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { AutoSizer, List } from "react-virtualized";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import styles from "./ArticleList.module.scss";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
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
    target,
  } = props;

  const { t } = useTranslation("article");

  const renderArticle = useCallback((article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      className={styles.card}
      key={article.id}
      target={target}
    />
  ), [articles, view]);

  if (!isLoading && !articles.length) {
    return (
      <div
        className={classNames(styles.ArticleList, {}, [className, styles[view]])}
      >
        <Text size={TextSize.L} title={t("Статьи не найдены")} />
      </div>
    );
  }

  return (
    <div
      className={classNames(styles.ArticleList, {}, [className, styles[view]])}
    >
      {articles.length ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
    // <AutoSizer>
    //   {({ width, height }) => (
    //     <List
    //       height={height}
    //       rowCount={articles.length}
    //       rowHeight={500}
    //       rowRenderer={() => <div>row</div>}
    //       width={width}
    //     />
    //   )}
    // </AutoSizer>
  );
});
