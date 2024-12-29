import {Item, Ticket} from "@prisma/client";

export interface Order {
    id: string;
    user_id?: string;
    merchandises: Item[],
    tickets: Ticket[],
    totalPrice: number,
    quantity: number
}