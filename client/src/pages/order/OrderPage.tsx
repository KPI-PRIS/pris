import {Cart} from "../../store/slices/cartSlice.ts";
import {useSelector} from "react-redux";
import {StoreState} from "../../store/store.ts";
import CenterBox from "../../components/CenterBox.tsx";
import {Button, CardBody, CardFooter, CardHeader} from "@nextui-org/react";
import CartInfoItem from "../../components/cart/CartInfoItem.tsx";
import {prettyPrice} from "../../utils/utils.ts";
import {useEffect} from "react";
import {useNavigate} from "react-router";

export default function OrderPage() {
    const cart: Cart = useSelector((state: StoreState) => state.cart);
    const navigate = useNavigate();
    useEffect(() => {
        if (cart.total < 1) {
            navigate('/merches')
        }
    }, [cart]);
    return (
        <CenterBox classCard="mt-10 w-full p-5">
            <CardHeader className="font-bold text-2xl">Оформлення замовлення:</CardHeader>
            <CardBody>
                {cart.items.map(i => <>
                    <CartInfoItem item={i}/>
                    <hr/>
                </>)}

                <div className="flex justify-end text-lg">
                    <p><strong>Загальна ціна: </strong> {prettyPrice(cart.totalPrice)} грн.</p>
                </div>
            </CardBody>
            <CardFooter className="flex flex-row justify-around">
                <Button variant="light" color="danger" fullWidth>Відмовитись</Button>
                <Button variant="shadow" color="success" fullWidth>Заплатити</Button>

            </CardFooter>
        </CenterBox>
    )
}