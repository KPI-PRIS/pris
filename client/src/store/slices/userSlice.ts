import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {store} from "../store.ts";
import {jwtDecode} from "jwt-decode";
import CookieService from "../../utils/CookieService.ts";

export type UserRoles = "ADMIN" | "FAN" | "COACH" | "PLAYER";

export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    registeredAt: string;
    role: UserRoles;
}

export type UserState = User | null;

const token = CookieService.getToken();
const decodedUser: User | null = token ? jwtDecode<User>(token) : null;

console.log("decoded", decodedUser)
const initialState: User | null = decodedUser;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(_, action: PayloadAction<User>) {
            return action.payload;
        },
        clearUser() {
            return null;
        },
    },
});

export const {setUser, clearUser} = userSlice.actions;
export default userSlice.reducer;
export type AppDispatch = typeof store.dispatch;
