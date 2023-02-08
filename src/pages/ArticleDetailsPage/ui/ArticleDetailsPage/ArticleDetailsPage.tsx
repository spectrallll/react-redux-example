import { memo } from "react";
import { useParams } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleDetails } from "@/entities/Article";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "@/widgets/Page";
import { VStack } from "@/shared/ui/Stack";
import { ArticleRecommendationsList } from "@/features/articleRecommendationsList";
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

  const { id } = useParams<{ id: string }>();

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
