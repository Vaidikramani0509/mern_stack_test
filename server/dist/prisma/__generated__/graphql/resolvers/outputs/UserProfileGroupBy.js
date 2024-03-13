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
exports.UserProfileGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserProfileAvgAggregate_1 = require("../outputs/UserProfileAvgAggregate");
const UserProfileCountAggregate_1 = require("../outputs/UserProfileCountAggregate");
const UserProfileMaxAggregate_1 = require("../outputs/UserProfileMaxAggregate");
const UserProfileMinAggregate_1 = require("../outputs/UserProfileMinAggregate");
const UserProfileSumAggregate_1 = require("../outputs/UserProfileSumAggregate");
let UserProfileGroupBy = class UserProfileGroupBy {
};
exports.UserProfileGroupBy = UserProfileGroupBy;
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], UserProfileGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], UserProfileGroupBy.prototype, "created_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], UserProfileGroupBy.prototype, "updated_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], UserProfileGroupBy.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileGroupBy.prototype, "profilePicture", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileGroupBy.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileGroupBy.prototype, "firstName", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileGroupBy.prototype, "lastName", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileCountAggregate_1.UserProfileCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileAvgAggregate_1.UserProfileAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileSumAggregate_1.UserProfileSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileMinAggregate_1.UserProfileMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserProfileMaxAggregate_1.UserProfileMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserProfileGroupBy.prototype, "_max", void 0);
exports.UserProfileGroupBy = UserProfileGroupBy = __decorate([
    TypeGraphQL.ObjectType("UserProfileGroupBy", {
        simpleResolvers: true
    })
], UserProfileGroupBy);
//# sourceMappingURL=UserProfileGroupBy.js.map