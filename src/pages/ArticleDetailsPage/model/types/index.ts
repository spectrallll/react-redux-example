import { ArticleDetailsRecommendationsSchema } from "./ArticleDetailsRecommendationsSchema";
import { ArticleDetailsCommentsSchema } from "./ArticleDetailsCommentsSchema";

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema;
  recommendations: ArticleDetailsRecommendationsSchema;
}
