import {Body, Controller, Inject, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {CreatePaymentDto} from '../../../payment-service/src/payment/payment.dto'
import {Observable} from "rxjs";

@Controller('payment')
export class PaymentController {
    constructor(@Inject('PAYMENT_SERVICE') private readonly payment_microservice: ClientProxy) {
    }

    @Post('create')
    @UsePipes(new ValidationPipe({transform: true}))
    createPayment(@Body() payload: CreatePaymentDto): Observable<string> {
        return this.payment_microservice.send<string>("payment.create", payload)
    }
}
