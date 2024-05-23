"use strict";
/**
 * Index route of the application
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const questions_router_1 = __importDefault(require("./questions.router"));
const user_router_1 = __importDefault(require("./user.router"));
const router = express_1.default.Router();
router.use("/questions", questions_router_1.default);
router.use("/user", user_router_1.default);
router.get("/ping", (req, res) => {
    res.send("pong");
});
exports.default = router;
