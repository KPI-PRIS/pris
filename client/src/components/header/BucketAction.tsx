import {Badge, Button, useDisclosure} from "@nextui-org/react";
import Bucket from "../../svgs/Bucket.tsx";
import CartListDrawer from "../cart/CartListDrawer.tsx";
import {Cart} from "../../store/slices/cart/cartSlice.ts";
import {useSelector} from "react-redux";
import {StoreState} from "../../store/store.ts";

export default function BucketAction() {
    const cart: Cart = useSelector((state: StoreState) => state.cart);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (<>
            <Badge color={cart.total > 0 ? "danger" : "default"}
                   content={cart.total > 0 ? cart.total : ''}
                   placement="top-left"
            >
                <Button variant="ghost" color="primary" isIconOnly className="p-1" onPress={onOpen} radius="lg">
                    <Bucket/>
                </Button>
            </Badge>
            <CartListDrawer isOpen={isOpen} onOpenChange={onOpenChange}/>
        </>
    )
}