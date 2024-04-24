"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const user_1 = require("../schema/user");
async function CreateUser(data) {
    try {
        const structure = new user_1.User(data);
        await structure.save();
        return true;
    }
    catch (err) {
        console.log(err);
        return false;
    }
}
exports.CreateUser = CreateUser;
//# sourceMappingURL=createUserController.js.map