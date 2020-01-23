import {Schema} from 'jsonschema';
import {ApiModelProperty} from '@nestjs/swagger';

export class QueryRequest {
    @ApiModelProperty()
    query: number;
}

// tslint:disable-next-line:max-classes-per-file
export class QueryResponse {
    @ApiModelProperty()
    query: number;
}

export const schema: Schema = {
    id: '/schema',
    type: 'object',
    properties: {
        query: {type: 'number'},
    },
    required: ['query'],
};
