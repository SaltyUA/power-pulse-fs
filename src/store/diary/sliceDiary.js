import { createSlice } from '@reduxjs/toolkit';
import {
  fetchDiaryData,
  delExercisesDay,
  delProductsDay,
} from './operationDiary';
import { format } from 'date-fns';


const diarySlice = createSlice({
  name: 'diaryRecords',
  initialState: {
    choiceDate: format(Date.now(), 'dd-MM-yyyy'),
    diaryInfo: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setDayInfo(state, action) {
      state.choiceDate = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchDiaryData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.diaryInfo = action.payload;
      })
      .addCase(fetchDiaryData.rejected, (state) => {
        state.isLoading = false;
        state.error = null;
        state.diaryInfo = [];
      })
      .addCase(delExercisesDay.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.diaryInfo = action.payload;
      })
      .addCase(delProductsDay.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.diaryInfo = action.payload;
      }),
});
export const { setDayInfo } = diarySlice.actions;

export const diaryReducer = diarySlice.reducer;
