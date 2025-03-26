import { AuthorProfile } from 'src/author-profile/entities/author-profile.entity';
import { Book } from 'src/book/entities/book.entity';
export declare class Author {
    id: number;
    firstName: string;
    lastName: string;
    profile: AuthorProfile;
    books: Book[];
}
