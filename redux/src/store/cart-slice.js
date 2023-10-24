import {createSlice} from '@reduxjs/toolkit';

const cartInitState = {
    items: [],
    totalQuantity: 0
};

const addItem = (state, action) => {
    const newItem = action.payload;
    const existingItem = state.items.find(item => item.id === newItem.id);

    state.totalQuantity++;
    if (existingItem) {
        existingItem.quantity++;
        existingItem.total = existingItem.total + newItem.price;
    } else {
        state.items.push({
            ...newItem,
            total: newItem.price
        });
    }
};

const removeItem = (state, action) => {
    const id = action.payload;
    const existingItem = state.items.find(item => item.id === id);

    state.totalQuantity--;
    if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
    } else { 
        existingItem.quantity--;
        existingItem.total = existingItem.total - existingItem.price;
    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitState,
    reducers: {
        addItem: addItem,
        removeItem: removeItem
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;