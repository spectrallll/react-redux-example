import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Text, TextSize } from "@/shared/ui/Text/Text";
import { ArticleList } from "@/entities/Article";
import { VStack } from "@/shared/ui/Stack";
import { useArticleRecommendationsList } from "../../api/articleRecommendationsApi";

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const { data: articles = [], isFetching, error } = useArticleRecommendationsList(3);

  if (error) {
    return null;
  }

  return (
    <VStack gap="8" className={className}>
      <Text
        size={TextSize.L}
        title={t("Рекомендуем")}
      />
      <ArticleList
        target="_blank"
        articles={articles}
        isLoading={isFetching}
      />
    </VStack>
  );
});
