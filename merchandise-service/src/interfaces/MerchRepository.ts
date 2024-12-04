import {IMerch} from "./IMerch";

export interface IUpdateParamsById {
    id: string
    data: IMerch;
}

export interface MerchRepository {
    findAll: () => Promise<IMerch[]>;
    findOneById: (id: string) => Promise<IMerch>;
    create: (data: IMerch) => Promise<IMerch>;
    updateById: (params: IUpdateParamsById) => Promise<IMerch>;
    deleteById: (id: string) => Promise<IMerch>;
}