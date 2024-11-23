export default class CustomError {
    private _message: string;
    private _code: number = 500;

    constructor(message: string, code?: number) {
        this._code = code;
        this._message = message;
    }


    get message(): string {
        return this._message;
    }

    set message(value: string) {
        this._message = value;
    }

    get code(): number {
        return this._code;
    }

    set code(value: number) {
        this._code = value;
    }
}