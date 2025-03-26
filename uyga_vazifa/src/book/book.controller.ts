import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    try {
      const book = await this.bookService.create(createBookDto);
      return {
        status: HttpStatus.CREATED,
        message: 'Book created successfully',
        data: book,
      };
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async findAll() {
    try {
      const books = await this.bookService.findAll();
      return {
        status: HttpStatus.OK,
        message: 'Books fetched successfully',
        data: books,
      };
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const book = await this.bookService.findOne(+id);
      return {
        status: HttpStatus.OK,
        message: 'Book fetched successfully',
        data: book,
      };
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    try {
      const updatedBook = await this.bookService.update(+id, updateBookDto);
      return {
        status: HttpStatus.OK,
        message: 'Book updated successfully',
        data: updatedBook,
      };
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.bookService.remove(+id);
      return {
        status: HttpStatus.OK,
        message: 'Book deleted successfully',
      };
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}