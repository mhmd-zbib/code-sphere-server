"use strict";
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
exports.userService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient().user;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.findMany({
        include: {
            posts: true,
        },
    });
    return user;
});
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(userData.name, "mans name here");
    // const user = await prisma.create({ data: userData });
});
exports.userService = {
    getAllUsers,
    createUser,
};
