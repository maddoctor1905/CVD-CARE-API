import { Module } from '@nestjs/common';
import {BasicController} from './basic.controller';
import {BasicService} from './basic.service';
import {EnvironmentModule} from '@enoviah/nest-core';

@Module({
    imports: [EnvironmentModule],
    controllers: [BasicController],
    providers: [BasicService],
})
export class BasicModule {}
