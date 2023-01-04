import { createSlice, createEntityAdapter, PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "entities/Comment";
import { StateSchema } from "app/providers/StoreProvider";
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";
import {
  fetchCommentsByArticleId,
} from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,

});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);
export const articleDetailsCommentsSlice = createSlice({
  name: "articleDetailsComments",
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    ids: [],
    entities: {},
    error: undefined,
  }),
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
      commentsAdapter.setAll(state, action.payload);
      state.isLoading = false;
    });
    builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice;
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
