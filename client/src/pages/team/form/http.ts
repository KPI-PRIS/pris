import axios from "axios";
import {User} from "../../../store/slices/userSlice.ts";
import {HEADER_AUTH} from "../../../utils/utils.ts";

export async function getCoaches(): Promise<User[]> {
    try {
        const data = await axios.get<User[]>('/user/role/coach', {
            headers: HEADER_AUTH
        })

        return data.data;
    } catch (e) {
        console.log(e)
        return []
    }
}

export async function getPlayers(): Promise<User[]> {
    try {
        const data = await axios.get<User[]>('/user/role/player', {
            headers: HEADER_AUTH
        })

        return data.data;
    } catch (e) {
        console.log(e)
        return []
    }
}