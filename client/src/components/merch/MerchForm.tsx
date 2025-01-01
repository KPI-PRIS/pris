import {Button, Card, CardBody, CardFooter, CardHeader, Input, Textarea} from "@nextui-org/react";
import {IMerch} from "./IMerch.ts";
import {useMutation} from "react-query";
import {useNavigate} from "react-router";
import {sendSuccessfulNotify} from "../../utils/NotifyUtils.ts";
import MerchCard from "./MerchCard.tsx";
import {useState} from "react";

interface MerchFormProps {
    merch?: IMerch;
    headerText: string;
    buttonText: string;
    notifyText: string;
    handleSubmit: (values: any) => Promise<IMerch>;
}

const defaultValue: IMerch = {
    id: "",
    name: "",
    description: "",
    price: 0,
    stockQuantity: 0,
    category: "",
    image_url: "",
}

export default function MerchForm({merch, headerText, buttonText, handleSubmit, notifyText}: MerchFormProps) {
    const [newMerch, setNewMerch] = useState<IMerch>(merch || defaultValue)

    const nav = useNavigate();
    const mutation = useMutation({
        mutationFn: () => handleSubmit(newMerch),
        onSuccess: (new_merch: IMerch) => {
            sendSuccessfulNotify(notifyText)
            nav(`/merch/${new_merch.id}`)
        }
    })

    return (
        <Card className="m-3 p-3">
            <CardHeader className=" flex justify-center text-2xl">{headerText}</CardHeader>
            <CardBody className="flex flex-row space-x-10 justify-evenly">
                <div className="flex flex-col w-1/2">
                    <Input label="Назва"
                           isRequired
                           isClearable
                           variant="underlined"
                           value={newMerch.name}
                           onChange={(e) => setNewMerch(prevState => ({
                               ...prevState,
                               name: e.target.value
                           }))}/>
                    <Textarea label="Опис товару"
                              isRequired
                              isClearable
                              variant="underlined"
                              value={newMerch.description}
                              onChange={(e) => setNewMerch(prevState => ({
                                  ...prevState,
                                  description: e.target.value
                              }))}/>
                    <Input label="Ціна"
                           isRequired
                           type="number"
                           isClearable
                           variant="underlined"
                           value={newMerch.price.toString()}
                           onChange={(e) => setNewMerch(prevState => ({
                               ...prevState,
                               price: +e.target.value
                           }))}/>
                    <Input label="Кількість товару"
                           isRequired
                           type="number"
                           isClearable
                           variant="underlined"
                           value={newMerch.stockQuantity.toString()}
                           onChange={(e) => setNewMerch(prevState => ({
                               ...prevState,
                               stockQuantity: +e.target.value
                           }))}/>
                    <Input label="Категорія"
                           isRequired
                           isClearable
                           variant="underlined"
                           value={newMerch.category}
                           onChange={(e) => setNewMerch(prevState => ({
                               ...prevState,
                               category: e.target.value
                           }))}/>
                    <Input label="Фото"
                           isRequired
                           isClearable
                           variant="underlined"
                           value={newMerch.image_url}
                           onChange={(e) => setNewMerch(prevState => ({
                               ...prevState,
                               image_url: e.target.value
                           }))}/>
                </div>
                <div className="flex flex-col w-1/3">
                    <h1 className="text-lg font-normal text-gray-500 flex justify-center">Попередній перегляд</h1>
                    <MerchCard merch={newMerch} isPreview/>
                </div>
            </CardBody>
            <CardFooter className="flex justify-center">
                <Button color='success' className="w-1/2" onPress={() => mutation.mutate()}>{buttonText}</Button>
            </CardFooter>
        </Card>
    )
}