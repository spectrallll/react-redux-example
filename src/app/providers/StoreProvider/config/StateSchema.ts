import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";
import {
  AnyAction, CombinedState, Dispatch, EnhancedStore, Reducer, ReducersMapObject,
} from "@reduxjs/toolkit";
import { ProfileSchema } from "entities/Profile";
import { AxiosInstance } from "axios";
import { ArticleDetailsSchema } from "entities/Article";
import { ArticleDetailsCommentsSchema } from "pages/ArticleDetailsPage";
import { AddCommentFormSchema } from "features/AddCommentForm";
import { ArticlesPageSchema } from "pages/ArticlesPage";
import { ScrollSaveSchema } from "widgets/Page";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  scrollSave: ScrollSaveSchema;

  // Асинхронные reducer
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;

  // true - вмонтирован, false - демонтирован
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance,
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  dispatch?: Dispatch;
  state: StateSchema;
}
