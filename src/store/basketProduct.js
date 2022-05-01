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
        },
        addProduct: (state, {payload}) => {
            state.price += payload?.vote_average;
        },
        delProduct: (state, {payload}) => {
            state.price -= payload.product?.vote_average;
            if (payload.count <= 1) {
                state.product = [...state.product.filter(product => product.id !== payload.product.id)];
            }
        }
    },
})

export default basketSlice.reducer;
export const {setBasketProduct, setOrderProduct, addProduct, delProduct} = basketSlice.actions;