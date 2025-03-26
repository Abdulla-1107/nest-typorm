"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAuthorProfileDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_author_profile_dto_1 = require("./create-author-profile.dto");
class UpdateAuthorProfileDto extends (0, mapped_types_1.PartialType)(create_author_profile_dto_1.CreateAuthorProfileDto) {
}
exports.UpdateAuthorProfileDto = UpdateAuthorProfileDto;
//# sourceMappingURL=update-author-profile.dto.js.map