"use strict";
// userResolvers.js
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResolvers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.userResolvers = {
    Query: {
        users: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                return yield prisma.user.findMany();
            }
            catch (error) {
                throw new Error(`Error fetching users: ${error}`);
            }
        }),
    },
    User: {
        posts: (parent) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                return yield prisma.user
                    .findUnique({ where: { id: parent.id } })
                    .posts();
            }
            catch (error) {
                throw new Error(`Error fetching posts for user ${parent.id}: ${error}`);
            }
        }),
    },
};
