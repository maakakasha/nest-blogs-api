import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Blog extends Model {
  @Column
  title: string;

  @Column
  content: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: true,
    defaultValue: [],
  })
  tags: string[];

  @Column
  category: string;
}
