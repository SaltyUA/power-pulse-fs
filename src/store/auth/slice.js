import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { register, logIn, logOut, refreshUser } from './thunk';
import { handleFullfilled, handlePending, handleRejected } from '../helpers';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
      .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        handleFullfilled
      );
  },
});

export const authReducer = authSlice.reducer;
