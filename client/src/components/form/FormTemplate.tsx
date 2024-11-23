import {Button, CardBody, CardFooter, CardHeader, Input} from "@nextui-org/react";
import {Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";
import CenterBox from "../CenterBox.tsx";
import {FC} from "react";

interface FormField {
    name: string;
    type: string;
    label: string;
    optional?: boolean;
}

interface FormTemplateProps {
    title: string;
    fields: FormField[];
    initialValues: Record<string, any>;
    validationSchema: any;
    onSubmit: (values: any) => void;
    submitText: string;
    isLoading?: boolean;
    footerLink?: { text: string; to: string };
}

const FormTemplate: FC<FormTemplateProps> = ({
                                                 title,
                                                 fields,
                                                 initialValues,
                                                 validationSchema,
                                                 onSubmit,
                                                 submitText,
                                                 isLoading = false,
                                                 footerLink,
                                             }) => {
    return (
        <CenterBox classCard="w-1/3 mt-10">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({errors, touched}) => (
                    <Form>
                        <CardHeader className="flex justify-center text-3xl font-bold">{title}</CardHeader>
                        <CardBody className="space-y-5">
                            {fields.map((field) => (
                                <div key={field.name}>
                                    <Field name={field.name}>
                                        {({field: formikField}: { field: any }) => (
                                            <Input
                                                {...formikField}
                                                variant="underlined"
                                                type={field.type}
                                                label={field.label}
                                                isInvalid={touched[field.name] && !!errors[field.name]}
                                                errorMessage={touched[field.name] && errors[field.name]}
                                            />
                                        )}
                                    </Field>
                                </div>
                            ))}
                        </CardBody>
                        <CardFooter className="flex-col space-y-2">
                            <Button type="submit" isLoading={isLoading} fullWidth color="primary" variant="shadow">
                                {submitText}
                            </Button>
                            {footerLink && (
                                <Button fullWidth variant="light" as={Link} to={footerLink.to}>
                                    {footerLink.text}
                                </Button>
                            )}
                        </CardFooter>
                    </Form>
                )}
            </Formik>
        </CenterBox>
    );
};

export default FormTemplate;
