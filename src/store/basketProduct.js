import {createSlice} from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        product: [],
        price: null,
    },
    reducers: {
        setBasketProduct: (state, {payload}) => {
            state.price += payload.price;
            state.product.push(payload.product);
        }
    },
})

export default basketSlice.reducer;
export const {setBasketProduct} = basketSlice.actions;