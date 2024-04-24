"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getOneUserController_1 = require("../controllers/getOneUserController");
const router = express_1.default.Router();
router
    .route("/")
    .get((req, res) => {
    res.send("wrong method used");
})
    .post(async (req, res) => {
    const response = await (0, getOneUserController_1.getOneUser)(req.body.username);
    res.json({
        data: response,
        message: "user fetched",
        // status: response.length > 0 ? 200 : 400,
    });
});
exports.default = router;
//# sourceMappingURL=getUser.js.map