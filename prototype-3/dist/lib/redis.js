"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRedisInstance = exports.Connect_cache = exports.Connect = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const ioredis_1 = require("ioredis");
dotenv_1.default.config();
let redis;
function Connect(url) {
    if (!redis) {
        redis = new ioredis_1.Redis(url || " ");
        if (url.includes("5000")) {
            console.log("main cache connected");
        }
        if (url.includes("5200" || "5300" || "5400" || "5500")) {
            console.log("cluster caches found");
        }
    }
}
exports.Connect = Connect;
function Connect_cache(url) {
    let conn;
    try {
        conn = new ioredis_1.Redis(url || " ");
        return conn;
    }
    catch (err) {
        console.log("Error creating connection for ", url);
        return conn;
    }
}
exports.Connect_cache = Connect_cache;
function getRedisInstance() {
    if (!redis) {
        throw new Error("Redis connection has not been established yet.");
    }
    return redis;
}
exports.getRedisInstance = getRedisInstance;
//# sourceMappingURL=redis.js.map