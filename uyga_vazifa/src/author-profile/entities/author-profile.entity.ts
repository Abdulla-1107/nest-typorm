import { Author } from 'src/author/entities/author.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class AuthorProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bio: string;

  @Column()
  birthDate: Date;

  @OneToOne(() => Author, (author) => author.profile)
  @JoinColumn()
  author: Author;
}