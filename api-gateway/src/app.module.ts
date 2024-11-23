import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {TeamController} from './team/team.controller';
import {UserController} from "./user/user.controller";
import {LoggingInterceptor} from "./logger/LoggingInterceptor";
import {RequestLoggingMiddleware} from "./logger/RequestLoggingMiddleware";

@Module({
    imports: [ClientsModule.register([
        {
            name: 'USER_SERVICE',
            transport: Transport.TCP,
            options: {
                port: 3001,
            },
        },
        {
            name: 'TEAM_SERVICE',
            transport: Transport.TCP,
            options: {
                port: 3002,
            },
        },
    ])],
    controllers: [AppController, UserController, TeamController],
    providers: [LoggingInterceptor],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(RequestLoggingMiddleware)
            .forRoutes('*');
    }
}
