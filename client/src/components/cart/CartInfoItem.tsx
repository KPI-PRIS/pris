import {addItem, Item, removeItem} from "../../store/slices/cartSlice.ts";
import {Image} from "@nextui-org/react";
import {useDispatch} from "react-redux";
import {prettyPrice} from "../../utils/utils.ts";

export default function CartInfoItem({item}: { item: Item }) {
    const dispatch = useDispatch();

    function handleIncreaseItem() {
        dispatch(addItem({...item, total: 1}))
    }

    function handleDecreaseItem() {
        dispatch(removeItem(item))
    }

    return (
        <div className="w-full h-32 flex flex-row space-x-10 mt-1 p-3">
            <Image src={item.image_url} isZoomed height={96} width={90}/>
            <div className="flex flex-col">
                <h1 className="text-lg font-bold">{item.name}</h1>
                <div>Ціна: {prettyPrice(item.price)}</div>
                <div className="flex flex-row space-x-4">
                    <p>Кількість: </p>
                    <p onClick={handleDecreaseItem}
                       className="border-1 rounded-full border-red-400 px-2 hover:cursor-pointer hover:bg-red-400 select-none">-</p>
                    <p className="">{item.total}</p>
                    <p onClick={handleIncreaseItem}
                       className="border-1 rounded-full border-green-400 px-2 hover:cursor-pointer hover:bg-green-400 select-none">+</p>
                </div>
            </div>
        </div>
    )
}