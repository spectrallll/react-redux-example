import { ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from "@/app/providers/StoreProvider";

// Однозначно сопоставляем типы, внедрить не правильный Reducer невозможно
export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
  children: ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const {
    children, reducers, removeAfterUnmount = true,
  } = props;

  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers();
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey];
      // Добавляем reducer, если его нет
      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  }, [dispatch, reducers, removeAfterUnmount, store.reducerManager]);

  return (
  // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};
