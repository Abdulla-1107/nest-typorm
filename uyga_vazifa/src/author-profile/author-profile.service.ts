import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthorProfileDto } from './dto/create-author-profile.dto';
import { UpdateAuthorProfileDto } from './dto/update-author-profile.dto';
import { AuthorProfile } from './entities/author-profile.entity';

@Injectable()
export class AuthorProfileService {
  constructor(
    @InjectRepository(AuthorProfile)
    private authorProfileRepository: Repository<AuthorProfile>,
  ) {}

  async create(createAuthorProfileDto: CreateAuthorProfileDto): Promise<AuthorProfile> {
    try {
      const profile = this.authorProfileRepository.create(createAuthorProfileDto);
      return await this.authorProfileRepository.save(profile);
    } catch (error) {
      throw new Error(`Failed to create author profile: ${error.message}`);
    }
  }

  async findAll(): Promise<AuthorProfile[]> {
    try {
      return await this.authorProfileRepository.find({ relations: ['author'] });
    } catch (error) {
      throw new Error(`Failed to fetch author profiles: ${error.message}`);
    }
  }

  async findOne(id: number): Promise<AuthorProfile> {
    try {
      const profile = await this.authorProfileRepository.findOne({
        where: { id },
        relations: ['author'],
      });
      if (!profile) {
        throw new NotFoundException(`Author profile with ID ${id} not found`);
      }
      return profile;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new Error(`Failed to fetch author profile: ${error.message}`);
    }
  }

  async update(id: number, updateAuthorProfileDto: UpdateAuthorProfileDto): Promise<AuthorProfile> {
    try {
      const profile = await this.findOne(id);
      this.authorProfileRepository.merge(profile, updateAuthorProfileDto);
      return await this.authorProfileRepository.save(profile);
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new Error(`Failed to update author profile: ${error.message}`);
    }
  }

  async remove(id: number): Promise<void> {
    try {
      const profile = await this.findOne(id);
      await this.authorProfileRepository.remove(profile);
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new Error(`Failed to delete author profile: ${error.message}`);
    }
  }
}