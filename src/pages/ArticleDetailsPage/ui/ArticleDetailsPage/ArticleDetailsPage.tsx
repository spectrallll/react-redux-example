import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  fetchCommentsByArticleId,
} from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from "../../model/slice/articleDetailsCommentsSlice";
import styles from "./ArticleDetailsPage.module.scss";
import { getArticleCommentsIsLoading, getArticleCommentsError } from "../../model/selectors/comments";

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

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const commentsError = useSelector(getArticleCommentsError);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <div
        className={classNames(styles.ArticleDetailsPage, {}, [className])}
      >
        {t("Статья не найдена")}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div
        className={classNames(
          styles.ArticleDetailsPage,
          {},
          [className],
        )}
      >
        <ArticleDetails id={id} />
        <Text title={t("Комментарии")} className={styles.commentTitle} />
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </div>
    </DynamicModuleLoader>

  );
};

export default memo(ArticleDetailsPage);
