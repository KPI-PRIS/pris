import {Role} from "@prisma/client";

export interface IUserCreateDto {
    name: string
    email: string
    password: string
    phone?: string
    role?: Role
}