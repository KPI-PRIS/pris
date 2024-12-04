import {Controller} from '@nestjs/common';
import {MerchandiseService} from './merchandise.service';
import {IUpdateParamsById, MerchRepository} from "./interfaces/MerchRepository";
import {IMerch} from "./interfaces/IMerch";
import {MessagePattern} from "@nestjs/microservices";

@Controller()
export class MerchandiseController implements MerchRepository {
    constructor(private readonly merchandiseService: MerchandiseService) {
    }

    @MessagePattern('merch_create')
    create(data: IMerch): Promise<IMerch> {
        return this.merchandiseService.create(data);
    }

    @MessagePattern('merch_delete_by_id')
    deleteById(id: string): Promise<IMerch> {
        return this.merchandiseService.deleteById(id);
    }

    @MessagePattern('merch_find_all')
    findAll(): Promise<IMerch[]> {
        return this.merchandiseService.findAll();
    }

    @MessagePattern('merch_find_one_by_id')
    findOneById(id: string): Promise<IMerch> {
        return this.merchandiseService.findOneById(id);
    }

    @MessagePattern('merch_update_by_id')
    updateById(params: IUpdateParamsById): Promise<IMerch> {
        return this.merchandiseService.updateById(params);
    }
}
