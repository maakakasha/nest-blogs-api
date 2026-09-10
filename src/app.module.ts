import { Module } from '@nestjs/common';
import { BlogsController } from './app.controller.js';
import { AppService } from './app.service.js';
import { BlogsModule } from './blogs/blogs.module.js';

import { SequelizeModule } from '@nestjs/sequelize';
import { Blog } from './blogs/entities/blog.entity.js';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      autoLoadModels: true,
      synchronize: true,
      models: [Blog],
    }),
    BlogsModule,
  ],
  controllers: [BlogsController],
  providers: [AppService],
})
export class AppModule {}
