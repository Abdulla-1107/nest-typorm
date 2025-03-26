import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    try {
      const author = this.authorRepository.create(createAuthorDto);
      return await this.authorRepository.save(author);
    } catch (error) {
      throw new Error(`Failed to create author: ${error.message}`);
    }
  }

  async findAll(): Promise<Author[]> {
    try {
      const authors = await this.authorRepository.find({
        relations: ['profile', 'books'], 
      });
      return authors;
    } catch (error) {
      throw new Error(`Failed to fetch authors: ${error.message}`);
    }
  }

  async findOne(id: number): Promise<Author> {
    try {
      const author = await this.authorRepository.findOne({
        where: { id },
        relations: ['profile', 'books'],
      });
      if (!author) {
        throw new NotFoundException(`Author with ID ${id} not found`);
      }
      return author;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new Error(`Failed to fetch author: ${error.message}`);
    }
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    try {
      const author = await this.findOne(id); 
      this.authorRepository.merge(author, updateAuthorDto); 
      return await this.authorRepository.save(author);
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new Error(`Failed to update author: ${error.message}`);
    }
  }

  async remove(id: number): Promise<void> {
    try {
      const author = await this.findOne(id); 
      await this.authorRepository.remove(author);
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new Error(`Failed to delete author: ${error.message}`);
    }
  }
}