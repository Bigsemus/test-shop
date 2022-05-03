import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './userData';
import allProductsSlice from './fetchProductList';
import basketSlice from './basketProduct';

const rootReducer = combineReducers(
  {
    user: userSlice,
    productList: allProductsSlice,
    basket: basketSlice,
  },
);

// eslint-disable-next-line no-unused-vars
const customMiddleWare = (store) => (next) => (action) => {
  if ((action) && process.env.NODE_ENV !== 'production') { // eslint-disable-next-line
    console.log('Action triggered:', action);
  }
  next(action);
};

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleWare),
});
