import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthorProfileService } from './author-profile.service';
import { CreateAuthorProfileDto } from './dto/create-author-profile.dto';
import { UpdateAuthorProfileDto } from './dto/update-author-profile.dto';

@Controller('author-profile')
export class AuthorProfileController {
  constructor(private readonly authorProfileService: AuthorProfileService) {}

  @Post()
  async create(@Body() createAuthorProfileDto: CreateAuthorProfileDto) {
    try {
      const profile = await this.authorProfileService.create(createAuthorProfileDto);
      return {
        status: HttpStatus.CREATED,
        message: 'Author profile created successfully',
        data: profile,
      };
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async findAll() {
    try {
      const profiles = await this.authorProfileService.findAll();
      return {
        status: HttpStatus.OK,
        message: 'Author profiles fetched successfully',
        data: profiles,
      };
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const profile = await this.authorProfileService.findOne(+id);
      return {
        status: HttpStatus.OK,
        message: 'Author profile fetched successfully',
        data: profile,
      };
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAuthorProfileDto: UpdateAuthorProfileDto,
  ) {
    try {
      const updatedProfile = await this.authorProfileService.update(+id, updateAuthorProfileDto);
      return {
        status: HttpStatus.OK,
        message: 'Author profile updated successfully',
        data: updatedProfile,
      };
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.authorProfileService.remove(+id);
      return {
        status: HttpStatus.OK,
        message: 'Author profile deleted successfully',
      };
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}