import {createSlice} from '@reduxjs/toolkit';

const cartVisibleInitState = {
    visible: false
};

const toggleCart = (state) => {
    state.visible = !state.visible;
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: cartVisibleInitState,
    reducers: {
        toggleCart: toggleCart
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;

