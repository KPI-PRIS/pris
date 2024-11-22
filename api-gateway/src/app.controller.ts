import {Controller, Get} from '@nestjs/common';

@Controller()
export class AppController {

    @Get()
    getStatus() {
        return 'Main page of app back';
    }
}
