"use strict";
/**
 * Index route of the application
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const posts_router_1 = __importDefault(require("./posts.router"));
const users_router_1 = __importDefault(require("./users.router"));
const auth_router_1 = __importDefault(require("./auth.router"));
const api_error_1 = __importDefault(require("../utils/api-error"));
const router = express_1.default.Router();
router.use("*", (req, res, next) => {
    next(api_error_1.default.badRequest("No access"));
    return;
});
router.use("/posts", posts_router_1.default);
router.use("/users", users_router_1.default);
router.use("/auth", auth_router_1.default);
router.get("/ping", (req, res) => {
    res.send("pong");
});
exports.default = router;
