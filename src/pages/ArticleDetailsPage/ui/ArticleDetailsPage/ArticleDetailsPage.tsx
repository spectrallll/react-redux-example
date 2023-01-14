import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ArticleDetails } from "entities/Article";
import { useNavigate, useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { AddCommentForm } from "features/AddCommentForm";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Page } from "shared/ui/Page/Page";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { articleDetailsCommentsReducer, getArticleComments } from "../../model/slice/articleDetailsCommentsSlice";
import styles from "./ArticleDetailsPage.module.scss";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};
const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const {
    className,
  } = props;

  const { t } = useTranslation("article");
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const onSendComment = useCallback((commentText: string) => {
    dispatch(addCommentForArticle(commentText));
  }, [dispatch]);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
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
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onBackToList}
        >
          {t("Назад к списку")}
        </Button>
        <ArticleDetails id={id} />
        <Text title={`${t("Комментарии")}:`} className={styles.commentTitle} />
        <AddCommentForm
          className={styles.commentForm}
          onSendComment={onSendComment}
        />
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </Page>
    </DynamicModuleLoader>

  );
};

export default memo(ArticleDetailsPage);
