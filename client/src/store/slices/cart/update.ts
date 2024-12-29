import CookieService from "../../../utils/CookieService.ts";
import {Cart, CART_KEY} from "./cartSlice.ts";

export function updateCartTotals(state: Cart) {
    const {total, totalPrice} = state.items.reduce(
        (previousValue, currentValue) => ({
            total: previousValue.total + currentValue.total,
            totalPrice: previousValue.totalPrice + currentValue.price * currentValue.total,
        }),
        {total: 0, totalPrice: 0}
    );
    state.total = total;
    state.totalPrice = totalPrice;
    CookieService.setCookie(CART_KEY, JSON.stringify(state));
}