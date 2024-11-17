import {Controller} from '@nestjs/common';
import {MessagePattern, Payload} from '@nestjs/microservices';
import {Team, TeamService} from './team.service';

@Controller()
export class TeamController {
    constructor(private readonly teamService: TeamService) {
    }

    @MessagePattern('createTeam')
    create(@Payload() createTeamDto: Team) {
        return this.teamService.create(createTeamDto);
    }

    @MessagePattern('findAllTeam')
    findAll() {
        return this.teamService.findAll();
    }

    @MessagePattern('findOneTeam')
    findOne(@Payload() id: number) {
        return this.teamService.findOne(id);
    }

    @MessagePattern('updateTeam')
    update(@Payload() updateTeamDto: Team) {
        return this.teamService.update(updateTeamDto.id, updateTeamDto);
    }

    @MessagePattern('removeTeam')
    remove(@Payload() id: number) {
        return this.teamService.delete(id);
    }
}
