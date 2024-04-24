"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
let connection;
async function main() {
    if (!connection) {
        connection = await mongoose_1.default.connect(process.env.DATABASE_URL || " ");
        console.log("database connection established");
    }
    else {
        console.log("connection restablishing request denied");
    }
}
exports.default = main;
//# sourceMappingURL=mongo.js.map