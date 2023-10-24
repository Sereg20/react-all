
import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import counter from './counter';


const store = configureStore({
    reducer: {
        counter,
        auth
    }
});

export default store;