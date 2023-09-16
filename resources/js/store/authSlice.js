import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    userType: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUserType: (state, action) => {
            state.userType = action.payload; // Add userType to the state
        },
        clearToken: (state) => {
            state.token = null;
            state.userType = null;
        },
    },
});

export const { setToken, setUserType, clearToken } = authSlice.actions;
export default authSlice.reducer;
