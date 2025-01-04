import {Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards} from "@nestjs/common";
import {ClientProxy} from "@nestjs/microservices";
import {IUpdateParamsById} from '../../../user-service/src/interfaces/UserRepository'
import {IUser} from "../../../user-service/src/interfaces/IUser";
import {Observable} from "rxjs";
import {IUserCreateDto} from "../../../user-service/src/interfaces/IUserCreateDto";
import CustomError from "../../../user-service/src/interfaces/IError";
import {AuthGuard} from "../auth/auth.guard";
import {Roles, UserRoles} from "../auth/roles.decorator";

@Controller('user')
export class UserController {
    constructor(@Inject('USER_SERVICE') private readonly user_microservice: ClientProxy) {
    }

    @Post('create')
    @UseGuards(AuthGuard)
    @Roles(UserRoles.ADMIN)
    create(@Body() data: IUserCreateDto): Observable<IUser | CustomError> {
        return this.user_microservice.send<IUser | CustomError>('user_create', data);
    }

    @Delete('delete/:id')
    @UseGuards(AuthGuard)
    @Roles(UserRoles.ADMIN)
    deleteById(@Param('id') id: string): Observable<IUser> {
        return this.user_microservice.send<IUser>('user_delete', id);
    }

    @Get('all')
    @UseGuards(AuthGuard)
    @Roles(UserRoles.ADMIN)
    findAll(): Observable<IUser[]> {
        return this.user_microservice.send<IUser[]>('user_find_all', {});
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    findOneById(@Param('id') id: string): Observable<IUser> {
        return this.user_microservice.send<IUser>('user_find_by_id', id);
    }

    @Put("update")
    @UseGuards(AuthGuard)
    updateById(@Body() params: IUpdateParamsById): Observable<IUser> {
        return this.user_microservice.send<IUser>('user_update', params);
    }

    @Get('role/:role')
    getUserByRole(@Param('role') role: string): Observable<IUser> {
        return this.user_microservice.send<IUser>('users_find_by_role', role);
    }
}