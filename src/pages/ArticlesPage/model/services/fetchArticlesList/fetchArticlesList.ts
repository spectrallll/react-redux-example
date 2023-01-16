import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article, ArticleType } from "entities/Article";
import { ThunkConfig } from "app/providers/StoreProvider";
import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams";
import {
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
  getArticlesPageLimit,
  getArticlesPageNum,
} from "../../selectors/articlesPageSelectors";

interface FetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
>(
  "articlesPage/fetchArticlesList",
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const sort = getArticlePageSort(getState());
    const order = getArticlePageOrder(getState());
    const search = getArticlePageSearch(getState());
    const page = getArticlesPageNum(getState());
    const type = getArticlePageType(getState());
    const limit = getArticlesPageLimit(getState());

    try {
      addQueryParams({
        sort, order, search, type,
      });
      const response = await extra.api.get<Article[]>("/articles", {
        params: {
          _expand: "user",
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type: type === ArticleType.ALL ? undefined : type,
        },
      });
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue("error");
    }
  },
);
