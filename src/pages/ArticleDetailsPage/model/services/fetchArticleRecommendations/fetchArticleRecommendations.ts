import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "@/entities/Article";
import { ThunkConfig } from "@/app/providers/StoreProvider";

export const fetchArticleRecommendations = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>(
  "articlesDetailsPageRecommendations/fetchArticlesList",
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Article[]>("/articles", {
        params: {
          _expand: "user",
          _limit: 4,
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
