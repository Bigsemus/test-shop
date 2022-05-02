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
        setBasketFromLocalStorage: (state, {payload}) => {
            console.log(payload.product)
            state.price = payload.price;
             state.product = payload.product;
        },
        addProduct: (state, {payload}) => {
            state.price += payload?.vote_average;
            state.product = state.product.map((elem) => elem.id === payload.id ? payload : elem)
        },
        delProduct: (state, {payload}) => {
            state.price -= payload?.vote_average;
            state.product = state.product.map((elem) => elem.id === payload.id ? payload : elem)
            if (payload.countProduct < 1) {
                state.product = [...state.product.filter(product => product.id !== payload.id)];
                localStorage.removeItem('order')
                localStorage.removeItem('price')
            }
        }
    },
})

export default basketSlice.reducer;
export const {setBasketProduct, addProduct, delProduct, setBasketFromLocalStorage} = basketSlice.actions;