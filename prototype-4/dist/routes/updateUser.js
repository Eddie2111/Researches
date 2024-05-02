"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const updateUserController_1 = require("../controllers/updateUserController");
const router = express_1.default.Router();
router
    .route("/")
    .get((req, res) => {
    res.send("wrong method!");
})
    .post(async (req, res) => {
    const response = await (0, updateUserController_1.UpdateUser)(req.body);
    res.json({
        message: response,
        status: response ? 200 : 400,
    });
});
exports.default = router;
//# sourceMappingURL=updateUser.js.map