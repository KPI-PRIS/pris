import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {LoggingInterceptor} from "./logger/LoggingInterceptor";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.useGlobalInterceptors(new LoggingInterceptor());
    await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
