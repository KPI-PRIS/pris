import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {LoggingInterceptor} from "./logger/LoggingInterceptor";
import {RequestLoggingMiddleware} from "./logger/RequestLoggingMiddleware";
import {AuthModule} from './auth/auth.module';
import {UserModule} from "./user/user.module";
import {TeamModule} from "./team/team.module";

@Module({
    imports: [AuthModule, UserModule, TeamModule],
    providers: [LoggingInterceptor],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(RequestLoggingMiddleware)
            .forRoutes('*');
    }
}
