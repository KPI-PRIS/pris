import {NestFactory} from '@nestjs/core';
import {MerchandiseModule} from './merchandise.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        MerchandiseModule,
        {
            transport: Transport.TCP,
            options: {
                port: 3003
            }
        },
    );
    await app.listen();
}

bootstrap();
