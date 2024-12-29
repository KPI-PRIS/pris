import {Controller} from "@nestjs/common";
import {MessagePattern, Payload} from "@nestjs/microservices";
import {CreatePaymentDto} from "../payment/payment.dto";
import {PaymentService} from "../payment/payment.service";
import {BasePaymentController} from "../payment/base.payment.controller";

@Controller("payment-microservice")
export class PaymentMicroserviceController extends BasePaymentController {
    constructor(protected readonly paymentService: PaymentService) {
        super(paymentService);
    }

    @MessagePattern("payment.create")
    handleCreatePayment(@Payload() payload: CreatePaymentDto): string {
        return this.paymentService.createPaymentLink(payload);
    }

    @MessagePattern("payment.callback")
    handleCallbackPay(@Payload() payload: any) {
        return this.handleCallback(payload);
    }
}
