import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {jwtDecode} from "jwt-decode";
import CookieService from "../../utils/CookieService.ts";

export type UserRoles = "ADMIN" | "FAN" | "COACH" | "PLAYER";

export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    registeredAt: string;
    role: UserRoles;
    image_url: string;
}

export type UserState = User | null;

const token = CookieService.getToken();
const decodedUser: UserState = token ? jwtDecode<User>(token) : null;
console.log(decodedUser)
const initialState: UserState = decodedUser;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(_, action: PayloadAction<User>) {
            return action.payload;
        },
        clearUser() {
            CookieService.deleteToken();
            return null;
        },
    },
});

export const {setUser, clearUser} = userSlice.actions;
export default userSlice.reducer;