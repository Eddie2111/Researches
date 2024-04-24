"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const user_1 = require("../schema/user");
async function getAllUsers() {
    try {
        const dataset = await user_1.User.find().limit(10);
        const totalUsers = await user_1.User.countDocuments({});
        return {
            totalCount: totalUsers,
            users: dataset,
        };
    }
    catch (err) {
        console.log(err);
        return {
            totalCount: 0,
            users: [],
        };
    }
}
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=getAllUserController.js.map