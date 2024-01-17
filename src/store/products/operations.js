import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts, addProduct } from '../../api/products';

export const getProductsThunk = createAsyncThunk(
  'products/getProducts',
  async ({ queryParams, page }, thunkAPI) => {
    try {
      // const {auth: {token}} = thunkAPI.getState();
      const { data } = await getProducts({ ...queryParams, page });
      return { data, page };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addProductThunk = createAsyncThunk(
  'products/addProduct',
  async (body, thunkAPI) => {
    try {
      const response = await addProduct(body);
      return response;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
