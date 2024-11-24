import {Module} from '@nestjs/common';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {TeamController} from "./team.controller";

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'TEAM_SERVICE',
                transport: Transport.TCP,
                options: {
                    port: 3002,
                },
            },
        ],)
    ],
    controllers: [TeamController],
})
export class TeamModule {
}
