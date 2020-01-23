import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {EnoNestCoreModule} from '@enoviah/nest-core';
import {BasicModule} from './modules/basic/basic.module';
import {QueryModule} from './modules/schema/query.module';

@Module({
    imports: [EnoNestCoreModule, BasicModule, QueryModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
