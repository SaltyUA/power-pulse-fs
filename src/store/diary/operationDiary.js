import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  fetchDiary,
  tokenControl,
  fetchAllExercises,
  fetchExerciseRemove,
} from './diary-api';

// export const fetchDiaryData = createAsyncThunk(
//   'diary/fetchDiaryData',
//   async (_, thunkAPI) => {
//     try {
//       const diaryInfo = await diaryAPI.fetchDiaryData('/diary-records');
//       return diaryInfo;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

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
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const fetchExercises = createAsyncThunk(
  'diary/fetchExercises',
  async (params, thunkAPI) => {
    try {
      const {
        auth: { token },
      } = thunkAPI.getState();
      tokenControl.set(token);
      const data = await fetchAllExercises(params);

      return data;
    } catch (e) {
      console.log(e.message);
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
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);