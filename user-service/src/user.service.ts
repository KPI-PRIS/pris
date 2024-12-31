import {Injectable} from '@nestjs/common';
import {PrismaService} from "./prisma.service";
import {IUpdateParamsById, UserRepository} from './interfaces/UserRepository'
import {IUser} from "./interfaces/IUser";
import * as bcrypt from 'bcrypt';
import {IUserLogin} from "./interfaces/IUserLogin";
import {IUserCreateDto} from "./interfaces/IUserCreateDto";
import CustomError from "./interfaces/IError";
import {Role} from "@prisma/client";

@Injectable()
export class UserService implements UserRepository {
    private saltOrRounds: number = 10;

    constructor(private readonly prisma: PrismaService) {
    }

    findAll(): Promise<IUser[]> {
        return this.prisma.user.findMany();
    }

    findAllByRole(role: string): Promise<IUser[]> {
        if (!Object.values(Role).includes(role as Role)) {
            throw new Error(`Немає такої ролі: ${role}`);
        }
        return this.prisma.user.findMany({where: {role: role as Role}});
    }

    async findOneByCredentials({email, password}: IUserLogin): Promise<IUser | CustomError> {
        const user: IUser = await this.prisma.user.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            return new CustomError('Не правильна пошта або пароль', 401)
        }
        const isEqualsPassword: boolean = await bcrypt.compare(password, user.password);

        if (!isEqualsPassword) {
            return new CustomError('Не правильна пошта або пароль', 401)
        }

        return user;
    }

    findOneById(id: string): Promise<IUser> {
        return this.prisma.user.findUnique({where: {id}});
    }


    async create(data: IUserCreateDto): Promise<IUser | CustomError> {
        const user: IUser = await this.prisma.user.findUnique({where: {email: data.email}})
        if (user) {
            return new CustomError("Вже існує акаунт із такою поштою", 409)
        }
        const hashPassword: string = await bcrypt.hash(data.password, this.saltOrRounds)
        return this.prisma.user.create({data: {...data, password: hashPassword}})
    }

    updateById({id, data}: IUpdateParamsById): Promise<IUser> {
        return this.prisma.user.update({
            data,
            where: {id},
        });
    }

    deleteById(id: string): Promise<IUser> {
        return this.prisma.user.delete({
            where: {id},
        });
    }
}
