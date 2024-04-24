"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.userSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const zod_1 = require("zod");
const userModel = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 32,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minlength: 12,
        maxlength: 35,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    userId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5,
        maxlength: 20,
        match: /^[a-zA-Z0-9_-]+$/,
    },
}, { timestamps: true });
exports.userSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(2, { message: "length too small, more than 2 required" })
        .max(32, { message: "length too big, less than 32 required" }),
    email: zod_1.z
        .string()
        .min(11, { message: "length too small, more than 2 required" })
        .max(35, { message: "length too big, less than 32 required" }),
    username: zod_1.z
        .string()
        .min(5, { message: "length too small, more than 2 required" })
        .max(20, { message: "length too big, less than 32 required" }),
});
exports.User = mongoose_1.default.model("User", userModel);
//# sourceMappingURL=user.js.map