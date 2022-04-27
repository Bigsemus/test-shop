import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'userToolkit',
    initialState: {
        isAuth: false,
    },
    reducers: {
        getValueIsAuth: (state, action) => {
            state.isAuth = action.payload;
        },
    },
});

export default userSlice.reducer;
export const { getValueIsAuth } = userSlice.actions;