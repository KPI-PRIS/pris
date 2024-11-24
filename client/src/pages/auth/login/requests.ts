import axios from "axios";

export const postLogin = async (data: { email: string, password: string }) => {
    const response = await axios.post("/auth/login", data);
    return response.data;
};