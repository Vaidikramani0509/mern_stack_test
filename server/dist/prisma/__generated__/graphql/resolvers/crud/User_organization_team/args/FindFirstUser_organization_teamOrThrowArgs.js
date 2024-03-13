"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstUser_organization_teamOrThrowArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const User_organization_teamOrderByWithRelationInput_1 = require("../../../inputs/User_organization_teamOrderByWithRelationInput");
const User_organization_teamWhereInput_1 = require("../../../inputs/User_organization_teamWhereInput");
const User_organization_teamWhereUniqueInput_1 = require("../../../inputs/User_organization_teamWhereUniqueInput");
const User_organization_teamScalarFieldEnum_1 = require("../../../../enums/User_organization_teamScalarFieldEnum");
let FindFirstUser_organization_teamOrThrowArgs = class FindFirstUser_organization_teamOrThrowArgs {
};
exports.FindFirstUser_organization_teamOrThrowArgs = FindFirstUser_organization_teamOrThrowArgs;
__decorate([
    TypeGraphQL.Field(_type => User_organization_teamWhereInput_1.User_organization_teamWhereInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstUser_organization_teamOrThrowArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [User_organization_teamOrderByWithRelationInput_1.User_organization_teamOrderByWithRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstUser_organization_teamOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => User_organization_teamWhereUniqueInput_1.User_organization_teamWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstUser_organization_teamOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstUser_organization_teamOrThrowArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstUser_organization_teamOrThrowArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [User_organization_teamScalarFieldEnum_1.User_organization_teamScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindFirstUser_organization_teamOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstUser_organization_teamOrThrowArgs = FindFirstUser_organization_teamOrThrowArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindFirstUser_organization_teamOrThrowArgs);
//# sourceMappingURL=FindFirstUser_organization_teamOrThrowArgs.js.map