import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/authByUsername/model/slice/loginSlice";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { articleDetailsPageReducer } from "pages/ArticleDetailsPage/model/slice";
import { addCommentFormReducer } from "features/addCommentForm/model/slices/addCommentFormSlice";
import { profileReducer } from "features/editableProfileCard/model/slice/profileSlice";

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
