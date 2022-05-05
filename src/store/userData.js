import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuth: false,
    userData: null,
  },
  reducers: {
    getValueIsAuth: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.isAuth = action.payload;
    },
    getValueOrderForm: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.userData = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { getValueIsAuth, getValueOrderForm } = userSlice.actions;
