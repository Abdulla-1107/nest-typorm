import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)

    private bookRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    try {
      const book = this.bookRepository.create(createBookDto);
      return await this.bookRepository.save(book);
    } catch (error) {
      throw new Error(`Failed to create book: ${error.message}`);
    }
  }

  async findAll(): Promise<Book[]> {
    try {
      return await this.bookRepository.find({ relations: ['author'] });
    } catch (error) {
      throw new Error(`Failed to fetch books: ${error.message}`);
    }
  }

  async findOne(id: number): Promise<Book> {
    try {
      const book = await this.bookRepository.findOne({
        where: { id },
        relations: ['author'],
      });
      if (!book) {
        throw new NotFoundException(`Book with ID ${id} not found`);
      }
      return book;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new Error(`Failed to fetch book: ${error.message}`);
    }
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    try {
      const book = await this.findOne(id);
      this.bookRepository.merge(book, updateBookDto);
      return await this.bookRepository.save(book);
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new Error(`Failed to update book: ${error.message}`);
    }
  }

  async remove(id: number): Promise<void> {
    try {
      const book = await this.findOne(id);
      await this.bookRepository.remove(book);
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new Error(`Failed to delete book: ${error.message}`);
    }
  }
}