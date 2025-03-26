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
exports.AuthorProfileService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const author_profile_entity_1 = require("./entities/author-profile.entity");
let AuthorProfileService = class AuthorProfileService {
    authorProfileRepository;
    constructor(authorProfileRepository) {
        this.authorProfileRepository = authorProfileRepository;
    }
    async create(createAuthorProfileDto) {
        try {
            const profile = this.authorProfileRepository.create(createAuthorProfileDto);
            return await this.authorProfileRepository.save(profile);
        }
        catch (error) {
            throw new Error(`Failed to create author profile: ${error.message}`);
        }
    }
    async findAll() {
        try {
            return await this.authorProfileRepository.find({ relations: ['author'] });
        }
        catch (error) {
            throw new Error(`Failed to fetch author profiles: ${error.message}`);
        }
    }
    async findOne(id) {
        try {
            const profile = await this.authorProfileRepository.findOne({
                where: { id },
                relations: ['author'],
            });
            if (!profile) {
                throw new common_1.NotFoundException(`Author profile with ID ${id} not found`);
            }
            return profile;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException)
                throw error;
            throw new Error(`Failed to fetch author profile: ${error.message}`);
        }
    }
    async update(id, updateAuthorProfileDto) {
        try {
            const profile = await this.findOne(id);
            this.authorProfileRepository.merge(profile, updateAuthorProfileDto);
            return await this.authorProfileRepository.save(profile);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException)
                throw error;
            throw new Error(`Failed to update author profile: ${error.message}`);
        }
    }
    async remove(id) {
        try {
            const profile = await this.findOne(id);
            await this.authorProfileRepository.remove(profile);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException)
                throw error;
            throw new Error(`Failed to delete author profile: ${error.message}`);
        }
    }
};
exports.AuthorProfileService = AuthorProfileService;
exports.AuthorProfileService = AuthorProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(author_profile_entity_1.AuthorProfile)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthorProfileService);
//# sourceMappingURL=author-profile.service.js.map