"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(2, { message: "name length too small, more than 2 required" })
        .max(32, { message: "name length too big, less than 32 required" }),
    email: zod_1.z
        .string()
        .min(11, { message: "email length too small, more than 2 required" })
        .max(35, { message: "email length too big, less than 32 required" }),
    username: zod_1.z
        .string()
        .min(5, { message: "username length too small, more than 2 required" })
        .max(20, { message: "username length too big, less than 32 required" }),
});
//# sourceMappingURL=user.js.map