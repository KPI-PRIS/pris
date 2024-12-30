import {useSelector} from "react-redux";
import {StoreState} from "../../store/store.ts";
import {Item} from "../../store/slices/cart/cartSlice.ts";
import CartInfoItem from "./CartInfoItem.tsx";

export default function CartListInfo() {
    const items = useSelector((state: StoreState) => state.cart);
    return (
        <div className="flex flex-col gap-1 max-h-[42vh] overflow-y-auto custom-scrollbar">
            {items.items.map((i: Item) => <>
                <CartInfoItem item={i}/>
                <hr/>
            </>)}
        </div>
    )
}