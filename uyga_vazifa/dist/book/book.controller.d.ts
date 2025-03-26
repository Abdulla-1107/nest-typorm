import { HttpStatus } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    create(createBookDto: CreateBookDto): Promise<{
        status: HttpStatus;
        message: string;
        data: import("./entities/book.entity").Book;
    }>;
    findAll(): Promise<{
        status: HttpStatus;
        message: string;
        data: import("./entities/book.entity").Book[];
    }>;
    findOne(id: string): Promise<{
        status: HttpStatus;
        message: string;
        data: import("./entities/book.entity").Book;
    }>;
    update(id: string, updateBookDto: UpdateBookDto): Promise<{
        status: HttpStatus;
        message: string;
        data: import("./entities/book.entity").Book;
    }>;
    remove(id: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
}
