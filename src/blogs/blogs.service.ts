import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto.js';
import { UpdateBlogDto } from './dto/update-blog.dto.js';
import { Blog } from './entities/blog.entity.js';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BlogsService {
  constructor(
    @InjectModel(Blog)
    private blogModel: typeof Blog,
  ) {}

  create(createBlogDto: CreateBlogDto) {
    this.blogModel.create({
      title: createBlogDto.title,
      content: createBlogDto.content,
      category: createBlogDto.category,
      tags: createBlogDto.tags,
    });
  }

  getAll(): Promise<Blog[]> {
    return Blog.findAll();
  }

  getById(id: number): Promise<Blog | null> {
    return this.blogModel.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    var blog = await this.getById(id);

    blog?.set({ ...updateBlogDto });

    blog?.save();
  }

  async remove(id: number) {
    var blog = await this.getById(id);

    blog?.destroy();
  }

  async findByTerm(term: string) {
    return this.blogModel.findAll({
      where: {
        title: `${term}`,
        content: `${term}`,
        category: `${term}`,
      },
    });
  }
}
