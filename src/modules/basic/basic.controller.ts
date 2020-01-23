import {Controller, Get} from '@nestjs/common';
import {BasicService} from './basic.service';

@Controller('basic')
export class BasicController {
    constructor(private readonly basicService: BasicService) {
    }

    @Get()
    basic(): string {
        return this.basicService.basic();
    }
}
