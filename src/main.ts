import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

function initSwagger(app: any) {
  const options = new DocumentBuilder()
      .setTitle('OnstageCo')
      .setDescription('Onstage API description')
      .setVersion('1.0.0')
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
    await app.listen(3000);
}

bootstrap();
