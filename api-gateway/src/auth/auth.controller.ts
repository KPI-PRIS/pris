import {Body, Controller, Get, Headers, Inject, Post, UnauthorizedException} from '@nestjs/common';
import {AuthService} from './auth.service';
import {IUserLogin} from "../../../user-service/src/interfaces/IUserLogin";
import {map} from "rxjs";
import {IUserCreateDto} from "../../../user-service/src/interfaces/IUserCreateDto";
import {ClientProxy} from "@nestjs/microservices";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService,
                @Inject('USER_SERVICE') private readonly user_microservice: ClientProxy) {
    }

    @Post('login')
    login(@Body() data: IUserLogin) {
        return this.user_microservice
            .send('user_find_by_credentials', data)
            .pipe(map((res) => this.authService.handleResponse(res)));
    }


    @Post('registration')
    registration(@Body() data: IUserCreateDto) {
        return this.user_microservice
            .send('user_create', data)
            .pipe(map((res) => this.authService.handleResponse(res)));
    }
}
