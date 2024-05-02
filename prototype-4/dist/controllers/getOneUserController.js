"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneUser = void 0;
const clusterConnections_1 = require("../lib/clusterConnections");
async function getOneUser(id) {
    try {
        const data = await (0, clusterConnections_1.mainToClusterRetrieval)(id);
        console.log(data);
        return data;
    }
    catch (err) {
        console.log(err);
        return [];
    }
}
exports.getOneUser = getOneUser;
//# sourceMappingURL=getOneUserController.js.map