import axios from "axios";

export interface User {
    id: number;
    name: string;
}

export const getUsers =
    () => axios.get('http://localhost:3000').then(res => res.data)