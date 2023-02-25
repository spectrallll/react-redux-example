import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "@/entities/User";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { ThunkConfig } from "@/app/providers/StoreProvider";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  "common/loginByUsername",
  async (authData, thunkApi) => {
    const { dispatch, rejectWithValue, extra } = thunkApi;

    try {
      const response = await extra.api.post<User>("/login", authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      return rejectWithValue("error");
    }
  },
);
