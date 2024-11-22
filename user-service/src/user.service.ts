import {BadRequestException, Injectable} from '@nestjs/common';
import {PrismaService} from "./prisma.service";
import {IUpdateParamsById, UserRepository} from './interfaces/UserRepository'
import {Prisma} from "@prisma/client";
import {IUser} from "./interfaces/IUser";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService implements UserRepository {
    private saltOrRounds: number = 10;

    constructor(private readonly prisma: PrismaService) {
    }

    async findAll(): Promise<IUser[]> {
        return this.prisma.user.findMany();
    }

    async findOneByCredentials(email: string, password: string): Promise<IUser> {
        const user: IUser = await this.prisma.user.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            throw new BadRequestException('Not correct email or password')
        }
        const isEqualsPassword: boolean = await bcrypt.compare(password, user.password);

        if (!isEqualsPassword) {
            throw new BadRequestException('Not correct email or password')
        }

        return user;
    }

    async findOneById(id: string): Promise<IUser> {
        return this.prisma.user.findUnique({where: {id}});
    }


    async create(data: Prisma.UserCreateInput): Promise<IUser> {
        const hashPassword: string = await bcrypt.hash(data.password, this.saltOrRounds)
        return this.prisma.user.create({data: {password: hashPassword, ...data}})
    }

    async updateById({id, data}: IUpdateParamsById): Promise<IUser> {
        return this.prisma.user.update({
            data,
            where: {id},
        });
    }

    async deleteById(id: string): Promise<IUser> {
        return this.prisma.user.delete({
            where: {id},
        });
    }
}
