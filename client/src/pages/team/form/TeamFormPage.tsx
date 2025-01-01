import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Input,
    Select,
    SelectedItems,
    SelectItem,
    Textarea
} from "@nextui-org/react";
import {Form, Formik} from "formik";
import {useQuery} from "react-query";
import {CustomUser} from "../../../store/slices/userSlice.ts";
import axios from "axios";
import {HEADER_AUTH} from "../../../utils/utils.ts";
import SelectUser from "../../../components/form/SelectUser.tsx";
import LoadingSpinner from "../../../components/LoadingSpinner.tsx";


const initialValues = {
    name: "",
    description: "",
    coach: "",
    players: [],
    photo: "",
};


async function getCoaches() {
    try {
        const data = await axios.get<CustomUser[]>('/user/role/coach', {
            headers: HEADER_AUTH
        })

        return data.data;
    } catch (e) {
        console.log(e)
        return []
    }
}

async function getPlayers() {
    try {
        const data = await axios.get<CustomUser[]>('/user/role/player', {
            headers: HEADER_AUTH
        })

        return data.data;
    } catch (e) {
        console.log(e)
        return []
    }
}

export default function TeamFormPage() {
    const {data: coaches, isLoading: LoadingCoach} = useQuery<CustomUser[]>('coaches', getCoaches)
    const {data: players, isLoading: LoadingPlayer} = useQuery<CustomUser[]>('players', getPlayers)

    const onSubmit = (values: any) => {
        values.players = Array.from(values.players).map((p: any) => JSON.parse(p))
        values.coach = JSON.parse(values.coach)
        console.log("Форма відправлена", values);
    };

    if (LoadingCoach || LoadingPlayer) {
        return <LoadingSpinner isVisible/>
    }

    if (!coaches || coaches.length === 0 || !players || players.length === 0) {
        return <p className="bg-black text-white p-10 text-2xl mt-10 rounded">
            Не знайшли жодного гравця чи тренера
        </p>
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            {({setFieldValue}) => (
                <Form>
                    <Card className="m-4 p-10">
                        <CardHeader className="flex justify-center">
                            <h1 className="font-medium text-2xl">Створити нову команду</h1>
                        </CardHeader>
                        <CardBody className="px-40 space-y-5">
                            <Input
                                label="Назва"
                                isRequired
                                type="text"
                                isClearable
                                size="md"
                                variant="underlined"
                                onChange={(e) => setFieldValue("name", e.target.value)}
                            />

                            <Textarea
                                label="Опис"
                                isRequired
                                type="text"
                                isClearable
                                size="md"
                                variant="underlined"
                                onChange={(e) => setFieldValue("description", e.target.value)}
                            />

                            {coaches && coaches.length > 0 &&
                                <Select
                                    items={coaches || []}
                                    label="Тренер"
                                    variant="underlined"
                                    size="md"
                                    onSelectionChange={(key) => setFieldValue("coach", key.currentKey)}
                                    renderValue={(items: SelectedItems<CustomUser>) =>
                                        items.map((item) => <SelectUser user={item.data ? item.data : null}/>)
                                    }
                                >
                                    {(coach) =>
                                        <SelectItem key={JSON.stringify(coach)} textValue={coach.name}>
                                            <SelectUser user={coach}/>
                                        </SelectItem>
                                    }
                                </Select>}

                            {players && players.length > 0 && <Select
                                items={players}
                                label="Гравці"
                                selectionMode="multiple"
                                variant="underlined"
                                size="md"
                                isRequired
                                onSelectionChange={(keys) => setFieldValue("players", keys)}
                            >
                                {(player) =>
                                    <SelectItem key={JSON.stringify(player)} textValue={player.name}>
                                        <SelectUser user={player}/>
                                    </SelectItem>
                                }
                            </Select>
                            }
                            <Input
                                label="Фото"
                                isRequired
                                type="url"
                                isClearable
                                size="md"
                                variant="underlined"
                                onChange={(e) => setFieldValue("photo", e.target.value)}
                            />
                        </CardBody>
                        <CardFooter className="flex justify-end">
                            <Button type="submit" color="success" variant="shadow">
                                Створити команду
                            </Button>
                        </CardFooter>
                    </Card>
                </Form>
            )}
        </Formik>
    );
}
