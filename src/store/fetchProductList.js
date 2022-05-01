import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import fetchAllProducts from "../services/ProductsService";

export const fetchProductList = createAsyncThunk(
    'productList/fetchProductList',
    async (args, thunkAPI) => {
        try {
            let response = await fetchAllProducts()
            return response.data.results;
        } catch (error) {
            return thunkAPI.rejectWithValue({
                message: 'Cannot get product info',
            });
        }
    },
);

const allProductsSlice = createSlice({
    name : 'productList',
    initialState: {
        products : [],
        isLoading: false,
        error: null,
    },
    reducers : {},
    extraReducers: {
        [fetchProductList.pending] : (state) => {
            state.isLoading = true;

        },
        [fetchProductList.fulfilled] : (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.products = payload;
        },
        [fetchProductList.rejected] : (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
            state.products = null;
        },
    },
});

export default allProductsSlice.reducer;