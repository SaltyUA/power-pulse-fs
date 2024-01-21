import { createSlice } from '@reduxjs/toolkit';
import {
  fetchDiaryData,
  fetchExercises,
  delExercisesDay,
} from './operationDiary';
import { format } from 'date-fns';


const diarySlice = createSlice({
  name: 'diaryRecords',
  initialState: {
    choiceDate: format(Date.now(), 'dd-MM-yyyy'),
    diaryInfo: [],
    isLoading: false,
    error: null,
    exercises: [],
  },
  reducers: {
    setDayInfo(state, action) {
      state.choiceDate = action.payload;
    },
    setExercises(state, action) {
      state.exercises = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      // .addCase(fetchBodyParts.pending, handlePending)
      .addCase(fetchDiaryData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.diaryInfo = action.payload;
      })
      .addCase(fetchExercises.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.exercises = action.payload;
      })
      .addCase(fetchExercises.rejected, (state) => {
        state.isLoading = false;
        state.error = null;
        state.exercises = [];
      })
      .addCase(delExercisesDay.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // state.exercises = action.payload.exercises;
        console.log(action.payload.exercises);
      }),

  // .addCase(fetchBodyParts.rejected, handleRejected)
  // .addCase(fetchMuscles.pending, handlePending)
  // .addCase(fetchMuscles.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   state.error = null;
  //   console.log(action.payload);
  //   state.muscles = action.payload;
  // })
  // .addCase(fetchMuscles.rejected, handleRejected)
  // .addCase(fetchEquipment.pending, handlePending)
  // .addCase(fetchEquipment.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   state.error = null;

  //   state.equipment = action.payload;
  // })
  // .addCase(fetchEquipment.rejected, handleRejected),
});
export const { setDayInfo, setExercises } = diarySlice.actions;

export const diaryReducer = diarySlice.reducer;
