import {Cart} from "../../store/slices/cartSlice.ts";
import axios from "axios";

export async function createOrder(cart: Cart) {
    const data = {
        merchandises: cart.items.map(i => ({name: i.name, price: i.price, total: i.total})),
        tickets: [],
        totalPrice: cart.totalPrice,
        quantity: cart.total
    }
    const res = await axios.post('order/create', data)
    return res.data;
}