"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformCountFieldIntoSelectRelationsCount = exports.getPrismaFromContext = exports.transformInfoIntoPrismaArgs = void 0;
const graphql_fields_1 = __importDefault(require("graphql-fields"));
function transformInfoIntoPrismaArgs(info) {
    const fields = (0, graphql_fields_1.default)(info, {}, {
        excludedFields: ['__typename'],
        processArguments: true,
    });
    return transformFields(fields);
}
exports.transformInfoIntoPrismaArgs = transformInfoIntoPrismaArgs;
function transformFields(fields) {
    return Object.fromEntries(Object.entries(fields)
        .map(([key, value]) => {
        if (Object.keys(value).length === 0) {
            return [key, true];
        }
        if ("__arguments" in value) {
            return [key, Object.fromEntries(value.__arguments.map((argument) => {
                    const [[key, { value }]] = Object.entries(argument);
                    return [key, value];
                }))];
        }
        return [key, transformFields(value)];
    }));
}
function getPrismaFromContext(context) {
    const prismaClient = context["prisma"];
    if (!prismaClient) {
        throw new Error("Unable to find Prisma Client in GraphQL context. Please provide it under the `context[\"prisma\"]` key.");
    }
    return prismaClient;
}
exports.getPrismaFromContext = getPrismaFromContext;
function transformCountFieldIntoSelectRelationsCount(_count) {
    return {
        include: {
            _count: {
                select: Object.assign({}, Object.fromEntries(Object.entries(_count).filter(([_, v]) => v != null)))
            },
        },
    };
}
exports.transformCountFieldIntoSelectRelationsCount = transformCountFieldIntoSelectRelationsCount;
//# sourceMappingURL=helpers.js.map