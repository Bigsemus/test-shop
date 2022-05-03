import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    product: [],
    price: null,
  },
  reducers: {
    setBasketProduct: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.price += payload.price;
      state.product.push(payload.product);
    },
    setBasketFromLocalStorage: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.price = payload.price;
      // eslint-disable-next-line no-param-reassign
      state.product = payload.product;
    },
    addProduct: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.price += payload?.vote_average ?? 0;
      // eslint-disable-next-line no-param-reassign
      state.product = state.product.map((elem) => (elem.id === payload.id ? payload : elem));
    },
    delProduct: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.price -= payload?.vote_average ?? 0;
      // eslint-disable-next-line no-param-reassign
      state.product = state.product.map((elem) => (elem.id === payload.id ? payload : elem));
      if (payload.countProduct < 1) {
        // eslint-disable-next-line no-param-reassign
        state.product = [...state.product.filter((product) => (product.id !== payload.id))];
        localStorage.removeItem('order');
        localStorage.removeItem('price');
      }
    },
  },
});

export default basketSlice.reducer;
export const {
  setBasketProduct,
  addProduct,
  delProduct,
  setBasketFromLocalStorage,
} = basketSlice.actions;
