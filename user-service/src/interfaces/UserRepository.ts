import {Prisma} from "@prisma/client";
import {IUser} from "./IUser";

export interface IUpdateParamsById {
    id: string
    data: Prisma.UserUpdateInput;
}

export interface UserRepository {
    findAll: () => Promise<IUser[]>;
    findOneById: (id: string) => Promise<IUser>;
    findOneByCredentials: (email: string, password: string) => Promise<IUser>;
    create: (data: Prisma.UserCreateInput) => Promise<IUser>;
    updateById: (params: IUpdateParamsById) => Promise<IUser>;
    deleteById: (id: string) => Promise<IUser>
}