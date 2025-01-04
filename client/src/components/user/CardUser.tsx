import {User} from "../../store/slices/userSlice.ts";
import {Button, Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";
import {sendInfoNotify} from "../../utils/NotifyUtils.ts";

export default function CardUser({user}: { user: User }) {
    function handleClick() {
        sendInfoNotify('Відкривається сторінка тренера та його історія')
    }

    return (
        <Card className="border-3 w-80 h-[100] bg-blue-800" onPress={handleClick}>
            <CardHeader className="flex justify-center">
                <Image
                    onClick={handleClick}
                    alt="Card background"
                    className="rounded-xl"
                    isZoomed
                    src={user.image_url}
                    height={300}
                />
            </CardHeader>
            <CardBody onClick={handleClick} className="flex justify-center items-center">
                <h4 className="font-bold text-xl text-white">{user.name}</h4>
            </CardBody>
            <CardFooter className="flex justify-end" onClick={handleClick}>
                <Button onPress={handleClick} size="sm">
                    Дізнатися більше
                </Button>
            </CardFooter>
        </Card>
    )
}


