import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    total: 0
};

const increaseTotal = (state) => {
    state.total++;
};

const decreaseTotal = (state) => {
    state.total--;
};

const setTotal = (state, action) => {
    state.total = action.payload;
};

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        increaseTotal,
        decreaseTotal,
        setTotal
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;
