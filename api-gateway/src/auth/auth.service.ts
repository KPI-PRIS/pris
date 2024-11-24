import {Injectable, UnauthorizedException} from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {
    }

    handleResponse(res: any) {
        if (res._code && res._code >= 400) {
            return res;
        }
        return {access_token: this.jwtService.sign(res)};
    }

    verifyToken(token: string): any {
        try {
            return this.jwtService.verify(token);
        } catch (error: any) {
            console.log(error)
            throw new UnauthorizedException('Invalid or expired token');
        }
    }
}
