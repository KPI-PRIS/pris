import {Badge, Button, NavbarContent, useDisclosure} from "@nextui-org/react";
import {Link} from "react-router-dom";
import {clearUser, User} from "../../store/slices/userSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../store/store.ts";
import Bucket from "../../svgs/Bucket.tsx";
import {Cart} from "../../store/slices/cart/cartSlice.ts";
import CartListDrawer from "../cart/CartListDrawer.tsx";

export default function ActionsHeader() {
    const user: User | null = useSelector((state: StoreState) => state.user);
    const cart: Cart = useSelector((state: StoreState) => state.cart);
    const dispatch = useDispatch();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    function handleLogout() {
        dispatch(clearUser())
    }

    return (
        <NavbarContent justify="end">
            <Badge color={cart.total > 0 ? "danger" : "default"}
                   content={cart.total > 0 ? cart.total : ''}
                   placement="top-left"
            >
                <Button variant="ghost" color="primary" isIconOnly className="p-1" onPress={onOpen} radius="lg">
                    <Bucket/>
                </Button>
            </Badge>
            {!user && <>
                <Link to="/login">Вхід</Link>
                <Button as={Link} color="primary" to="/registration" variant="flat">
                    Реєстрація
                </Button>
            </>
            }
            {user && <>
                <Button as={Link} color="danger" onPress={handleLogout} variant="flat">
                    Вийти
                </Button>
            </>}
            <CartListDrawer isOpen={isOpen} onOpenChange={onOpenChange}/>
        </NavbarContent>
    )
}