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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const client_1 = require("@prisma/client");
const api_error_1 = __importDefault(require("../utils/api-error"));
class UserModel {
    constructor() {
        this.userClient = new client_1.PrismaClient().user;
    }
    create(username, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.userClient.findMany({
                where: {
                    OR: [{ username: username }, { email: email }],
                },
            });
            if (existingUser.length > 0) {
                if (existingUser.some((user) => user.username === username)) {
                    throw api_error_1.default.badRequest("Username already exists");
                }
                if (existingUser.some((user) => user.email === email)) {
                    throw api_error_1.default.badRequest("Email already exists");
                }
            }
            return yield this.userClient.create({
                data: {
                    username: username,
                    email: email,
                    password: password,
                },
            });
        });
    }
}
exports.userModel = new UserModel();
