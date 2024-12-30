import {Button, Card} from "@nextui-org/react";
import {useNavigate} from "react-router";

export default function AccessDenied() {
    const nav = useNavigate()
    return (
        <Card className="flex justify-center bg-black items-center h-screen space-y-10">
            <h1 className="text-5xl font-extrabold text-white">У вас немає доступу</h1>
            <Button variant="shadow" color="warning" onPress={() => nav('/')}>Повернутись на головну</Button>
        </Card>
    );
}