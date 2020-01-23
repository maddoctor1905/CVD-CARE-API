import {Controller, Get, Query} from '@nestjs/common';
import {QueryRequest} from './query.model';
import {QueryService} from './query.service';

@Controller('schema')
export class SchemaController {
    constructor(private readonly queryService: QueryService) {
    }

    @Get()
    schema(@Query() query: QueryRequest): number {
        return this.queryService.schema(query);
    }
}
