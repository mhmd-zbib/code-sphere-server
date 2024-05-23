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
const express_1 = __importDefault(require("express"));
const express4_1 = require("@apollo/server/express4");
const server_1 = require("@apollo/server");
const routes_1 = __importDefault(require("./routes"));
const graphql_1 = require("../graphql");
const app = (0, express_1.default)();
const port = 4000;
const serverSetup = () => __awaiter(void 0, void 0, void 0, function* () {
    const apollo = new server_1.ApolloServer({
        typeDefs: graphql_1.typeDefs,
        resolvers: graphql_1.resolvers,
    });
    yield apollo.start();
    app.use("/", routes_1.default);
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true })); //read docs to understand
    app.use("/graphql", (0, express4_1.expressMiddleware)(apollo));
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        console.log(`Graphql is running on port http://localhost:${port}/graphql`);
    });
});
serverSetup();
