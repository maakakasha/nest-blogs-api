import { IsNotEmpty } from 'class-validator';

export class GetBlogDTO {
  @IsNotEmpty()
  id: number;
}
