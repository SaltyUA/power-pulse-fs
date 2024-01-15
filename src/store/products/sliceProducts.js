import { createSlice } from '@reduxjs/toolkit';
import { getProductsThunk, addProductThunk } from './operations';

const initialState = {
  error: null,
  isLoading: null,
  products: [],
  isSuccessPopUpShown: false,
  page: 1
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setIsSuccessPopUpShown(state, action) {
      state.isSuccessPopUpShown = action.payload;
    },
     setPage(state,) {
      state.page = 1;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getProductsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        
                if (action.payload.params.pages === 1 || !action.payload.params.pages) {
          state.products = action.payload.data.data.products;
        } else {
       const uniqueProducts = action.payload.data.data.products.filter(
  (newProduct) => !state.products.some((existingProduct) => existingProduct._id === newProduct._id)
          );
           state.products = [...state.products, ...uniqueProducts];
        }
        // state.products = action.payload.data.products;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getProductsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.products = [];
      })
   .addCase(addProductThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProductThunk.fulfilled, (state) => {
                state.isLoading = false;
                state.error = null;
      })
      .addCase(addProductThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
              }),
});

export const productsReducer = productsSlice.reducer;
export const { setIsSuccessPopUpShown, setPage } = productsSlice.actions;
