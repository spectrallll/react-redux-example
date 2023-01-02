import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";
import {
  AnyAction, CombinedState, Dispatch, EnhancedStore, Reducer, ReducersMapObject,
} from "@reduxjs/toolkit";
import { ProfileSchema } from "entities/Profile";
import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router-dom";
import { ArticleDetailsSchema } from "entities/Article";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Асинхронные reducer
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance,
  navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  dispatch?: Dispatch;
  state: StateSchema;
}
