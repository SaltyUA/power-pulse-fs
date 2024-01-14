import { createSlice } from '@reduxjs/toolkit';
import { getProductsThunk } from './operations';

const initialState = {
  error: null,
  isLoading: null,
  products: [],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(getProductsThunk.pending, state => {
                state.isLoading = true;
            })
            .addCase(getProductsThunk.fulfilled, (state, action) => {
                state.products = action.payload;
                    state.isLoading = false;
                state.error = null;
            })
            .addCase(getProductsThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.products = [];
            })
})

export const productsReducer = productsSlice.reducer;