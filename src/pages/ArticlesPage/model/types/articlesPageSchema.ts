import { EntityState } from "@reduxjs/toolkit";
import {
  Article, ArticleView, ArticleSortField, ArticleType,
} from "@/entities/Article";
import { SortOrder } from "@/shared/types";

export interface ArticlesPageSchema extends EntityState<Article>{
  isLoading?: boolean;
  error?: string | null;
  view: ArticleView;

  // Paginate
  page: number;
  limit: number;
  hasMore: boolean;
  // filters
  order: SortOrder;
  sort: ArticleSortField
  search: string;
  type: ArticleType;
  // No change field
  _inited: boolean;
}
