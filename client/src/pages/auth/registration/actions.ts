import axios, {AxiosError} from "axios";
import {sendErrorNotify, sendSuccessfulNotify} from "../../../utils/NotifyUtils.ts";
import {getErrorMessage} from "../../../utils/utils.ts";
import {RegistrationValues} from "./registrationPageConfig.ts";

export const postRegistration = async (data: RegistrationValues) => {
    const response = await axios.post("/user/registration", data);
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
        console.log("Registration successful:", data);
        sendSuccessfulNotify("Ви успішно зареєструвались")
    },
    onError: (err: AxiosError) => {
        console.error("Registration failed:", err);
        sendErrorNotify(getErrorMessage(err, "Помилка реєстрації. Спробуйте ще раз."))
    }
}