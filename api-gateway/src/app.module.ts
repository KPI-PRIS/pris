import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ClientsModule, Transport} from "@nestjs/microservices";
import { TeamController } from './team/team.controller';

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
    controllers: [AppController, TeamController],
    providers: [AppService],
})
export class AppModule {
}
