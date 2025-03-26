import { Author } from 'src/author/entities/author.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  publishedYear: number;

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;
}