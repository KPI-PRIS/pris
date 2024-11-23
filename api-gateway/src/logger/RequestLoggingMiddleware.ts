import {Injectable, NestMiddleware} from '@nestjs/common';
import {NextFunction, Request, Response} from 'express';

// робиться ДО того як запит обробиться
@Injectable()
export class RequestLoggingMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(`\n**** ЗАПИТ ДО СЕРВЕРУ (REQUEST)****`);
        console.log(`- Метод: ${req.method}`);
        console.log(`- URL: ${req.originalUrl}`);

        if (Object.keys(req.params).length) {
            console.log(`- Параметри запиту (Params):`, req.params);
        } else {
            console.log(`- Параметри запиту (Params): Відсутні`);
        }

        if (Object.keys(req.body).length) {
            console.log(`- Тіло запиту (Body):`, req.body);
        } else {
            console.log(`- Тіло запиту (Body): Відсутнє`);
        }

        console.log(`***************************\n`);
        next();
    }
}
