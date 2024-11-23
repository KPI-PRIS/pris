import * as Yup from "yup";

export const RegistrationSchema = Yup.object().shape({
    email: Yup.string().email("Неправильна пошта").required("Пошта обов'язково"),
    name: Yup.string().min(2, "Занадто коротке ім'я!").max(50, "Занадто довге ім'я!").required("Необхідно вказати ім'я"),
    phone: Yup.string().matches(/^\d+$/, "Телефон повинен бути числом").nullable(),
    password: Yup.string().min(6, "Пароль має бути не менше 6 символів").required("Необхідно ввести пароль"),
});

export const registrationFields = [
    {name: "email", type: "email", label: "Пошта"},
    {name: "name", type: "text", label: "Ім'я"},
    {name: "phone", type: "text", label: "Телефон"},
    {name: "password", type: "password", label: "Пароль"},
];

export interface RegistrationValues {
    email: string,
    name: string,
    phone: string,
    password: string
}

export const initialValues: RegistrationValues = {email: "", name: "", phone: "", password: ""};