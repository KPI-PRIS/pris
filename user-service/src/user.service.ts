import {Injectable} from '@nestjs/common';
import {PrismaService} from "./prisma.service";
import {IUpdateParamsById, UserRepository} from './interfaces/UserRepository'
import {IUser} from "./interfaces/IUser";
import * as bcrypt from 'bcrypt';
import {IUserLogin} from "./interfaces/IUserLogin";
import {IUserCreateDto} from "./interfaces/IUserCreateDto";
import CustomError from "./interfaces/IError";

@Injectable()
export class UserService implements UserRepository {
    private saltOrRounds: number = 10;

    constructor(private readonly prisma: PrismaService) {
    }

    async findAll(): Promise<IUser[]> {
        return this.prisma.user.findMany();
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

    async findOneById(id: string): Promise<IUser> {
        return this.prisma.user.findUnique({where: {id}});
    }


    async create(data: IUserCreateDto): Promise<IUser | CustomError> {
        const user: IUser = await this.prisma.user.findUnique({where: {email: data.email}})
        if (user) {
            return new CustomError("Вже існує акаунт із такою поштою", 409)
        }
        const hashPassword: string = await bcrypt.hash(data.password, this.saltOrRounds)
        const newData = {...data, password: hashPassword};
        return this.prisma.user.create({data: newData})
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
