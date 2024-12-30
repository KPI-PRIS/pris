import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {JwtModule} from "@nestjs/jwt";
import * as process from "node:process";
import {ConfigModule} from "@nestjs/config";
import {AuthGuard} from "./auth.guard";

@Module({
    imports: [
        ConfigModule.forRoot(),
        ClientsModule.register([
            {
                name: 'USER_SERVICE',
                transport: Transport.TCP,
                options: {
                    port: 3001,
                },
            }
        ],),
        JwtModule.register({
            secret: process.env.JWT_TOKEN_SECRET,
            signOptions: {expiresIn: '36000m'},
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, AuthGuard],
    exports: [AuthGuard, JwtModule]
})
export class AuthModule {
}
