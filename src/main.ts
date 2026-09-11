import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.setGlobalPrefix('api');

  const PORT = process.env.PORT ?? 4000;

  await app.listen(PORT);

  console.log(`App is running on port ${PORT}`);
}
await bootstrap();
