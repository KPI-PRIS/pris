import FormTemplate from "../../../components/form/FormTemplate.tsx";
import {initialValues, registrationFields, RegistrationSchema, RegistrationValues} from "./registrationPageConfig.ts";
import {useMutation} from "react-query";
import {postRegistration} from "./requests.ts";
import {useNavigate} from "react-router";
import {customAction} from "../actions.ts";
import {useDispatch} from "react-redux";


export default function RegistrationPage() {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const {mutate, isLoading} = useMutation(postRegistration, customAction(nav, dispatch));
    const handleSubmit = (values: RegistrationValues) => {
        console.log("Registration form values:", values);
        mutate(values);
    };

    return (
        <FormTemplate
            title="Реєстрація"
            fields={registrationFields}
            initialValues={initialValues}
            validationSchema={RegistrationSchema}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            submitText={isLoading ? "Завантаження..." : "Зареєструватись"}
            footerLink={{text: "Вже маєте акаунт? Увійти", to: "/login"}}
        />
    );
}
