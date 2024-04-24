"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = require("express-rate-limit");
const config_1 = require("./configs/config");
const clusterConnections_1 = require("./lib/clusterConnections");
const redis_1 = require("./lib/redis");
const createUser_1 = __importDefault(require("./routes/createUser"));
const deleteUser_1 = __importDefault(require("./routes/deleteUser"));
const getUser_1 = __importDefault(require("./routes/getUser"));
const getusers_1 = __importDefault(require("./routes/getusers"));
const updateUser_1 = __importDefault(require("./routes/updateUser"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3100;
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, express_rate_limit_1.rateLimit)({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-7",
    legacyHeaders: false,
}));
app.use("/createUser", (0, cors_1.default)(config_1.corsOptions), createUser_1.default);
app.use("/deleteUser", (0, cors_1.default)(config_1.corsOptions), deleteUser_1.default);
app.use("/getUser", (0, cors_1.default)(config_1.corsOptions), getUser_1.default);
app.use("/getAllUsers", (0, cors_1.default)(config_1.corsOptions), getusers_1.default);
app.use("/updateUser", (0, cors_1.default)(config_1.corsOptions), updateUser_1.default);
app.listen(port, async () => {
    (0, redis_1.Connect_cache)("redis://localhost:5000");
    (0, clusterConnections_1.main_Cluster)();
    (0, clusterConnections_1.cacheClusters)();
    console.log("Server started at", port);
});
//# sourceMappingURL=index.js.map