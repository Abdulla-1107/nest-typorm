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
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const book_service_1 = require("./book.service");
const create_book_dto_1 = require("./dto/create-book.dto");
const update_book_dto_1 = require("./dto/update-book.dto");
let BookController = class BookController {
    bookService;
    constructor(bookService) {
        this.bookService = bookService;
    }
    async create(createBookDto) {
        try {
            const book = await this.bookService.create(createBookDto);
            return {
                status: common_1.HttpStatus.CREATED,
                message: 'Book created successfully',
                data: book,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        try {
            const books = await this.bookService.findAll();
            return {
                status: common_1.HttpStatus.OK,
                message: 'Books fetched successfully',
                data: books,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id) {
        try {
            const book = await this.bookService.findOne(+id);
            return {
                status: common_1.HttpStatus.OK,
                message: 'Book fetched successfully',
                data: book,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updateBookDto) {
        try {
            const updatedBook = await this.bookService.update(+id, updateBookDto);
            return {
                status: common_1.HttpStatus.OK,
                message: 'Book updated successfully',
                data: updatedBook,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async remove(id) {
        try {
            await this.bookService.remove(+id);
            return {
                status: common_1.HttpStatus.OK,
                message: 'Book deleted successfully',
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.BookController = BookController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.CreateBookDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_book_dto_1.UpdateBookDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "remove", null);
exports.BookController = BookController = __decorate([
    (0, common_1.Controller)('book'),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
//# sourceMappingURL=book.controller.js.map