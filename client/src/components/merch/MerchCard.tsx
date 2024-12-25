import {IMerch} from "../../pages/merchandise/IMerch.ts";
import {Button, Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";

interface MerchCardProps {
    merch: IMerch;
}

export default function MerchCard({merch}: MerchCardProps) {
    return (
        <Card>
            <CardHeader className="flex justify-center">
                <Image
                    alt="Card background"
                    className=" rounded-xl"
                    src={merch.image_url}
                    height={200}
                />
            </CardHeader>
            <CardBody>
                <h4 className="font-bold text-large">{merch.name}</h4>
            </CardBody>
            <CardFooter className="flex justify-between">
                <p>{merch.price} грн</p>
                <Button
                    variant="shadow"
                    color="success"
                >
                    Купити
                </Button>
            </CardFooter>
        </Card>
    )
}