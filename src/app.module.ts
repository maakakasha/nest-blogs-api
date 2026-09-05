import { Module } from '@nestjs/common';
import { BlogsController } from './app.controller.js';
import { AppService } from './app.service.js';
import { BlogsModule } from './blogs/blogs.module.js';

@Module({
  imports: [BlogsModule],
  controllers: [BlogsController],
  providers: [AppService],
})
export class AppModule {}
