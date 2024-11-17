import {Controller, Get, Inject} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";

@Controller('team')
export class TeamController {
    constructor(
        @Inject('TEAM_SERVICE') private readonly team_microservice: ClientProxy) {
    }

    @Get()
    getTeams() {
        return this.team_microservice.send('findAllTeam', {});
    }
}
