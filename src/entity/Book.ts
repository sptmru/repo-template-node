import { Entity, ObjectIdColumn, Column } from "typeorm";

@Entity()
export class Book {
  @ObjectIdColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    author: string;

  @Column()
    yearOfPublication: number;
}
