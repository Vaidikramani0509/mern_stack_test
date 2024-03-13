"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamActionsConfig = void 0;
const client_1 = require("@prisma/client");
const authChecker_1 = require("../../auth/authChecker");
const middlewares_1 = require("../../middlewares");
exports.teamActionsConfig = {
    _all: [middlewares_1.errorMiddlewares.ErrorMiddleware, (0, authChecker_1.Authed)([client_1.user_role.admin])],
    createOneTeam: ([errorBoundary, auth]) => [errorBoundary, (0, authChecker_1.Authed)()]
};
//# sourceMappingURL=index.js.map