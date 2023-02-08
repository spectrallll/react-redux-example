import {
  AnyAction, CombinedState, Dispatch, EnhancedStore, Reducer, ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { CounterSchema } from "@/entities/Counter";
import { UserSchema } from "@/entities/User";
import { LoginSchema } from "@/features/authByUsername";
import { ProfileSchema } from "@/features/editableProfileCard";
import { ArticleDetailsSchema } from "@/entities/Article";
import {
  ArticleDetailsPageSchema,
} from "@/pages/ArticleDetailsPage";
import { AddCommentFormSchema } from "@/features/addCommentForm";
import { ArticlesPageSchema } from "@/pages/ArticlesPage";
import { ScrollSaveSchema } from "@/widgets/Page";
import { rtkApi } from "@/shared/api/rtkApi";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  scrollSave: ScrollSaveSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Асинхронные reducer
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
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
