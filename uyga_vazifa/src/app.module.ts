import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { AuthorProfileModule } from './author-profile/author-profile.module';
import { Author } from "./author/entities/author.entity";
import { AuthorProfile } from "./author-profile/entities/author-profile.entity";
import { Book } from "./book/entities/book.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "12345678",
      database: "type_orm",
      entities: [Author, AuthorProfile, Book],
      synchronize: false,
    }),
    AuthorModule,
    BookModule,
    AuthorProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
