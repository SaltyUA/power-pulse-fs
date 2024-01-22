import { createSlice } from '@reduxjs/toolkit';
import {
  getProductsThunk,
  addProductThunk,
  getCategoriesList,
} from './operations';

const initialState = {
  error: null,
  isLoading: false,
  products: null,
  isSuccessPopUpShown: false,
  totalPages: 1,
  addProductFalse: false,
  categories: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setIsSuccessPopUpShown(state, action) {
      state.isSuccessPopUpShown = action.payload;
    },
    setAddProductFalse(state, action) {
      state.addProductFalse = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getProductsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        if (action.payload.page === 1) {
          state.products = action.payload.data.products;
        } else {
          const uniqueProducts = action.payload.data.products.filter(
            (newProduct) =>
              state.products &&
              !state.products.some(
                (existingProduct) => existingProduct._id === newProduct._id
              )
          );
          state.products = state.products
            ? [...state.products, ...uniqueProducts]
            : uniqueProducts;
        }
        state.totalPages = action.payload.data.pages;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getProductsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.products = [];
      })
      .addCase(addProductThunk.pending, (state) => {
        state.addProductFalse = false;
      })
      .addCase(addProductThunk.fulfilled, (state) => {
        state.error = null;
        state.addProductFalse = false;
        state.isSuccessPopUpShown = true;
      })
      .addCase(addProductThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.addProductFalse = true;
      })
      .addCase(getCategoriesList.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      }),
});

export const productsReducer = productsSlice.reducer;
export const { setIsSuccessPopUpShown, setAddProductFalse } =
  productsSlice.actions;
