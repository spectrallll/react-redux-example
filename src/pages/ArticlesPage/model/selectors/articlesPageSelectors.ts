import { StateSchema } from "@/app/providers/StoreProvider";
import { ArticleSortField, ArticleType, ArticleView } from "@/entities/Article";

export const getArticlesPageIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) =>
  state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) =>
  state.articlesPage?.view || ArticleView.LIST;
export const getArticlesPageLimit = (state: StateSchema) =>
  state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: StateSchema) =>
  state.articlesPage?.hasMore;
export const getArticlesPageNum = (state: StateSchema) =>
  state.articlesPage?.page || 1;
export const getArticlesPageInit = (state: StateSchema) =>
  state.articlesPage?._inited;
export const getArticlePageSort = (state: StateSchema) =>
  state.articlesPage?.sort ?? ArticleSortField.CREATED;
export const getArticlePageOrder = (state: StateSchema) =>
  state.articlesPage?.order ?? "asc";
export const getArticlePageSearch = (state: StateSchema) =>
  state.articlesPage?.search ?? "";
export const getArticlePageType = (state: StateSchema) =>
  state.articlesPage?.type || ArticleType.ALL;
