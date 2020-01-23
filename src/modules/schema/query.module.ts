import {Module} from '@nestjs/common';
import {SchemaController} from './schema.controller';
import {QueryService} from './query.service';
import {EnvironmentModule, JsonSchemaModule} from '@enoviah/nest-core';

@Module({
    imports: [EnvironmentModule, JsonSchemaModule],
    controllers: [SchemaController],
    providers: [QueryService],
})
export class QueryModule {
}
