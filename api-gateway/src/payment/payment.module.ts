import {Module} from '@nestjs/common';
import {PaymentController} from './payment.controller';
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'PAYMENT_SERVICE',
                transport: Transport.TCP,
                options: {
                    port: 3009,
                },
            },
        ],)
    ],
    controllers: [PaymentController],
})
export class PaymentModule {
}
