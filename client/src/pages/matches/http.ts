import axios from "axios";

export async function getMatches(numberPage: number = 1) {
    const matches = await axios.get(`match/all/${numberPage}`);
    return matches.data;
}