"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneUser = void 0;
const clusterConnections_1 = require("../lib/clusterConnections");
async function getOneUser(id) {
    try {
        return await (0, clusterConnections_1.mainToClusterRetrieval)(id);
    }
    catch (err) {
        console.log(err);
        return [];
    }
}
exports.getOneUser = getOneUser;
//# sourceMappingURL=getOneUserController.js.map