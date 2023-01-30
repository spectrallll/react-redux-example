import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Page } from "widgets/Page";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { useSearchParams } from "react-router-dom";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { ArticleInfiniteList } from "../ArticleInfiniteList/ArticleInfiniteList";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";
import { fetchNextArticles } from "../../model/services/fetchNextArticles/fetchNextArticles";
import styles from "./ArticlesPage.module.scss";
import { articlesPageReducer } from "../../model/slices/articlesPageSlice";

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};
const ArticlesPage = (props: ArticlesPageProps) => {
  const {
    className,
  } = props;

  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticles());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(styles.ArticlesPage, {}, [className])}
      >
        <ArticlesPageFilters />
        <ArticleInfiniteList className={styles.list} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
