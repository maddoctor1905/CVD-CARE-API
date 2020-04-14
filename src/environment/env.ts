import {EnvironmentService} from '@enoviah/nest-core';
import {Environment} from './env.model';
import {Schema} from 'jsonschema';

const envSchema: Schema = {
    id: '/Env',
    type: 'object',
    properties: {
        PORT: {type: 'string'},
        MYSQL_ADDRESS: {type: 'string'},
        MYSQL_PASSWORD: {type: 'string'},
        MYSQL_PORT: {type: 'string'},
        MYSQL_USER: {type: 'string'},
        MYSQL_DATABASE: {type: 'string'},
    },
    required: ['PORT', 'MYSQL_ADDRESS', 'MYSQL_PASSWORD', 'MYSQL_PORT', 'MYSQL_USER', 'MYSQL_DATABASE'],
};

export const environment = new EnvironmentService<Environment>();
environment.validators = envSchema;
environment.loadEnvironment(true);
