import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "widgets/Page";
import { VStack } from "shared/ui/Stack";
import { ArticleRecommendationsList } from "features/articleRecommendationsList";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { articleDetailsPageReducer } from "../../model/slice";
import styles from "./ArticleDetailsPage.module.scss";

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
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>

  );
};

export default memo(ArticleDetailsPage);
