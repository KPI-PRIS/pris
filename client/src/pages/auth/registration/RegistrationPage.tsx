import FormTemplate from "../../../components/form/FormTemplate.tsx";
import {initialValues, registrationFields, RegistrationSchema, RegistrationValues} from "./registrationPageConfig.ts";

export default function RegistrationPage() {
    const handleSubmit = (values: RegistrationValues) => {
        console.log("Registration form values:", values);
        alert("User registered successfully!");
    };

    return (
        <FormTemplate
            title="Реєстрація"
            fields={registrationFields}
            initialValues={initialValues}
            validationSchema={RegistrationSchema}
            onSubmit={handleSubmit}
            submitText="Зареєструватись"
            footerLink={{text: "Вже маєте акаунт? Увійти", to: "/login"}}
        />
    );
}
