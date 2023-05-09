import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from "./authSlice";
import cartReducer from './cartSlice';
import productReducer from './productSlice';
const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        auth: AuthSlice,
    },
});

export default store;
