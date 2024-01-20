import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  updateUserData,
  updateUserAvatar,
  resendEmail,
} from './thunk';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setResendShown(state, action) {
      state.isResendShown = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
        state.message = null;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.token = null;
        state.error = payload;
      })
      .addCase(updateUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserData.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.goToParams = false;
        state.token = payload.token;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(resendEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resendEmail.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.message = payload.message;
      })
      .addCase(resendEmail.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateUserAvatar.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.goToParams = false;
        state.token = payload.token;
        state.isLoading = false;
        state.error = null;
      }),
});

export const authReducer = authSlice.reducer;
export const { setResendShown } = authSlice.actions;
