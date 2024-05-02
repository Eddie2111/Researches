"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
async function getAllUsers() {
    try {
        return {
            totalCount: "Not available",
            users: "Not available",
        };
    }
    catch (err) {
        console.log(err);
        return {
            totalCount: "Not available",
            users: "Not available",
        };
    }
}
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=getAllUserController.js.map