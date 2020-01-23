import {BadRequestException, Injectable} from '@nestjs/common';
import {QueryRequest, schema} from './query.model';
import {EnvironmentService, JsonSchemaService} from '@enoviah/nest-core';

@Injectable()
export class QueryService {
    constructor(private readonly validatorService: JsonSchemaService, private readonly env: EnvironmentService<{ test: string }>) {
        // tslint:disable-next-line:no-console
        console.log(env.environment.test);
    }

    schema(query: QueryRequest): number {
        const bodyValidation = this.validatorService.validate(query, schema);
        query.query = +query.query;
        if (!bodyValidation.valid) {
            throw new BadRequestException(bodyValidation.errors);
        }
        return query.query;
    }

}
