import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isLoggedIn: false };

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        setIsLoggedIn(state, action) {
            state.isLoggedIn = action.payload
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;