import {Module} from '@nestjs/common';
import {MerchandiseController} from './merchandise.controller';
import {MerchandiseService} from './merchandise.service';
import {PrismaService} from "./prisma.service";

@Module({
    imports: [],
    controllers: [MerchandiseController],
    providers: [MerchandiseService, PrismaService],
})
export class MerchandiseModule {
}
