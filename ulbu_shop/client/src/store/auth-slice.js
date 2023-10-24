import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
    user: {}
};

const login = (state) => {
    state.isAuth = true;
};

const logout = (state) => {
    state.isAuth = false;
};

const setUser = (state, action) => {
    state.user = action.payload;
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login,
        logout,
        setUser
    }
});

export const authActions = authSlice.actions;
export default authSlice;