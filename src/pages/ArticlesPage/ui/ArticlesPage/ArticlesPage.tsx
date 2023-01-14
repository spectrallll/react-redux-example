import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { ArticleList, ArticleView, ArticleViewSelector } from "entities/Article";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { Page } from "shared/ui/Page/Page";
import { fetchNextArticles } from "pages/ArticlesPage/model/services/fetchNextArticles/fetchNextArticles";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import styles from "./ArticlesPage.module.scss";
import { articlesPageActions, articlesPageReducer, getArticles } from "../../model/slices/articlesPageSlice";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";

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

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticles());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({
      page: 1,
    }));
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(styles.ArticlesPage, {}, [className])}
      >
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          articles={articles}
          view={view}
          isLoading={isLoading}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
