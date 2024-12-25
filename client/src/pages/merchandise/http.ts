import axios from "axios";

export async function getMerches(numberPage: number = 1) {
    const data = await axios.get(`merchandise/all/${numberPage}`)
    return data.data;
}