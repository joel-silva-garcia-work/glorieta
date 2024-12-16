import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ClearWhiteSpaceInterceptor } from './common/base/interceptors/white-space.interceptor';
import { NestExpressApplication } from '@nestjs/platform-express';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

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
 
  app.enableCors();
  await app.listen(5000);
}
bootstrap();
