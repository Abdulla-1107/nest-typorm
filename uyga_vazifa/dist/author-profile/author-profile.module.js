"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorProfileModule = void 0;
const common_1 = require("@nestjs/common");
const author_profile_service_1 = require("./author-profile.service");
const author_profile_controller_1 = require("./author-profile.controller");
const typeorm_1 = require("@nestjs/typeorm");
const author_profile_entity_1 = require("./entities/author-profile.entity");
let AuthorProfileModule = class AuthorProfileModule {
};
exports.AuthorProfileModule = AuthorProfileModule;
exports.AuthorProfileModule = AuthorProfileModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([author_profile_entity_1.AuthorProfile]),
        ],
        controllers: [author_profile_controller_1.AuthorProfileController],
        providers: [author_profile_service_1.AuthorProfileService],
    })
], AuthorProfileModule);
//# sourceMappingURL=author-profile.module.js.map