import {NavigateFunction} from "react-router";
import {IAuthResponse} from "./IAuthResponse.ts";
import {sendErrorNotify, sendSuccessfulNotify} from "../../utils/NotifyUtils.ts";
import CookieService from "../../utils/CookieService.ts";
import {AxiosError} from "axios";
import {getErrorMessage} from "../../utils/utils.ts";
import {jwtDecode} from "jwt-decode";
import {setUser, User} from "../../store/slices/userSlice.ts";
import {AppDispatch} from "../../store/store.ts";

interface Actions {
    onSuccess: (data: IAuthResponse) => void;
    onError: (err: AxiosError) => void;
}

export const customAction = (navigation: NavigateFunction, dispatch: AppDispatch): Actions => ({
    onSuccess: ({access_token}: IAuthResponse) => {
        console.log("successful action:", access_token);
        sendSuccessfulNotify("Ви успішно увійшли")

        const decoded: User = jwtDecode(access_token);
        console.log('decoded token', decoded)

        CookieService.saveToken(access_token)
        dispatch(setUser(decoded))
        navigation('/')
    },
    onError: (err: AxiosError) => {
        console.error("failed action:", err);
        sendErrorNotify(getErrorMessage(err, "Помилка входу. Спробуйте ще раз."))
    }
})