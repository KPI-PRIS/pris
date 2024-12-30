import {CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException} from '@nestjs/common';
import {Reflector} from '@nestjs/core';
import {JwtService} from "@nestjs/jwt";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService, private readonly reflector: Reflector) {
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers['authorization'];

        if (!authHeader) {
            throw new UnauthorizedException('Authorization header is missing');
        }

        const [type, token] = authHeader.split(' ');
        if (type !== 'Bearer' || !token) {
            throw new UnauthorizedException('Invalid token format');
        }

        const user = this.jwtService.verify(token);

        if (!user) {
            throw new UnauthorizedException('Invalid or expired token');
        }

        if (roles && !roles.includes(user.role.toLowerCase())) {
            throw new ForbiddenException('Access denied: insufficient permissions');
        }

        // Attach user info to the request for further use
        request.user = user;
        return true;
    }
}
