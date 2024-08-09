import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ClearWhiteSpaceInterceptor } from './common/base/interceptors/white-space.interceptor';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { GlobalesService } from './globales/globales.service';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
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

  // iniciando puerto 5000 para dejar free el 3000 para frontend
  await app.listen(5000);
 
}
bootstrap();
