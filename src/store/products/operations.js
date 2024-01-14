import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://power-4vwy.onrender.com/api/v1/';

export const getProductsThunk = createAsyncThunk(
     'products/getProducts',
    async (params, thunkAPI) => {
    try {
        const {data} = await axios.get('/products', { params });
        return data

    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)
