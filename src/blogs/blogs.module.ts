import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service.js';
import { BlogsController } from './blogs.controller.js';
import { SequelizeModule } from '@nestjs/sequelize';
import { Blog } from './entities/blog.entity.js';

@Module({
  imports: [SequelizeModule.forFeature([Blog])],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
