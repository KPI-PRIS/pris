import {IPagination} from "../../interfaces/IPagination.ts";

export interface IMerch {
    id: string;
    name: string;
    description: string;
    price: number;
    stockQuantity: number;
    category: string;
    image_url: string;
}

export interface IMerchPagination extends IPagination<IMerch> {
}