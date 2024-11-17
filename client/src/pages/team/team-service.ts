import axios from "axios";

export interface Team {
    id: number;
    name: string;
    coach_id?: number;
    type: string[];
}

export const getTeams =
    () => axios.get('http://localhost:3000/team').then(res => res.data)