"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneUser = void 0;
const user_1 = require("../schema/user");
async function getOneUser(id) {
    try {
        const structure = await user_1.User.find({ userId: id });
        return structure;
    }
    catch (err) {
        console.log(err);
        return [];
    }
}
exports.getOneUser = getOneUser;
//# sourceMappingURL=getOneUserController.js.map