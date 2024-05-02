"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const clusterConnections_1 = require("../lib/clusterConnections");
const user_1 = require("../schema/user");
// *Defined the function to create a user
async function CreateUser(data) {
    try {
        try {
            const parsed = user_1.userSchema.parse(data);
            (0, clusterConnections_1.mainToClusterInsert)(parsed);
            return true;
        }
        catch (err) {
            // input valdiation failure
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