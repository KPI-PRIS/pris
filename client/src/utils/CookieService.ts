import Cookies from "js-cookie"; // імпортуємо js-cookie

class CookieService {
    private static ACCESS_TOKEN: string = "access_token"

    static setCookie(name: any, value: any, days = 7) {
        Cookies.set(name, value, {expires: days, path: "/"});
    }

    static getCookie(name: string) {
        return Cookies.get(name);
    }

    static deleteCookie(name: string) {
        Cookies.remove(name, {path: "/"});
    }

    static isCookiePresent(name: string) {
        return Cookies.get(name) !== undefined;
    }

    static saveToken(value: string, days = 7) {
        Cookies.set(this.ACCESS_TOKEN, value, {expires: days, path: "/"});
    }

    static getToken() {
        return Cookies.get(this.ACCESS_TOKEN);
    }

    static deleteToken() {
        Cookies.remove(this.ACCESS_TOKEN, {path: "/"});
    }

    static isTokenPresent() {
        return Cookies.get(this.ACCESS_TOKEN) !== undefined;
    }

}

export default CookieService;
