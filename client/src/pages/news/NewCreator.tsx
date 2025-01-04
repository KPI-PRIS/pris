import {Button, Card, CardBody, CardFooter, CardHeader, Input, Textarea} from "@nextui-org/react";
import {FormEvent} from "react";

export default function NewCreator() {

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.currentTarget));
        console.log("data:", data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Card className="m-3 p-3">
                <CardHeader className="text-3xl font-bold p-1 flex justify-center">
                    Додати новину
                </CardHeader>
                <CardBody className="px-20">
                    <Input required variant="underlined" label="Назва"/>
                    <Input required variant="underlined" label="Фото"/>
                    <Textarea required variant="underlined" label="Опис"/>
                </CardBody>
                <CardFooter className="flex justify-center items-center">
                    <Button variant="shadow" type="submit" color="success" className="w-1/2">Додати</Button>
                </CardFooter>
            </Card>
        </form>
    )
}