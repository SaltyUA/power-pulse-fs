import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBodyParts,
  fetchEquipment,
  fetchMuscles,
  fetchExercises,
  addExerciseThunk,
} from './operationExercises';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: {
    bodyParts: [],
    muscles: [],
    equipment: [],
    exercises: [],
    currentExercise: null,
    currentFilter: 'Body parts',
    currentCategorie: null,
    isLoading: false,
    error: null,
    isShowModal: false,
  },
  reducers: {
    setCurrentFilter(state, { payload }) {
      state.currentFilter = payload;
    },
    setCurrentCategorie(state, { payload }) {
      state.currentCategorie = payload;
    },
    setIsShowModal(state, { payload }) {
      state.isShowModal = payload;
    },
    setCurrentExercise(state, { payload }) {
      state.currentExercise = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchExercises.pending, handlePending)
      .addCase(fetchExercises.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.exercises = action.payload;
      })
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
        state.muscles = action.payload;
      })
      .addCase(fetchMuscles.rejected, handleRejected)
      .addCase(fetchEquipment.pending, handlePending)
      .addCase(fetchEquipment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.equipment = action.payload;
      })
      .addCase(fetchEquipment.rejected, handleRejected)
      .addCase(addExerciseThunk.pending, handlePending)
      .addCase(addExerciseThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addExerciseThunk.rejected, handleRejected),
});

export const exercisesReducer = exercisesSlice.reducer;
export const {
  setCurrentCategorie,
  setCurrentFilter,
  setCurrentExercise,
  setIsShowModal,
} = exercisesSlice.actions;
