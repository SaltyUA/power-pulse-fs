import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  fetchDiary,
  tokenControl,
  fetchExerciseRemove,
  fetchProductRemove,
} from './diary-api';


export const fetchDiaryData = createAsyncThunk(
  'diary/fetchDiaryData',
  async (params, thunkAPI) => {
    try {
      const {
        auth: { token },
      } = thunkAPI.getState();
      tokenControl.set(token);
      const data = await fetchDiary(params);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const delExercisesDay = createAsyncThunk(
  'diary/delExercisesDay',
  async (params, thunkAPI) => {
    try {
      const {
        auth: { token },
      } = thunkAPI.getState();
      tokenControl.set(token);
      const data = await fetchExerciseRemove(params);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const delProductsDay = createAsyncThunk(
  'diary/delProductsDay',
  async (params, thunkAPI) => {
    try {
      const {
        auth: { token },
      } = thunkAPI.getState();
      tokenControl.set(token);
      const data = await fetchProductRemove(params);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);