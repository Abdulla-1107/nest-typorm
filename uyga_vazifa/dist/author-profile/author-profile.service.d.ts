import { Repository } from 'typeorm';
import { CreateAuthorProfileDto } from './dto/create-author-profile.dto';
import { UpdateAuthorProfileDto } from './dto/update-author-profile.dto';
import { AuthorProfile } from './entities/author-profile.entity';
export declare class AuthorProfileService {
    private authorProfileRepository;
    constructor(authorProfileRepository: Repository<AuthorProfile>);
    create(createAuthorProfileDto: CreateAuthorProfileDto): Promise<AuthorProfile>;
    findAll(): Promise<AuthorProfile[]>;
    findOne(id: number): Promise<AuthorProfile>;
    update(id: number, updateAuthorProfileDto: UpdateAuthorProfileDto): Promise<AuthorProfile>;
    remove(id: number): Promise<void>;
}
