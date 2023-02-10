import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
// eslint-disable-next-line path-checker-plugin/public-api-import-lock
import { loginReducer } from "@/features/authByUsername/model/slice/loginSlice";
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
// eslint-disable-next-line path-checker-plugin/public-api-import-lock
import { articleDetailsReducer } from "@/entities/Article/model/slice/articleDetailsSlice";
// eslint-disable-next-line path-checker-plugin/public-api-import-lock
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/model/slice";
// eslint-disable-next-line path-checker-plugin/public-api-import-lock
import { addCommentFormReducer } from "@/features/addCommentForm/model/slices/addCommentFormSlice";
// eslint-disable-next-line path-checker-plugin/public-api-import-lock
import { profileReducer } from "@/features/editableProfileCard/model/slice/profileSlice";

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (
  StoryComponent: Story,
) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
