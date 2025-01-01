import {SetMetadata} from "@nestjs/common";

export enum UserRoles {
    ADMIN = 'ADMIN',
    FAN = 'FAN',
    COACH = 'COACH',
    PLAYER = 'PLAYER',
}

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
