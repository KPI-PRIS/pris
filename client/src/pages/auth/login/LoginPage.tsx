import FormTemplate from "../../../components/form/FormTemplate.tsx";
import {initialValues, loginFields, LoginSchema, LoginValue} from "./loginPageConfig.ts";
import {postLogin} from "./requests.ts";
import {useNavigate} from "react-router";
import {useMutation} from "react-query";
import {customAction} from "../actions.ts";
import {useDispatch} from "react-redux";

export default function LoginPage() {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const {mutate, isLoading} = useMutation(postLogin, customAction(nav, dispatch));

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
