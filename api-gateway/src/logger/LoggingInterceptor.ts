import {
    BadRequestException,
    CallHandler,
    ConflictException,
    ExecutionContext,
    Injectable,
    NestInterceptor,
    UnauthorizedException
} from '@nestjs/common';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

// робиться ПІСЛЯ того як запит обробиться
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const req = context.switchToHttp().getRequest();
        const {url, method} = req;

        console.log(`\n**** ЛОГ ВІДПОВІДІ (RESPONSE) ****`);
        console.log(`- Метод: ${method}`);
        console.log(`- URL: ${url}`);

        const start = Date.now();

        return next.handle().pipe(
            tap((data) => {
                console.log(`- Відповідь сервера: `, data);
                console.log(`- Час обробки запиту: ${Date.now() - start} мс`);
                if (data._code && data._code >= 400) {
                    this.throwError(data)
                }
                console.log(`***************************************\n`);
            }),
            catchError((err) => {
                console.error(`- Помилка: ${err.message}`);
                console.log(`***************************************\n`);
                throw err;
            }),
        );
    }

    private throwError(data: any) {
        const message = data._message
        switch (data._code) {
            case 401:
                throw new UnauthorizedException(message)
            case 409:
                throw new ConflictException(message)
            default:
                console.warn("Unhandled error", data)
                throw new BadRequestException(message)
        }
    }
}
