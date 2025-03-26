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
exports.AuthorProfileController = void 0;
const common_1 = require("@nestjs/common");
const author_profile_service_1 = require("./author-profile.service");
const create_author_profile_dto_1 = require("./dto/create-author-profile.dto");
const update_author_profile_dto_1 = require("./dto/update-author-profile.dto");
let AuthorProfileController = class AuthorProfileController {
    authorProfileService;
    constructor(authorProfileService) {
        this.authorProfileService = authorProfileService;
    }
    async create(createAuthorProfileDto) {
        try {
            const profile = await this.authorProfileService.create(createAuthorProfileDto);
            return {
                status: common_1.HttpStatus.CREATED,
                message: 'Author profile created successfully',
                data: profile,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        try {
            const profiles = await this.authorProfileService.findAll();
            return {
                status: common_1.HttpStatus.OK,
                message: 'Author profiles fetched successfully',
                data: profiles,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id) {
        try {
            const profile = await this.authorProfileService.findOne(+id);
            return {
                status: common_1.HttpStatus.OK,
                message: 'Author profile fetched successfully',
                data: profile,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updateAuthorProfileDto) {
        try {
            const updatedProfile = await this.authorProfileService.update(+id, updateAuthorProfileDto);
            return {
                status: common_1.HttpStatus.OK,
                message: 'Author profile updated successfully',
                data: updatedProfile,
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async remove(id) {
        try {
            await this.authorProfileService.remove(+id);
            return {
                status: common_1.HttpStatus.OK,
                message: 'Author profile deleted successfully',
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.AuthorProfileController = AuthorProfileController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_author_profile_dto_1.CreateAuthorProfileDto]),
    __metadata("design:returntype", Promise)
], AuthorProfileController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorProfileController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthorProfileController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_author_profile_dto_1.UpdateAuthorProfileDto]),
    __metadata("design:returntype", Promise)
], AuthorProfileController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthorProfileController.prototype, "remove", null);
exports.AuthorProfileController = AuthorProfileController = __decorate([
    (0, common_1.Controller)('author-profile'),
    __metadata("design:paramtypes", [author_profile_service_1.AuthorProfileService])
], AuthorProfileController);
//# sourceMappingURL=author-profile.controller.js.map