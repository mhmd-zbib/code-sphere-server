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
const cors = require("cors");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const error_handler_1 = require("./utils/error-handler");
const app = (0, express_1.default)();
const port = 4000;
const serverSetup = () => __awaiter(void 0, void 0, void 0, function* () {
    app.use(cors({
        origin: "http://localhost:5173",
        credentials: true,
    }));
    app.use(express_1.default.json()); // Parse JSON bodies
    app.use(express_1.default.urlencoded({ extended: true })); // Parse URL-encoded bodies
    app.use("/", routes_1.default);
    app.use(error_handler_1.errorHandler);
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
serverSetup();
