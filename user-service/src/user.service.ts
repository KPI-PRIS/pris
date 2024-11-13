import {Injectable} from '@nestjs/common';

export interface User {
    id: number;
    name: string;
}

@Injectable()
export class UserService {
    getUsers(): User[] {
        return [
            {id: 1, name: 'Misha',},
            {id: 2, name: 'Dima',},
            {id: 3, name: 'Vova',},
        ];
    }
}
