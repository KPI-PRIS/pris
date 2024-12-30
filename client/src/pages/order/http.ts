import {Cart} from "../../store/slices/cart/cartSlice.ts";
import axios from "axios";
import {UserState} from "../../store/slices/userSlice.ts";
import {HEADER_AUTH} from "../../utils/utils.ts";
import {Order} from "./interfaces.ts";

export async function createOrder(cart: Cart, user: UserState) {
    const data = {
        merchandises: cart.items,
        tickets: [],
        totalPrice: cart.totalPrice,
        quantity: cart.total,
        user_id: ''
    }
    if (user) {
        data.user_id = user.id
    }
    const res = await axios.post('order/create', data)
    return res.data;
}

export async function getPersonalOrders(): Promise<Order[]> {
    const data = await axios.get<Order[]>('/order/user', {
        headers: HEADER_AUTH
    })
    return data.data;
}