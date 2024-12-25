import {Body, Controller, Delete, Get, Inject, Param, Post, Put} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {IUpdateParamsById} from '../../../merchandise-service/src/interfaces/MerchRepository'
import {IMerch} from "../../../merchandise-service/src/interfaces/IMerch";
import {Observable} from "rxjs";

@Controller('merchandise')
export class MerchandiseController {
    constructor(@Inject('MERCH_SERVICE') private readonly merch_microservice: ClientProxy) {
    }

    @Post('create')
    create(@Body() data: IMerch): Observable<IMerch> {
        return this.merch_microservice.send<IMerch>("merch_create", data);
    }

    @Delete(':id')
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
    updateById(@Body() params: IUpdateParamsById): Observable<IMerch> {
        return this.merch_microservice.send<IMerch>("merch_delete_by_id", params);
    }

}
