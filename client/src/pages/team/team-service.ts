import axios from "axios";

export const getTeams =
    () => axios.get('/team').then(res => res.data)