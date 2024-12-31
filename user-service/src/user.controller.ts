import {Controller} from '@nestjs/common';
import {UserService} from './user.service';
import {MessagePattern} from "@nestjs/microservices";
import {IUpdateParamsById, UserRepository} from "./interfaces/UserRepository";
import {IUser} from "./interfaces/IUser";
import {IUserLogin} from "./interfaces/IUserLogin";
import {IUserCreateDto} from "./interfaces/IUserCreateDto";
import CustomError from "./interfaces/IError";


@Controller('/users')
export class UserController implements UserRepository {
    constructor(private readonly userService: UserService) {
    }

    @MessagePattern('user_create')
    create(data: IUserCreateDto): Promise<IUser | CustomError> {
        return this.userService.create(data);
    }

    @MessagePattern('user_delete')
    deleteById(id: string): Promise<IUser> {
        return this.userService.deleteById(id);
    }

    @MessagePattern('user_find_all')
    findAll(): Promise<IUser[]> {
        return this.userService.findAll();
    }

    @MessagePattern('user_find_by_credentials')
    findOneByCredentials(data: IUserLogin): Promise<IUser | CustomError> {
        return this.userService.findOneByCredentials(data);
    }

    @MessagePattern('user_find_by_id')
    findOneById(id: string): Promise<IUser> {
        return this.userService.findOneById(id);
    }

    @MessagePattern('users_find_by_role')
    findByRole(role: string): Promise<IUser[]> {
        return this.userService.findAllByRole(role.toUpperCase());
    }

    @MessagePattern('user_update')
    updateById(params: IUpdateParamsById): Promise<IUser> {
        return this.userService.updateById(params);
    }
}
