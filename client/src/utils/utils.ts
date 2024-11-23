import {AxiosError} from "axios";

interface ErrorResponse {
    message: string;
    code?: number;
}

export function getErrorMessage(e: AxiosError, defaultError: string = 'Невідома помилка'): string {
    if (e.response) {
        const errorData = e.response.data as ErrorResponse;
        return errorData.message;
    }

    return defaultError;
}