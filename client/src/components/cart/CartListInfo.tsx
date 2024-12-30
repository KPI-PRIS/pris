import {useSelector} from "react-redux";
import {StoreState} from "../../store/store.ts";
import CartList from "./CartList.tsx";

export default function CartListInfo() {
    const cart = useSelector((state: StoreState) => state.cart);
    return (
        <CartList items={cart.items}/>
    )
}