import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBodyParts,
  fetchEquipment,
  fetchMuscles,
} from './operationExercises';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  // console.log('state.items', state.items);
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: {
    bodyParts: [],
    muscles: [],
    equipment: [],
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
      .addCase(fetchMuscles.pending, handlePending)
      .addCase(fetchMuscles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log(action.payload);
        state.muscles = action.payload;
      })
      .addCase(fetchMuscles.rejected, handleRejected)
      .addCase(fetchEquipment.pending, handlePending)
      .addCase(fetchEquipment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.equipment = action.payload;
      })
      .addCase(fetchEquipment.rejected, handleRejected),
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