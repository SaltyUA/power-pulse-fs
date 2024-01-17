import { createAsyncThunk } from '@reduxjs/toolkit';
import * as exercisesAPI from './exercises-api';

export const fetchBodyParts = createAsyncThunk(
    'exercises/fetchBodyParts',
    async (_, thunkAPI) => {
      try {
        const bodyParts = await exercisesAPI.fetchBodyParts('/exercises');
        return bodyParts;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
  );

// export const fetchBodyParts = createAsyncThunk(
//     'filters/fetchBodyParts',
//     async (_, {rejectWithValue}) => {
//        try{
//         const bodyParts = await exercisesAPI.fetchBodyParts('/filters');
//         return bodyParts;
//        }catch(error){
//         return rejectWithValue(error);
//        }
//     }
// );

export const fetchMuscles = createAsyncThunk(
    'exercises/fetchMuscles',
    async (params, thunkAPI) => {
      try {
        const muscles = await exercisesAPI.fetchMuscles(params);
        return muscles;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
  );
  
  export const fetchEquipment = createAsyncThunk(
    'exercises/fetchEquipments',
    async (params, thunkAPI) => {
      try {
        const equipments = await exercisesAPI.fetchEquipment(params);
        return equipments;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
  );
  

