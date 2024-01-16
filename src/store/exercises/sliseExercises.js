import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBodyParts,
  fetchEquipments,
  fetchMuscules,
} from './operationExercises';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  console.log('state.items', state.items);
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: {
    bodyParts: [],
    muscules: [],
    equipments: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchBodyParts.pending, handlePending)
      .addCase(fetchBodyParts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.bodyParts = action.payload;
      })
      .addCase(fetchBodyParts.rejected, handleRejected)
      .addCase(fetchMuscules.pending, handlePending)
      .addCase(fetchMuscules.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.muscules = action.payload;
      })
      .addCase(fetchMuscules.rejected, handleRejected)
      .addCase(fetchEquipments.pending, handlePending)
      .addCase(fetchEquipments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.equipment = action.payload;
      })
      .addCase(fetchEquipments.rejected, handleRejected),
  // .addCase(addExercise.pending, handlePending)
  // .addCase(addExercise.fulfilled, state => {
  //   state.isLoading = false;
  //   state.error = null;
  // })
  // .addCase(addExercise.rejected, handleRejected),
  // .addCase(deleteExercise.pending, handlePending)
  // .addCase(deleteExercise.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   state.error = null;
  //   state.items = state.items.filter(item => item.id !== action.payload.id);
  // })
  // .addCase(deleteExercise.rejected, handleRejected),
  // extraReducers: {
  //   [fetchBodyParts.pending]: handlePending,
  //   [addExercise.pending]: handlePending,
  //   [deleteExercise.pending]: handlePending,
  //   [fetchBodyParts.rejected]: handleRejected,
  //   [addExercise.rejected]: handleRejected,
  //   [deleteExercise.rejected]: handleRejected,
  //   [fetchBodyParts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [addExercise.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items.push(action.payload);
  //   },
  //   [deleteExercise.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.items.findIndex(
  //       task => task.id === action.payload.id,
  //     );
  //     state.items.splice(index, 1);
  //   },
  //   [logOut.fulfilled](state) {
  //     state.items = [];
  //     state.error = null;
  //     state.isLoading = false;
  //   },
  // },
});

export const exercisesReducer = exercisesSlice.reducer;