import {User} from "../../store/slices/userSlice.ts";

export interface Team {
    id: number;
    name: string;
    image_url: string;
    description: string;
    coach: User;
    players: User[];
    type: string;
}