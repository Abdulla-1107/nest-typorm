import { Repository } from 'typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';
export declare class AuthorService {
    private authorRepository;
    constructor(authorRepository: Repository<Author>);
    create(createAuthorDto: CreateAuthorDto): Promise<Author>;
    findAll(): Promise<Author[]>;
    findOne(id: number): Promise<Author>;
    update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<Author>;
    remove(id: number): Promise<void>;
}
