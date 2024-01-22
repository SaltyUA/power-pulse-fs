import { createAsyncThunk } from '@reduxjs/toolkit';
import * as exercisesAPI from './exercises-api';

export const fetchExercises = createAsyncThunk(
  'exercises/fetchExercises',
  async (_, thunkAPI) => {
    try {
      const {
        auth: { token },
      } = thunkAPI.getState();
      exercisesAPI.tokenControl.set(token);
      const exercises = await exercisesAPI.fetchExercises('/exercises');
      return exercises;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchBodyParts = createAsyncThunk(
  'filters/fetchBodyParts',
  async (_, thunkAPI) => {
    try {
      const {
        auth: { token },
      } = thunkAPI.getState();
      exercisesAPI.tokenControl.set(token);
      const bodyParts = await exercisesAPI.fetchBodyParts('/filters');
      return bodyParts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMuscles = createAsyncThunk(
  'exercises/fetchMuscles',
  async (params, thunkAPI) => {
    try {
      const {
        auth: { token },
      } = thunkAPI.getState();
      exercisesAPI.tokenControl.set(token);
      const muscles = await exercisesAPI.fetchMuscles(params);
      return muscles;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchEquipment = createAsyncThunk(
  'exercises/fetchEquipments',
  async (params, thunkAPI) => {
    try {
      const {
        auth: { token },
      } = thunkAPI.getState();
      exercisesAPI.tokenControl.set(token);
      const equipments = await exercisesAPI.fetchEquipment(params);
      return equipments;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
