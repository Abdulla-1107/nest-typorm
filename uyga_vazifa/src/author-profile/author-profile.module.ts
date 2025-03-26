import { Module } from '@nestjs/common';
import { AuthorProfileService } from './author-profile.service';
import { AuthorProfileController } from './author-profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorProfile } from './entities/author-profile.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([AuthorProfile]), 
    ],
  controllers: [AuthorProfileController],
  providers: [AuthorProfileService],
})
export class AuthorProfileModule {}
