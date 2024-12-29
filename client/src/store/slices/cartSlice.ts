import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import CookieService from "../../utils/CookieService.ts";

export interface Item {
    id: string;
    name: string;
    price: number;
    total: number;
    image_url: string;
}

export interface Cart {
    totalPrice: number;
    total: number;
    items: Item[]
}

const CART_KEY = "Cart_key"
const existCart = CookieService.getCookie(CART_KEY);
const defaultValue: Cart = {totalPrice: 0, total: 0, items: []};
const initialState: Cart = existCart ? JSON.parse(existCart) : defaultValue;

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state: Cart, action: PayloadAction<Item>) {
            const addItems: Item = action.payload;
            const itemIndex = state.items.findIndex(i => i.id === addItems.id)

            if (itemIndex === -1) {
                console.log("Item is not exist in cart. Add new Item.", addItems)
                state.items.push(addItems)
            } else {
                console.log("Item is already exist in cart. Increase total for item", addItems)
                state.items[itemIndex].total += addItems.total;
            }

            const {total, totalPrice} = state.items.reduce(
                (previousValue, currentValue) => ({
                    total: previousValue.total + currentValue.total,
                    totalPrice: previousValue.totalPrice + (currentValue.price * currentValue.total)
                })
                , {total: 0, totalPrice: 0})
            state.total = total;
            state.totalPrice = totalPrice;
            CookieService.setCookie(CART_KEY, JSON.stringify(state))
        },
        removeItem(state: Cart, action: PayloadAction<Item>) {
            const removeItem: Item = action.payload;
            const itemIndex = state.items.findIndex(i => i.id === removeItem.id)
            if (itemIndex === -1) {
                console.log("Item is not exist in cart")
                return;
            }

            state.items[itemIndex].total--;

            if (state.items[itemIndex].total <= 0) {
                state.items = state.items.filter(i => i.id !== removeItem.id)
            }

            const {total, totalPrice} = state.items.reduce(
                (previousValue, currentValue) => ({
                    total: previousValue.total + currentValue.total,
                    totalPrice: previousValue.totalPrice + (currentValue.price * currentValue.total)
                })
                , {total: 0, totalPrice: 0})
            state.total = total;
            state.totalPrice = totalPrice;
            CookieService.setCookie(CART_KEY, JSON.stringify(state))
        },
        clearCart() {
            CookieService.deleteCookie(CART_KEY)
            return defaultValue;
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;