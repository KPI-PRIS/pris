import FormTemplate from "../../../components/form/FormTemplate.tsx";
import {initialValues, loginFields, LoginSchema, LoginValue} from "./loginPageConfig.ts";
import {useMutation} from "react-query";
import {actions, postLogin} from "./actions.ts";

export default function LoginPage() {
    const {mutate, isLoading} = useMutation(postLogin, actions);

    const handleSubmit = (values: LoginValue) => {
        console.log("Login form values:", values);
        mutate(values);
    };

    return (
        <FormTemplate
            title="Вхід в систему"
            fields={loginFields}
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            submitText={isLoading ? "Завантаження..." : "Увійти"}
            footerLink={{text: "Створити новий акаунт", to: "/registration"}}
        />
    );
}
