import {useNavigate, useParams} from "react-router";
import {useQuery} from "react-query";
import {IMerch} from "../../components/merch/IMerch.ts";
import {getMerchById} from "./http.ts";
import {Button, Card, Image, Input, Spinner} from "@nextui-org/react";
import {ChangeEvent, useState} from "react";
import Bucket from "../../svgs/Bucket.tsx";
import {useDispatch} from "react-redux";
import {addItem, Item} from "../../store/slices/cartSlice.ts";

export default function MerchPage() {
    const {id} = useParams()
    const navigation = useNavigate();
    const [countItem, setCountItem] = useState<number>(1)
    const dispatch = useDispatch();
    const {data: merch, isLoading} = useQuery<IMerch>({
        queryKey: [`merch-page-${id}`],
        queryFn: () => getMerchById(id || '')
    })

    function changeCount(e: ChangeEvent<HTMLInputElement>) {
        const count: number = +e.target.value;
        if (count < 1 || (merch && merch.stockQuantity < count)) {
            return
        }
        setCountItem(count)
    }

    function handleAddToCartAndRedirect() {
        addToCart();
        navigation('/order')
    }

    function addToCart() {
        if (!merch) return;

        const itemAdd: Item = {
            id: merch.id,
            name: merch.name,
            price: merch.price,
            total: countItem,
            image_url: merch.image_url
        }
        dispatch(addItem(itemAdd))
    }

    return (<Card className="m-3 w-full p-10 flex-row">
        {isLoading &&
            <Spinner color="primary"
                     size="lg"
                     label="Завантаження продукту, зачекайте будь ласка ... "
                     className="w-full"
            />
        }
        {merch && <>
            <div className="flex justify-center w-1/2">
                <Image
                    alt="Card background"
                    className="h-96 rounded-xl"
                    src={merch.image_url}
                    isZoomed
                />
            </div>
            <div className="w-1/2 flex flex-col px-5">
                <h1 className="text-2xl font-extrabold">{merch.name}</h1>
                <h3 className="text-gray-500 opacity-50">
                    {merch.stockQuantity > 0
                        ? `В наявності ${merch.stockQuantity} шт.`
                        : 'Немає в наявності'
                    }
                </h3>
                <hr/>
                <br/>
                <h3 className="text-lg mt-1 font-bold">Опис:</h3>
                <p>{merch.description}</p>
                <br/>
                <Input
                    label="Кількість товару"
                    type="number"
                    labelPlacement="outside-left"
                    value={countItem.toString()}
                    onChange={changeCount}
                />
                {merch.stockQuantity > 0 && <>
                    <div className="flex justify-between mt-10 space-x-5">
                        <Button color="primary"
                                variant="ghost"
                                fullWidth
                                onPress={addToCart}
                                endContent={<Bucket/>}>
                            Додати в корзину
                        </Button>
                        <Button color="primary"
                                fullWidth
                                onPress={handleAddToCartAndRedirect}>
                            Купити
                        </Button>
                    </div>
                </>}
            </div>
        </>
        }
    </Card>)
}