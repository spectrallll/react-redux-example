import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "entities/Article";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlesPageLimit } from "pages/ArticlesPage/model/selectors/articlesPageSelectors";

interface FetchArticlesProps {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesProps,
    ThunkConfig<string>
>(
  "articlesPage/fetchArticlesList",
  async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const { page = 1 } = props;
    const limit = getArticlesPageLimit(getState());
    try {
      const response = await extra.api.get<Article[]>("/articles", {
        params: {
          _expand: "user",
          _limit: limit,
          _page: page,
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
