import {Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {IMerch} from "../../../merchandise-service/src/interfaces/IMerch";
import {Observable} from "rxjs";
import {AuthGuard} from "../auth/auth.guard";
import {Roles, UserRoles} from "../auth/roles.decorator";

@Controller('merchandise')
export class MerchandiseController {
    constructor(@Inject('MERCH_SERVICE') private readonly merch_microservice: ClientProxy) {
    }

    @Post('create')
    @UseGuards(AuthGuard)
    @Roles(UserRoles.ADMIN)
    create(@Body() data: IMerch): Observable<IMerch> {
        return this.merch_microservice.send<IMerch>("merch_create", data);
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    @Roles(UserRoles.ADMIN)
    deleteById(@Param('id') id: string): Observable<IMerch> {
        return this.merch_microservice.send<IMerch>("merch_delete_by_id", id);
    }

    @Get('all')
    findAll(): Observable<IMerch[]> {
        return this.merch_microservice.send("merch_find_all", {});
    }

    @Get('all/:page')
    findAllByPage(@Param('page') page: string): Observable<IMerch[]> {
        return this.merch_microservice.send("merch_find_all_by_page", page);
    }

    @Get(':id')
    findOneById(@Param('id') id: string): Observable<IMerch> {
        return this.merch_microservice.send<IMerch>("merch_find_one_by_id", id);
    }

    @Put('update')
    @UseGuards(AuthGuard)
    @Roles(UserRoles.ADMIN)
    updateById(@Body() params: IMerch): Observable<IMerch> {
        return this.merch_microservice.send<IMerch>("merch_update_by_id", params);
    }

}
