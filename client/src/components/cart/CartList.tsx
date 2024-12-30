import {Item} from "../../store/slices/cart/cartSlice.ts";
import CartInfoItem from "./CartInfoItem.tsx";

export default function CartList({items, showIncrement = true}: { items: Item[], showIncrement?: boolean }) {
    return (
        <div className="flex flex-col gap-1 max-h-[42vh] overflow-y-auto custom-scrollbar">
            {items.map((i: Item) => <>
                <CartInfoItem item={i} showIncrement={showIncrement}/>
                <hr/>
            </>)}
        </div>
    )
}