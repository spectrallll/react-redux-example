import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ArticleDetails, ArticleList } from "entities/Article";
import { useParams } from "react-router-dom";
import { Text, TextSize } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { AddCommentForm } from "features/addCommentForm";
import { Page } from "widgets/Page";
import { VStack } from "shared/ui/Stack";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import {
  fetchArticleRecommendations,
} from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { articleDetailsPageReducer } from "../../model/slice";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { getArticleComments } from "../../model/slice/articleDetailsCommentsSlice";
import styles from "./ArticleDetailsPage.module.scss";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import {
  getArticleRecommendations,
} from "../../model/slice/articleDetailsPageRecommendationsSlice";
import { getArticleRecommendationsIsLoading } from "../../model/selectors/recommendations";

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};
const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const {
    className,
  } = props;

  const { t } = useTranslation("article");
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

  const onSendComment = useCallback((commentText: string) => {
    dispatch(addCommentForArticle(commentText));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  if (!id) {
    return (
      <Page
        className={classNames(styles.ArticleDetailsPage, {}, [className])}
      >
        {t("Статья не найдена")}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page
        className={classNames(
          styles.ArticleDetailsPage,
          {},
          [className],
        )}
      >
        <VStack max gap="16">
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <Text
            size={TextSize.L}
            className={styles.recommendTitle}
            title={t("Рекомендуем")}
          />
          <ArticleList
            target="_blank"
            articles={recommendations}
            isLoading={recommendationsIsLoading}
            className={styles.recommendations}
          />
          <Text
            title={`${t("Комментарии")}:`}
            className={styles.commentTitle}
          />
          <AddCommentForm
            className={styles.commentForm}
            onSendComment={onSendComment}
          />
          <CommentList
            isLoading={commentsIsLoading}
            comments={comments}
          />
        </VStack>
      </Page>
    </DynamicModuleLoader>

  );
};

export default memo(ArticleDetailsPage);
