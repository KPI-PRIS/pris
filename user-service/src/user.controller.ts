import {Controller} from '@nestjs/common';
import {User, UserService} from './user.service';
import {MessagePattern} from "@nestjs/microservices";


@Controller('/users')
export class UserController {
    constructor(private readonly appService: UserService) {
    }

    @MessagePattern('get_users')
    getUsers(): User[] {
        return this.appService.getUsers();
    }
}
