import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuth: false,
        userData: null,
    },
    reducers: {
        getValueIsAuth: (state, action) => {
            state.isAuth = action.payload;
        },
        getValueOrderForm: (state, action) => {
            state.userData = action.payload;
        },
    },
});

export default userSlice.reducer;
export const { getValueIsAuth, getValueOrderForm } = userSlice.actions;