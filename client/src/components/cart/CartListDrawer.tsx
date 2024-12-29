import {useSelector} from "react-redux";
import {StoreState} from "../../store/store.ts";
import {Button, Drawer, DrawerBody, DrawerContent, DrawerHeader} from "@nextui-org/react";
import {useNavigate} from "react-router";
import {Item} from "../../store/slices/cart/cartSlice.ts";
import CartInfoItem from "./CartInfoItem.tsx";
import {prettyPrice} from "../../utils/utils.ts";

interface CartListDrawerProps {
    isOpen: boolean;
    onOpenChange: () => void;
}

export default function CartListDrawer({isOpen, onOpenChange}: CartListDrawerProps) {
    const items = useSelector((state: StoreState) => state.cart);
    const nav = useNavigate();

    function handleBuy(close: () => void) {
        close()
        nav('/order')
    }

    return (
        <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
            <DrawerContent>
                {(onClose) => (
                    <>
                        <DrawerHeader className="flex flex-col gap-1">Кошик</DrawerHeader>
                        <DrawerBody>
                            {items.total < 1 && <p className="flex justify-center">Кошик порожній</p>}
                            {items.total > 0 &&
                                <>
                                    {items.items.map((i: Item) => <CartInfoItem item={i}/>)}
                                    <div className="flex flex-col space-y-3">
                                        <hr/>
                                        <div className="w-full">
                                            <p className="space-x-3 flex flex-row">
                                                <strong>Всього:</strong><p>{prettyPrice(items.totalPrice)} грн.</p>
                                            </p>
                                            <p className="space-x-3 flex flex-row">
                                                <strong>Всього в кошику:</strong><p>{items.total}</p>
                                            </p>
                                        </div>
                                        <hr className="mt-5"/>
                                        <Button color="success" fullWidth onPress={() => handleBuy(onClose)}>
                                            Купити
                                        </Button>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Закрити
                                        </Button>
                                    </div>
                                </>
                            }
                        </DrawerBody>
                    </>
                )}
            </DrawerContent>
        </Drawer>
    )
}