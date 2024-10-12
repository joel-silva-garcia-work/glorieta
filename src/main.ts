import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ClearWhiteSpaceInterceptor } from './common/base/interceptors/white-space.interceptor';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import csurf from 'csurf';
import * as express from 'express';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false,
      transform: true,
    }),
  );
  app.useGlobalInterceptors(new ClearWhiteSpaceInterceptor());

  const options = new DocumentBuilder()
    .setTitle('Api')
    .setDescription('SHOP API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

   // Configurar CSRF
   app.use(cookieParser());
   app.use(express.urlencoded({ extended: true }));
 
   // Configurar CSRF
  //  app.use(csurf({
  //    cookie: { 
  //      httpOnly: true, 
  //      secure: process.env.NODE_ENV === 'production', 
  //      sameSite: 'strict' 
  //    }
  //  }));
  // await app.listen(3333);
  await app.listen(5000);
}
bootstrap();
