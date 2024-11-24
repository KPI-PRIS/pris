import axios from "axios";
import {RegistrationValues} from "./registrationPageConfig.ts";

export const postRegistration = async (data: RegistrationValues) => {
    const response = await axios.post("/auth/registration", data);
    return response.data;
};