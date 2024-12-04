import {configureStore} from '@reduxjs/toolkit';
import userReducer, {UserState} from './slices/userSlice';

export interface StoreState {
    user: UserState
}

// Загальне сховище яке буде доступне у всій програмі, тобто у всіх компонентах.
export const store = configureStore<StoreState>({
    reducer: {
        user: userReducer,
    },
});
export type AppDispatch = typeof store.dispatch;
