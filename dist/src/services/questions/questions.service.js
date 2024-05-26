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
exports.postService = void 0;
const client_1 = require("@prisma/client");
const postClient = new client_1.PrismaClient().post;
const getFeed = (userId, page = 1, limit = 10) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const feed = yield postClient.findMany({
            where: { userId: parseInt(userId) },
            orderBy: { createdAt: "desc" },
            take: limit,
            skip: (page - 1) * limit,
        });
        return "Test";
    }
    catch (e) {
        console.error(e);
        throw new Error("Error fetching feed");
    }
});
const getAllPosts = () => {
    try {
        console.log("on service");
        const posts = postClient.findMany();
        return posts;
    }
    catch (error) {
        console.error(error);
    }
};
exports.postService = {
    getFeed,
    getAllPosts,
};
