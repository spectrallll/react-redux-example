import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Comment } from "@/entities/Comment";
import { getArticleDetailsData } from "@/entities/Article";
import { articleDetailsCommentsActions } from "../../slice/articleDetailsCommentsSlice";

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>("articleDetails/addCommentForArticle", async (text, thunkApi) => {
  const { dispatch, rejectWithValue, extra, getState } = thunkApi;

  const userData = getUserAuthData(getState());
  const article = getArticleDetailsData(getState());

  if (!userData || !text || !article) {
    return rejectWithValue("no data");
  }

  try {
    const response = await extra.api.post<Comment>("/comments", {
      articleId: article.id,
      userId: userData.id,
      text,
    });

    const newComment = {
      id: response.data.id,
      text: response.data.text,
      user: userData,
    };
    dispatch(articleDetailsCommentsActions.addComment(newComment));

    return response.data;
  } catch (e) {
    return rejectWithValue("error");
  }
});
