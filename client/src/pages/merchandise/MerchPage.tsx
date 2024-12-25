import {useParams} from "react-router";
import {useQuery} from "react-query";
import {IMerch} from "../../components/merch/IMerch.ts";
import {getMerchById} from "./http.ts";
import {Button, Card, Image, Input} from "@nextui-org/react";
import {useState} from "react";

export default function MerchPage() {
    const {id} = useParams()
    const {data: merch, isLoading} = useQuery<IMerch>({
        queryKey: [`merch-page-${id}`],
        queryFn: () => getMerchById(id || '')
    })

    const [countItem, setCountItem] = useState<number>(1)

    function changeCount(e) {
        const count: number = +e.target.value;
        if (count < 1) {
            return
        }
        setCountItem(count)
    }

    return (<>
        {merch && <Card className="m-3 w-full p-10 flex-row">
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
                <h3 className="text-gray-500 opacity-50">{merch.stockQuantity > 0 ? `В наявності ${merch.stockQuantity} шт.` : 'Немає в наявності'}</h3>
                <hr/>
                <br/>
                <h3 className="text-lg mt-1 font-bold">Опис:</h3>
                <p>{merch.description}</p>
                <br/>
                <Input
                    label="Кількість товару"
                    type="number"
                    labelPlacement="outside-left"
                    value={countItem}
                    onChange={changeCount}
                />
                <div className="flex justify-end mt-10">
                    <Button color="primary" fullWidth>Купити</Button>
                </div>
            </div>
        </Card>}
    </>)
}