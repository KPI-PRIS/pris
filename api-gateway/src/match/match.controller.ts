import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {MatchService} from './match.service';
import {AuthGuard} from "../auth/auth.guard";
import {Roles, UserRoles} from "../auth/roles.decorator";

@Controller('match')
export class MatchController {
    constructor(private readonly matchService: MatchService) {
    }

    @Post()
    @UseGuards(AuthGuard)
    @Roles(UserRoles.ADMIN)
    create(@Body() createMatchDto) {
        return this.matchService.create(createMatchDto);
    }

    @Get('all')
    findAll() {
        return this.matchService.findAll();
    }

    @Get('/all/:page')
    findAllByPage(@Param('page') page: string) {
        return this.matchService.findAllByPage(+page);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.matchService.findOne(+id);
    }

    @Patch(':id')
    @UseGuards(AuthGuard)
    @Roles(UserRoles.ADMIN)
    update(@Param('id') id: string, @Body() updateMatchDto) {
        return this.matchService.update(+id, updateMatchDto);
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    @Roles(UserRoles.ADMIN)
    remove(@Param('id') id: string) {
        return this.matchService.remove(+id);
    }
}
