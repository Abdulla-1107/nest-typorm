"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const author_module_1 = require("./author/author.module");
const book_module_1 = require("./book/book.module");
const author_profile_module_1 = require("./author-profile/author-profile.module");
const author_entity_1 = require("./author/entities/author.entity");
const author_profile_entity_1 = require("./author-profile/entities/author-profile.entity");
const book_entity_1 = require("./book/entities/book.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "root",
                password: "12345678",
                database: "type_orm",
                entities: [author_entity_1.Author, author_profile_entity_1.AuthorProfile, book_entity_1.Book],
                synchronize: false,
            }),
            author_module_1.AuthorModule,
            book_module_1.BookModule,
            author_profile_module_1.AuthorProfileModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map