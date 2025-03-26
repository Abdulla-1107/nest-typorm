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
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  async create(@Body() createAuthorDto: CreateAuthorDto) {
    try {
      const author = await this.authorService.create(createAuthorDto);
      return {
        status: HttpStatus.CREATED,
        message: 'Author created successfully',
        data: author,
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
      const authors = await this.authorService.findAll();
      return {
        status: HttpStatus.OK,
        message: 'Authors fetched successfully',
        data: authors,
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
      const author = await this.authorService.findOne(+id);
      return {
        status: HttpStatus.OK,
        message: 'Author fetched successfully',
        data: author,
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
    @Body() updateAuthorDto: UpdateAuthorDto,
  ) {
    try {
      const updatedAuthor = await this.authorService.update(+id, updateAuthorDto);
      return {
        status: HttpStatus.OK,
        message: 'Author updated successfully',
        data: updatedAuthor,
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
      await this.authorService.remove(+id);
      return {
        status: HttpStatus.OK,
        message: 'Author deleted successfully',
      };
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}