import {Controller} from '@nestjs/common';
import {OrderService} from './order.service';
import {Order} from "./interfaces/Order.db";
import {MessagePattern} from "@nestjs/microservices";

@Controller()
export class OrderController {
    constructor(private readonly appService: OrderService) {
    }

    @MessagePattern('order.create')
    createOrder(order: Order) {
        return this.appService.createOrder(order)
    }


    @MessagePattern('order.get_by_id')
    getOrderById(id: string) {
        return this.appService.getOrderById(id)
    }
}
