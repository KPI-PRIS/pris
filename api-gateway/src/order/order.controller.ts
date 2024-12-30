import {BadRequestException, Body, Controller, Get, Inject, Post, Req, UseGuards} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {Order} from '../../../order-microservice/src/interfaces/Order.db'
import {lastValueFrom, Observable} from "rxjs";
import {CreatePaymentDto} from "../../../payment-service/src/payment/payment.dto";
import {AuthGuard} from "../auth/auth.guard";

@Controller('order')
export class OrderController {
    constructor(@Inject('ORDER_SERVICE') private readonly order_microservice: ClientProxy,
                @Inject('PAYMENT_SERVICE') private readonly payment_microservice: ClientProxy) {
    }

    @Post('create')
    async createOrder(@Body() order: Order): Promise<Observable<string>> {
        const orderInfo: Order = await lastValueFrom(this.order_microservice.send<Order>('order.create', order));

        const description = orderInfo.merchandises
            .map(i => `${i.name}. Ціна за 1 шт. ${i.price} гривень (Всього: ${i.total}) \n`)
            .join(' ')

        const paymentInfo: CreatePaymentDto = {
            amount: orderInfo.totalPrice,
            currency: "UAH",
            orderId: orderInfo.id,
            description
        }
        return this.payment_microservice.send<string>("payment.create", paymentInfo);
    }

    @Get('user')
    @UseGuards(AuthGuard)
    async getUserOrders(@Req() req: any) {
        if (!req.user || !req.user.id) {
            throw new BadRequestException("Не можемо знайти користувача")
        }
        return this.order_microservice.send("order.get_items_by_user_id", req.user.id)
    }
}
