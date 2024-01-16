import { createAsyncThunk } from '@reduxjs/toolkit';
import * as exercisesAPI from './exercises-api';

export const fetchBodyParts = createAsyncThunk(
    'exercises/fetchBodyParts',
    async (_, {rejectWithValue}) => {
       try{
        const bodyParts = await exercisesAPI.fetchBodyParts();
        return bodyParts;
       }catch(error){
        return rejectWithValue(error);
       }
    }
);

export const fetchMuscules = createAsyncThunk(
    'exercises/fetchMuscules',
    async (_, {rejectWithValue}) => {
      try {
        const muscules = await exercisesAPI.fetchMuscules();
        return muscules;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    },
  );
  
  export const fetchEquipments = createAsyncThunk(
    'exercises/fetchEquipments',
    async (_, {rejectWithValue}) => {
      try {
        const equipments = await exercisesAPI.fetchEquipments();
        return equipments;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    },
  );
  

