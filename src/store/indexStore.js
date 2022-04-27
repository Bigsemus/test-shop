import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userSlice from './userData';

const rootReducer = combineReducers(
    {
        userToolkit: userSlice,
    },
);

const customMiddleWare = (store) => (next) => (action) => {
    if ((action) && process.env.NODE_ENV !== 'production') {
        console.log('Action triggered:', action);
    }
    next(action);
};

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleWare),
});