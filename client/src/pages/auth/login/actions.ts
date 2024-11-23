import axios, {AxiosError} from "axios";
import {sendErrorNotify, sendSuccessfulNotify} from "../../../utils/NotifyUtils.ts";
import {getErrorMessage} from "../../../utils/utils.ts";

export const postLogin = async (data: { email: string, password: string }) => {
    const response = await axios.post("/user/login", data);
    return response.data;
};

interface LoginResponse {
}

interface Actions {
    onSuccess: (data: LoginResponse) => void;
    onError: (err: AxiosError) => void;
}

export const actions: Actions = {
    onSuccess: (data: LoginResponse) => {
        console.log("Login successful:", data);
        sendSuccessfulNotify("Ви успішно увійшли")
    },
    onError: (err: AxiosError) => {
        console.error("Login failed:", err);
        sendErrorNotify(getErrorMessage(err, "Помилка входу. Спробуйте ще раз."))
    }
}