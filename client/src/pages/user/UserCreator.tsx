import {Button, Card, CardBody, CardFooter, CardHeader, Input, Select, SelectItem} from "@nextui-org/react";
import {FormEvent} from "react";
import {useMutation, UseMutationOptions} from "react-query";
import axios from "axios";
import {User} from "../../store/slices/userSlice.ts";
import {HEADER_AUTH} from "../../utils/utils.ts";
import {sendErrorNotify, sendSuccessfulNotify} from "../../utils/NotifyUtils.ts";

async function createNewUser(user: any): Promise<User> {
    const data = await axios.post<User>(`/user/create`, user, {
        headers: HEADER_AUTH
    })
    return data.data;
}

const mutationOptions: UseMutationOptions<User, Error, any> = {
    mutationFn: createNewUser,
    onSuccess: () => {
        sendSuccessfulNotify("Користувача успішно створено!")
    },
    onError: (error) => {
        sendErrorNotify("Помилка при створенні користувача:")
        console.error("Помилка при створенні користувача:", error);
    },
};

export default function UserCreator() {
    const {mutate, isLoading} = useMutation(mutationOptions)

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.currentTarget));
        console.log("data:", data)
        mutate(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Card className="m-3 p-3 space-y-3">
                <CardHeader className="text-3xl font-bold flex justify-center">Додати нового користувача</CardHeader>
                <CardBody className="space-y-5 px-20">
                    <Input required variant="underlined" name="name" label="Як звати"/>
                    <Input required variant="underlined" name="email" type="email" label="Пошта"/>
                    <Input required variant="underlined" name="password" label="Пароль" type="password"/>
                    <Select required variant="underlined" name="role" label="Роль">
                        <SelectItem key="FAN">Фанат</SelectItem>
                        <SelectItem key="PLAYER">Футболіст</SelectItem>
                        <SelectItem key="COACH">Тренер</SelectItem>
                    </Select>
                    <Input variant="underlined" name="phone" type="tel" label="Телефон"/>
                    <Input variant="underlined" name="image_url" type="url" label="Фото"/>

                </CardBody>
                <CardFooter className="flex justify-end">
                    <Button disabled={isLoading} variant="shadow" color="success" type="submit">
                        {isLoading ? 'Створення' : 'Додати'}
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}