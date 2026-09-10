import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service.js';
import { request } from 'express';
import { CreateBlogDto } from './blogs/dto/create-blog.dto.js';
import { title } from 'node:process';
import { IsNumber } from 'class-validator';
import { GetBlogDTO } from './blogs/dto/get-blog-dto.js';

@Controller('/api/')
export class BlogsController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello/')
  getHello(): string {
    return this.appService.getHello();
  }

  // TODO: Figure out how to patch a single-doc get endpoint
  @Post('blogs/')
  createBlog(@Body() body: CreateBlogDto) {
    return `The request is valid\n${body.title}\n${body.content}`;
  }

  // @Get('blogs/')
  // getBlogs() {
  //   console.log('Hello, from get blogs endpoint!');
  //   return [];
  // }

  // @Get('blogs/:id')
  // getBlog(@Body() body: GetBlogDTO) {
  //   return { id: body.id };
  // }

  // // TODO: Figure out how to patch a single-doc get endpoint
  // @Get('blogs/:term')
  // filterBlogs() {
  //   console.log('Hello, from get blogs endpoint!');
  //   return { id: request.body.id };
  // }

  // // TODO: Figure out how to delete a single-doc get endpoint
  // @Delete('blogs/:id')
  // deleteBlog(@Body() body: GetBlogDTO) {
  //   console.log('Hello, from get blogs endpoint!');
  //   return { id: request.body.id };
  // }

  // // TODO: Figure out how to patch a single-doc get endpoint
  // @Patch('blogs/:id')
  // updateBlog(@Body() body: GetBlogDTO) {
  //   console.log('Hello, from get blogs endpoint!');
  //   return { id: request.body.id };
  // }
}
