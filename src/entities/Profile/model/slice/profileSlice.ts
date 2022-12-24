import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { Profile, ProfileSchema } from "../types/profile";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  error: undefined,
  data: undefined,
  validateErrors: undefined,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
      state.validateErrors = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.validateErrors = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchProfileData.fulfilled, (
      state,
      action: PayloadAction<Profile>,
    ) => {
      state.isLoading = false;
      state.data = action.payload;
      state.form = action.payload;
    });
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(updateProfileData.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(updateProfileData.fulfilled, (
      state,
      action: PayloadAction<Profile>,
    ) => {
      state.isLoading = false;
      state.data = action.payload;
      state.form = action.payload;
      state.readonly = true;
      state.validateErrors = undefined;
    });
    builder.addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.validateErrors = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
