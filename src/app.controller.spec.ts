import { Test, TestingModule } from '@nestjs/testing';
import { BlogsController } from './app.controller.js';
import { AppService } from './app.service.js';

describe('AppController', () => {
  let appController: BlogsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BlogsController],
      providers: [AppService],
    }).compile();

    appController = app.get<BlogsController>(BlogsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
