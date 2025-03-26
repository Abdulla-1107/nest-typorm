"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const author_entity_1 = require("./entities/author.entity");
let AuthorService = class AuthorService {
    authorRepository;
    constructor(authorRepository) {
        this.authorRepository = authorRepository;
    }
    async create(createAuthorDto) {
        try {
            const author = this.authorRepository.create(createAuthorDto);
            return await this.authorRepository.save(author);
        }
        catch (error) {
            throw new Error(`Failed to create author: ${error.message}`);
        }
    }
    async findAll() {
        try {
            const authors = await this.authorRepository.find({
                relations: ['profile', 'books'],
            });
            return authors;
        }
        catch (error) {
            throw new Error(`Failed to fetch authors: ${error.message}`);
        }
    }
    async findOne(id) {
        try {
            const author = await this.authorRepository.findOne({
                where: { id },
                relations: ['profile', 'books'],
            });
            if (!author) {
                throw new common_1.NotFoundException(`Author with ID ${id} not found`);
            }
            return author;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException)
                throw error;
            throw new Error(`Failed to fetch author: ${error.message}`);
        }
    }
    async update(id, updateAuthorDto) {
        try {
            const author = await this.findOne(id);
            this.authorRepository.merge(author, updateAuthorDto);
            return await this.authorRepository.save(author);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException)
                throw error;
            throw new Error(`Failed to update author: ${error.message}`);
        }
    }
    async remove(id) {
        try {
            const author = await this.findOne(id);
            await this.authorRepository.remove(author);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException)
                throw error;
            throw new Error(`Failed to delete author: ${error.message}`);
        }
    }
};
exports.AuthorService = AuthorService;
exports.AuthorService = AuthorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(author_entity_1.Author)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthorService);
//# sourceMappingURL=author.service.js.map