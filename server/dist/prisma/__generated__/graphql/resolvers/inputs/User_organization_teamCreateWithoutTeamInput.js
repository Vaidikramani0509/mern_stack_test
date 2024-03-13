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
exports.User_organization_teamCreateWithoutTeamInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const User_organizationCreateNestedOneWithoutUser_organization_teamsInput_1 = require("../inputs/User_organizationCreateNestedOneWithoutUser_organization_teamsInput");
const team_role_1 = require("../../enums/team_role");
let User_organization_teamCreateWithoutTeamInput = class User_organization_teamCreateWithoutTeamInput {
};
exports.User_organization_teamCreateWithoutTeamInput = User_organization_teamCreateWithoutTeamInput;
__decorate([
    TypeGraphQL.Field(_type => team_role_1.team_role, {
        nullable: true
    }),
    __metadata("design:type", Object)
], User_organization_teamCreateWithoutTeamInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => User_organizationCreateNestedOneWithoutUser_organization_teamsInput_1.User_organizationCreateNestedOneWithoutUser_organization_teamsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], User_organization_teamCreateWithoutTeamInput.prototype, "user_organization", void 0);
exports.User_organization_teamCreateWithoutTeamInput = User_organization_teamCreateWithoutTeamInput = __decorate([
    TypeGraphQL.InputType("User_organization_teamCreateWithoutTeamInput", {})
], User_organization_teamCreateWithoutTeamInput);
//# sourceMappingURL=User_organization_teamCreateWithoutTeamInput.js.map