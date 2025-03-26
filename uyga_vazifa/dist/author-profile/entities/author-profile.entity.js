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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorProfile = void 0;
const author_entity_1 = require("../../author/entities/author.entity");
const typeorm_1 = require("typeorm");
let AuthorProfile = class AuthorProfile {
    id;
    bio;
    birthDate;
    author;
};
exports.AuthorProfile = AuthorProfile;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AuthorProfile.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AuthorProfile.prototype, "bio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], AuthorProfile.prototype, "birthDate", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => author_entity_1.Author, (author) => author.profile),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", author_entity_1.Author)
], AuthorProfile.prototype, "author", void 0);
exports.AuthorProfile = AuthorProfile = __decorate([
    (0, typeorm_1.Entity)()
], AuthorProfile);
//# sourceMappingURL=author-profile.entity.js.map