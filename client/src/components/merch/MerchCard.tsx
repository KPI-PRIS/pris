import {IMerch} from "./IMerch.ts";
import {Button, Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";
import {useNavigate} from "react-router";

interface MerchCardProps {
    merch: IMerch;
}

export default function MerchCard({merch}: MerchCardProps) {
    const navigation = useNavigate();

    return (
        <Card className="border-1 hover:border-blue-800" onClick={() => navigation(`/merch/${merch.id}`)}>
            <CardHeader className="flex justify-center">
                <Image
                    onClick={() => navigation(`/merch/${merch.id}`)}
                    alt="Card background"
                    className=" rounded-xl"
                    isZoomed
                    src={merch.image_url}
                    height={200}
                />
            </CardHeader>
            <CardBody onClick={() => navigation(`/merch/${merch.id}`)}>
                <h4 className="font-bold text-large">{merch.name}</h4>
            </CardBody>
            <CardFooter className="flex justify-between" onClick={() => navigation(`/merch/${merch.id}`)}>
                <p>{merch.price} грн</p>
                <Button
                    variant="ghost"
                    color="primary"
                    onPress={() => navigation(`/merch/${merch.id}`)}
                >
                    Купити
                </Button>
            </CardFooter>
        </Card>
    )
}