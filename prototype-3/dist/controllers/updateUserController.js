"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUser = void 0;
const user_1 = require("../schema/user");
async function UpdateUser(data) {
    try {
        const response = await user_1.User.updateOne({ userId: data.userId }, data.value);
        return true;
    }
    catch (err) {
        console.error("Error updating document:", err);
        return false;
    }
}
exports.UpdateUser = UpdateUser;
//# sourceMappingURL=updateUserController.js.map