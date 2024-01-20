import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { register, logIn, logOut, refreshUser } from './thunk';
// import { handleFullfilled, handlePending, handleRejected } from '../helpers';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => 
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
       .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
  state.error = payload;
      })
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload;
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
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),
      // .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
      // .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
      // .addMatcher(
      //   (action) => action.type.endsWith('/fulfilled'),
      //   handleFullfilled
      // );
    
});

export const authReducer = authSlice.reducer;
