import {Module} from '@nestjs/common';
import {MerchandiseController} from './merchandise.controller';
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'MERCH_SERVICE',
                transport: Transport.TCP,
                options: {
                    port: 3003,
                },
            },
        ],)
    ],
    controllers: [MerchandiseController],
})
export class MerchandiseModule {
}
