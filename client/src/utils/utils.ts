import {AxiosError} from "axios";
import CookieService from "./CookieService.ts";

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

const months = [
    "січня",
    "лютого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня"
];

export function formatDateToUkrainian(dateString: string): string {
    const [year, month, day] = dateString.split("-").map(Number);

    return `${day} ${months[month - 1]} ${year}`;
}

export function prettyPrice(price: number) {
    return new Intl.NumberFormat('uk-UA').format(price);
}


export function getTranslateRole(role: string) {
    switch (role.toLowerCase()) {
        case "admin":
            return "адміністратор"
        case "fan":
            return "фанат"
        case "coach":
            return "тренер"
        case "player":
            return "гравець"
    }
}

export const HEADER_AUTH = {
    Authorization: `Bearer ${CookieService.getToken()}`
}

export function getTime(time: string): string {
    const date = new Date(time);
    const month = months[date.getMonth()]; // Отримуємо місяць словами
    const day = date.getDate(); // День місяця
    const year = date.getFullYear(); // Рік
    return `${day} ${month} ${year}`
}