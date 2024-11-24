import {configureStore} from '@reduxjs/toolkit';
import userReducer, {UserState} from './slices/userSlice';

export interface StoreState {
    user: UserState
}

export const store = configureStore<StoreState>({
    reducer: {
        user: userReducer,
    },
});
