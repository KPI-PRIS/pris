import {Module} from '@nestjs/common';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {UserController} from "./user.controller";
import {AuthModule} from "../auth/auth.module";

@Module({
    imports: [
        AuthModule,
        ClientsModule.register([
            {
                name: 'USER_SERVICE',
                transport: Transport.TCP,
                options: {
                    port: 3001,
                },
            }
        ],)
    ],
    controllers: [UserController],
})
export class UserModule {
}
