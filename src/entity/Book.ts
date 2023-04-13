import { Entity, ObjectIdColumn, Column } from "typeorm";

@Entity()
export class Book {
  @ObjectIdColumn()
    id: string;

  @Column()
    name: string;

  @Column()
    author: string;

  @Column()
    yearOfPublication: string | number;
}
