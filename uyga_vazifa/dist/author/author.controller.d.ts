import { HttpStatus } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
export declare class AuthorController {
    private readonly authorService;
    constructor(authorService: AuthorService);
    create(createAuthorDto: CreateAuthorDto): Promise<{
        status: HttpStatus;
        message: string;
        data: import("./entities/author.entity").Author;
    }>;
    findAll(): Promise<{
        status: HttpStatus;
        message: string;
        data: import("./entities/author.entity").Author[];
    }>;
    findOne(id: string): Promise<{
        status: HttpStatus;
        message: string;
        data: import("./entities/author.entity").Author;
    }>;
    update(id: string, updateAuthorDto: UpdateAuthorDto): Promise<{
        status: HttpStatus;
        message: string;
        data: import("./entities/author.entity").Author;
    }>;
    remove(id: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
}
