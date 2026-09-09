import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Blog extends Model {
  @Column
  title: string;

  @Column
  content: string;

  @Column
  tags: string[];

  @Column
  category: string;
}
