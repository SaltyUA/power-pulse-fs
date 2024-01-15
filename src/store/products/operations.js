import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://power-4vwy.onrender.com/api/v1/';

export const getProductsThunk = createAsyncThunk(
     'products/getProducts',
  async (params, thunkAPI) => {
      try {

        const { data } = await axios.get('/products', { params });
                return { data, params }

      } catch (e) {
             return thunkAPI.rejectWithValue(e.message);

    }
  }
)

export const addProductThunk = createAsyncThunk(
     'products/addProduct',
    async (body, thunkAPI) => {
      try {
      const response = await axios.post('/diary-records/add-product-body', body);
      console.log(response)
      return response

    } catch (e) {
      console.log(e.message)
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)
