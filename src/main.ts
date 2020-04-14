import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {join} from 'path';
import {readFileSync} from 'fs';
import {environment} from './environment/env';
import {EnvStatus} from '@enoviah/nest-core/dist/models/environment.model';
import {Logger} from '@nestjs/common';

function getVersion(): number {
    let path: string;
    if (environment.getEnvStatus() !== EnvStatus.LOCAL) {
        path = join('.', 'package.json');
    } else {
        path = join('.', 'package.json');
    }
    let file: any = readFileSync(path);
    file = file.toString();
    try {
        file = JSON.parse(file);
    } catch (e) {
        Logger.error('package.json un-parsable', '', 'Version');
        return 0;
    }
    return file.version;
}

function initSwagger(app: any) {
    const options = new DocumentBuilder()
            .setTitle('CVDCARE API')
            .setDescription('CVDCARE API description')
            .setVersion(getVersion().toString())
            .addBearerAuth()
            .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api-docs/', app, document);
}

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(helmet());
    app.use(cors({origin: '*'}));
    app.use(bodyParser.json({limit: '1mb'}));
    app.use(bodyParser.urlencoded({extended: true}));
    initSwagger(app);
    await app.listen(environment.environment.PORT);
}

bootstrap();
