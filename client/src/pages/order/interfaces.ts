// Enum для статусів замовлення
import {Item} from "../../store/slices/cart/cartSlice.ts";

export enum Status {
    PENDING = "PENDING", // Очікується
    COMPLETED = "COMPLETED", // Завершене
    CANCELLED = "CANCELLED", // Скасоване
    SHIPPED = "SHIPPED", // Відправлене
    DELIVERED = "DELIVERED", // Доставлене
}

export function translateStatus(status: Status): string {
    const translations: Record<Status, string> = {
        [Status.PENDING]: "Очікується",
        [Status.COMPLETED]: "Завершене",
        [Status.CANCELLED]: "Скасоване",
        [Status.SHIPPED]: "Відправлене",
        [Status.DELIVERED]: "Доставлене",
    };

    return translations[status] || status; // Повертає переклад або сам статус, якщо переклад відсутній
}

// Інтерфейс для квитка
export interface Ticket {
    id: string;
    name: string;
    price: number;
    total: number;
    orderId: string;
}

// Інтерфейс для замовлення
export interface Order {
    id: string;
    user_id: string | null;
    totalPrice: number;
    quantity: number;
    status: Status;
    createdAt: string; // ISO-8601 формат дати
    merchandises: Item[];
    tickets: Ticket[];
}
