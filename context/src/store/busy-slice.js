import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    busy: false
};

const setBusyState = (state, action) => {
    state.busy = action.payload;
}

const busySlice = createSlice({
    name: 'busySlice',
    initialState,
    reducers: {
        setBusyState
    }
});

export const busyActions = busySlice.actions;
export default busySlice;
