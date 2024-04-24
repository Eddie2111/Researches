"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const axios_1 = __importDefault(require("axios"));
const clusterConnections_1 = require("../lib/clusterConnections");
const user_1 = require("../schema/user");
// Define the function to create a user
async function CreateUser(data) {
    try {
        try {
            const parsed = user_1.userSchema.parse(data);
            // get the unused db port from go worker
            const leastUsedRedis = await axios_1.default.get("http://localhost:8000");
            // store the location on main_cache
            const response1 = await (0, clusterConnections_1.main_cluster_insert)(parsed.username, leastUsedRedis.data.port);
            // store the data on least used redis instance
            const response2 = await (0, clusterConnections_1.cluster_insert)(leastUsedRedis.data.port, parsed);
            // assuring and logging the success message
            console.log(parsed, "stored at", leastUsedRedis.data.port);
            return true;
        }
        catch (err) {
            // a single or more task failure
            console.log(err);
            return false;
        }
    }
    catch (err) {
        // connection based error
        console.log(err);
        return false;
    }
}
exports.CreateUser = CreateUser;
//# sourceMappingURL=createUserController.js.map