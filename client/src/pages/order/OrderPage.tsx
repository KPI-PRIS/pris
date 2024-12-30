import {Cart, clearCart} from "../../store/slices/cart/cartSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../store/store.ts";
import CenterBox from "../../components/CenterBox.tsx";
import {Button, CardBody, CardFooter, CardHeader, Spinner} from "@nextui-org/react";
import {prettyPrice} from "../../utils/utils.ts";
import {useEffect} from "react";
import {useNavigate} from "react-router";
import {useMutation} from "react-query";
import {createOrder} from "./http.ts";
import CartListInfo from "../../components/cart/CartListInfo.tsx";
import {UserState} from "../../store/slices/userSlice.ts";

export default function OrderPage() {
    const user: UserState = useSelector((state: StoreState) => state.user)
    const cart: Cart = useSelector((state: StoreState) => state.cart);
    const navigate = useNavigate();
    const {isLoading, mutateAsync: doPay} = useMutation(() => createOrder(cart, user))
    const dispatch = useDispatch();

    useEffect(() => {
        if (cart.total < 1) {
            navigate('/merches')
        }
    }, [cart]);

    function handlePayment() {
        doPay().then((res) => {
            dispatch(clearCart())

            window.location.href = res
        })
    }

    return (
        <CenterBox classCard="mt-10 w-full p-5">
            <CardHeader className="font-bold text-2xl">Оформлення замовлення:</CardHeader>
            {isLoading && <Spinner label="Оформлення замовлення. Зачекайте будь ласка"/>}
            {!isLoading && <>
                <CardBody>
                    <CartListInfo/>
                    <div className="flex justify-end text-lg">
                        <p><strong>Загальна ціна: </strong> {prettyPrice(cart.totalPrice)} грн.</p>
                    </div>
                </CardBody>
                <CardFooter className="flex flex-row justify-around">
                    <Button variant="light" color="danger" fullWidth>Відмовитись</Button>
                    <Button variant="shadow" color="success" fullWidth onPress={handlePayment}>Заплатити</Button>
                </CardFooter>
            </>
            }
        </CenterBox>
    )
}