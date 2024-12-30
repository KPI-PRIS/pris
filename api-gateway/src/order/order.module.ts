import {Module} from '@nestjs/common';
import {OrderController} from './order.controller';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {AuthModule} from "../auth/auth.module";

@Module({
    controllers: [OrderController],
    imports: [
        AuthModule,
        ClientsModule.register([
            {
                name: 'ORDER_SERVICE',
                transport: Transport.TCP,
                options: {
                    port: 3008,
                },
            },
            {
                name: 'PAYMENT_SERVICE',
                transport: Transport.TCP,
                options: {
                    port: 3009,
                },
            },
        ],)
    ],
})
export class OrderModule {
}
