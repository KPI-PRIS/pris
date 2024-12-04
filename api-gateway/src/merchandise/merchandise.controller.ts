import {Controller, Get, Inject} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {IUpdateParamsById} from '../../../merchandise-service/src/interfaces/MerchRepository'
import {IMerch} from "../../../merchandise-service/src/interfaces/IMerch";
import {Observable} from "rxjs";

@Controller('merchandise')
export class MerchandiseController {
    constructor(@Inject('MERCH_SERVICE') private readonly merch_microservice: ClientProxy) {
    }

    create(data: IMerch): Promise<IMerch> {
        return Promise.resolve(undefined);
    }

    deleteById(id: string): Promise<IMerch> {
        return Promise.resolve(undefined);
    }

    @Get('all')
    findAll(): Observable<IMerch[]> {
        return this.merch_microservice.send("merch_find_all", {});
    }

    findOneById(id: string): Promise<IMerch> {
        return Promise.resolve(undefined);
    }

    updateById(params: IUpdateParamsById): Promise<IMerch> {
        return Promise.resolve(undefined);
    }

}
