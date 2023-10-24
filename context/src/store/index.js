import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import busySlice from "./busy-slice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        busy: busySlice.reducer
    }
});

export default store;