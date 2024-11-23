import {Prisma} from "@prisma/client";
import {IUser} from "./IUser";
import {IUserLogin} from "./IUserLogin";
import CustomError from "./IError";
import {IUserCreateDto} from "./IUserCreateDto";

export interface IUpdateParamsById {
    id: string
    data: Prisma.UserUpdateInput;
}

export interface UserRepository {
    findAll: () => Promise<IUser[]>;
    findOneById: (id: string) => Promise<IUser>;
    findOneByCredentials: (data: IUserLogin) => Promise<IUser | CustomError>;
    create: (data: IUserCreateDto) => Promise<IUser | CustomError>;
    updateById: (params: IUpdateParamsById) => Promise<IUser>;
    deleteById: (id: string) => Promise<IUser>
}