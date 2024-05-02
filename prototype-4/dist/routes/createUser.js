"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createUserController_1 = require("../controllers/createUserController");
const router = express_1.default.Router();
router
    .route("/")
    .get(async (req, res) => {
    res.send("incorrect method");
})
    .post(async (req, res) => {
    const response = await (0, createUserController_1.CreateUser)(req.body);
    res.json({
        message: response,
        status: response ? 200 : 400,
    });
});
exports.default = router;
//# sourceMappingURL=createUser.js.map