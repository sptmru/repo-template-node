import { Entity, ObjectIdColumn, Column } from "typeorm";

@Entity()
export class User {
  @ObjectIdColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    author: string;

  @Column()
    yearOfPublication: number;
}
