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
exports.userController = void 0;
const user_service_1 = require("../services/user/user.service");
//getAllUsers
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_service_1.userService.getAllUsers();
        res.status(200).json({ data: users });
    }
    catch (err) {
        console.error(err);
    }
});
//creates a dummy user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("got req");
        console.log(req.body);
        const user = yield user_service_1.userService.createUser(req.body);
        res.status(200).json("done");
    }
    catch (err) {
        console.error(err);
    }
});
//export async function object
exports.userController = {
    getAllUsers,
    createUser,
};
