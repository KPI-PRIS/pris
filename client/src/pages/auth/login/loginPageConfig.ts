import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Неправильна пошта").required("Пошта обов'язково"),
    password: Yup.string().required("Пароль обов'язково"),
});

export const loginFields = [
    {name: "email", type: "email", label: "Пошта"},
    {name: "password", type: "password", label: "Пароль"},
];

export interface LoginValue {
    email: string;
    password: string;
}

export const initialValues: LoginValue = {email: "", password: ""};