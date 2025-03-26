import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
export declare class BookService {
    private bookRepository;
    constructor(bookRepository: Repository<Book>);
    create(createBookDto: CreateBookDto): Promise<Book>;
    findAll(): Promise<Book[]>;
    findOne(id: number): Promise<Book>;
    update(id: number, updateBookDto: UpdateBookDto): Promise<Book>;
    remove(id: number): Promise<void>;
}
