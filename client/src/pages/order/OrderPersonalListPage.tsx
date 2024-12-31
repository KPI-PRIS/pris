import {useQuery} from "react-query";
import {Accordion, AccordionItem, Avatar, AvatarGroup, Card, CardBody, CardHeader, Chip} from "@nextui-org/react";
import {getPersonalOrders} from "./http.ts";
import CartList from "../../components/cart/CartList.tsx";
import {Order, translateStatus} from "./interfaces.ts";
import {getTime, prettyPrice} from "../../utils/utils.ts";
import {ReactNode} from "react";
import {Link} from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner.tsx";


export default function OrderPersonalListPage() {
    const {data: orders, isLoading} = useQuery({
        queryKey: 'personal-orders',
        queryFn: getPersonalOrders
    })

    function getNode(order: Order): ReactNode {
        return (
            <div className="flex flex-row w-full">
                <p className="w-full"><strong>№ {order.id}</strong> від {getTime(order.createdAt)}</p>
                <Chip size="sm" color="warning">{translateStatus(order.status)}</Chip>
            </div>
        )
    }

    return (
        <Card className="mt-3 p-10 ">
            <CardHeader>
                <h1 className="font-bold text-2xl">Ваші замовлення:</h1>
            </CardHeader>
            <hr/>
            <CardBody>
                <LoadingSpinner isVisible={isLoading} text={"ваші замовлення"}/>
                {orders && orders.length === 0 &&
                    <p className="text-xl flex justify-center space-x-2">
                        <p>Кошик порожній.</p> <Link to='/merches'
                                                     className="text-orange-500 hover:text-orange-300"> Перейти в
                        фан-шоп</Link>
                    </p>
                }
                {orders && <Accordion variant="splitted">
                    {orders.map((order: Order) => (
                        <AccordionItem key={order.id} title={getNode(order)}
                                       startContent={<AvatarGroup max={3}>
                                           {order.merchandises.map(m => <Avatar src={m.image_url}/>)}
                                       </AvatarGroup>}
                        >
                            <div>Всього: {prettyPrice(order.totalPrice)} гривень.</div>
                            <div>Всього одиниць товару: {order.quantity}</div>
                            <div>Замовлено: {getTime(order.createdAt)}</div>
                            <div>Статус: {translateStatus(order.status)}</div>
                            <CartList items={order.merchandises} showIncrement={false}/>
                        </AccordionItem>
                    ))}
                </Accordion>
                }
            </CardBody>
        </Card>
    )
}