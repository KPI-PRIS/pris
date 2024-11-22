import {Controller} from '@nestjs/common';
import {UserService} from './user.service';
import {MessagePattern} from "@nestjs/microservices";
import {IUpdateParamsById, UserRepository} from "./interfaces/UserRepository";
import {Prisma} from "@prisma/client";
import {IUser} from "./interfaces/IUser";


@Controller('/users')
export class UserController implements UserRepository {
    constructor(private readonly userService: UserService) {
    }

    @MessagePattern('user_create')
    create(data: Prisma.UserCreateInput): Promise<IUser> {
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
    findOneByCredentials(email: string, password: string): Promise<IUser> {
        return this.userService.findOneByCredentials(email, password);
    }

    @MessagePattern('user_find_by_id')
    findOneById(id: string): Promise<IUser> {
        return this.userService.findOneById(id);
    }

    @MessagePattern('user_update')
    updateById(params: IUpdateParamsById): Promise<IUser> {
        return this.userService.updateById(params);
    }
}
