import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signUp,
  signIn,
  refresh,
  signOut,
  patchUser,
  putAvatar,
  resendVerify,
  emailVerify,
} from '../../api/auth';

export const register = createAsyncThunk(
  'auth/register',
  async (body, thunkAPI) => {
    try {
      const response = await signUp(body);
      if (response) {
        const data = await signIn({
          email: body.email,
          password: body.password,
        });
        return data;
      }
    } catch (error) {
      console.log(error.response.data);

      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const data = await signIn(body);
    return data;
  } catch (error) {
    console.log(error.response.data);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const data = await signOut();
    return data;
  } catch (error) {
    console.log(error.response.data);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      const data = await refresh(persistedToken);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserData = createAsyncThunk(
  'auth/data',
  async (body, thunkAPI) => {
    try {
      const data = await patchUser(body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserAvatar = createAsyncThunk(
  'auth/avatar',
  async (body, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('image', body);
      const data = await putAvatar(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resendEmail = createAsyncThunk(
  'auth/resend',
  async (body, thunkAPI) => {
    try {
      const data = await resendVerify(body);
      return data;
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const verifyEmail = createAsyncThunk(
  'auth/verify',
  async (body, thunkAPI) => {
    try {
      const data = await emailVerify(body);
      return data;
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
