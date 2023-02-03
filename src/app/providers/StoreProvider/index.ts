import { StateSchema, ReduxStoreWithManager, ThunkConfig } from "./config/StateSchema";
import { AppDispatch, createReduxStore } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";

export {
  StoreProvider,
  createReduxStore,
};

export type {
  StateSchema,
  ReduxStoreWithManager,
  AppDispatch,
  ThunkConfig,
};
