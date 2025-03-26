import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';
import { AuthorProfile } from 'src/author-profile/entities/author-profile.entity';
import { Book } from 'src/book/entities/book.entity';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToOne(() => AuthorProfile, (profile) => profile.author)
  profile: AuthorProfile;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}