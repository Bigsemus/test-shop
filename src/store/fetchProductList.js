import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchAllProducts from '../services/ProductsService';

export const fetchProductList = createAsyncThunk(
  'productList/fetchProductList',
  async (args, thunkAPI) => {
    try {
      const response = await fetchAllProducts();
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: 'Cannot get product info',
      });
    }
  },
);

const allProductsSlice = createSlice({
  name: 'productList',
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchProductList.pending]: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = true;
    },
    [fetchProductList.fulfilled]: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = false;
      // eslint-disable-next-line no-param-reassign
      state.error = null;
      // eslint-disable-next-line no-param-reassign
      state.products = payload;
    },
    [fetchProductList.rejected]: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = false;
      // eslint-disable-next-line no-param-reassign
      state.error = payload;
      // eslint-disable-next-line no-param-reassign
      state.products = null;
    },
  },
});

export default allProductsSlice.reducer;
