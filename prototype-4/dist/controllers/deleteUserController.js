"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneUser = void 0;
const clusterConnections_1 = require("../lib/clusterConnections");
async function deleteOneUser(id) {
    try {
        const response = await (0, clusterConnections_1.mainToClusterRemove)(id);
        return response;
    }
    catch (err) {
        console.log(err);
        return false;
    }
}
exports.deleteOneUser = deleteOneUser;
//# sourceMappingURL=deleteUserController.js.map