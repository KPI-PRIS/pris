import {Injectable} from '@nestjs/common';
import {IUpdateParamsById, MerchRepository} from "./interfaces/MerchRepository";
import {IMerch} from "./interfaces/IMerch";
import {PrismaService} from "./prisma.service";

@Injectable()
export class MerchandiseService implements MerchRepository {

    constructor(private readonly prisma: PrismaService) {
    }

    create(data: IMerch): Promise<IMerch> {
        return this.prisma.merchandise.create({data});
    }

    deleteById(id: string): Promise<IMerch> {
        return this.prisma.merchandise.delete({where: {id}});
    }

    findAll(): Promise<IMerch[]> {
        return this.prisma.merchandise.findMany();
    }

    async findAllByPage(numberPage: number) {
        const totalMatches: number = await this.prisma.merchandise.count();
        const itemsPerPage = 6;

        const startIndex = (numberPage - 1) * itemsPerPage;
        const totalPages = Math.ceil(totalMatches / itemsPerPage);
        const merches = await this.prisma.merchandise.findMany({
            skip: startIndex,
            take: itemsPerPage,
        });
        return {
            numberPage,
            datas: merches,
            totalDatas: totalMatches,
            totalPages,
        };
    }

    findOneById(id: string): Promise<IMerch> {
        return this.prisma.merchandise.findFirst({where: {id}});
    }

    updateById(params: IUpdateParamsById): Promise<IMerch> {
        return this.prisma.merchandise.update({
            where: {
                id: params.id
            },
            data: params.data
        });
    }


}