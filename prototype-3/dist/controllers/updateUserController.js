"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUser = void 0;
const clusterConnections_1 = require("../lib/clusterConnections");
async function UpdateUser(data) {
    try {
        const response = await (0, clusterConnections_1.mainToClusterInsert)(data);
        return true;
    }
    catch (err) {
        console.error("Error updating document:", err);
        return false;
    }
}
exports.UpdateUser = UpdateUser;
//# sourceMappingURL=updateUserController.js.map