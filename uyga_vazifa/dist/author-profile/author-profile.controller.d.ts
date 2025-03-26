import { HttpStatus } from '@nestjs/common';
import { AuthorProfileService } from './author-profile.service';
import { CreateAuthorProfileDto } from './dto/create-author-profile.dto';
import { UpdateAuthorProfileDto } from './dto/update-author-profile.dto';
export declare class AuthorProfileController {
    private readonly authorProfileService;
    constructor(authorProfileService: AuthorProfileService);
    create(createAuthorProfileDto: CreateAuthorProfileDto): Promise<{
        status: HttpStatus;
        message: string;
        data: import("./entities/author-profile.entity").AuthorProfile;
    }>;
    findAll(): Promise<{
        status: HttpStatus;
        message: string;
        data: import("./entities/author-profile.entity").AuthorProfile[];
    }>;
    findOne(id: string): Promise<{
        status: HttpStatus;
        message: string;
        data: import("./entities/author-profile.entity").AuthorProfile;
    }>;
    update(id: string, updateAuthorProfileDto: UpdateAuthorProfileDto): Promise<{
        status: HttpStatus;
        message: string;
        data: import("./entities/author-profile.entity").AuthorProfile;
    }>;
    remove(id: string): Promise<{
        status: HttpStatus;
        message: string;
    }>;
}
