import {configureStore} from '@reduxjs/toolkit';
import userReducer, {UserState} from './slices/userSlice';
import cartReducer, {Cart} from "./slices/cart/cartSlice.ts";

export interface StoreState {
    user: UserState,
    cart: Cart,
}

// Загальне сховище яке буде доступне у всій програмі, тобто у всіх компонентах.
export const store = configureStore<StoreState>({
    reducer: {
        user: userReducer,
        cart: cartReducer,
    },
});
export type AppDispatch = typeof store.dispatch;