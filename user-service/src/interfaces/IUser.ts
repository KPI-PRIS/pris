import {Role} from "@prisma/client";

export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string
    phone?: string;
    registeredAt: Date;
    role: Role
}