import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BlogsService } from './blogs.service.js';
import { CreateBlogDto } from './dto/create-blog.dto.js';
import { UpdateBlogDto } from './dto/update-blog.dto.js';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get('hello')
  greetings() {
    return 'Hello, from the blogs controller';
  }

  @Post()
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogsService.create(createBlogDto);
  }

  @Get('search/:term')
  filter(@Param('term') term: string) {
    return this.blogsService.filterByTerm(term);
  }

  @Get()
  filterByTerm(@Param('term') term: string) {
    return this.blogsService.findByTerm(term);
  }

  @Get()
  findAll() {
    return this.blogsService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogsService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogsService.update(+id, updateBlogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogsService.remove(+id);
  }
}
