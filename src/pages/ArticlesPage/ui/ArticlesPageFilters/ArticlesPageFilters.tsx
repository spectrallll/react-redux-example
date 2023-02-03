import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import {
  ArticleTypeTabs,
  ArticleSortField, ArticleSortSelector, ArticleView, ArticleViewSelector, ArticleType,
} from "entities/Article";
import { Input } from "shared/ui/Input/Input";
import { Card } from "shared/ui/Card/Card";
import { SortOrder } from "shared/types";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { articlesPageActions } from "../../model/slices/articlesPageSlice";
import {
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort, getArticlePageType,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import styles from "./ArticlesPageFilters.module.scss";

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const {
    className,
  } = props;

  const dispatch = useAppDispatch();
  const { t } = useTranslation("article");

  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getArticlePageSort);
  const order = useSelector(getArticlePageOrder);
  const search = useSelector(getArticlePageSearch);
  const type = useSelector(getArticlePageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(newSort));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlesPageActions.setSearch(search));
    dispatch(articlesPageActions.setPage(1));
    debouncedFetchData();
  }, [dispatch, debouncedFetchData]);

  const onChangeType = useCallback((value: ArticleType) => {
    dispatch(articlesPageActions.setType(value));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  return (
    <div
      className={classNames(styles.ArticlesPageFilters, {}, [className])}
    >
      <div className={styles.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector onViewClick={onChangeView} view={view} />
      </div>
      <Card className={styles.search}>
        <Input
          onChange={onChangeSearch}
          value={search}
          placeholder={t("Поиск")}
        />
      </Card>
      <ArticleTypeTabs
        className={styles.tabs}
        value={type}
        onChangeType={onChangeType}
      />
    </div>
  );
});
