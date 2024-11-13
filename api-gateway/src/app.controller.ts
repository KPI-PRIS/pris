import {Controller, Get, Inject} from '@nestjs/common';
import {AppService} from './app.service';
import {ClientProxy} from "@nestjs/microservices";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService,
                @Inject('USER_SERVICE') private readonly user_microservice: ClientProxy) {
    }

    @Get()
    getUsers() {
        return this.user_microservice.send('get_users', {});
    }
}
