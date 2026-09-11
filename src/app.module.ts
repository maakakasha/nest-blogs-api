import { Module } from '@nestjs/common';
import { AppService } from './app.service.js';
import { BlogsModule } from './blogs/blogs.module.js';

import { SequelizeModule } from '@nestjs/sequelize';
import { Blog } from './blogs/entities/blog.entity.js';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'blog',
      password: 'blog_password',
      database: 'blog_api',
      autoLoadModels: true,
      synchronize: true,
      models: [Blog],
    }),

    BlogsModule,
  ],
  providers: [AppService],
})
export class AppModule {}
