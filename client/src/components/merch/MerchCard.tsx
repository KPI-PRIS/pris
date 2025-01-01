import {IMerch} from "./IMerch.ts";
import {Button, Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";
import {useNavigate} from "react-router";
import {sendInfoNotify} from "../../utils/NotifyUtils.ts";
import {prettyPrice} from "../../utils/utils.ts";

interface MerchCardProps {
    merch: IMerch;
    isPreview?: boolean;
}

export default function MerchCard({merch, isPreview = false}: MerchCardProps) {
    const navigation = useNavigate();
    const nav = () => isPreview ? sendInfoNotify('перехід на сторінку') : navigation(`/merch/${merch.id}`);
    return (
        <Card className="border-1 hover:border-blue-800" onPress={nav}>
            <CardHeader className="flex justify-center">
                <Image
                    onClick={nav}
                    alt="Card background"
                    className=" rounded-xl"
                    isZoomed
                    src={merch.image_url}
                    height={200}
                />
            </CardHeader>
            <CardBody onClick={nav}>
                <h4 className="font-bold text-large">{merch.name}</h4>
            </CardBody>
            <CardFooter className="flex justify-between" onClick={nav}>
                <p>{prettyPrice(merch.price)} грн</p>
                <Button
                    variant="ghost"
                    color="primary"
                    onPress={nav}
                >
                    Купити
                </Button>
            </CardFooter>
        </Card>
    )
}