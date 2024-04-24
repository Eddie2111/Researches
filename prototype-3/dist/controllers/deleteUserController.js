"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneUser = void 0;
const user_1 = require("../schema/user");
async function deleteOneUser(id) {
    try {
        const structure = await user_1.User.deleteOne({ userId: id });
        return true;
    }
    catch (err) {
        console.log(err);
        return false;
    }
}
exports.deleteOneUser = deleteOneUser;
//# sourceMappingURL=deleteUserController.js.map