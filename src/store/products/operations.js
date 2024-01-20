import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts, addProduct, getCategories, tokenControl } from '../../api/products';

export const getProductsThunk = createAsyncThunk(
  'products/getProducts',
  async ({ queryParams, page }, thunkAPI) => {
    try {
      const { auth: { token } } = thunkAPI.getState();
      tokenControl.set(token)
      const { data } = await getProducts({ ...queryParams, page });
      return { data, page };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addProductThunk = createAsyncThunk(
  'products/addProduct',
  async ({ newProduct,_id}, thunkAPI) => {
       try {
      const { auth: { token } } = thunkAPI.getState();
      tokenControl.set(token)
      const response = await addProduct(newProduct,_id);
      return response;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCategoriesList = createAsyncThunk(
  'products/getCategoriesList',
  async (_, thunkAPI) => {
    try {
      const { auth: { token } } = thunkAPI.getState();
            tokenControl.set(token)
      const {data} = await getCategories();
     
      return data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
