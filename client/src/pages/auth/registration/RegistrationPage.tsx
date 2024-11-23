import FormTemplate from "../../../components/form/FormTemplate.tsx";
import {initialValues, registrationFields, RegistrationSchema, RegistrationValues} from "./registrationPageConfig.ts";
import {useMutation} from "react-query";
import {actions, postRegistration} from "./actions.ts";


export default function RegistrationPage() {
    const {mutate, isLoading} = useMutation(postRegistration, actions);
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
            submitText={isLoading ? "Завантаження..." :"Зареєструватись"}
            footerLink={{text: "Вже маєте акаунт? Увійти", to: "/login"}}
        />
    );
}
